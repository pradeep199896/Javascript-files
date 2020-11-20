var obj1={
    fname:"pradeep",
    lname:"praful",
    class:"btech",
    age:22
};
Object.defineProperty(obj1,"class",{value:"Degree"})
console.log(obj1);
Object.defineProperty(obj1,"students",{value:25})
console.log(obj1);
console.log(obj1.students)
Object.defineProperty(obj1,"fullname",{get:function(){
    return this.fname+" "+this.lname;
}})
console.log(obj1.fullname);