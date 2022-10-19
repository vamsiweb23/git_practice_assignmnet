//check prime
var num=13;
//type code here 


var count=0;
for(var i=2; i<=num**0.5; i++)
{
    if(num%i==0)
    {
        count++
    }
}
if(count==0)
{
    console.log("yes")
}
else{
    console.log("no")
}
