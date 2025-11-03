function toCase(text) {
  // write your code here
	let lower = text.lowerCase();
	let upper = text.upperCase();
	let arr = [lower, upper];
	return arr.join("-");
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));

