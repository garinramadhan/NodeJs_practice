//app.js

//Some function
//App function
function myFunction(){
    console.log('Function was called');
}

var myString = 'This is String';

//Module for export
//Export one by one
module.exports.myFunction = myFunction;
module.exports.myString = myString;