const objstr  = '{"name":"sundram","class":"sem4","type": "to feel exhaustion everyday","trial" : "going on"}';
const jsonStr = '{"name":"Sundram","age":21,"skills":["C++","JS"]}';

const objReal = JSON.parse(objstr);
console.log(objReal);
const strobj = JSON.stringify(objReal);
console.log(strobj);

