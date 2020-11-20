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
function solve(grid) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j] == '.') {
          for (let k = 1; k <= 9; k++) {
            if (possibilites(grid, i, j, k)) {
              grid[i][j] = k;
            if (solve(grid)) {
             return true;
            } else {
             grid[i][j] = '.';
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
    ['.', '9', '.', '.', '4', '2', '1', '3', '6'],
    ['.', '.', '.', '9', '6', '.', '4', '8', '5'],
    ['.', '.', '.', '5', '8', '1', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
    ['5', '1', '7', '2', '.', '.', '9', '.', '.'],
    ['6', '.', '2', '.', '.', '.', '3', '7', '.'],
    ['1', '.', '.', '8', '.', '4', '.', '2', '.'],
    ['7', '.', '6', '.', '.', '.', '8', '1', '.'],
    ['3', '.', '.', '.', '9', '.', '.', '.', '.'],
];
console.log(solve(grid))
console.log(grid)