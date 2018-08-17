class Computer {

}

Computer.operatingSystem = "Windows";
console.log(Computer.operatingSystem);


var isConditionTrue = true;
if (isConditionTrue){
    var blockVariable = "Block Variable ";
    console.log(blockVariable + "Print from Condition"); // Print the content of blockVariable
}
console.log(blockVariable + "Print from out of Condition"); // Print the content of blockVariable

// Block Stop Variable
var isConditionTrue = true;
if (isConditionTrue){
    let blockVariable = "Block Variable ";
    console.log(blockVariable + "Print from Condition"); // Print the content of blockVariable
}
console.log(blockVariable + "Print from out of Condition"); // Error
