/*1. Find LCM of the first array a. 
2.Find GCD / HCF of the second array b. 
3.Find all the multiples of LCM up to GCD, which divides the GCD evenly.
or Example:
 Here, In the given sample Input, The LCM of array a would be 4 and the GCD of the array b would be 16. 
 Now, Find all Multiples of 4,(like 4,8,12,16,...) upto 16, such that, (16%multiple_of_4_here) should be 0.
 Here, 16%4=0 -----> count=1 (suppose this variable.) 16%8=0 -----> count=2 16%12!=0 ---> count=2 16%16=0 ---> count=3.*/
 function getTotalX(b) {
    // Write your code here
    //GCD of array 
    b.sort()
    var min=b[0];
    var count=0,flag=0,lcm=1;
    for(let i=1;i<=min;++i)
    {
      for(let j=0;j<b.length;++j)
      {
        if(b[j]%i!=0)
        {
          flag=1
        }
      
      }
      if(!flag)
      {
        var arr=[]
        arr.push(i)
        var num=Math.max(arr)
      }
      flag=0
    }
    console.log(num)
 }
 getTotalX([21,14,38,5])