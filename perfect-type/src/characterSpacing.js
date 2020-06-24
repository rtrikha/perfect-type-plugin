import sketch from 'sketch'
const  characterSpacingRoot  = require('./constants');

export default function() {
    var layersArray = [];

	if (context.selection.count() > 0) {
		for (var i = 0; i < context.selection.count(); i++) {
			var multipleSelect = context.selection[i];

			if (multipleSelect.className() == 'MSTextLayer') {
				layersArray.push(multipleSelect);
			}
		}

		if (layersArray.length > 0) {
			for (var j = 0; j < layersArray.length; j++) {
                var typeArray = layersArray[j];
                
				var fontSize = typeArray.fontSize();
				var characterSpacing = -(fontSize / characterSpacingRoot.characterSpacing());

				typeArray.setCharacterSpacing(characterSpacing);
			}
		} else {
			context.document.showMessage('Action can only be performed on a layer');
		}
	} else {
		context.document.showMessage('Action can only be performed on a layer');
	}
}
