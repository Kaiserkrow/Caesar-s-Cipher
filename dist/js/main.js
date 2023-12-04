//note: The code is really dirty, would refactor if I have the time. But if not, ¯\_(ツ)_/¯.
let choice = 0;
let count = 0;
let textAreaOne = "";
let textAreaTwo = "";

function encryptDecryptTextOne() {
  const asciiA = "a".codePointAt(0);
  const asciiZ = "z".codePointAt(0);
  textAreaOne = document.getElementById("one").value;
  textAreaOne.toLowerCase();
  let encMessage = "";

  for (let chr of textAreaOne) {
    let code = chr.codePointAt(0);

    if (code >= asciiA && code <= asciiZ) {
      code -= asciiA;

      code = mod(code + count, 26);
      code += asciiA;
    }
    encMessage += String.fromCodePoint(code);
  }
  document.getElementById("two").value = encMessage;
}

function encryptDecryptTextTwo() {
  const asciiA = "a".codePointAt(0);
  const asciiZ = "z".codePointAt(0);
  textAreaTwo = document.getElementById("two").value;
  textAreaTwo.toLowerCase();
  let encMessage = "";

  for (let chr of textAreaTwo) {
    let code = chr.codePointAt(0);

    if (code >= asciiA && code <= asciiZ) {
      code -= asciiA;

      code = mod(code + count * -1, 26);
      code += asciiA;
    }
    encMessage += String.fromCodePoint(code);
  }
  document.getElementById("one").value = encMessage;
}

function mod(n, p) {
  let r = n % p;
  if (r < 0) {
    r += p;
  }
  return r;
}

/*==================================================================================================== */
function toShiftAlpha() {
  const asciiA = "a".codePointAt(0);
  let toShift = asciiA;
  toShift -= asciiA;
  console.log(asciiA);
  toShift = mod(toShift + count, 26);
  toShift += asciiA;
  console.log(toShift);
  document.getElementById("to-shift-alpha").textContent =
    String.fromCodePoint(toShift);
}

function shiftNumberPlus() {
  count++;
  toShiftAlpha();
  document.getElementById("shift-input").value = count;
  encryptDecryptTextOne();
}

function shiftNumberMinus() {
  count--;
  toShiftAlpha();
  document.getElementById("shift-input").value = count;
  encryptDecryptTextOne();
}

function shiftNumberDirect() {
  let inputValue = document.getElementById("shift-input").value;
  count = inputValue;
  toShiftAlpha();
  encryptDecryptTextOne();
}

function choiceChange() {
  if (choice == 0) {
    let message1 = "";
    let message2 = "";
    document.getElementById("choice").innerHTML = "Decode";
    document.getElementById("first-text").innerHTML = "Cipher Text";
    document.getElementById("second-text").innerHTML = "Plain Text";
    document.getElementById("choice").classList.remove("blue-color");
    document.getElementById("choice").classList.add("red-color");
    choice = 1;
    message1 = document.getElementById("one").value;
    message2 = document.getElementById("two").value;
    console.log(message1, " ", message2);
    document.getElementById("one").value = message2;
    document.getElementById("two").value = message1;
  } else {
    let message1 = "";
    let message2 = "";
    document.getElementById("choice").innerHTML = "Encode";
    document.getElementById("first-text").innerHTML = "Plain Text";
    document.getElementById("second-text").innerHTML = "Cipher Text";
    document.getElementById("choice").classList.remove("red-color");
    document.getElementById("choice").classList.add("blue-color");
    choice = 0;
    message1 = document.getElementById("one").value;
    message2 = document.getElementById("two").value;
    document.getElementById("one").value = message2;
    document.getElementById("two").value = message1;
  }
}
