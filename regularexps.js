//its to search text and replace a text
var name="hey job is a dream.job fullfills the requirements";
var s=name.indexOf("job");
console.log(s);
var n=name.replace("job","work");
console.log(n);
var k=name.replace(/Job/i,"work");
console.log(k)
var t=name.replace(/job/g,"pani");
console.log(t);