import React from 'react';
import AddCounter from './AddCounter.js'

const CounterList = ({counters, currentCounter, setCurrentCounter}) => {
	return (
		<div className="col-md-4 order-md-2 mb-4">
			<h4 className="d-flex justify-content-between align-items-center mb-3">
				<span className="text-muted">Counters</span>
				<span className="badge badge-secondary badge-pill">
					{counters && counters.length}
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
			<AddCounter setCurrentCounter={setCurrentCounter} />
		</div>
	)
}

export default CounterList;