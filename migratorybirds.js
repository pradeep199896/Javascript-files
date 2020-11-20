function migratoryBirds(arr)
 {
    let largest = 1;
    let counter = largest;
    let type = 0;
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        largest = (arr.lastIndexOf(arr[i]) - i);
        if (largest > counter) {
            counter = largest;
            type = arr[i];
        }
    }
return type;
}

console.log(migratoryBirds([3,4,3,1,2,1,2,3,4,4,4]))
