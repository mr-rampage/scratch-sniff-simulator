import createSmell from "./smell-model.mjs";

export default function getSmells() {
    return [
        createSmell("Fruit", "Is that apple you detect?", "high", "#FF9900"),
        createSmell("Toasted", "", "medium", "brown"),
        createSmell("Almond", "", "low", "#996600"),
        createSmell("Herbs", "", "low", "#336633"),
        createSmell("Smoke", "", "medium", "#666666"),
        createSmell("Chocolate", "", "medium", "#330000"),
        createSmell("Vanilla", "", "high", "#9999FF"),
        createSmell("Coffee", "", "high", "#663300"),
        createSmell("Oak", "", "medium", "#660000"),
        createSmell("Cedar", "", "low", "#663333"),
        createSmell("Rose", "", "low", "#990066"),
        createSmell("Chamomile", "", "medium", "#999933"),
        createSmell("Ammonia", "", "high", "#0066FF"),
        createSmell("Fish", "", "high", "#FF9999"),
        createSmell("Metal", "", "high", "#666666")
    ];
}