function convert(s)
{ 
    let time=s.split(':')
    let ampm=time[2].substring(2)
    let hours=time[0]
    let mins=time[1]
    let secs=time[2].substring(0,2)
    if(ampm=="AM")
    {
        return `${parseInt(hours)==12? "00":hours}:${mins}:${secs}${ampm}`
    }
    else
    {
        return `${12+(parseInt(hours)==12?00:parseInt(hours))}:${mins}:${secs}${ampm}`
    }

}
console.log(convert("12:40:22AM"))
