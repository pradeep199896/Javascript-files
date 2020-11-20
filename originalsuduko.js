var b;
function possibilites(grid,row,col,n){
    for(let i=0;i<9;++i)
    {
       if( grid[row][i]==n)
       {
        return false
        }
    }
    for(let j=0;j<9;++j)
    {
       if( grid[j][col]==n)
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
            if(grid[r][c]==n)
            {
                return false
            }
        }
    }
    return true
}
function solve(grid)
 {
    for (let i = 0; i < 9; i++) 
    {
      for (let j = 0; j < 9; j++)
       {
        if (grid[i][j] == b)
         {
          for (let k = 1; k <= 9; k++)
           {
            if (possibilites(grid, i, j, k))
             {
              grid[i][j] = k;
            if (solve(grid))
             {
             return true;
            } 
            else 
            {
             grid[i][j] = b;
            }
            }
            }
         return false;
       }
     }
    }
   return true;
}
grid=[
    [1, b, b, b, b, b, b, b, 7],
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, 5, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, b, 1, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
    [b, 2, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, 6],
] 

console.log(solve(grid))
console.log(grid)