# Random-Password-Generator
# Password Generator

**Note: This project was created for practice purposes only.**

## Overview

This is a simple, user-friendly password generator web application built with HTML, CSS, and JavaScript. It allows users to create secure, customized passwords based on their preferences for length and character types.

## Features

- Generate random passwords with customizable length (4-32 characters)
- Include or exclude different character types:
  - Lowercase letters (a-z)
  - Uppercase letters (A-Z)
  - Numbers (0-9)
  - Symbols (!@#$%^&*()_+-=)
- Visual password strength indicator
- One-click copy to clipboard functionality
- Responsive design that works on mobile and desktop

## Files

The project consists of three main files:

- `index.html` - The structure of the application
- `styles.css` - All styling and visual elements
- `script.js` - The functionality of the password generator

## How to Use

1. Download all three files into the same directory
2. Open `index.html` in any modern web browser
3. Adjust your password preferences:
   - Move the slider to set password length
   - Check/uncheck boxes to include/exclude character types
4. Click "Generate Password" button to create a new password
5. Click the "Copy" button to copy the password to your clipboard

## Password Strength Criteria

The strength meter evaluates passwords based on:
- Length (8+ characters for minimum security, 12+ for better security)
- Character variety (using multiple character types increases strength)

## Implementation Details

The core functionality is based on the `generatePassword()` function which:
1. Creates a pool of allowed characters based on user selections
2. Validates that at least one character type is selected
3. Randomly selects characters from the allowed pool
4. Returns the generated password or an error message

## Browser Compatibility

This application works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Learning Purposes

This project demonstrates several fundamental web development concepts:
- DOM manipulation
- Event handling
- Form input processing
- CSS custom properties
- Responsive design principles
- Visual feedback for user actions

## Future Enhancements

Potential improvements for future practice:
- Password history
- Save password preferences in local storage
- Password entropy calculation
- Generate multiple passwords at once
- Password pronunciation guide for easier memorization

---

*Created as a practice project for frontend web development skills*
