function plusMinus(arr) {
    var i,n=arr.length;
    var pcount=0,ncount=0,zcount=0;
    var pratio,nratio,zratio;
    for(i=0;i<n;++i)
    {
        if(arr[i]>0)
        {
            pcount++;
            pratio=pcount/n;
        }
        else if(arr[i]<0)
        {
            ncount++
             nratio=ncount/n;
        }
        else if(arr[i]==0){
            zcount++
            zratio=zcount/n;
        }
    }
    console.log(pratio);
    console.log(nratio);
    console.log(zratio);
}
plusMinus([1 ,-2, -7, 9, 5, -8, -5])
