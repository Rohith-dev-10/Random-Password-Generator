// DOM Elements
const passwordDisplay = document.getElementById('passwordDisplay');
const passwordText = document.getElementById('passwordText');
const copyBtn = document.getElementById('copyBtn');
const lengthSlider = document.getElementById('passwordLength');
const lengthValue = document.getElementById('lengthValue');
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const strengthBars = document.querySelectorAll('.strength-bar');
const strengthText = document.getElementById('strengthText');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Initialize
passwordDisplay.classList.add('empty');
updateSliderValue();

// Set up checkbox functionality
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // This ensures the visual state updates when checkbox state changes
        generateAndDisplayPassword();
    });
});

// Event Listeners
lengthSlider.addEventListener('input', updateSliderValue);
copyBtn.addEventListener('click', copyPassword);
generateBtn.addEventListener('click', generateAndDisplayPassword);

// Update displayed slider value
function updateSliderValue() {
    lengthValue.textContent = lengthSlider.value;
}

// Password generation function (from the provided code)
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return "(password length must be at least 1)";
    }
    if (allowedChars.length === 0) {
        return "(At least 1 set of characters needs to be selected)";
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

// Generate password and update UI
function generateAndDisplayPassword() {
    const length = parseInt(lengthSlider.value);
    const includeLowercase = lowercaseCheckbox.checked;
    const includeUppercase = uppercaseCheckbox.checked;
    const includeNumbers = numbersCheckbox.checked;
    const includeSymbols = symbolsCheckbox.checked;

    const password = generatePassword(
        length,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols
    );

    // Error handling
    if (password.startsWith('(')) {
        passwordText.textContent = password;
        passwordDisplay.classList.add('empty');
        updateStrengthMeter(0);
        return;
    }

    // Update UI
    passwordText.textContent = password;
    passwordDisplay.classList.remove('empty');
    
    // Calculate and update password strength
    const strength = calculatePasswordStrength(
        password,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols
    );
    updateStrengthMeter(strength);
}

// Copy password to clipboard
function copyPassword() {
    const password = passwordText.textContent;
    
    if (!password || passwordDisplay.classList.contains('empty')) {
        return;
    }
    
    navigator.clipboard.writeText(password)
        .then(() => {
            // Visual feedback
            const originalText = copyBtn.textContent;
            copyBtn.textContent = "Copied!";
            
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 1500);
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
}

// Calculate password strength (0-4)
function calculatePasswordStrength(password, hasLower, hasUpper, hasNumbers, hasSymbols) {
    let strength = 0;
    
    // Check length
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    
    // Check character variety
    let varietyCount = 0;
    if (hasLower) varietyCount++;
    if (hasUpper) varietyCount++;
    if (hasNumbers) varietyCount++;
    if (hasSymbols) varietyCount++;
    
    if (varietyCount >= 3) strength += 1;
    if (varietyCount >= 4) strength += 1;
    
    return strength;
}

// Update the strength meter display
function updateStrengthMeter(strength) {
    // Remove all classes
    const strengthMeter = document.querySelector('.strength-meter');
    strengthMeter.classList.remove('very-weak', 'weak', 'medium', 'strong');
    
    // Add appropriate class
    let strengthClass;
    let strengthDescription;
    
    switch(strength) {
        case 0:
            strengthClass = 'very-weak';
            strengthDescription = 'Very Weak';
            break;
        case 1:
            strengthClass = 'very-weak';
            strengthDescription = 'Very Weak';
            break;
        case 2:
            strengthClass = 'weak';
            strengthDescription = 'Weak';
            break;
        case 3:
            strengthClass = 'medium';
            strengthDescription = 'Medium';
            break;
        case 4:
            strengthClass = 'strong';
            strengthDescription = 'Strong';
            break;
        default:
            strengthClass = '';
            strengthDescription = '';
    }
    
    strengthMeter.classList.add(strengthClass);
    strengthText.textContent = strengthDescription;
}

// Generate a password on page load
generateAndDisplayPassword();