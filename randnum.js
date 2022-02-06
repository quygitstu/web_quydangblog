var getNum = document.getElementById("btn");
function randNum() {
    var from = document.getElementById("from").value;
   var to = document.getElementById("to").value;
   randomNumber = Math.floor(Math.random() * parseInt(to));
   if (randomNumber >= parseInt(from)){
    var result = document.getElementById("result");
    result.innerHTML = randomNumber;
   }
}
