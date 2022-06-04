console.log("Print odds 1-20");

function oddNumbert(){
    var i;
for (i=0;i <=20;i++)
{
if (i%2!=0)
console.log(i);
}
}
oddNumbert()
// ===================================================

console.log("Decreasing Multiples of 3");

function divisibleByThree(){
    for (var i=100; i >= 0; i--)

    {
    
    if (i % 3 == 0)
    
    console.log(i);
    
    }
}
divisibleByThree()
// ===================================================

console.log("Print the sequence");

function decreaseNum(){
    var decrease = 4
for(var i = 0; i < 6; i++){
    console.log(decrease);
    decrease -= 1.5;
}
}
decreaseNum();
// ===================================================

console.log("Sigma");

function sigma_sum() {
    var sum = 0;
for(i=0; i<=100; i++){
    sum = sum + i;
}  
console.log(sum);
}
sigma_sum();
// ===================================================

console.log("Factorial");

function product() {
    var product = 1;
for(i=1; i<=12; i++){
    product = product * i;
}  
console.log(product);
}
product();
