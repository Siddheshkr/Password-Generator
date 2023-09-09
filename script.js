let slider = document.getElementById("slider");
let sliderval = document.getElementById("slidervalue");
let passbox = document.querySelector("#pasbox");
let upper = document.getElementById("Uppercase");
let lower = document.getElementById("Lowecase");
let num = document.getElementById("Numbers");
let symb = document.getElementById("Symbols");
let genbtn = document.getElementById("Generate");
let copyicon = document.querySelector("#copyicon");
let tickicon = document.querySelector("#tickicon");

sliderval.innerHTML = slider.value;
slider.addEventListener("input", () => {
  sliderval.innerHTML = slider.value;
});

genbtn.addEventListener("click", () => {
  passbox.value = genpswd();
  copyicon.style.display = "block";
  tickicon.style.display = "none";
  if (upper.checked && lower.checked && num.checked && symb.checked) {
    passbox.style.borderColor = "green";
  } else if (
    (upper.checked && lower.checked && num.checked) ||
    (upper.checked && lower.checked && symb.checked) ||
    (upper.checked && num.checked && symb.checked)
  ) {
    passbox.style.borderColor = "yellow";
  } else {
    passbox.style.borderColor = "red";
  }
});

let Upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Lowerchar = "abcdefghijklmnopqrstuvwxyz";
let Numbers = "0123456789";
let Symbols = "~!@#$%^&*";

function genpswd() {
  let gnrtpswd = "";
  let allchars = "";

  allchars += lower.checked ? Lowerchar : "";
  allchars += upper.checked ? Upperchar : "";
  allchars += num.checked ? Numbers : "";
  allchars += symb.checked ? Symbols : "";

  let i = 1;
  while (i <= slider.value) {
    gnrtpswd += allchars.charAt(Math.floor(Math.random() * allchars.length));
    i++;
  }

  return gnrtpswd;
}

copyicon.addEventListener("click", () => {
  navigator.clipboard.writeText(passbox.value);
  tickicon.style.display = "block";
  copyicon.style.display = "none";
});
