/*chage de text and the color of the .result after calculation*/

function calculation() {
  var stInput = document.getElementById("inputText").value; //receive the inputText
  if (stInput.length > 2) {
    //validate if has a qtd of a characters valid
    var stArray = stInput.split(""); //convert the string on a array
    var firstNumber = "";
    var secondNumber = "";
    var operation = "";
    var stop = 0;
    var solution = 0;
    for (let i = 0; i < stArray.length; i++) {
      //split the array on three string that contain the first value, the operation, and the second value. It also validade if has a charatcter valid for the operation
      if (stArray[i] === "-" && i === 0) {
        firstNumber += stArray[i];
      } else if (
        stArray[i] != "+" &&
        stArray[i] != "-" &&
        stArray[i] != "*" &&
        stArray[i] != "/" &&
        stop === 0
      ) {
        firstNumber += stArray[i];
      } else if (
        stArray[i] != "+" &&
        stArray[i] != "-" &&
        stArray[i] != "*" &&
        stArray[i] != "/" &&
        stop === 1
      ) {
        secondNumber += stArray[i];
      } else {
        stop = 1;
        operation = stArray[i];
      }
    }

    if (operation === "+") {
      //convert to numbers, and calculate the result
      solution = Number(firstNumber) + Number(secondNumber);
    } else if (operation === "-") {
      solution = Number(firstNumber) - Number(secondNumber);
    } else if (operation === "*") {
      solution = Number(firstNumber) * Number(secondNumber);
    } else if (operation === "/") {
      solution = Number(firstNumber) / Number(secondNumber);
    } else {
      solution = "Inform a valid operation. Ex:3+7.";
    }
  } else {
    solution = "Inform a valid operation. Ex:3+7.";
  }
  document.getElementById("result").innerHTML = solution;
  document.getElementById("result").style.color = "black";
}
