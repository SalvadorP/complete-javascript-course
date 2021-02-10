// Remember, we're gonna use strict mode in all scripts now!
"use strict";

let x = 38;
if (true) {
  x = 2;
}
console.log(x);

let myfunc = () => {
  x += 2;
  console.warn(x);
};

myfunc();
