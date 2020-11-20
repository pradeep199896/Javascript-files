function minMax(arr,n)
{
    var sum;
    var max=0;
    var min=0;
    min=arr[0]
    max=min
    sum=min
    for(i=1;i<n;++i)
    {
        sum+=arr[i]
        if(arr[i]<min)
        {
            min=arr[i]
        }
        if(arr[i]>max)
        {
            max=arr[i]
        }
    }
    console.log(sum-max,sum-min)
}
var num=[7,4,2,10,9]
minMax(num,5)