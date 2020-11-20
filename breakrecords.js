function breakingRecords(scores) {
    var hscore=0,lscore=0,hsc=0,lsc=0,res=[];
    hscore=scores[0]
    lscore=scores[0]
    for(let i=1;i<scores.length;++i)
    {
        if(scores[i]>hscore)
        {
            hscore=scores[i]
            hsc++
        }
        if(scores[i]<lscore)
        {
            lscore=scores[i]
            lsc++
        }
    }
    res.splice(0,1,hsc,lsc)
    return res;
    
}
console.log(breakingRecords([10 ,5 ,20, 20, 4, 5 ,2 ,25, 1]))