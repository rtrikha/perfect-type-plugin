import sketch from 'sketch'
const  rootDirectory  = require('./constants');

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
				var lineHeight = Math.round(fontSize * rootDirectory.lineHeight());
				var textHeight = typeArray.frame().height();

				var characterSpacing = -(fontSize / rootDirectory.characterSpacing());
				typeArray.setCharacterSpacing(characterSpacing);
				
				if(textHeight>=lineHeight){
					typeArray.setLineHeight(lineHeight);
				}
				else{
					context.document.showMessage("Err! Not a good idea on single line text");
				}
			}
		} else {
			context.document.showMessage('Action can only be performed on a layer');
		}
	} else {
		context.document.showMessage('Action can only be performed on a layer');
	}
}
