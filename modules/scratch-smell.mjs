export default function chooseRandomItem(listOfItems)
{
	const max = listOfItems.length - 1;
	const itemIndex = Math.round(Math.random() * max);
	return listOfItems[itemIndex];
}