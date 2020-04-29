const WS = new WebSocket('ws://localhost:3232');

WS.onmessage = (payload) => {
    displayMessages(payload.data)
}

WS.onopen = () => {
    displayTitle('Connection is ON')
}
WS.onclose = () => {
    displayTitle('Connection is OFF')
}

function displayTitle(title) {
    document.querySelector('h6').innerHTML = title;
}

function displayMessages(message) {
    let h5 = document.createElement('h5')
    h5.innerText = message

    document.querySelector('div.message').appendChild(h5)

}

document.forms[0].onsubmit = () => {

    const message = document.getElementById('message');
    WS.send(message.value)
}