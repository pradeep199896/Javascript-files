function birthdayCakeCandles(candles) {
    // Write your code here
    var len=candles.length
    var count=0;
    var maxh=candles[0];
    for(let i=1;i<len;++i)
    {
        if(candles[i]>maxh)
        {
            maxh=candles[i]
        }
        if(maxh==candles[i])
        {
            count++
        }
    }
    console.log(count);

}
candles=[4,6,2,6,5,3,4,6]
birthdayCakeCandles(candles) 
