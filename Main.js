import { gcdByDivisionTable } from "./gcd";
let resultE = document.getElementById('result');
resultE.innerText = JSON.stringify(gcdByDivisionTable([120,50,60]));