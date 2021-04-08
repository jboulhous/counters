import {useState} from 'react';
import {useLiveQuery} from 'dexie-react-hooks';
import CurrentCounter from './CurrentCounter.js';
import CounterList from './CounterList.js';
import db from '../db';
import AddCounter from './AddCounter.js';

const Content = () => {
	const [counterId, setCounterId] = useState(0);
	const counters = useLiveQuery(() => db.counters.where("id").above(0).toArray());

	if ( !counterId && counters && counters.length) {
		console.log('Content')
		setCounterId(counters[0].id)
	}
	
	return (
		<div className="row">
			{counters && counters.length ? <>
				<CounterList counters={counters} currentCounter={counterId} setCurrentCounter={setCounterId}/>
				<CurrentCounter counterId={counterId} setCounterId={setCounterId}/>
			</> : <AddCounter setCurrentCounter={setCounterId}/>}
		</div>
	)
	
}

export default Content;