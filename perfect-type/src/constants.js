var selectedLineHeight = 1.61; // golden ratio
var selectedCharacterSpacing = 30; // default

console.log(selectedLineHeight);

function lineHeight() {
	return selectedLineHeight;
}

function characterSpacing() {
	return selectedCharacterSpacing;
}

module.exports = {lineHeight, characterSpacing};
