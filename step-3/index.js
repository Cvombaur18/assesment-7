function hasUniqueChars(string) {
    var obj = {};
    for (var i = 0; i < string.length; i++) {
      var char = string[i];
      if (obj[char]) return false;
      obj[char] = true;
    }
    return true;
  }
  
  console.log(hasUniqueChars("monday")); // true
  console.log(hasUniqueChars("moonday")); // false

  console.time('');
  console.timeEnd('');

  //code time is less than a ms