//1
let details={
    name:"dhivya",
    age:21,
    place:"Erode"

}
//First approach

//  Object.prototype.myOwnProperty=function(n){
//     // const a=Object.keys(carl);
//     var keys=Object.keys(this);
   
//     if(keys.includes(n)){
//         return true;
//     }
//     else{
//         return false;
//     }
//  }
//  var result=carl.myOwnProperty("city");
//  console.log(result);

 //Modified Code
 Object.prototype.myOwnProperty=function(n){
   return (Object.keys(this).includes(n))?true:false;
    
 }
 console.log(details.myOwnProperty("place"));



