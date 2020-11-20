function birthday(s, d, m) {
var i,j,count=0;
var date=[];
for(i=0;i<s.length;++i)
{
    var sum=0;
  for(j=i;j<m+i;++j)
  {
    sum=sum+s[j]
  }
  if(sum==d)
  {
      count++
  }
}
console.log(count)
}
birthday([5,1,2,3,4],3,2)