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

var swap = function(i,j,array) {
  var one = array[i];
  var two = array[j];
  array[i] = two;
  array[j] = one;

  return array;
};

var checkSorted = function(array) {
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i+1]) {
      return false;
    }
  }

  return true;
};

var bogoSort = function(array) {
  while (!checkSorted(array)) {
    // Get random value within array
    var i = Math.floor(Math.random() * (array.length));
    var j = Math.floor(Math.random() * (array.length));
    swap(i,j,array);
  }
  console.log(array);
};

bogoSort(createArray());