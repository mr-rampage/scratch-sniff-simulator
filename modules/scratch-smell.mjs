import Smell from smell-model.mjs;
export default function getRandomSmell(listOfSmells)
{
	int min = 0;
	int max = listOfSmells.size() - 1;
	int smellIndex = Math.floor(Math.random() * max);
	return listOfSmells(smellIndex);	
}