
document.addEventListener("DOMContentLoaded", function () {

    var tab1 = document.getElementById("booking-tab1");
    var tab2 = document.getElementById("booking-tab2");
    var content1 = document.querySelector(".booking-content1");
    var content2 = document.querySelector(".booking-content2");


    tab2.addEventListener("click", function () {

        content1.classList.remove("active");
        content2.classList.add("active");


        tab1.classList.remove("active");
        tab2.classList.add("active");


    });
    tab1.addEventListener("click", function () {

        content2.classList.remove("active");
        content1.classList.add("active");

        tab2.classList.remove("active");
        tab1.classList.add("active");


    });
});

function Deluxe() {
    let a = 'Phòng Deluxe hướng thành phố'
    let b = '300.000VND'
    let c = '1 Giường'
    let d = '2 khách'
    let e = '30M2'
    let f = 'hướng thành phố'
    let g = 'Hotale Hotel tự hào có 10 phòng Deluxe Nhìn ra Thành phố mang đến cảm giác thư giãn và trang nhã của Phong cách Tân cổ điển. Mỗi phòng trong khách sạn Hotale là sự kết hợp của vẻ đẹp, thẩm mỹ và nghệ thuật. Phòng Deluxe City View được bố trí hợp lý với diện tích 30 m2 và được trang bị đầy đủ các tiện nghi hiện đại như tivi LCD truyền hình cáp, máy lạnh, phòng ngủ riêng với vòi sen nóng lạnh và đồ vệ sinh cá nhân. hiện đại. Phòng có cửa sổ lớn mở ra quang cảnh hữu tình của Hà Nội. Deluxe là sự lựa chọn thông minh của bạn dành cho những du khách bình dân bởi sự tiện lợi và giá cả hợp lý. Các phòng thông nhau qua cửa nối cũng có sẵn cho các nhóm và gia đình'
    let rev = ' Nhận xét'
    let st = '5 <i class="fa-solid fa-star"></i>'

    let anh1 = '<img src="../images/icon/avatar.png" alt="">'
    let ten1 = 'Nguyễn Minh'
    let bl1 = 'Phòng rất sạch sẽ, thoáng đãng, nhân viên phục vụ rất tốt, thân thiện. Đồ ăn sáng rất ngon, phong phú. Tôi rất hài lòng với dịch vụ của khách sạn. Chắc chắn sẽ quay lại lần sau.'
    let sao1 = ' <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"> <i class="fa-solid fa-star">'
    let ngay1 = '20/10/2022'

    let anh2 = '<img src="../images/icon/avatar.png" alt="">'
    let ten2 = 'Trần Nghĩa'
    let bl2 = 'tốt'
    let sao2 = ' <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"> <i class="fa-solid fa-star">'
    let ngay2 = '18/02/2022'
    localStorage.setItem("a", a);
    localStorage.setItem("b", b);
    localStorage.setItem("c", c);
    localStorage.setItem("d", d);
    localStorage.setItem("e", e);
    localStorage.setItem("f", f);
    localStorage.setItem("g", g);
    localStorage.setItem("rev", rev);
    localStorage.setItem("st", st);

    localStorage.setItem("anh1", anh1);
    localStorage.setItem("ten1", ten1);
    localStorage.setItem("bl1", bl1);
    localStorage.setItem("sao1", sao1);
    localStorage.setItem("ngay1", ngay1);

    localStorage.setItem("anh2", anh2);
    localStorage.setItem("ten2", ten2);
    localStorage.setItem("bl2", bl2);
    localStorage.setItem("sao2", sao2);
    localStorage.setItem("ngay2", ngay2);

    window.location.href = "room-details.html"

}
function Senior() {
    let a = 'Phòng Senior De. Hướng thành phố'
    let b = '400.000VND'
    let c = '2 Giường'
    let d = '3 khách'
    let e = '30M2'
    let f = 'hướng thành phố'
    let g = 'Sự thoải mái cuối cùng của 16 Senior De. Quang cảnh thành phố bắt nguồn từ sự tối giản và tinh tế của thiết kế và trang trí theo Phong cách Tân cổ điển. Phòng ốc rộng rãi, ấm cúng và được bố trí thông minh trên diện tích 35 m2, với 3 cặp phòng thông nhau. Tông màu sáng của các phòng hài hòa với màu sắc tươi sáng và đường cong tinh tế của đồ nội thất. Đệ nhất cấp. City view có tất cả các tiện nghi mà bạn mong đợi từ truyền hình cáp, máy lạnh, phòng tắm với vòi sen nóng lạnh và bồn tắm, đến bộ khăn trải giường chất lượng cao cho bạn một giấc ngủ ngon và thư giãn. Bạn bè. Đệ nhất cấp. Các phòng hướng phố được trang bị cửa sổ xanh cho tầm nhìn tuyệt vời ra Hà Nội'
    let rev = ' Nhận xét'
    let st = '5 <i class="fa-solid fa-star"></i>'

    let anh1 = '<img src="../images/icon/avatar.png" alt="">'
    let ten1 = 'Minh Nghi'
    let bl1 = 'Dịch vụ tốt.'
    let sao1 = ' <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"> <i class="fa-solid fa-star">'
    let ngay1 = '20/12/2022'

    let anh2 = '<img src="../images/icon/avatar.png" alt="">'
    let ten2 = 'bomman'
    let bl2 = 'nhân viên nhiệt tình'
    let sao2 = '  </i> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"> <i class="fa-solid fa-star">'
    let ngay2 = '18/02/2022'

    localStorage.setItem("a", a);
    localStorage.setItem("b", b);
    localStorage.setItem("c", c);
    localStorage.setItem("d", d);
    localStorage.setItem("e", e);
    localStorage.setItem("f", f);
    localStorage.setItem("g", g);
    localStorage.setItem("rev", rev);
    localStorage.setItem("st", st);

    localStorage.setItem("anh1", anh1);
    localStorage.setItem("ten1", ten1);
    localStorage.setItem("bl1", bl1);
    localStorage.setItem("sao1", sao1);
    localStorage.setItem("ngay1", ngay1);

    localStorage.setItem("anh2", anh2);
    localStorage.setItem("ten2", ten2);
    localStorage.setItem("bl2", bl2);
    localStorage.setItem("sao2", sao2);
    localStorage.setItem("ngay2", ngay2);
    window.location.href = "roomdetails.html"
}
function SuiteTriple() {
    let a = 'Phòng Suite Triple có Ban công'
    let b = '500.000VND'
    let c = '1 Giường'
    let d = '2 khách'
    let e = '40M2'
    let f = 'hướng thành phố'
    let g = 'Phòng Suite Triple có Ban công là sự lựa chọn hoàn hảo cho các gia đình và nhóm du khách nhỏ. 10 căn phòng này cũng rất thích hợp cho những ai muốn có không gian thư giãn riêng tư. Ban công với bàn ghế thoải mái cho phép khách ngồi lại và chiêm ngưỡng phong cảnh sống động và đẹp như tranh vẽ của Hà Nội. Với diện tích rộng rãi 40 m2, trang thiết bị hiện đại, nội thất phong cách và tiện nghi hiện đại như vòi hoa sen, bồn tắm, máy lạnh, bạn sẽ có một kỳ nghỉ đáng nhớ và thoải mái tại Hotale Hotel.'
    let rev = ' Nhận xét'
    let st = '5 <i class="fa-solid fa-star"></i>'

    let anh1 = '<img src="../images/icon/avatar.png" alt="">'
    let ten1 = 'Dev Nguyễn'
    let bl1 = 'Dịch vụ tốt.'
    let sao1 = ' <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"> <i class="fa-solid fa-star">'
    let ngay1 = '4/07/2022'

    let anh2 = '<img src="../images/icon/avatar.png" alt="">'
    let ten2 = 'Thanh Thanh'
    let bl2 = '...'
    let sao2 = '  </i> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"> <i class="fa-solid fa-star">'
    let ngay2 = '4/07/2022'
    localStorage.setItem("a", a);
    localStorage.setItem("b", b);
    localStorage.setItem("c", c);
    localStorage.setItem("d", d);
    localStorage.setItem("e", e);
    localStorage.setItem("f", f);
    localStorage.setItem("g", g);
    localStorage.setItem("rev", rev);
    localStorage.setItem("st", st);


    localStorage.setItem("anh1", anh1);
    localStorage.setItem("ten1", ten1);
    localStorage.setItem("bl1", bl1);
    localStorage.setItem("sao1", sao1);
    localStorage.setItem("ngay1", ngay1);

    localStorage.setItem("anh2", anh2);
    localStorage.setItem("ten2", ten2);
    localStorage.setItem("bl2", bl2);
    localStorage.setItem("sao2", sao2);
    localStorage.setItem("ngay2", ngay2);
    window.location.href = "roomdetails.html"
}
function FamilySuite() {
    let a = ' Phòng Family Suite có ban công'
    let b = '600.000VND'
    let c = '1 Giường'
    let d = '2 khách'
    let e = '40 M2'
    let f = 'hướng thành phố'
    let g = 'Với giường cỡ king thoải mái và ban công rộng rãi, Balcony Family Suite là một lựa chọn tuyệt vời để thư giãn. Tất cả 10 Balcony Family Suite đều cung cấp cho du khách một ban công rộng, bàn trà và ghế, tốt nhất để trải qua những giây phút chất lượng bên gia đình, chụp những bức ảnh lộng lẫy, thưởng thức bữa sáng và trà chiều trong khung cảnh tuyệt đẹp. Căn phòng này cũng được trang bị nội thất và phụ kiện theo phong cách Tân cổ điển, các thiết kế và nội thất đều tuân theo tỷ lệ vàng, mang đến sự hài hòa và sang trọng cho không gian sống. Với diện tích 40m2, Balcony Family Suite có minibar, bàn viết, ban công, phòng tắm riêng với vòi sen và bồn tắm riêng biệt.'
    let rev = ' Nhận xét'
    let st = '5 <i class="fa-solid fa-star"></i>'

    let anh1 = '<img src="../images/icon/avatar.png" alt="">'
    let ten1 = 'Quốc Trần'
    let bl1 = 'Phòng đi gia đình rất ổn.'
    let sao1 = ' <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"> <i class="fa-solid fa-star">'
    let ngay1 = '8/12/2022'

    let anh2 = '<img src="../images/icon/avatar.png" alt="">'
    let ten2 = 'Nghĩa'
    let bl2 = 'tuyệt'
    let sao2 = '  </i>  <i class="fa-solid fa-star"> <i class="fa-solid fa-star"> <i class="fa-solid fa-star">'
    let ngay2 = '3/02/2022'
    localStorage.setItem("a", a);
    localStorage.setItem("b", b);
    localStorage.setItem("c", c);
    localStorage.setItem("d", d);
    localStorage.setItem("e", e);
    localStorage.setItem("f", f);
    localStorage.setItem("g", g);
    localStorage.setItem("rev", rev);
    localStorage.setItem("st", st);

    localStorage.setItem("anh1", anh1);
    localStorage.setItem("ten1", ten1);
    localStorage.setItem("bl1", bl1);
    localStorage.setItem("sao1", sao1);
    localStorage.setItem("ngay1", ngay1);

    localStorage.setItem("anh2", anh2);
    localStorage.setItem("ten2", ten2);
    localStorage.setItem("bl2", bl2);
    localStorage.setItem("sao2", sao2);
    localStorage.setItem("ngay2", ngay2);
    window.location.href = "roomdetails.html"
}
function Connecting() {
    let a = 'Phòng Connecting'
    let b = '900.000VND'
    let c = '2 Giường'
    let d = '4 khách'
    let e = '60M2'
    let f = 'hướng thành phố'
    let g = 'Hotale Hotel tự hào có 6 phòng thông nhau qua cửa nối mang lại cảm giác thư giãn và trang nhã của Phong cách Tân cổ điển. Mỗi phòng trong khách sạn Hotale là sự kết hợp của vẻ đẹp, thẩm mỹ và nghệ thuật. Các phòng thông nhau được bố trí hợp lý với diện tích 60 m2 được trang bị đầy đủ tiện nghi hiện đại như giường King, truyền hình cáp LCD, máy lạnh, phòng ngủ có phòng tắm riêng với vòi sen nóng lạnh và đồ vệ sinh cá nhân hiện đại. Phòng có cửa sổ lớn mở ra khung cảnh hữu tình của Hà Nội. Connecting là sự lựa chọn thông minh của bạn dành cho những du khách bình dân vì sự tiện lợi và giá cả hợp lý. Các phòng thông nhau qua cửa nối cũng có sẵn cho các nhóm và gia đình.'
    let rev = ' Nhận xét'
    let st = '5 <i class="fa-solid fa-star"></i>'

    let anh1 = '<img src="../images/icon/avatar.png" alt="">'
    let ten1 = 'Minh Tú'
    let bl1 = ' rất ổn.'
    let sao1 = ' <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"> <i class="fa-solid fa-star"> <i class="fa-solid fa-star">'
    let ngay1 = '08/11/2022'

    let anh2 = '<img src="../images/icon/avatar.png" alt="">'
    let ten2 = 'Nga'
    let bl2 = 'tuyệt'
    let sao2 = '  </i>  <i class="fa-solid fa-star"> <i class="fa-solid fa-star"> <i class="fa-solid fa-star">'
    let ngay2 = '03/04/2022'
    localStorage.setItem("a", a);
    localStorage.setItem("b", b);
    localStorage.setItem("c", c);
    localStorage.setItem("d", d);
    localStorage.setItem("e", e);
    localStorage.setItem("f", f);
    localStorage.setItem("g", g);
    localStorage.setItem("rev", rev);
    localStorage.setItem("st", st);

    localStorage.setItem("anh1", anh1);
    localStorage.setItem("ten1", ten1);
    localStorage.setItem("bl1", bl1);
    localStorage.setItem("sao1", sao1);
    localStorage.setItem("ngay1", ngay1);

    localStorage.setItem("anh2", anh2);
    localStorage.setItem("ten2", ten2);
    localStorage.setItem("bl2", bl2);
    localStorage.setItem("sao2", sao2);
    localStorage.setItem("ngay2", ngay2);
    window.location.href = "roomdetails.html"
}





