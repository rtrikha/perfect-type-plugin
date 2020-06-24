//set the active attribute
var usingAttribute = "stock"

// define your own attributes
const fontAttributes = {
	stock: [(selectedLineHeight = 1.61), (selectedCharacterSpacing = 30)],
	compact: [(selectedLineHeight = 1.32), (selectedCharacterSpacin = 60)],
	relaxed: [(selectedLineHeight = 1.84), (selectedCharacterSpacing = 90	)],
};

//do not change
function lineHeight() {
	return fontAttributes[usingAttribute][0];
}

function characterSpacing() {
	return fontAttributes[usingAttribute][1];
}

module.exports = {lineHeight, characterSpacing};
