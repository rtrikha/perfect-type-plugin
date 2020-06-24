![enter image description here](https://perfect-type.s3-ap-southeast-1.amazonaws.com/perfecttype.svg)


### Installation?
 - [Download](../../releases/latest/download/perfect-type.sketchplugin.zip) the latest release of the plugin
- Un-zip
- Double-click on perfect-type.sketchplugin


### Usage?

 - Smart Type 
 Automatically calibrates line height and character spacing **control + shift + T**
  - Line Height
Add smart line height for better legibility of font **control + shift + L**
  - Character Spacing
Perfectly spaced letter for better tracking **control + shift + C**

### Using custom variables?
**There are three set attributes(default, relaxed, compact) already defined.** You can easily customise the set values for line height and letter spacing. Just navigate to ```constant.js``` and update the variable ```usingAttributes``` to your needs. 

```js
var usingAttribute =  "stock"

const fontAttributes = {
stock: [(selectedLineHeight =  1.61), (selectedCharacterSpacing =  30)],
compact: [(selectedLineHeight =  1.32), (selectedCharacterSpacin =  60)],
relaxed: [(selectedLineHeight =  1.84), (selectedCharacterSpacing =  90 )],};
```
