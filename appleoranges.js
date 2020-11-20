function countApplesAndOranges(s,t,a, b, apples, oranges) {
    let aarr=[];
    let oarr=[];
    var acount=0,bcount=0;
for(var i=0;i<apples.length;++i)
{
    let aland=apples[i]+a;
    aarr.push(aland);
    if(aarr[i]>=s && aarr[i]<=t)
    {
        acount++
    }
}
for(var j=0;j<oranges.length;++j)
{
    let oland=oranges[j]+b;
    oarr.push(oland);
    if(oarr[j]>=s && oarr[j]<=t)
    {
        bcount++
    }
}
console.log(acount,bcount);
}
countApplesAndOranges(7,10,4, 12, [2,3,-4], [3,-2,-4]);