function calculateMinCost() {
  //your code here
  let input = document.getElementById('rope-lengths').value;

	let arr = input.split(",");

for (let i = 0; i < arr.length; i++) {
  arr[i] = parseInt(arr[i]);
}

// console.log(arr);

// find twos smallest and add them
let ans = 0;

while (arr.length != 1) {
  let minIndex = getMinIndex(arr);
  let min1 = arr[minIndex];
  arr.splice(minIndex, 1);
  let secondMinIndex = getMinIndex(arr);
  let min2 = arr[secondMinIndex];
  arr.splice(secondMinIndex, 1);
  ans += min1 + min2;
  arr.push(min1 + min2);
}



function getMinIndex(arr) {
  let min = arr[0];
  let minIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }

  return minIndex;
}







	

	document.getElementById('result').innerHTML = ans;
	
  
  
}  
