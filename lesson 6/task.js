


//Even or Odd

function even_or_odd(number) {
  if (number % 2 === 0) {
    return 'Even';
  }
  return 'Odd';
}

//Return Negative
function makeNegative(num) {
  if (num > 0) {
    return -num;
  }

  return num;
}

//Jenny’s secret message
function greet(name) {

  if (name === "Johnny")
    return "Hello, my love!";
  return "Hello, " + name + "!";
}

//Opposites Attract
function lovefunc(flower1, flower2) {
  return (flower1 % 2 === 0 && flower2 % 2 === 1)
    || (flower1 % 2 === 1 && flower2 % 2 === 0);
}

//Convert boolean values to strings ‘Yes’ or ‘No’.
function boolToWord(bool) {
  if (bool === true) {
    return 'Yes';
  }
  else {
    return 'No';
  }
}
//Transportation on vacation
function rentalCarCost(d) {
  if (d < 3){
    return (d * 40)
    
  }
    else if (d < 7){
      return (d * 40 -20)
    }
  else {
    return (d * 40 - 50)
  }
  }
//Basic Mathematical Operations
  function basicOp(operation, value1, value2)
  { if (operation === '*'){
    return (value1 * value2)
  }
    else if (operation === '-'){
    return (value1 - value2)
      }
      else if (operation === '+'){
    return (value1 + value2)
      }
      else if (operation === '/'){
    return (value1 / value2)
      }
  }