function diag(arr)
{
var n=arr.length;
var di1=0,di2=0;
var i,j;
for(i=0;i<n;++i)
{
    di1=arr[i][i]+di1;
     di2=arr[i][n-1-i]+di2;
}
res=Math.abs(di1-di2)
return res;
}
var nj=[[3,5,7],[8,9,7],[3,4,1]]
console.log(diag(nj))
