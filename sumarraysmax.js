function miniMaxSum(arr) {
    let count=0,count1=0,n=arr.length;
    for(let k=0;k<4;++k)
    {
        count1=arr[k]+count1;
    }
    for(let i=4;i>=1;--i,--n)
    {
        count=arr[n-1]+count;
    }
     console.log(count1,count);
}
var arr=[1,2,3,4,5,6]
miniMaxSum(arr)
console.log(arr[arr.length-1]);