/*var features;
features=function(name,clas,roll)
{
this.name=name;
this.clas=clas;
this.roll=roll;
}
var update;
updates=new features("pradeep",12,465);

console.log(updates.name);
var std=new features("abhi",12,456);
console.log(std.name,std.roll);
console.log(typeof std);
var cmd=features("shal",12,461);
*/
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  var jat=new Person("pradeep",44,'M');
  console.log(jat);
  console.log(typeof jat);