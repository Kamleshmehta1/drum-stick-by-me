const key = Array.from(document.querySelectorAll(".key"));
const sound = document.querySelectorAll("audio");

let datasoundArray = key.map((value, idx) => {
  return value.getAttribute("data-key");
});

console.log(datasoundArray);
console.log(sound);
console.log(key);

let datavalueArray = key.map((value, idx) => {
  return value.getElementsByTagName("kbd")[0].innerHTML;
});

console.log("datavalueArray", datavalueArray);

let datakeyArray = key.map((value, idx) => {
  return value.getAttribute("data-key");
});

console.log("datakeyArray", datakeyArray);

var obj = {};

datavalueArray.forEach((key, i) => (obj[key] = datakeyArray[i]));
console.log(obj);
addEventListener("keydown", (e) => {
  let pressedKey = obj[e.key.toLocaleUpperCase()];
  console.log(pressedKey);
  sound.forEach((x, index) => {
    if (x.getAttribute("data-key") === pressedKey) {
      console.log(true);
      console.log(x);
      key[index].classList.add("playing");
      setTimeout(()=>{
        key[index].classList.remove("playing");
      },100)
      x.play();
    }
  });
});
