// Mixed content
var x = '<div>' + input + '</div>';
$node.html( '<div>' + input + '</div>' );

// Unsafe container names.
var html = input;
var text = htmlInput;
displayValue( htmlInput );

// Checking certain expression parameters that might end up in the variables.
var htmlItems = [ input1, input2 ].join();
var textItems = [ '<div>', input, '</div>' ].join();
var tag = isNumbered ? '<ol>' : '<ul>';

// Checking function return values.
var createHtml = function( item ) { return item.name; }
var createBox = function( item ) { return '<div>' + encode( item ) + '</div>' }