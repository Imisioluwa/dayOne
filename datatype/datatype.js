//Function to create data types
function dataType(data){
  //If the data type is a string then the length of data is returned	
  if (typeof (data) === "string"){
    return data.length;
  }
  //If the data type is undefined or null the function returns 'no value'
  if (typeof(data) === "undefined" || data === null){
    return "no value";
  }
  //If the data type is a boolean then return boolean i.e true or false
  if (typeof (data) === "boolean"){
	return data;
  }
  //If data type is a number then proceed to comment below...
  if (typeof (data) === "number"){
  	//If data is less than 100 then return the statement 'less than 100'
    if (data < 100) { 
      return 'less than 100'; 
    }
    //If data is greater than 100 then return the statement  'more than 100'
    if (data > 100) { 
      return 'more than 100';
    }
    //If data is equal to 100 then return the statement 'equal to 100'
    if (data === 100) { 
    return 'equal to 100'; 
    }
  }
  //If data is an array then proceed to comment below....
  if (data instanceof Array){
  	//If the length of the data is less than 3 return undefined
    if (data.length < 3){
	  return undefined;
	}
	//Return data in second index 
	else{
	  return data[2];
	}
  }	
  //If data type is a function it should call the callback function with the arguement true
  if (typeof (data) === "function"){
    return data(true);
  }	
}
module.exports = dataType;