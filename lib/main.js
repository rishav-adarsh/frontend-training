// import {} from 'module-name';
// bult-in module, 
// 3rd party module
// custom-made module : relative filepath
// ./ : current file
// ../ : one level up

// import { add, mull } from "./math-lib";
// import div from "./math-lib" // or import divide from "./math-lib"

import divide, { mul, add } from "./math-lib";

divide(7, 3);
add(3, 5);

/*
1.0.0 = major.minor.patch

^1.0.0 : 1.0.0 or latest minor
~1.0.0 : 1.0.0 or latest patch
 1.0.0 : 1.0.0 only downloaded

*/