let string = "";
function abcd() {
  document.querySelector(".input-box").textContent = 0;
  string = "";
}
function del() {
  if (string.length === 1) {
    document.querySelector(".input-box").textContent = 0;
    string = "";
  } else {
    string = string.substring(0, string.length - 1);
    document.querySelector(".input-box").textContent = string;
  }
}
function num9() {
  string += "9";
  document.querySelector(".input-box").textContent = string;
}
function num8() {
  string += "8";
  document.querySelector(".input-box").textContent = string;
}
function num7() {
  string += "7";
  document.querySelector(".input-box").textContent = string;
}
function num6() {
  string += "6";
  document.querySelector(".input-box").textContent = string;
}
function num5() {
  string += "5";
  document.querySelector(".input-box").textContent = string;
}
function num4() {
  string += "4";
  document.querySelector(".input-box").textContent = string;
}
function num3() {
  string += "3";
  document.querySelector(".input-box").textContent = string;
}
function num2() {
  string += "2";
  document.querySelector(".input-box").textContent = string;
}
function num1() {
  string += "1";
  document.querySelector(".input-box").textContent = string;
}
function num0() {
  string += "0";
  document.querySelector(".input-box").textContent = string;
}
function num00() {
  string += "00";
  document.querySelector(".input-box").textContent = string;
}
function nummod() {
  string += "%";
  document.querySelector(".input-box").textContent = string;
}
function numdiv() {
  string += "/";
  document.querySelector(".input-box").textContent = string;
}
function nummul() {
  string += "*";
  document.querySelector(".input-box").textContent = string;
}
function numminus() {
  string += "-";
  document.querySelector(".input-box").textContent = string;
}
function numplus() {
  string += "+";
  document.querySelector(".input-box").textContent = string;
}
function numdot() {
  string += ".";
  document.querySelector(".input-box").textContent = string;
}
function numequal() {
  if (string === "") {
    document.querySelector(".input-box").textContent = 0;
  } else {
    let result = eval(string);
    document.querySelector(".input-box").textContent = result;
    string = "";
  }
}
