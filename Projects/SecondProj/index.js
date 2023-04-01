const main_menu = document.getElementById('main_menu');
const mobile_close_btn = document.getElementById('mobile_close_btn');
const mobile_menu_open_btn = document.getElementById('mobile_menu_open_btn');



mobile_close_btn.addEventListener('click', () => {
    main_menu.classList.add('hidden')
})

mobile_menu_open_btn.addEventListener('click', () => {
    main_menu.classList.remove('hidden')
})
