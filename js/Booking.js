$(document).ready(function () {
    let regexHoTen = /^([A-Z][a-z]*\s)+([A-Z][a-z]*)$/;
    let regexSDT = /0\d{9}/;
    let regexQuocGia = /^([A-Z][a-z]*\s)+([A-Z][a-z]*)$/;
    let regexEmail = /^[A-Za-z]\w+@(gmail|yahoo|iuh|hotmail)(\.com){1}$/;

    function isValid(){
        let ho_ten = $('#ho-ten').val();
        let dien_thoai = $('#dien-thoai').val();
        let quoc_gia = $('#quoc-gia').val();
        let email = $('#email').val();
        let dieu_khoan = $('#dieu-khoan').is(':checked');

        let bool = true;
    
        if(!regexHoTen.test(ho_ten)){
            $('#ho-ten-err').html('Họ tên không hợp lệ');
            bool = false;
        }else{
            $('#ho-ten-err').html('');
        }
    
        if(!regexSDT.test(dien_thoai)){
            $('#dien-thoai-err').html('Số điện thoại không hợp lệ');
            bool = false;
        }else{
            $('#dien-thoai-err').html('');
        }
    
        if(!regexQuocGia.test(quoc_gia)){
            $('#quoc-gia-err').html('Quốc gia không hợp lệ');
            bool = false;
        }else{
            $('#quoc-gia-err').html('');
        }
    
        if(!regexEmail.test(email)){
            $('#email-err').html('Email không hợp lệ');
            bool = false;
        }else{
            $('#email-err').html('');
        }

        if(!dieu_khoan){
            bool = false;
            $('#dieu-khoan-err').html('Vui lòng tích vào mục điều khoản');
        }else{
            $('#dieu-khoan-err').html('');
        }
        return bool;
    }
    

    $('#ho-ten').blur(function (e) { 
        e.preventDefault();
        let ho_ten = $(this).val(); 
        if(!regexHoTen.test(ho_ten)){
            $('#ho-ten-err').html('Họ tên không hợp lệ');
        }else{
            $('#ho-ten-err').html('');
        }
    });

    $('#dien-thoai').blur(function (e) { 
        e.preventDefault();
        let dien_thoai= $(this).val(); 
        if(!regexSDT.test(dien_thoai)){
            $('#dien-thoai-err').html('Số điện thoại không hợp lệ');
        }else{
            $('#dien-thoai-err').html('');
        }
    });

    $('#quoc-gia').blur(function (e) { 
        e.preventDefault();
        let quoc_gia= $(this).val(); 
        if(!regexQuocGia.test(quoc_gia)){
            $('#quoc-gia-err').html('Quốc gia không hợp lệ');
        }else{
            $('#quoc-gia-err').html('');
        }
    });

    $('#email').blur(function (e) { 
        e.preventDefault();
        let email= $(this).val(); 
        if(!regexEmail.test(email)){
            $('#email-err').html('Email không hợp lệ');
        }else{
            $('#email-err').html('');
        }
    });

    $('#dieu-khoan').blur(function (e) { 
        e.preventDefault();
        let dieu_khoan= $(this).is(':checked'); 
        if(!dieu_khoan){
            $('#dieu-khoan-err').html('Vui lòng tích vào mục điều khoản');
        }else{
            $('#dieu-khoan-err').html('');
        }
    });

    
    $('#btn-send').click(function (e) { 
        e.preventDefault();
        if(isValid()){
            let thanh_toan_bool = confirm("Đặt phòng thành công. Bạn có muốn thanh toán ngay không?");

            if(thanh_toan_bool){
                window.location.href = 'paying.html'
            }
        }
    });
});
