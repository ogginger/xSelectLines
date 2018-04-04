//validateSelectLinesInput.js: Functional Logic.

define([ 
	"jquery",
	"underscore"
], function(
	$,
	_
) {
  return function( Input ) {
	if (_.has( Input, "String" ) === false) {
		throw { "message": "Error: Input contains no string!" };
	} else if (_.has( Input, "StartingLine" ) === false) {
		throw { "message": "Error: Input contains no starting line!" };
	} else if (_.has( Input, "EndingLine" ) === false) {
		throw { "message": "Error: Input contains no ending line!" };
	} else if (Number.isInteger( Input.StartingLine ) === false) {
		throw { "message": "Error: Starting line type was not integer!" };
	} else if (Number.isInteger( Input.EndingLine ) === false) {
		throw { "message": "Error: Ending line type was not integer!" };
	} else if ( typeof Input.String !== "string" ) {
		throw { "message": "Error: String type was not string!" };
	} else if ( Input.String.includes("\n") === false ) {
		throw { "message": "Error: String contains only one line!" };
	} else if ( Input.StartingLine < 1 ) {
		throw { "message": "Error: Starting line was less than one!" };
	} else if ( Input.StartingLine > Input.String.split(/\n/g).length ) {
		throw { "message": "Error: Starting line was greater than the total number of lines!" };
	} else if ( Input.StartingLine > Input.EndingLine ) {
		throw { "message": "Error: Starting line was greater than the ending line!" };
	} else if ( Input.EndingLine > Input.String.split(/\n/g).length ) {
		throw { "message": "Error: Ending line was greater than the total number of lines!" };
	} 
  };
});
