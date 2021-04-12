import {useState} from "react";
import { useLiveQuery } from "dexie-react-hooks";
import db from "../db";

const CurrentCounter = ({counterId, setCounterId}) => {
	const counter = useLiveQuery(() => db.counters.get(counterId), [counterId])

	if (!counter) return null;

	const incrementStep = () =>  {
		const value = {
			...counter,
			step: counter.step + 1,
		}
		console.log('increment step', counter.step, value);
		db.counters.update(counter.id, {step: counter.step + 1}).then((res) => {
			console.log('step incremented');
		});
	}

	const onStepChange = (ev) => {
		const value = {
			...counter,
			step: ev.target.value
		}
		console.log('decrement step', counter.step, value);
		db.counters.update(counter.id, {step: Number(ev.target.value)}).then((res) => {
			console.log('step decremented');
		});
	}

	const onStepKeyPress = (ev) => {
		const keyCode = ev.keyCode || ev.which;
		const keyValue = String.fromCharCode(keyCode);
		if (!/\d/.test(keyValue))
			ev.preventDefault();
	}

	const decrementStep = () =>  {
		const value = {
			...counter,
			step: counter.step - 1,
		}
		console.log('decrement step', counter.step, value);
		db.counters.update(counter.id, {step: counter.step - 1}).then((res) => {
			console.log('step decremented');
		});
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
									onChange={onStepChange}
									onKeyPress={onStepKeyPress}
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