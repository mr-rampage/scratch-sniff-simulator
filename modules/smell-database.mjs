import createSmell from "./smell-model.mjs";

export default function getSmells() {
    return [
        createSmell("Fruit Notes", "Is that apple you detect?", "high"),
        createSmell("Toasted Notes", "", "medium"),
        createSmell("Almond", "", "low"),
        createSmell("Herbaceous Notes", "", "low"),
        createSmell("Smokey", "", "medium"),
        createSmell("Chocolate", "", "medium"),
        createSmell("Vanilla", "", "high"),
        createSmell("Coffee", "", "high"),
        createSmell("Oak", "", "medium"),
        createSmell("Cedar", "", "low"),
        createSmell("Rose", "", "low"),
        createSmell("Chamomile", "", "medium"),
        createSmell("Ammonia", "", "high"),
        createSmell("Fish", "", "high"),
        createSmell("Metal", "", "high")
    ];
}