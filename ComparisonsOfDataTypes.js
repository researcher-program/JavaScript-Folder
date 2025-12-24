/*
       Comparision of     Operation:

console.log(2>1);
==> output: True/False

console.log(2<1);
==> output: True/False

console.log(2>=1);
==> output: True/False

console.log(2<=1);
==> output: True/False

console.log(2!=1);
==> output: True/False

console.log("2" >1);
==> output: True/False

console.log("02" >1);
==> output: True/False

console.log(null > 0);
==> output: True/False

console.log(null < 0);
==> output: True/False

console.log(null == 0);
==> output: True/False

console.log(null>=0);
==> output: True/False
   [
The reason that an equality check == and comparisons > < >= <= work differently.
   comparisons convert null to a number,treating it as 0.
   That's why {3} null >=0 is true and {1}null > 0 is false.
   ]
console.log(undefined >1);
==> output: True/False

console.log(undefined <1);
==> output: True/False

console.log(undefined ==1);
==> output: True/False 
*/
/*
=== 
console.log("2" === 2);
==> output: True/False

console.log(1 == a);
==> output: True/False
*/
