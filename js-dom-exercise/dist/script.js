function countDiv1 () {
  let count = document.getElementById("topSection").childElementCount;
  let element=document.getElementById('div2');
  element+=(`TopSection has ` + count + ` p elements`);
  console.log(`TopSection has ` + count + ` p elements`);
};

myButton1.addEventListener("click", countDiv1);
///////////////////////

function countDiv2 () {
  let count = document.getElementById("bottomSection").childElementCount;
  let element=document.getElementById('div3');
  element+=(`bottomSection has ` + count + ` p elements`);
  console.log(`bottomSection has ` + count + ` p elements`);
};

myButton2.addEventListener("click", countDiv2);
/////////////////////////

function countElements() {
  let count =element.getElementByTagName('p');
  let element=document.getElementById('div1');
  element+=(`There are ` + count + ` p elements`);
  console.log(`There are ` + count + ` p elements`);
};

myButton3.addEventListener("click", countElements);