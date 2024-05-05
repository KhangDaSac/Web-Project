function dangNhapThanhCong(){
    let acc = JSON.parse(localStorage.getItem('currentAcc'));
    if(acc == null) return;
    let accLogo = $('.menu-item-login');
    accLogo.empty();
    accLogo.append(`
         <a href="">
            <i class="fa-solid fa-user"></i>
            ${acc.name}
            <ul class="menu-item-logout">
                <li onclick="dangXuat()">ĐĂNG XUẤT</li>
            </ul>
        </a>
    `);
}

function dangXuat(){
    localStorage.removeItem('currentAcc')
    window.location.href = 'home.html'
}

function SpaHotale()
{
    let c1='../images/service/spa.png'
    let a1='Spa Hotale'
    let b1='Lạc vào ốc đảo Spa Hotale Hotel sang trọng và quyến rũ để tận hưởng những giây phút thư giãn tuyệt đối giữa thiên nhiên. Tại đây, bạn có thể đắm mình trong những trải nghiệm spa độc đáo, được chắt lọc từ tinh hoa nghệ thuật phương Đông và phương Tây.<br> Giờ mở cửa: Từ 10:00 sáng đến 10:00 tối.'
    localStorage.setItem("hh2",a1);
    localStorage.setItem("pp2",b1);
    localStorage.setItem("doianh2",c1);
    window.location.href = "service-detail.html";
    let a ='Phòng xông hơi' ;
    let b ='Phòng xông hơi với phong cách Nhật Bản mang đến một trải nghiệm thư giãn và gần gũi với thiên nhiên theo 3 đặc điểm sau: <br> - Tối giản và tự nhiên<br> - Thư giãn và yên bình<br> - Kết hợp với phong cách Zen';
    let c ='../images/service/nha_tam_phong_xong_hoi.jpg';
    localStorage.setItem("hh1",a);
    localStorage.setItem("pp",b);
    localStorage.setItem("doianh",c);
}
function Res()
{
    let a1 ='Nhà hàng' ;
    let b1 ='Hệ thống sảnh tiệc lớn, linh hoạt, được đầu tư trang thiết bị hiện đại sẽ luôn là gợi ý tuyệt vời cho những tiệc cưới, hội nghị đẳng cấp. Hệ thống sảnh tiệc lớn, linh hoạt, được đầu tư trang thiết bị hiện đại sẽ luôn là gợi ý tuyệt vời cho những tiệc cưới, hội nghị đẳng cấp.';
    let c1 ='../images/service/nhahangst.jpg';
    localStorage.setItem("hh2",a1);
    localStorage.setItem("pp2",b1);
    localStorage.setItem("doianh2",c1);
    let c='../images/service/chef-cook.png';
    let a='Món ăn';
    let b='Menu món ăn, đồ uống đa dạng với đủ thể loại từ Á đến Âu cùng với các đầu bếp tài ba được rèn luyện với nhiều món ăn trên thế giới sẽ làm điên đảo vị giác của bạn.';
    localStorage.setItem("hh1",a);
    localStorage.setItem("pp",b);
    localStorage.setItem("doianh",c);
    window.location.href = "service-detail.html";
}
function SkyBar(){
    let c1='../images/service/bar.png'
    let a1='Sky bar'
    let b1='Hãy kỷ niệm khoảnh khắc của bạn bằng một trong những món cocktail nổi bật của chúng tôi hoặc nếu bạn thích, tuyển chọn các loại trà quốc tế và cà phê có nguồn gốc địa phương có sẵn nóng hoặc đá mát lạnh.<br> Giờ mở cửa: Hàng ngày từ 6 giờ chiều đến nửa đêm.'
    localStorage.setItem("hh2",a1);
    localStorage.setItem("pp2",b1);
    localStorage.setItem("doianh2",c1);
    let a ='Snack bar';
    let b ='Ngoài ra, còn có Snack bar. Đây là nơi phù hợp cho việc thư giãn sau giờ làm việc căng thẳng, gặp gỡ bạn bè và tận hưởng những khoảnh khắc vui vẻ!';
    let c ='../images/service/phong_bar.jpg';
    localStorage.setItem("hh1",a);
    localStorage.setItem("pp",b);
    localStorage.setItem("doianh",c);
    window.location.href = "service-detail.html";
}