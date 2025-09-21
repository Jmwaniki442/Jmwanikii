function validatePassword(password) {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password); // fixed typo
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    if (password.length < minLength) { // fixed casing
        return `Password must be at least 8 characters long.`;
    }
    if (!hasUppercase) {
        return `Password must contain at least one uppercase letter.`;
    }
    if (!hasLowercase) {
        return `Password must contain at least one lowercase letter.`;
    }
    if (!hasNumber) {
        return `Password must contain at least one number.`;
    }
    if (!hasSpecialChar) {
        return `Password must contain at least one special character.`;
    }
    return `Password is valid.`;
}

// Use process.argv to get command line arguments
const args = process.argv;
const password = args[2];
console.log(validatePassword(password));
