function toCase(text) {

	let arr = [text.lowerCase(), text.upperCase()];
	return arr.join("-");
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));

