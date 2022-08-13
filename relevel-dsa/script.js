process.stdin.resume();
process.stdin.setEncoding("utf-8");

let s = "",
  textCases,
  no_of_test_cases_input;
let arr = [];

process.stdin.on("data", (data) => {
  s = s.concat(data);
});

process.stdin.on("end", () => {
  arr = s
    .trim()
    .split("\n")
    .map((val) => {
      return val.trim();
    });

  textCases = parseInt(arr[0]);

  for (let i = 1; i < arr.length; ++i) {
    arr[i] = arr[i].slice(1, arr[i].length - 1);
  }

  main();
});

function main() {
  no_of_test_cases_input = 1;

  for (
    let i = 1;
    i <= textCases * no_of_test_cases_input;
    i = i + no_of_test_cases_input
  ) {
    let a = arr[i].split(",");
    let arr1 = a.map((val) => {
      return parseInt(val);
    });
    let set1 = new Set(arr1);
    let distinctArr = [...set1];
    let sum = distinctArr.reduce((acc, val) => {
      return acc + val;
    }, 0);
    console.log(sum);
  }
}
