// utility function
const checkLog = (...args) => {
  console.log(args);
};

/*
    To maintain number of notes and notes 
*/
let retCash = {
    1: 0,
    2: 0,
    5: 0,
    10: 0,
    20: 0,
    50: 0,
    100: 0,
    200: 0,
    500: 0,
    2000: 0,
  };

  const arr = [1, 2, 5, 10, 20, 50, 100, 200, 500, 2000];

  // DOM references
  const retText = document.querySelector(".ret-text");
  const output = document.querySelector(".output"); 
  const billDOM = document.querySelector("#bill");
  const cashDOM = document.querySelector("#cash");
  const check = document.querySelector(".check");
  const reset = document.querySelector(".reset");
  let cash, bill, ret;
  
  // this function caused issue cause 2000 was at end and control didnt reach there because of wrong logic
  function getNoteFromArray(value) {
    for (let i = 0; i <= arr.length - 1; i++) {
      // console.log(arr[i]);
      if (arr[i] === value) {
        return value;
      }
    }
  }
  

  const calculteReturn = () => {
    for (let i = arr.length - 1; i >= 0; i--) {
      // untill return amount isn't smaller than notes
      while (arr[i] <= ret) {
        retCash[arr[i]]++;
        ret = ret - arr[i];
      }
    }
    // console.log(retCash);
    manipulateDOM();
  };


const manipulateDOM = () => {
  let construct = `<div>Note/Coin</div><div class="arrow">&rightleftarrows;</div><div>Units</div>`;
  for(let note in retCash){
    if(retCash[note] !== 0){
      construct += `<div>${note}₹</div><div class="arrow">&rightleftarrows;</div><div>${retCash[note]}</div>`;
    }
  }
  // console.log(construct);
  output.insertAdjacentHTML("beforeend", construct);
  output.style.display = "";
  for(const note in retCash){
    if(retCash[note] !== 0) retCash[note] = 0;
  }
}

const resetFields = (e) => {
  cashDOM.value = "";
  billDOM.value = ""
  output.style.display = "none";
  retText.innerText = "";
};

const startCalculate = () => {
      output.innerText = "";
      cash = parseInt(cashDOM.value);
      bill = parseInt(billDOM.value);
      // console.log(bill > cash);
      if( bill > cash){
        retText.innerText = `Received cash ${cash} isn't sufficient for to pay bill amount ${bill}.`;
        return;
      } 

      if(bill === cash){
        retText.innerText = `Received cash ${cash} and bill amount ${bill} are equal. So no need of returning change.`;
        return;
      }
        
        ret = cash - bill;
        retText.innerText = `You gotta return ${ret}₹.`;
        calculteReturn();
      
      
};

// display: none to hide elements
output.style.display = "none";

// adding event listners
reset.addEventListener("click", resetFields);
check.addEventListener("click", startCalculate);
