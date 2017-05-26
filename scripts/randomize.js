var Randomize = {
  array: function(array) {
    var tempArr = array;
    var randomizedArray = [];
    while (tempArr.length > 0) {
      var randNum = Math.floor(Math.random() * tempArr.length);
      var choice = tempArr[randNum];
      tempArr.splice(randNum, 1);
      randomizedArray.push(choice);
    }
    return randomizedArray;
  },
  objectKeys: function(object){
    var arrayOfKeys = Randomize.array(Object.keys(object));
    console.log(arrayOfKeys);
    return arrayOfKeys;
  }
};
