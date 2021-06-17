// Create variables for the welcome page
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order:';
// Concatenate the three strings together to create the message for the welcome page
var welcome = greeting + name + message;

// Create variables to hold details about the sign
var sign = 'Montague House';
var tiles = sign.length;
var subtotal = tiles * 5;
var shipping = 7;
var grandtotal = subtotal + shipping;

// Get the element that has the id of greeting
var el = document.getElementById('greeting');
// Replace the content of that element with the personalized greeting message
el.textcontent = welcome;

// Get the element that has an id of userSign then update its content
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Get the element that has an id of tiles then update its content
var elfiles = document.getElementById('tiles');
elfiles.textContent = tiles;

// Get the element that has an id of subtotal then update its content
var elSubtotal = document.getElementById('subtotal');
elSubtotal.textContent = '$' + subtotal;

//Get the element that has an id of shipping and update it's content
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

//Get the element that has an id of grandtotal and update its content
var elGrandtotal = document.getElementById('grandtotal');
elGrandtotal = '$' + grandtotal;

