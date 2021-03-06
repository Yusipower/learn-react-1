import React, { useState } from "react";
import "./CostForm.css";

const CostForm = () => {

	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');
	const [date, setDate] = useState('');

	useState({});

	const nameChangeHandler = (event) => {
		setName(event.target.value)
	};

	const amountChangeHandler = (event) => {
		setAmount(event.target.value)
	};

	const dateChangeHandler = (event) => {
		setDate(event.target.value)
	};
		

	return (
		<form>
			<div className="new-cost__controls">
				<div className="new-cost__control">
					<label>Название</label>
					<input type="text" onChange={nameChangeHandler}/>
				</div>
				<div className="new-cost__control">
					<label>Сумма</label>
					<input type="number" min='0.01' step='0.01' onChange={amountChangeHandler} />
				</div>
				<div className="new-cost__control">
					<label>Дата</label>
					<input type="date" min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler} />
				</div>
				<div className="new-cost__actions">
					<button type='submit'>Добавит Расход</button>
				</div>
			</div>
		</form>
	);
}

export default CostForm;