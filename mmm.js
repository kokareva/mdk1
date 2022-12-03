let A2 = [
    1, 2, -3, 4, 5, 69, -7, 8, 9, -10, 111, -12, -13, 144, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, -265, 270, 287, 29, -306,
  ];
  function start(arr) {
    let x = 0;
    let y = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 5 == 0 && arr[i] % 7 != 0) {
        x += arr[i];
        y++;
      }
    }
    return [x, y];
  }
  console.log( start(A2));

let a3 = 2;
b3 = 3;
c3 = 7;
d3 = 8;
e3 = 22;
f3 = 26;
function start2(x, y, z) {
  return Math.pow(x, 2) + Math.pow(y, 2) + Math.sqrt(z);
}
if (start(a3, b3, c3) > start2(d3, e3, f3)) {
  console.log("23 - a,b,c");
} else {
  console.log("23 - d,e,f");
}

