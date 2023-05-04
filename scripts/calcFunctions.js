// Decimal para Binário
function decimalToBinary(decimal) {
  let binary = "";
  while (decimal > 0) {
    if (decimal % 2 == 1) {
      binary = "1" + binary;
    } else {
      binary = "0" + binary;
    }
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}

// Binário para Decimal
function binaryToDecimal(binary) {
  let decimal = 0;
  let binaryStr = String(binary);
  for (let i = binaryStr.length - 1; i >= 0; i--) {
    if (binaryStr[i] == "1") {
      decimal += Math.pow(2, binaryStr.length - 1 - i);
    }
  }
  return decimal;
}

// Decimal para Hexadecimal
function decimalToHex(decimal) {
  let hex = "";
  let remainder;
  while (decimal > 0) {
    remainder = decimal % 16;
    hex = getHexDigit(remainder) + hex;
    decimal = Math.floor(decimal / 16);
  }
  return hex;
}

// Decimal para Octal
function decimalToOctal(decimal) {
  let octal = "";
  let remainder;
  while (decimal > 0) {
    remainder = decimal % 8;
    octal = getOctalDigit(remainder) + octal;
    decimal = Math.floor(decimal / 8);
  }
  return octal;
}

// Binário para Hexadecimal
function binaryToHex(binary) {
  let hex = "";
  let binaryStr = String(binary);
  let decimal;
  let i;
  for (i = binaryStr.length - 1; i >= 0; i--) {
    if (binaryStr.charAt(i) === "1") {
      decimal += Math.pow(2, binaryStr.length - i - 1);
    }
  }
  while (decimal > 0) {
    let remainder = decimal % 16;
    if (remainder < 10) {
      hex = remainder + hex;
    } else {
      hex = String.fromCharCode(remainder + 55) + hex;
    }
    decimal = Math.floor(decimal / 16);
  }
  return hex;
}

// Binário para Octal
function binaryToOctal(binary) {
  const octalDigits = [];
  const binaryStr = String(binary);
  let decimal = 0;
  let digitCount = 0;

  for (let i = binaryStr.length - 1; i >= 0; i--) {
    decimal += Number(binaryStr[i]) * Math.pow(2, digitCount);
    digitCount++;
    if (digitCount === 3 || i === 0) {
      octalDigits.unshift(decimal);
      decimal = 0;
      digitCount = 0;
    }
  }

  return octalDigits.join("");
}

// Hexadecimal para Binário
function hexToBinary(hex) {
  let binary = "";
  for (let i = 0; i < hex.length; i++) {
    binary += getBinaryDigit(hex.charAt(i));
  }
  return binary;
}

// Hexadecimal para Decimal
function hexToDecimal(hex) {
  let decimal = 0;
  for (let i = 0; i < hex.length; i++) {
    decimal = decimal * 16 + getHexDigitValue(hex.charAt(i));
  }
  return decimal;
}

// Hexadecimal para Octal
function hexToOctal(hex) {
  let decimal = hexToDecimal(hex);
  let octal = decimalToOctal(decimal);
  return octal;
}

function getHexDigit(decimal) {
  const digits = "0123456789ABCDEF";
  return digits[decimal];
}

function decimalToOctal(decimal) {
  let octal = "";
  let digit;
  while (decimal > 0) {
    digit = decimal % 8;
    octal = digit + octal;
    decimal = Math.floor(decimal / 8);
  }
  return octal;
}

function getBinaryDigit(hex) {
  let digits = "0123456789ABCDEF";
  let decimal = digits.indexOf(hex);
  let binary = "";
  for (let i = 0; i < 4; i++) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}

function getHexDigitValue(hex) {
  const digits = "0123456789ABCDEF";
  return digits.indexOf(hex);
}
