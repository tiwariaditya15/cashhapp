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
    2000: 0
  };
  const arr = [1, 2, 5, 10, 20, 50, 100, 200, 500, 2000];
  
  let cash = 34;
  let bill = 100;
  let ret = bill - cash;
  
  function getNoteFromArray(value) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === value) {
        return value;
      }
    }
  }
  
  for (let i = arr.length - 1; i >= 0; i--) {
    while (arr[i] <= ret) {
      retCash[getNoteFromArray(arr[i])]++;
      ret = ret - arr[i];
    }
  }
  
  console.log(retCash);
  