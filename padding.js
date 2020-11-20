var name="pradeep";
var pai=name.padStart(9,"B.");
console.log(pai);
var name1="praful";
var last=name1.padEnd(12," kumar");
console.log(last);
/*var arr=[1,5,4,7,6];
var add=padStart(9,5);
console.log(add);*/
var objec={
    fname:"pardeep",
    lname:"kumar",
    standard:"FAIL",
    age:function(){
        return 21;
       }
};
console.log(Object.entries(objec));
console.log(Object.values(objec));
