import React, {useState} from 'react';
import db from '../db';

const AddCounter = ({setCurrentCounter}) => {
	const [title, setTitle] = useState("");
	const addCounter = title => {
		const counter = {
			title,
			total: 0,
			step: 1
		}

		db.counters
			.add(counter)
			.then(id => setCurrentCounter(id))
			.then(x => setTitle(""))
	}

	return (
		<form className="" onSubmit={ev => {
			ev.preventDefault();
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
	)
}

export default AddCounter;
