import {useState} from "react";
import { useLiveQuery } from "dexie-react-hooks";
import db from "../db";

const CurrentCounter = ({counterId, setCounterId}) => {
	window.setCounterId = setCounterId;
	const [counter, setCounter] = useState(null);
	window.counter = counter;
	window.setCounter = setCounter;
	const counters = useLiveQuery(
		() => db.counters.where('id').equals(counterId).toArray().then(res => {
			if (res.length) setCounterId(res[0].id);
			if (res.length) setCounter(res[0]);
			return res;
		}),
		[counterId]
	)

	if (!counters) return null;
	if (!counters.length) return null;

	const incrementStep = () =>  {
		const value = {
			...counter,
			step: counter.step + 1,
		}
		console.log('increment step', counter.step, value);
		setCounter(value);
	}

	const decrementStep = () =>  {
		const value = {
			...counter,
			step: counter.step - 1,
		}
		console.log('decrement step', counter.step, value);
		setCounter(value);
	}

	const incrementCounter = () => {
		const {id, step} = counter;
		const total = step + counter.total;
		console.log(`increment counter ${id} with step ${step} from ${counter.total} to ${total}`);
		db.counters.update(id, {total, step}).then((res) => {
			console.log('counter updated');
		});
	}

	const decrementCounter = () => {
		const {id, step} = counter;
		const total = counter.total - step;
		console.log(`decrement counter ${id} with step ${step} from ${counter.total} to ${total}`);
		db.counters.update(id, {total, step}).then((res) => {
			console.log('counter updated');
		});
	}

	const resetCounter = () => {
		if ( window.confirm('Confirm resetting the current counter') ) {
			db.counters.update(counter.id, {
				step: 1,
				total: 0
			});
		}
	}

	const deleteCounter = () => {
		if ( window.confirm('Confirm deleting the current counter') ) {
			db.counters.delete(counter.id).then(x => {
				setCounterId(0)
				setCounter(null)
			})
		}
	}

	return (
		<div className="col-md-8">
			<h4 className="mb-3">{counter && counter.title}</h4>
			<div className="card text-center">
				<div className="card-body">
					<h5 className="card-title">{counter && counter.total}</h5>
					<form className="">
						<div className="mb-3">
							<div className="input-group">
								<div className="input-group-prepend">
									<button 
										className="btn btn-outline-secondary" 
										type="button"
										onClick={decrementStep}
									>-</button>
								</div>
								<input 
									type="text" 
									className="form-control text-center" 
									aria-describedby="validatedInputGroupPrepend" 
									required="" 
									value={(counter && isFinite(counter.step) ? counter.step : "1")} 
									readOnly={true}
								/>

								<div className="input-group-append">
									<button 
										className="btn btn-outline-secondary" 
										type="button"
										onClick={incrementStep}
									>+</button>
								</div>
							</div>
						</div>	
					</form>
					<button href="#" className="btn btn-primary float-left" onClick={decrementCounter}>Decrement</button>
					<button href="#" className="btn btn-secondary mr-1" onClick={resetCounter}>Reset</button>
					<button href="#" className="btn btn-danger ml-1" onClick={deleteCounter}>Delete</button>
					<button href="#" className="btn btn-primary float-right" onClick={incrementCounter}>Increment</button>
				</div>
			</div>
			
		</div>
	)
}

export default CurrentCounter;