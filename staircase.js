function size(n)
{ for(let i=1;i<=n;++i)
    { let str=" ";
        for(let j=0;j<n;++j)
        {
           if(j<n-i) str+=" "
           else str+="#"
        }
        console.log(str)
        
    }
    }
size(50)