var name=()=>{
    return "Hello World";
}
console.log(name());
var sum;
var add=(num1,num2)=>{
    sum=num1+num2;
    return sum;
}
console.log(add(5,9));
//arrow function in objects
obj1={
    fname:"Banala",
    sname:"pradeep",
    fullname:function(){
        return this.fname+" "+this.sname;
    }
}
console.log(obj1.fullname());