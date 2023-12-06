//note: The code is really dirty, would refactor if I have the time. But if not, ¯\_(ツ)_/¯.
let choice = 0;
let count = 0;
let textAreaOne = "";
let textAreaTwo = "";

function encryptDecryptTextOne() {
  let shift = count;
  const asciiA = "a".codePointAt(0);
  const asciiZ = "z".codePointAt(0);
  textAreaOne = document.getElementById("one").value.toLowerCase();
  let encMessage = "";
  if (choice == 1) {
    shift = shift * -1;
  }
  for (let chr of textAreaOne) {
    let code = chr.codePointAt(0);

    if (code >= asciiA && code <= asciiZ) {
      code -= asciiA;

      code = mod(code + shift, 26);
      code += asciiA;
    }
    encMessage += String.fromCodePoint(code);
  }
  document.getElementById("two").value = encMessage;
}

function encryptDecryptTextTwo() {
  let shift = count;
  const asciiA = "a".codePointAt(0);
  const asciiZ = "z".codePointAt(0);
  textAreaTwo = document.getElementById("two").value.toLowerCase();
  textAreaTwo.toLowerCase();

  let encMessage = "";
  if (choice == 0) {
    shift = shift * -1;
  }
  for (let chr of textAreaTwo) {
    let code = chr.codePointAt(0);

    if (code >= asciiA && code <= asciiZ) {
      code -= asciiA;

      code = mod(code + shift, 26);
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
  if (choice == 0) {
    document.getElementById("to-shift-alpha-two").textContent =
      String.fromCodePoint(toShift);
    document.getElementById("to-shift-alpha-one").textContent = "a";
  } else {
    document.getElementById("to-shift-alpha-one").textContent =
      String.fromCodePoint(toShift);
    document.getElementById("to-shift-alpha-two").textContent = "a";
  }
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
  let currentShiftValue1 = "";
  let currentShiftValue2 = "";
  let message1 = "";
  let message2 = "";
  if (choice == 0) {
    document.getElementById("choice").innerHTML = "Decode";
    document.getElementById("first-text").innerHTML = "Cipher Text";
    document.getElementById("second-text").innerHTML = "Plain Text";
    document.getElementById("shift-text").textContent = "Unshift";
    document.getElementById("choice").classList.remove("blue-color");
    document.getElementById("choice").classList.add("red-color");
    choice = 1;
    message1 = document.getElementById("one").value;
    message2 = document.getElementById("two").value;
    console.log(message1, " ", message2);
    document.getElementById("one").value = message2;
    document.getElementById("two").value = message1;
    currentShiftValue1 =
      document.getElementById("to-shift-alpha-one").textContent;
    currentShiftValue2 =
      document.getElementById("to-shift-alpha-two").textContent;

    document.getElementById("to-shift-alpha-two").innerHTML =
      currentShiftValue1;
    document.getElementById("to-shift-alpha-one").innerHTML =
      currentShiftValue2;
  } else {
    let message1 = "";
    let message2 = "";
    document.getElementById("choice").innerHTML = "Encode";
    document.getElementById("first-text").innerHTML = "Plain Text";
    document.getElementById("second-text").innerHTML = "Cipher Text";
    document.getElementById("shift-text").textContent = "Shift";
    document.getElementById("choice").classList.remove("red-color");
    document.getElementById("choice").classList.add("blue-color");
    choice = 0;
    message1 = document.getElementById("one").value;
    message2 = document.getElementById("two").value;
    document.getElementById("one").value = message2;
    document.getElementById("two").value = message1;

    currentShiftValue1 =
      document.getElementById("to-shift-alpha-two").textContent;
    currentShiftValue2 =
      document.getElementById("to-shift-alpha-one").textContent;

    document.getElementById("to-shift-alpha-one").innerHTML =
      currentShiftValue1;
    document.getElementById("to-shift-alpha-two").innerHTML =
      currentShiftValue2;
  }
}
