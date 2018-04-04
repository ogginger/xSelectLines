//test_validateSelectLinesInput.js: Testing Logic.

define([
  "TestSuite",
  "Functions/log",
  "Functions/validateSelectLinesInput",
  "Functions/bIsObjectEqual"
], function(
  TestSuite,
  log,
  validateSelectLinesInput,
  bIsObjectEqual
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_validateSelectLinesInput initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "validateSelectLinesInput" );

      xTestSuite.add({
        "Name": "validateSelectLinesInput_HasNoString_ThrowsErrorInputContainsNoString",
        "Input": {
                "StartingLine": 1,
                "EndingLine": 2
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {
                        validateSelectLinesInput( Input );
                } catch( Error ) {
                        xResult = Error;
                } finally {
                        return xResult;
                }
        },
        "ExpectedOutput": { "message": "Error: Input contains no string!" },
        "Comparator": {
                "Object": true
        }
      });


      xTestSuite.add({
        "Name": "validateSelectLinesInput_HasNoStartingLine_ThrowsErrorInputContainsNoStartingLine",
        "Input": {
                "String": "a\nb",
                "EndingLine": 2
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {
                        validateSelectLinesInput( Input );
                } catch( Error ) {
                        xResult = Error;
                } finally {
                        return xResult;
                } 
        },
        "ExpectedOutput": { "message": "Error: Input contains no starting line!" },
        "Comparator": {
                "Object": true
        }
      });


      xTestSuite.add({
        "Name": "validateSelectLinesInput_HasNoEndingLine_ThrowsErrorInputContainsNoStartingLine",
        "Input": {
                "String": "a\nb",
                "StartingLine": 1
	},
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {
                        validateSelectLinesInput( Input );
                } catch( Error ) {
                        xResult = Error;
                } finally {
                        return xResult;
                }
        },
        "ExpectedOutput": { "message": "Error: Input contains no ending line!" },
        "Comparator": {
                "Object": true
        }
      });

      xTestSuite.add({
        "Name": "validateSelectLinesInput_StartingLineTypeNotInt_ThrowsErrorStartingLineTypeNotInt",
        "Input": {
                "String": "a\nb",
                "StartingLine": null,
                "EndingLine": 2
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {
                        validateSelectLinesInput( Input );
                } catch( Error ) {
                        xResult = Error;
                } finally {
                        return xResult;
                } 
        },
        "ExpectedOutput": { "message": "Error: Starting line type was not integer!" },
        "Comparator": {
                "Object": true,
                "Debug": false
        }
      });

      xTestSuite.add({
        "Name": "validateSelectLinesInput_EndingLineTypeNotInt_ThrowsErrorEndingLineTypeNotInt",
        "Input": {
                "String": "a\nb",
                "StartingLine": 1,
                "EndingLine": null
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {
                        validateSelectLinesInput( Input );
                } catch( Error ) {
                        xResult = Error;
                } finally {
                        return xResult;
                } 
        },
        "ExpectedOutput": { "message": "Error: Ending line type was not integer!" },
        "Comparator": {
                "Object": true,
		"Debug": false
        }
      });


      xTestSuite.add({
        "Name": "validateSelectLinesInput_EndingLineGreaterThanTotalNumberOfLines_ThrowsErrorEndingLineGreaterThanTotalNumberOfLines",
        "Input": {
                "String": "a\nb",
                "StartingLine": 1,
                "EndingLine": 3
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {   
                        validateSelectLinesInput( Input );
                } catch( Error ) {
                        xResult = Error;
                } finally {
                        return xResult;
                }
        },
        "ExpectedOutput": { "message": "Error: Ending line was greater than the total number of lines!" },
        "Comparator": {
                "Object": true,
		"Debug": false
        }
      });

      xTestSuite.add({
        "Name": "validateSelectLinesInput_StartingLineGreaterThanEndingLine_ThrowsErrorStartingLineGreaterThanEndingLine",
        "Input": {
                "String": "a\nb\nc",
                "StartingLine": 3,
                "EndingLine": 2
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {   
                        validateSelectLinesInput( Input );
                } catch( Error ) {
                        xResult = Error;
                } finally {
                        return xResult;
                }
        },
        "ExpectedOutput": { "message": "Error: Starting line was greater than the ending line!" },
        "Comparator": {
                "Object": true,
		"Debug": false
        }
      });

      xTestSuite.add({
        "Name": "validateSelectLinesInput_StartingLineGreaterThanTotalNumberOfLines_ThrowsErrorStartingLineGreaterThanTotalNumberOfLines",
        "Input": {
                "String": "a\nb",
                "StartingLine": 3,
                "EndingLine": 2
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {   
                        validateSelectLinesInput( Input );
                } catch( Error ) {
                        xResult = Error;
                } finally {
                        return xResult;
                }
        },
        "ExpectedOutput": { "message": "Error: Starting line was greater than the total number of lines!" },
        "Comparator": {
                "Object": true
        }
      });     

      xTestSuite.add({
        "Name": "validateSelectLinesInput_StartingLineLessThanOne_ThrowsErrorStartingLineLessThanOne",
        "Input": {
                "String": "a\nb",
                "StartingLine": 0,
                "EndingLine": 2
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {
                        validateSelectLinesInput( Input );
                } catch( Error ) {
                        xResult = Error;
                } finally {
                        return xResult;
                }
        },
        "ExpectedOutput": { "message": "Error: Starting line was less than one!" },
        "Comparator": {
                "Object": true,
		"Debug": false
        }
      });

      xTestSuite.add({
        "Name": "validateSelectLinesInput_StringContainsOnlyOneLine_ThrowsErrorStringHasOneLine",
        "Input": {
                "String": "OneLine",
                "StartingLine": 1,
                "EndingLine": 2,
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {   
                        validateSelectLinesInput( Input );
                } catch( Error ) {
                        xResult = Error;
                } finally {
                        return xResult;
                }
        },
        "ExpectedOutput": { "message": "Error: String contains only one line!" },
        "Comparator": {
                "Object": true,
		"Debug": false
        }
      });


      xTestSuite.add({
        "Name": "validateSelectStringInput_StringNotString_ThrowsErrorStringNotString",
        "Input": {
                "String": null,
                "StartingLine": 1,
                "EndingLine": 2
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {
                        validateSelectLinesInput( Input );
                } catch( Error ) {
                        xResult = Error;
                } finally {
                        return xResult;
                }
        },
        "ExpectedOutput": { "message": "Error: String type was not string!" },
        "Comparator": {
                "Object": true,
		"Debug": false
        }
      });

      xTestSuite.test();
    }
  })
});
