export default function chooseRandomItem(listOfSmells)
{
	const max = listOfSmells.length - 1;
	const smellIndex = Math.round(Math.random() * max);
	return listOfSmells[smellIndex];
}