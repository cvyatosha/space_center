let start_btn = document.querySelector('#start-btn'),
    leave_btn = document.querySelector('#leave-btn');

start_btn.onclick = () => {
    console.log('start game');
}

leave_btn.onclick = () => {
    Window.close();
}