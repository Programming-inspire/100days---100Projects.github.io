let display = document.getElementById("status");
let body = document.body;
let submit = document.getElementById("submit");
let char = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var captcha = "";


body.onload = function generating() {
  var pwdLength = 6;
  for (let i = 0; i < pwdLength; i++) {
    var generatePwd = Math.floor(Math.random() * char.length);
    captcha += char.substring(generatePwd, generatePwd + 1);
  }
  document.getElementById("generator").value = captcha;
  display.innerText = "Captcha Generator";
};

submit.onclick = function checking() {
  let input = document.getElementById("client-text").value;

  if (input == "") {
    display.innerText = "Please enter the text shown below👇";
  } else if (input == captcha) {
    display.innerText = "Matched😎";
  } else {
    display.innerText = "Not Matched😖";
  }
};



 