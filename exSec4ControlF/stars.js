showStars(10);

function showStars(rows) {
  for (let i = 1; i < rows; i++) {
    let patterns = "";
    for (let j = 0; i < rows; i++) {
      patterns += "*";
      console.log(patterns);
    }
  }
}
