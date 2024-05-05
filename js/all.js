function dangNhapThanhCong(){
    let acc = JSON.parse(localStorage.getItem('currentAcc'));
    if(acc == null) return;
    let accLogo = $('.menu-item-login');
    accLogo.empty();
    accLogo.append(`
        <a href="">
            <i class="fa-solid fa-user"></i>
            ${acc.name}
        </a>
    `);
}

