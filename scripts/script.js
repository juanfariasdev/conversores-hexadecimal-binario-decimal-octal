async function createModal() {
  const url = "components/modal.html";

  return await fetch(url).then((value) => value.text());
}

async function openModal(results) {
  const modalHtml = await createModal();
  var parser = new DOMParser();
  var doc = parser.parseFromString(modalHtml, "text/html");

  const resultsModal = doc.getElementById("results");

  resultsModal.innerHTML = results;

  body.innerHTML += doc.body.innerHTML;
}

function removeModal() {
  const modalResult = document.getElementById("modalResult");

  modalResult.remove();
}

class Decimal {
  constructor(value) {
    this.value = value;
  }
  get Binario() {
    return {
      message: "Binário",
      value: decimalToBinary(this.value),
    };
  }
  get Hexadecimal() {
    return {
      message: "Hexadecimal",
      value: decimalToHex(this.value).toUpperCase(),
    };
  }
  get Octal() {
    return { message: "Octal", value: decimalToOctal(this.value, 10) };
  }
  get Result() {
    const result = [this.Binario, this.Hexadecimal, this.Octal];
    return result;
  }
}

class Binario {
  constructor(value) {
    this.value = Number(value);

    console.log(value);
  }
  get Decimal() {
    return {
      message: "Decimal",
      value: binaryToDecimal(this.value),
    };
  }
  get Hexadecimal() {
    return {
      message: "Hexadecimal",
      value: binaryToHex(this.value).toUpperCase(),
    };
  }
  get Octal() {
    return {
      message: "Octal",
      value: binaryToOctal(this.value),
    };
  }
  get Result() {
    const result = [this.Decimal, this.Hexadecimal, this.Octal];
    return result;
  }
}
class Hexadecimal {
  constructor(value) {
    this.value = value;
  }
  get Binario() {
    return {
      message: "Binário",
      value: hexToBinary(this.value),
    };
  }
  get Decimal() {
    return {
      message: "Decimal",
      value: hexToDecimal(this.value),
    };
  }
  get Octal() {
    return { message: "Octal", value: hexToOctal(this.value) };
  }
  get Result() {
    const result = [this.Binario, this.Decimal, this.Octal];
    return result;
  }
}

class Octal {
  constructor(value) {
    this.value = Number(value);
  }
  get Binario() {
    return {
      message: "Binario",
      value: octalToBinary(this.value),
    };
  }
  get Decimal() {
    return {
      message: "Decimal",
      value: octalToDecimal(this.value),
    };
  }
  get Hexadecimal() {
    return {
      message: "Hexadecimal",
      value: octalToHex(this.value).toUpperCase(),
    };
  }
  get Result() {
    const result = [this.Binario, this.Decimal, this.Hexadecimal];
    return result;
  }
}

function calcValue(type, value) {
  let calc;
  switch (type) {
    case "Decimal":
      calc = new Decimal(value);
      break;
    case "Hexadecimal":
      calc = new Hexadecimal(value);
      break;
    case "Binario":
      calc = new Binario(value);
      break;
    case "Octal":
      calc = new Octal(value);
      break;
    default:
      return;
  }
  return calc.Result;
}

function resultsCalcModal(arr, type, input) {
  let texts = "";
  texts = `<p class="font-bold">O ${type}: <span class="font-medium">${input}</span></p>`;
  arr.map((item) => {
    texts += `<p class="font-bold">Em ${item.message}: <span class="font-medium">${item.value}</span></p>`;
  });
  return texts;
}

function isBinary(val) {
  return val.split("").filter((x) => x == "0" || x == "1").length == val.length;
}
function isHex(s) {
  let n = s.length;

  for (let i = 0; i < n; i++) {
    let ch = s[i];

    if ((ch < "0" || ch > "9") && (ch < "A" || ch > "F")) {
      return false;
    }
  }
  return true;
}

document.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = event.target.querySelector("input");
  const type = event.target.id;

  if (type === "Decimal" && isNaN(Number(input.value))) {
    alert("Digite apenas números decimais!");
    return;
  }
  if (type === "Binario" && !isBinary(input.value)) {
    alert("Digite apenas números Binário!");
    return;
  }
  if (type === "Hexadecimal" && !isHex(input.value)) {
    alert("Digite apenas Hexadecimal!");
    return;
  }
  if (type === "Octal" && isNaN(Number(input.value))) {
    alert("Digite apenas Números no Octal!");
    return;
  }
  const calc = calcValue(type, input.value);
  openModal(resultsCalcModal(calc, type, input.value));

  console.log(calc);
  input.value = "";
});
