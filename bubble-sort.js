var createArray = function() { 
  // Determine size of array
  var size = 10*Math.random(); 
  // Initiate array
  var array = []; 
  // From 0 to length of size, add one
  for (var i = 0; i < size; i++) { 
    // Add random number from 0 to 100 to array
    array.push(Math.floor(100*Math.random())); 
  } 
  // Returns array
  return array;
}; 

var swap = function(i,least,array) {
  var one = array[i];
  var two = array[least];
  array[i] = two;
  array[least] = one;

  return array;
};


var bubbleSort = function(array) {
  console.log ("array: " + array)
  for (var i = 0; i < array.length; i++) {
    var least = i;
    for (var j = i+1; j < array.length; j++) {
      if (array[i] > array[j]) {
        least = j;
        array = swap(i,least,array);
      }
    }
  }
  console.log("sorted: " + array);
};

bubbleSort(createArray());