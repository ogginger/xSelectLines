//xSelectLines.js: Functional Logic.

define([
	"Functions/log",
	"validate"
], function(
	log,
	validate
) {
  return function( Input ) {
	//Validate the input.
	validate( Input );

	//break the lines up into an array.
	var xLineArray = Input.String.split(/\n/g);
	log("LineArray: " + JSON.stringify( xLineArray ), !!Input.Debug );

	//Return the subset of the array from the desired beginning to the desired end.
	var StartAt = Input.StartingLine - 1;
	return xLineArray.slice( StartAt, Input.EndingLine );  
  };
});
