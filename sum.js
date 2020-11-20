function sum(arr){
        
    var i,count=0;
for(i=0;i<arr.length;++i)
{
  count=count+arr[i];
}
return count;

}
console.log(sum([4,5,6,4]))