//To buy something in online
//logged in
//email  verifed
//valid card-info
//if something misses stop shoping
console.log("Welcome!HAPPY SHOPPING");
var login=true,email=false,cardinfo=true;
console.log("TO BUY SOMETHING U MUST LOGIN and verify details:");
/*if(login)
{
    console.log("Logged is Sucess");
    if(email)
    {
        console.log("Email is verified");
        if(cardinfo)
        {
            console.log("You can go further to purchase");
        }
    }
}
*/
//another way is 
if(login && email && cardinfo)
{
    console.log("ALL ARE VERIFIED U CAN GO FOR PURHASE");
}
else{
    console.log("not allowed to purchase");
}