let API = "https://v6.exchangerate-api.com/v6/ad76a72c7a9dbea2bb5175dc/latest/";

let select = document.getElementById("currency");
let button = document.getElementById("get");
button.addEventListener("click", getRate);
let info = document.getElementById("info");

async function getRate() {
  let response = await fetch(API + select.value);
  let rate = await response.json();
  console.log(rate);

  let h3 = info.querySelector("h3");
  if (h3) {
    h3.innerHTML = `USD: ${rate.conversion_rates.USD}`;
  } else {
    h3 = document.createElement("h3");
    h3.innerHTML = `USD: ${rate.conversion_rates.USD}`;
    info.appendChild(h3);
    h3.style.marginTop = "80px";
  }

  let h31 = info.querySelector("h3:nth-child(2)");
  if (h31) {
    h31.innerHTML = `RUB: ${rate.conversion_rates.RUB}`;
  } else {
    h31 = document.createElement("h3");
    h31.innerHTML = `RUB: ${rate.conversion_rates.RUB}`;
    info.appendChild(h31);
  }

  let h32 = info.querySelector("h3:nth-child(3)");
  if (h32) {
    h32.innerHTML = `EUR: ${rate.conversion_rates.EUR}`;
  } else {
    h32 = document.createElement("h3");
    h32.innerHTML = `EUR: ${rate.conversion_rates.EUR}`;
    info.appendChild(h32);
  }

  let h33 = info.querySelector("h3:nth-child(4)");
  if (h33) {
    h33.innerHTML = `KGZ: ${rate.conversion_rates.KGS}`;
  } else {
    h33 = document.createElement("h3");
    h33.innerHTML = `KGZ: ${rate.conversion_rates.KGS}`;
    info.appendChild(h33);
  }

  let h34 = info.querySelector("h3:nth-child(5)");
  if (h34) {
    h34.innerHTML = `KZT: ${rate.conversion_rates.KZT}`;
  } else {
    h34 = document.createElement("h3");
    h34.innerHTML = `KZT: ${rate.conversion_rates.KZT}`;
    info.appendChild(h34);
  }

  let h35 = info.querySelector("h3:nth-child(6)");
  if (h35) {
    h35.innerHTML = `CNY: ${rate.conversion_rates.CNY}`;
  } else {
    h35 = document.createElement("h3");
    h35.innerHTML = `CNY: ${rate.conversion_rates.CNY}`;
    info.appendChild(h35);
  }
}

let select1 = document.getElementById("currency1");
let select2 = document.getElementById("currency2");
let convertButton = document.getElementById("counted");
convertButton.addEventListener("click", countRate);
let infik = document.getElementById("infik");

async function countRate() {
  let response = await fetch(API + select1.value);
  let rate = await response.json();

  let rate2 = rate.conversion_rates[select2.value];
  let input = document.getElementById("inp");
  let rate1 = rate.conversion_rates[select1.value];
  let input1 = input.value;
  let convertedAmount = input1 * rate1 * rate2;

  let h2 = infik.querySelector("h2");
  if (h2) {
    h2.textContent = convertedAmount;
  } else {
    h2 = document.createElement("h2");
    h2.textContent = convertedAmount;
    infik.appendChild(h2);
  }

  input.value = "";
}
