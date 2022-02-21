//Last updated: 7/2/22
function getPass () {
    var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}|:/[]+=~";
    var lengthPass = 14;
    var password = "";
    for (var i = 0; i <= lengthPass ; i++) {
        var randPass = Math.floor(Math.random() * char.length);
        password += char.substring(randPass, randPass + 1);
    }
    document.getElementById("display").value = password;
}
function copyPass() {
   document.getElementById("display").select();
   document.execCommand("Copy");
   alert ("Đã sao chép mật khẩu vào clipboard!");
}
function info () {
    alert("Generate password wizard version 1.0, made by quydang.");
}
