function compareTriplets(a, b) {
    var points=[],i;
    var acount=0,bcount=0;
    for(i=0;i<a.length;++i)
    {
        if(a[i]>b[i])
        {
           acount=acount+1 
        }
    else if(a[i]<b[i])
        {
        bcount=bcount+1
    }
    else{
        acount=acount+0
        bcount=bcount+0
    }
    }
    points.splice(0,1,acount,bcount);
    console.log(points);
    }
compareTriplets([12,1,3],[7,1,9])