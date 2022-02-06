function showInfo() {
    alert("Tác phẩm đầu tay nên thông cảm nhiều nghen :))))))");
    alert("Coding by quydang");
     };
     
     setInterval (getFunction, 1000);
     function getFunction() {
 var time = new Date()
 var hour = time.getHours();
 var minute = time.getMinutes();
 var second = time.getSeconds();
 
 if (hour < 10 ) {
   var hour = "0" + hour;
 };
 
 if (minute < 10 ) {
   var minute = "0" + minute;
 };
 
 if (second < 10) {
   var second = "0" + second;
 };
 
 var print = "Giờ hiện tại: " + hour + ":" + minute + ":" + second;
 document.getElementById("test").innerHTML = print;
 
 };

getFunction();
