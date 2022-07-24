

let sidebar = document.querySelector('.sidebar');

let menu_btn = document.getElementById('menu')

menu_btn.onclick = () => {
    if (menu_btn.classList.contains('bi-list')) {
        menu_btn.classList.add('bi-x')
        menu_btn.classList.remove('bi-list')
        sidebar.style.left = 0;
    }
    else {
        menu_btn.classList.remove('bi-x')
        menu_btn.classList.add('bi-list')
        sidebar.style.left = "-260px";
    }

}