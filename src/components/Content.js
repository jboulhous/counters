import {useState} from 'react';
import CurrentCounter from './CurrentCounter.js';
import CounterList from './CounterList.js';

const Content = () => {
	const [counterId, setCounterId] = useState(0);
	return (
		<div className="row">
			<CounterList currentCounter={counterId} setCurrentCounter={setCounterId}/>
			<CurrentCounter counterId={counterId} setCounterId={setCounterId}/>
		</div>
	)
	
}

export default Content;