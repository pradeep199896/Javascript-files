var vehicles=["cars","cycles","bikes","scootors"];
var fruits=["kiwi","grapes","banana"];
var yup=vehicles.join("-");
console.log(yup);
var m=vehicles.pop();
console.log(m);
console.log(vehicles);
vehicles.push("scootor");
console.log(vehicles);
vehicles.shift();
console.log(vehicles);
    vehicles.unshift("cars");
    console.log(vehicles);
    vehicles.sort()
    console.log(vehicles);
    delete vehicles[2];
    console.log(vehicles);
    vehicles[2]="Aeroplane";
    console.log(vehicles);
    var yt=delete vehicles[3];
    console.log(vehicles[4]);
    console.log(yt);
    //splicing of array
    vehicles.splice(4,5,"cycles","honda");
    console.log(vehicles);
    vehicles.splice(3,4,"rocket","jet");
    console.log(vehicles);
    var joi=Array(vehicles+(fruits));
    console.log((joi));
    vehicles.splice(2,"hondaa")
console.log(vehicles);    
    
    

