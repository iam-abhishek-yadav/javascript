class Item {
  constructor(value, weight) {
      this.value = value;
      this.weight = weight;
  }
}

const fractionalKnapsack = (W, arr, n) => {
    arr.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

    let maxValue = 0.0;

    for (const a of arr) {
        if (a.weight <= W) {
            W -= a.weight;
            maxValue += a.value;
        } else {
            const fraction = W / a.weight;
            maxValue += fraction * a.value;
            break;
        }
    }

    return maxValue;
}

const items = [new Item(60, 10), new Item(100, 20), new Item(120, 30), new Item(100, 1)];
const knapsackCapacity = 50;
const result = fractionalKnapsack(knapsackCapacity, items, items.length);
console.log(result);

