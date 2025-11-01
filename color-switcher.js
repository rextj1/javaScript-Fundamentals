const btn = document.getElementById('changeColor'); // Assuming your button has this ID
const colorText = document.getElementById('colorName'); // Assuming your display element has this ID
const body = document.body;

/**
 * Generates a random hexadecimal color code (e.g., '#A3C1F5').
 * @returns {string} The 7-character hex code, including the '#'.
 */
function generateRandomHex() {
    // Generate a random integer between 0 and 16777215 (FFFFFF)
    let randomNum = Math.floor(Math.random() * 16777215);
    // Convert to hex string and pad with leading zeros to ensure 6 characters
  
    
    let hex = randomNum.toString(16).padStart(6, '0');
    console.log(hex);
    
    return "#" + hex.toUpperCase();
}

/**
 * Calculates the perceived brightness (luminance) of a hex color.
 * Uses the formula for relative luminance (WCAG 2.0).
 * @param {string} hexColor - The 7-character hex code (e.g., '#A3C1F5').
 * @returns {number} The luminance value (0 to 255).
 */
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

// --- Main Event Handler ---
btn.addEventListener("click", () => {
    const newColor = generateRandomHex();
    const luminance = getLuminance(newColor);
    
    // 1. Set the Background Color
    body.style.backgroundColor = newColor;
    
    // 2. Adjust Text Color for Contrast (Ternary operator for conciseness)
    // If luminance is below a threshold (e.g., 128 is mid-way on a 0-255 scale), 
    // the background is dark, so use white text. Otherwise, use black text.
    body.style.color = (luminance < 128) ? '#FFFFFF' : '#000000';
    
    // 3. Update the Display Text
    colorText.textContent = `HEX: ${newColor}`;
});