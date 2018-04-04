//test_xSelectLines.js: Testing Logic.

define([
  "TestSuite",
  "Functions/log",
  "xSelectLines",
  "Functions/bIsObjectEqual",
  "Functions/validateSelectLinesInput"
], function(
  TestSuite,
  log,
  xSelectLines,
  bIsObjectEqual,
  validateSelectLinesInput
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_xSelectLines initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "xSelectLines" );

      xTestSuite.add({
        "Name": "xSelectLines_EndingLineTypeNotInt_ThrowsErrorEndingLineTypeNotInt",
        "Input": {
                "String": "a\nb",
                "StartingLine": 1,
                "EndingLine": null,
                "Validate": validateSelectLinesInput
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {
                        xSelectLines( Input );
                } catch( Error ) {
                        xResult = Error;
                } finally {
                        return xResult;
                } 
        },
        "ExpectedOutput": { "message": "Error: Ending line type was not integer!" },
        "Comparator": {
                "Object": true
        }
      });

      xTestSuite.add({
        "Name": "xSelectLines_StartingLineTypeNotInt_ThrowsErrorStartingLineTypeNotInt",
        "Input": {
                "String": "a\nb",
		"StartingLine": null,
                "EndingLine": 2,
                "Validate": validateSelectLinesInput
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {
                        xSelectLines( Input );
                } catch( Error ) {
                        xResult = Error;
                } finally {
                        return xResult;
                } 
        },
        "ExpectedOutput": { "message": "Error: Starting line type was not integer!" },
        "Comparator": {
                "Object": true
        }
      });


      xTestSuite.add({
        "Name": "xSelectLines_HasNoEndingLine_ThrowsErrorInputContainsNoStartingLine",
        "Input": {
                "String": "a\nb",
                "StartingLine": 1,
                "Validate": validateSelectLinesInput
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {
                        xSelectLines( Input );
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
        "Name": "xSelectLines_HasNoStartingLine_ThrowsErrorInputContainsNoStartingLine",
        "Input": {
                "String": "a\nb",
                "EndingLine": 2,
                "Validate": validateSelectLinesInput
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {
                        xSelectLines( Input );
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
        "Name": "xSelectLines_HasNoString_ThrowsErrorInputContainsNoString",
        "Input": {
                "StartingLine": 1,
                "EndingLine": 2,
                "Validate": validateSelectLinesInput
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {
                        xSelectLines( Input );
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
        "Name": "xSelectLines_EndingLineGreaterThanTotalNumberOfLines_ThrowsErrorEndingLineGreaterThanTotalNumberOfLines",
        "Input": {
                "String": "a\nb",
                "StartingLine": 1,
                "EndingLine": 3,
                "Validate": validateSelectLinesInput
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {
                        xSelectLines( Input );
                } catch( Error ) {
                        xResult = Error;
                } finally {
                        return xResult;
                }
        },
        "ExpectedOutput": { "message": "Error: Ending line was greater than the total number of lines!" },
        "Comparator": {
                "Object": true
        }
      });

      xTestSuite.add({
        "Name": "xSelectLines_StartingLineGreaterThanEndingLine_ThrowsErrorStartingLineGreaterThanEndingLine",
        "Input": {
                "String": "a\nb\nc",
                "StartingLine": 3,
                "EndingLine": 2,
                "Validate": validateSelectLinesInput
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {
                        xSelectLines( Input );
                } catch( Error ) {
                        xResult = Error;
                } finally {
                        return xResult;
                }
        },
        "ExpectedOutput": { "message": "Error: Starting line was greater than the ending line!" },
        "Comparator": {
                "Object": true
        }
      });

      xTestSuite.add({
        "Name": "xSelectLines_StartingLineGreaterThanTotalNumberOfLines_ThrowsErrorStartingLineGreaterThanTotalNumberOfLines",
        "Input": {
                "String": "a\nb",
                "StartingLine": 3,
                "EndingLine": 2,
                "Validate": validateSelectLinesInput
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {
                        xSelectLines( Input );
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
        "Name": "xSelectLines_StartingLineLessThanOne_ThrowsErrorStartingLineLessThanOne",
        "Input": {
                "String": "a\nb",
                "StartingLine": -1,
                "EndingLine": 2,
                "Validate": validateSelectLinesInput
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {
                        xSelectLines( Input );
                } catch( Error ) {
                        xResult = Error;
                } finally {
                        return xResult;
                }
        },
        "ExpectedOutput": { "message": "Error: Starting line was less than one!" },
        "Comparator": {
                "Object": true
        }
      });

      xTestSuite.add({
        "Name": "xSelectLines_StringContainsOnlyOneLine_ThrowsErrorStringHasOneLine",
        "Input": {
                "String": "OneLine",
                "StartingLine": 1,
                "EndingLine": 2,
                "Validate": validateSelectLinesInput
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

                try {
                        xSelectLines( Input );
                } catch( Error ) {
                        xResult = Error;
                } finally {
                        return xResult;
                }
        },
        "ExpectedOutput": { "message": "Error: String contains only one line!" },
        "Comparator": {
                "Object": true
        }
      });

      xTestSuite.add({
	"Name": "xSelectLines_StringNotString_ThrowsErrorStringNotString",
	"Input": {
		"String": null,
		"StartingLine": 1,
		"EndingLine": 2,
		"Validate": validateSelectLinesInput
	},
	"Function": function( Input ) {
		var xResult = { "message": "No Error Thrown." };

		try {
			xSelectLines( Input );
		} catch( Error ) {
			xResult = Error;
		} finally {
			return xResult;
		}
	},
	"ExpectedOutput": { "message": "Error: String type was not string!" },
	"Comparator": {
		"Object": true
	}
      });

      xTestSuite.add({
        "Name": "xSelectLines_a/nb/n/c_2_3_Returns[ 'b', 'c' ]",
        "Input": {
                "String": "a\nb\nc",
                "StartingLine": 2,
                "EndingLine": 3,
                "Validate": function() {}
        },
        "Function": xSelectLines,
        "ExpectedOutput": [ "b", "c" ],
        "Comparator": {
                "Object": true
        }
      });

      xTestSuite.add({
        "Name": "xSelectLines_a/nb/n/c_1_2_Returns[ 'a', 'b' ]",
        "Input": {
                "String": "a\nb\nc",
                "StartingLine": 1,
                "EndingLine": 2,
                "Validate": function() {}
        },
        "Function": xSelectLines,
        "ExpectedOutput": [ "a", "b" ],
        "Comparator": {
                "Object": true
        }
      });

      xTestSuite.add({
        "Name": "xSelectLines_String_StartingLine_EndingLine_Returns[ 'a','b','c' ]",
        "Input": {
                "String": "a\nb\nc",
                "StartingLine": 1,
                "EndingLine": 3,
                "Validate": function() {}
        },
        "Function": xSelectLines,
        "ExpectedOutput": [ "a", "b", "c" ],
        "Comparator": {
                "Object": true
        }
      });


      xTestSuite.add({
        "Name": "xSelectLines_NoValidation_throwsErrorNoValidation",
        "Input": {
                "String": undefined,
		"StartingLine": undefined,
		"EndingLine": undefined
        },
        "Function": function( Input ) {
                var xResult = { "message": "No Error Thrown." };

		try {
			xSelectLines( Input );
		} catch ( Error ) {
			xResult = Error;
		} finally {
			return xResult;
		}	
        },
        "ExpectedOutput": { "message": "Error: No input validation was given!" },
	"Comparator": {
		"Object": true
	}
      });

 
      xTestSuite.add({
	"Name": "xSelectLines_ValidationIsNotFunction_throwsErrorValidationNotFunction",
	"Input": {
		"String": null,
		"StartingLine": 1,
		"EndingLine": 2,
		"Validate": true
	},
	"Function": function( Input ) {
		var xResult = { "message": "No Error Thrown." };

		try {
			xSelectLines( Input );
		} catch ( Error ) {
			xResult = Error;
		} finally {
			return xResult;
		}
	},
	"ExpectedOutput": { "message": "Error: Input validation type was not function!" },
	"Comparator": {
		"Object": true
	}
      });

      xTestSuite.test();
    }
  });
});
