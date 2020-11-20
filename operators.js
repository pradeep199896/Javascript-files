//operators:+,*,%,-
console.log(5+6);
console.log("hey kets");
var num1=30;
var num2=12;
console.log(num1+num2);
var gret=num1>num2;
console.log(gret);
//Lets understand with examples
var listprice=799;
var sellingprice=199;
var dicount;
discount=((listprice-sellingprice)/listprice)*100;
console.log("THe given discount percentage:",discount,"%")
//The discount value has lots of decimal so in order to round it off use math library
roundoff=Math.round(discount);
console.log("Exact discount value:",roundoff,"%off");