import { gcdByDivisionTable } from "./gcd.js";
let resultE = document.getElementById('result');
resultE.innerText = JSON.stringify(gcdByDivisionTable([120,50,60]));
alert(gcdByDivisionTable([120,50,60]));