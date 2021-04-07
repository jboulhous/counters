import React, {useState} from 'react';
import {useLiveQuery} from 'dexie-react-hooks';
import db from '../db';

const CounterList = ({currentCounter, setCurrentCounter}) => {
	const counters = useLiveQuery(() => db.counters.where("id").above(0).toArray());
	const counterCount = useLiveQuery(() => db.counters.count());
	const [title, setTitle] = useState("");
	// const [isActive, setIsActive] = useState(false);
	const addCounter = title => {
		console.log('addCounter')
		const counter = {
			title,
			total: 0,
			step: 1
		}

		db.counters
			.add(counter)
			.then((id) => {
				console.log('setting current counter id', id);
				setCurrentCounter(id)
			});
		setTitle("");
		// setIsActive(false);
	}

	return (
		<div className="col-md-4 order-md-2 mb-4">
			<h4 className="d-flex justify-content-between align-items-center mb-3">
				<span className="text-muted">Counters</span>
				<span className="badge badge-secondary badge-pill">
					{counterCount}
				</span>
			</h4>
			<ul className="list-group mb-3">
				{counters && counters.map((counter) => {
					const css = counter.id === currentCounter ? "text-success" : "";
					const cssBg = counter.id === currentCounter ? "bg-light" : "lh-condensed";
					const cssDiv = `list-group-item d-flex justify-content-between ${cssBg}`;
					const cssCounter = counter.id === currentCounter ? "text-success" : "text-muted";
					return (<li 
						key={counter.id} 
						className={cssDiv}
						onClick={ev => setCurrentCounter(counter.id)}
					>
						<div className={css}>
							<h6 className="my-0">{counter.title}</h6>
							{ /* <small className="text-muted">Count is: {counter.total}</small> --> */ }
						</div>
						<span className={cssCounter}>{counter.total}</span>
					</li>)
				})}
			</ul>
			<form className="" onSubmit={ev => {
				ev.preventDefault();
				console.log('form submit');
				title && addCounter(title);
			}}>
				<div className="mb-3">
					<div className="input-group">
						<input 
							type="text" 
							className="form-control" 
							placeholder="Count something..." 
							required="" 
							value={title}
							onChange={ev => setTitle(ev.target.value)} 
						/>
						<div className="input-group-append">
							<button className="btn btn-outline-secondary" type="submit">Add counter</button>
						</div>
					</div>
				</div>	
			</form>
		</div>
	)
}

export default CounterList;