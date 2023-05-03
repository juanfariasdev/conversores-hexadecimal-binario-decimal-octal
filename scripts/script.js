const body = document.getElementById("body");
async function openModal() {
  const url = "components/modal.html";

  await fetch(url)
    .then((value) => value.text())
    .then((value) => (body.innerHTML += value));
}
openModal();

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
      value: (this.value >>> 0).toString(2),
    };
  }
  get Hexadecimal() {
    return { message: "Hexadecimal", value: this.value.toString(16) };
  }
  get Octal() {
    return { message: "Octal", value: this.value.toString(8) };
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
      value: parseInt(this.value, 2).toString(10),
    };
  }
  get Hexadecimal() {
    return {
      message: "Hexadecimal",
      value: parseInt(this.value, 2).toString(16).toUpperCase(),
    };
  }
  get Octal() {
    return {
      message: "Octal",
      value: parseInt(this.value, 2).toString(8).toUpperCase(),
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
      value: parseInt(this.value, 16).toString(2),
    };
  }
  get Decimal() {
    return {
      message: "Decimal",
      value: parseInt(this.value, 16).toString(10),
    };
  }
  get Octal() {
    return { message: "Octal", value: parseInt(this.value, 16).toString(8) };
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
      value: parseInt(this.value, 8).toString(2),
    };
  }
  get Decimal() {
    return {
      message: "Decimal",
      value: parseInt(this.value, 8),
    };
  }
  get Hexadecimal() {
    return {
      message: "Hexadecimal",
      value: parseInt(this.value, 8).toString(16).toUpperCase(),
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

document.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event);
  const input = event.target.querySelector("input");
  const type = event.target.id;

  const calc = calcValue(type, input.value);
  console.log(calc);
  input.value = "";
});
