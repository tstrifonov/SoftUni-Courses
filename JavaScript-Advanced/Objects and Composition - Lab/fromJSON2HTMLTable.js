function fromJSON2HTMLTable(input) {
  let result = [];
  let arrayOfObjects = JSON.parse(input);
  let keys = Object.keys(arrayOfObjects[0]);

  result.push(`<table>`);
  result.push(`  <tr>${keys.map((key) => `<th>${key}</th>`).join("")}</tr>`);

  for (let i = 0; i < arrayOfObjects.length; i++) {
    let values = Object.values(arrayOfObjects[i]);
    result.push(
      `  <tr>${values.map((value) => `<td>${value}</td>`).join("")}</tr>`
    );
  }

  result.push(`</table>`);

  return result.join("\n");
}

fromJSON2HTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);
/* 
<table>
   <tr><th>Name</th><th>Score</th></tr>
   <tr><td>Stamat</td><td>5.5</td></tr>
   <tr><td>Rumen</td><td>6</td></tr>
</table> 
*/

fromJSON2HTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);
/*
<table>
   <tr><th>Name</th><th>Score</th><th>Grade</th></tr>
   <tr><td>Pesho</td><td>4</td><td>8</td></tr>
   <tr><td>Gosho</td><td>5</td><td>8</td></tr>
   <tr><td>Angel</td><td>5.5</td><td>10</td></tr>
</table>
*/
