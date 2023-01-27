function extract(content) {
  let filter = /\([A-z ]*\)/g;
  let text = document.getElementById("content").textContent;
  let result = text.match(filter);
  for (let i = 0; i < result.length; i++) {
    let text = result[i];
    text = text.split("");
    text.pop();
    text.shift();
    text = text.join("");
    result[i] = text;
  }
  result = result.join("; ");

  return result;
}
