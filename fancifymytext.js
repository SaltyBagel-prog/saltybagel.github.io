/*
JavaScript file for Fancify Shamcify
*/

// Function for the "Bigger!" button
function makeBigger() {
    // Alert first, as requested by the initial steps
    alert("Hello, world!");
    
    // Get the text area and change its font size
    var textArea = document.getElementById("textArea");
    if (textArea) {
        textArea.style.fontSize = "24pt";
    }
}

// Function to handle radio button changes
function handleRadioChange() {
    var textArea = document.getElementById("textArea");
    
    if (document.getElementById("fancyRadio").checked) {
        // "FancyShmancy" is selected
        alert("Applying FancyShmancy styles!");
        if (textArea) {
            textArea.style.fontWeight = "bold";
            textArea.style.color = "blue";
            textArea.style.textDecoration = "underline";
        }
    } else if (document.getElementById("boringRadio").checked) {
        // "BoringBetty" is selected
        alert("Applying BoringBetty styles!");
        if (textArea) {
            textArea.style.fontWeight = "normal";
            textArea.style.color = "black";
            textArea.style.textDecoration = "none";
        }
    }
}

// Function for the "Moo" button
function mooify() {
    var textArea = document.getElementById("textArea");
    if (textArea) {
        var text = textArea.value;
        
        // Uppercase the entire text
        var upperText = text.toUpperCase();
        
        // Split the text into sentences (using the period as a delimiter)
        var parts = upperText.split(".");
        
        // Join the sentences back together, adding "-Moo" before the period
        // This handles cases with or without a trailing period correctly.
        var mooText = parts.join("-Moo.");
        
        textArea.value = mooText;
    }
}