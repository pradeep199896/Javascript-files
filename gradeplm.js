function gradingStudents(grades) {
    // Write your code here
    var i,len=grades.length;
    for(i=0;i<len;++i)
    { 
        if(grades[i]<38 && grades[i]%5==0)
        {
            grades[i]=grades[i]
        }      
        else{
            if(grades[i]%5>=3)
            {
                while(grades[i]%5!=0)
                {
                    grades[i]=grades[i]+1;
                }
            }
            
        }  
    }

    console.log(grades.join(" "+'\n'))
}
gradingStudents([74,65,38,41,88])