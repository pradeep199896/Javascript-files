//call() and apply() are of same use.call() function is used to bind object methods.Both methods used to to call object method using another object as argument.
var obj1={fullname:
function()
{
    return this.fname+" "+this.lname;
}
};
var obj2={fname:"Banala",lname:"Pradeep"};
var join=obj1.fullname.apply(obj2);
console.log(join);
const num=5;
num=4;
console.log(num);