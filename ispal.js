const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ispal(s) {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] != s[s.length - i - 1]) {
      return false;
    }
  }
  return true;
}
readline.question("Enter a string to be scanned for pal: ", (s) => {
  if (ispal(s)) {
    console.log("yup!!");
  }
  readline.close();
});
