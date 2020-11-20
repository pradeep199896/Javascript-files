function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    let answer=[]
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i])
        { alice++;
        }
        if(a[i] < b[i])
            {
             bob++;
        }
    }
    answer[0]=alice;
    answer[1]=bob;
    console.log(answer);
}
compareTriplets([5,6,7],[3,6,10])
var num=[];
num.splice(0,1,"pradeep","praful")
console.log(num)