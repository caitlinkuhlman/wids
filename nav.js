$('body').scrollspy({ target: '#mainNav' });

// Change this to define your colors. Can also be rgb(0,0,0) etc
var linkColor = {
    '#': 'white',
    '#program': 'white',
    '#contact': 'white',
    '#team': "#212529",
    '#speakers': 'white',
}

var hoverColor = {
    '#': '#b30000',
    '#program': "#212529",
    '#contact': "#b30000",
    '#team': "#b30000",
    '#speakers': "#b30000",
}

// Change the navbar's link color to a defined one based on the active nav link
function ChangeNavColor() {
    // Get the section name from the navbar' now active URL
    var currentSection = $(".nav li.active > a").attr('href');
    // Set the link color
    $(".nav a:link").css('color', linkColor[currentSection]);  
    // Set the link hover
    $(".nav a:hover").css('color', hoverColor[currentSection]);  
}

// When scrollspy activates a new section, execute the ChangeNavColor function
$(document).on('activate.bs.scrollspy', ChangeNavColor);

// Call the function when the navbar's done loading
// So we also have the correct color to begin with.
$('.nav').ready(ChangeNavColor);
