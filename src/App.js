import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {

	const costs = [
		{
			date: new Date(2022, 5, 12),
			description: "Сникерс",
			amount: 97
		},
		{
			date: new Date(2022, 8, 12),
			description: "Марс",
			amount: 98
		},
		{
			date: new Date(2022, 12, 12),
			description: "Твикс",
			amount: 99
		}
	];

  return (
    <>
			<h1>Приложение для отслежевания расходов</h1>
			<NewCost />
			<Costs costs={costs}/>
    </>
  );
}

export default App;
