//palindrome problem
var str="vamsi"
//enter  code here

var bag=""
for(var i=str.length-1; i>=0; i--)
{
    bag+=str[i]
    
}
if(bag==str)
{
    console.log("yes")
}
else{
    console.log("no")
}