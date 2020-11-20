var obj={fname:"Pradeep",
lname:"praful",roll:465,
get lang(){
    return this.lname;
}
}
console.log(obj.lang);
var obj={fname:"Pradeep",
lname:"praful",roll:465,
set lang(lang)
{
    this.lname=lang;
}
}
obj.lang="KUmar";
console.log(obj.lname);