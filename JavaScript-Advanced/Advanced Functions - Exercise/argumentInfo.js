function argumentInfo() {
  const library = {};

  Array.from(arguments).forEach((argument) => {
    console.log(`${typeof argument}: ${argument}`);

    if (library.hasOwnProperty(typeof argument) === false) {
      library[typeof argument] = 0;
    }
    library[typeof argument]++;
  });

  const result = Object.entries(library).sort((a, b) => b[1] - a[1]);
  result.forEach((entry) => console.log(`${entry[0]} = ${entry[1]}`));
}

argumentInfo("cat", { name: "bob" }, "dog", 44, 42, function () {
  console.log("Hello world!");
});
