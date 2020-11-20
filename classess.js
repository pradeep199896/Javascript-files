//classes:The classes are templet of objects or simply blueprint of objects.in class helps encapsulation of data.Class is topic of OOPS
class Name{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }
    getFullName()
    {
        return (this.fname+" "+this.lname);
    }
    editName(nfname,nlname)
{
this.fname=nfname;
this.lname=nlname;
return this.fname+" "+this.lname;
}
}
var set=new Name("Pradeep","KUMAR");
console.log(set);
console.log(set.fname+" "+set.lname);
console.log(set.getFullName());
console.log(set.editName("praful","kumar"));
console.log(set.getFullName());
//inheritance
class Teacher extends Name{
    constructor(fname,lname,favSub,language){
        super(fname,lname);
        this.favSub=favSub;
        this.language=language;
    }
    getName()
    {
        return (this.fname+" "+this.lname);
    }
    sub(value)
    {
this.favSub=value;
return `this is my fav subject ${this.favSub}`;
    }
    editName(nfname,nlname)
{
this.fname=nfname;
this.lname=nlname;
}
}
var user=new Teacher("Hero","honda","maths","English")
console.log(user.getName());
console.log(user.sub("Hondi"));
user.editName("Abhi","Kodi")
console.log(user.getName());
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    console.log(parameterVariable);
}
var c=new greeting("Hey this is 2nd line");
var secondInteger ='5',firstInteger=5;
    let conv=Number(secondInteger)+firstInteger;
    console.log(conv);
    var secondDecimal='7',firstDecimal=8;
    var num=parseFloat(secondDecimal)+firstDecimal;
    console.log(num);