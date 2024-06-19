function generatePassword() {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < 12; i++) { // Generate a 12-character password
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('password').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    
    if (passwordField) {
        passwordField.focus();
        passwordField.select();
        passwordField.setSelectionRange(0, 99999); // For mobile devices
    
        if (navigator.clipboard && window.isSecureContext) {
            // Use the modern Clipboard API
            navigator.clipboard.writeText(passwordField.value)
                .then(() => {
                    alert('Password copied to clipboard');
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        } else {
            // Fallback to the deprecated execCommand method
            try {
                const successful = document.execCommand('copy');
                const msg = successful ? 'successful' : 'unsuccessful';
                console.log('Copying text command was ' + msg);
                alert('Password copied to clipboard');
            } catch (err) {
                console.error('Oops, unable to copy', err);
            }
        }
    } else {
        console.error('Element with id "password" not found or not an input element.');
    }
}

function openLink() {
    window.location.href = 'https://t.me/showbizdef';
}