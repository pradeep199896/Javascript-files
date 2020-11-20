
function isEmpty(puzzle)
{
    for(let r=0;r<9;++r)
    {
        for(let c=0;c<9;++c)
        {
           if( puzzle[r][c]=='.')
           {
               return [r,c]
           }
        }
    }
    return [null,null] //All spaces are filled
}
function is_Valid(puzzle,row,col,guess){
    for(let i=0;i<9;++i)
    {
       if( puzzle[row][i]==guess)
       {
        return false
        }
    }
    for(let j=0;j<9;++j)
    {
       if( puzzle[j][col]==guess)
       {
        return false
        }
    }
    let row0=Math.floor(row/3)*3
    let col0=Math.floor(col/3)*3
    for(let r=row0;r<row0+2;++r)
    {
        for(let c=col0;c<col0+2;++c)
        {
            if(puzzle[r][c]==guess)
            {
                return false
            }
        }
    }
    return true
}
function solveSuduko(puzzle)
{
    let find=isEmpty(puzzle)
    let row=find[0]
    let col=find[1]
    if(row==null)
    {
     return true
    }
    for(let guess=1;guess<=9;++guess)
    {
        if (is_Valid(puzzle,row,col,guess))
        {
            puzzle[row][col]=guess
        }
        if(solveSuduko(puzzle))
        {
            return true
        }
        puzzle[row][col]='.'
    }
    return flase
}
solveSuduko([['.', '9', '.', '.', '4', '2', '1', '3', '6'],
['.', '.', '.', '9', '6', '.', '4', '8', '5'],
['.', '.', '.', '5', '8', '1', '.', '.', '.'],
['.', '.', '4', '.', '.', '.', '.', '.', '.'],
['5', '1', '7', '2', '.', '.', '9', '.', '.'],
['6', '.', '2', '.', '.', '.', '3', '7', '.'],
['1', '.', '.', '8', '.', '4', '.', '2', '.'],
['7', '.', '6', '.', '.', '.', '8', '1', '.'],
['3', '.', '.', '.', '9', '.', '.', '.', '.']])