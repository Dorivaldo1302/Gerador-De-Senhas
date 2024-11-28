const generateBtn = document.getElementById('generate');
const passwordDisplay = document.getElementById('password');
const copyBtn = document.getElementById('copy');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = '!@#$%^&*()_-+=[]{}|;:,.<>/?';

generateBtn.addEventListener('click', () => {
 const length = document.getElementById('size').value;
 const includeUppercase = document.getElementById('include_uppercase').checked;
 const includeLowercase = document.getElementById('include_lowercase').checked;
 const includeNumbers = document.getElementById('include_number').checked;
 const includeSpecialChars = document.getElementById('include_special_character').checked;

 let chars = '';

 if (includeUppercase) chars += uppercaseChars;
 if (includeLowercase) chars += lowercaseChars;
 if (includeNumbers) chars += numbers;
 if (includeSpecialChars) chars += specialChars;

 let password = '';
 for (let i = 0; i < length; i++) {
  password += chars.charAt(Math.floor(Math.random() * chars.length));
 }

 passwordDisplay.textContent = password;
 copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(password)
 });
});