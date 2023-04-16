import { sum } from "./libs/sum";
import { sayHello } from "./libs/hello";
import "./libs/other";
import _ from "lodash";

const moment = require("moment");

console.log("cc");
sayHello();
console.log(sum(10, 20));
console.log(moment().startOf("day").fromNow());

const PI = 3.14;

console.log(`PI is: ${PI}`);
