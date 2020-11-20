function convert(s)
{ 
    let time=s.split(':')
    let ampm=time[2].substring(2)
    let hour=time[0]
    let minutes =time[1]
    let seconds=time[2].substring(0,2)
    if(ampm=='AM'){
        return `${hour==12? "00":hour}:${minutes}:${seconds}`
        
    }
    else{
        return `${12+(parseInt(hour)==12? 0:parseInt(hour))}:${minutes}:${seconds}`
        
    }
}
console.log(convert("08:25:45AM"))