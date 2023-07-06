let popup_open_btns = document.querySelectorAll('.popup-open-btn'),
    popup_close_btns = document.querySelectorAll('.popup-close-btn');
    popup_close_bgs = document.querySelectorAll('.popup-close-bg');

popup_open_btns.forEach(e => {
    e.onclick = () => {
        let popup_name = e.getAttribute('popupname');
        
        document.querySelector('#' + popup_name).style.display = 'block';
    }
});

popup_close_btns.forEach(e => {
    e.onclick = () => {
        e.closest('.popup').style.display = 'none';
    }
});

popup_close_bgs.forEach(e => {
    e.onclick = () => {
        e.closest('.popup').style.display = 'none';
    }
});
