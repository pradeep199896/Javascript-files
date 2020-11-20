function guess_Valid(sudoku,row,col,guess){
    for(let i=0;i<9;i++){
        if(sudoku[row][i]==guess) {
            return false
        }
    }
    for(j=0;j<9;j++) {
        if (sudoku[j][col]==guess) {
            return false
        }
    }
     let row_start = Math.floor(row/3) * 3  
     let col_start = Math.floor(col/3) * 3 
    
     for(let r=row_start;r<row_start+2;++r) 
     {
     for(let c=col_start;r<col_start+2;++c)
      {
           if(sudoku[r][c]==guess){  
               return false
           }
         }
     }
        return true
    }
     suduko=[
        ['.', '9', '.', '.', '4', '2', '1', '3', '6'],
        ['.', '.', '.', '9', '6', '.', '4', '8', '5'],
        ['.', '.', '.', '5', '8', '1', '.', '.', '.'],
        ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
        ['5', '1', '7', '2', '.', '.', '9', '.', '.'],
        ['6', '.', '2', '.', '.', '.', '3', '7', '.'],
        ['1', '.', '.', '8', '.', '4', '.', '2', '.'],
        ['7', '.', '6', '.', '.', '.', '8', '1', '.'],
        ['3', '.', '.', '.', '9', '.', '.', '.', '.'],
    ]
    
    console.log(suduko,0,3,7)