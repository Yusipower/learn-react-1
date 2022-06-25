import "./CostData.css";
import Card from "../UI/Card";

const CostDate = (props) => {

	const month = props.date.toLocaleString("ru-RU", { month: "long" });
	const year = props.date.getFullYear();
	const day = props.date.toLocaleString("ru-RU", { day: "2-digit" });

	return (
		<Card className="data">
			<div>{month}</div>
			<div>{year}</div>
			<div>{day}</div>
		</Card>
	);
}

export default CostDate;