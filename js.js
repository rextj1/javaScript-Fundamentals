let colourText = document.getElementById("colourName");
let btn = document.getElementById("changeColour");

function getRandomColour() {
    // const colors = ["red", "blue", "green", "purple", "orange", "teal"];
    const colors = ["#FF0000", "#0000FF", "#008000", "#800080", "#FFA500", "#008080"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function getLuminance(hexColor) {
    // Remove the '#'
    const hex = hexColor.substring(1);

    // Get RGB components from the hex string
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Calculate luminance (a common method for perceived brightness)
    // The coefficients reflect how the human eye perceives R, G, and B.
    return (0.299 * r + 0.587 * g + 0.114 * b);
}

btn.addEventListener("click", () => {
    let randomColour = getRandomColour();
    const luminance = getLuminance(randomColour);
    document.body.style.backgroundColor = randomColour;

    // 2. Adjust Text Color for Contrast (Ternary operator for conciseness)
    // If luminance is below a threshold (e.g., 128 is mid-way on a 0-255 scale), 
    // the background is dark, so use white text. Otherwise, use black text.
    document.body.style.color = (luminance < 128) ? '#FFFFFF' : '#000000';
    colourText.textContent = randomColour;
})