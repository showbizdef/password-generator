
    // <button id="generate-btn" onClick={generatePassword()}>Generate</button>
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const passwordLengthSlider = document.getElementById('passwordLength');
    const lengthValueSpan = document.getElementById('lengthValue');
    const passwordField = document.getElementById('password');
    const strengthBar = document.getElementById('strength-bar');

    function generatePassword() {
        const length = passwordLengthSlider.value;
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        passwordField.value = password;
        const strength = evaluvatePasswordStrength(password);
        updateStrengthIndicator(strength);
    }
    
    function copyPassword() {
        const password = passwordField.value;

        navigator.clipboard.writeText(password).then(() => {
            console.log('Password copied to clipboard');
            alert('Password copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

    function openLinkWindow() {
        const width = 500;
        const height = 500;
        const left = (screen.width / 2) - (width / 2);
        const top = (screen.height / 2) - (height / 2);
        const linkWindow = window.open("", "LinkWindow", `width=${width},height=${height},left=${left},top=${top}"`);
        linkWindow.document.write(`
            <html>
            <head>
                <title>Link</title>
                <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    font-family: "Titillium Web", sans-serif;
                    background-color: #ffffff;
                }
                .container {
                    text-align: center;
                    padding: 20px;
                    background-color: #DCDCDC;
                    border: 1px solid #696969;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                }
                #link-button {
                    background-color: #9370DB;
                    color: white;
                    padding: 10px 20px;
                    font-family: "Titillium Web", sans-serif;
                    font-size: 1em;
                    cursor: pointer;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                }
                #telegram-button {
                    background-color: #9370DB;
                    color: white;
                    padding: 10px 20px;
                    font-family: "Titillium Web", sans-serif;
                    font-size: 1em;
                    cursor: pointer;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                }
            </style>
        </head>
        <body>
            <div class="container">
            <h1>Feedback to the author</h1>
            <a href="https://t.me/showbizdef/" id="telegram-button" class="button" target="_blank">Telegram</a>
            <a href="https://github.com/showbizdef/" id="link-button" class="button" target="_blank">GitHub</a>
            <a href="https://www.youtube.com/channel/UCdCMvvBIMJhdPp3q_QNmz7w" id="link-button" class="button" target="_blank">Youtube</a>
        </body>
        </html>
        `)};




    document.getElementById('open-modal-btn').onclick = function() {
    document.getElementById('myModal').style.display = 'block';
    };

    document.getElementsByClassName('close')[0].onclick = function() {
        document.getElementById('myModal').style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == document.getElementById('myModal')) {
            document.getElementById('myModal').style.display = 'none';
        }
    };

    function evaluvatePasswordStrength(password) {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (password.length >=12) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        return strength;
    }

    function updateStrengthIndicator(strength) {
        strengthBar.style.width = `${strength * 20}%`;

        if (strength <2) {
            strengthBar.style.backgroundColor = 'red';
    }   else if (strength < 4) {
            strengthBar.style.backgroundColor = 'orange';
    }   else {
        strengthBar.style.backgroundColor = 'green';
    }
    }

    passwordLengthSlider.addEventListener('input', (event) => {
        lengthValueSpan.textContent = event.target.value;
    });

    generateBtn.addEventListener('click', () => {
        const passwordLength = passwordLengthSlider.value;
        const password = generatePassword(passwordLength);
        passwordField.value = password;
        const strength = evaluvatePasswordStrength(password);
        updateStrengthIndicator(strength);

        copyBtn.addEventListener('click', copyPassword);
    });