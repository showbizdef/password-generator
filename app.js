function generatePassword() {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < 12; i++) { 
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
        passwordField.setSelectionRange(0, 99999); 
    
        if (navigator.clipboard && window.isSecureContext) {
            
            navigator.clipboard.writeText(passwordField.value)
                .then(() => {
                    alert('Password copied to clipboard');
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        } else {
            
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
        `)
}

// function openInfoWindow() {
   // const infoWindow = window.open("", "InfoWindow", "width=400,height=400");
    //infoWindow.document.write(`
      //  <html>
        //<head>
          //  <title>Information</title>
            //<style>
              //  body {
                //font-family: "Titillium Web", sans-serif;
                //padding: 20px;
                //background-color: #f0f0f0;
                //}
                //h1 {
                //    color: #4CAF50;
                //}
            //</head>
           // <body>
              //  <h1>Information</h1>
              //  <p>This is some information displayed in a new window</p>
          //  </body>
         //   </html>
   // `);
// }

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