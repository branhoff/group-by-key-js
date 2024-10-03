function groupByKey(items, key) {
    return items.reduce((acc, item) => {
      const groupKey = item[key];
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(item);
      return acc;
    }, {});
  }

  function verboseGroupByKey(items, key) {
    let accumulator = {};
    for (let item of items) {
      const groupKey = item[key];
      if (!accumulator[groupKey]) {
        accumulator[groupKey] = [];
      }
      accumulator[groupKey].push(item);
    }
    return accumulator;
  }

  const animals = [
    { type: "dog", name: "fido" },
    { type: "cat", name: "sam" },
    { type: "cat", name: "bob" }
  ]

  const groupedByType = groupByKey(animals, 'type');
  console.log(groupedByType);

  const groupedByName = groupByKey(animals, 'name');
  console.log(groupedByName);