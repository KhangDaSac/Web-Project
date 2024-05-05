$(document).ready(function () {
    let regexTenThe = /[A-Z ]+/;
    let regexSoThe = /\d{16}/;
    let regexMaBaoMat = /\d{3}/;

    function isValid(){
        let bool = true;
        let ten_the = $('#ten-the').val();
        let so_the = $('#so-the').val();
        let ma_bao_mat = $('#ma-bao-mat').val();
        let dieu_khoan = $('#dieu-khoan').is(':checked');

        if(!regexTenThe.test(ten_the)){
            $('#ten-the-err').html('Tên thẻ không hợp lệ');
            bool = false;
        }else{
            $('#ten-the-err').html('');
        }

        if(!regexSoThe.test(so_the)){
            $('#so-the-err').html('Số thẻ không hợp lệ');
            bool = false;
        }else{
            $('#so-the-err').html('');
        }

        if(!regexMaBaoMat.test(ma_bao_mat)){
            $('#ma-bao-mat-err').html('Mã bảo mật không hợp lệ');
            bool = false;
        }else{
            $('#ma-bao-mat-err').html('');
        }

        if(!dieu_khoan){
            bool = false;
            $('#dieu-khoan-err').html('Vui lòng tích vào mục điều khoản');
        }else{
            $('#dieu-khoan-err').html('');
        }

        let phuong_thuc_thanh_toan = $("input[name='options']:checked").val();

        if(phuong_thuc_thanh_toan == null){
            bool = false;
            $('#phuong-thuc-thanh-toan-err').html('Vui lòng chọn phương thức thanh toán');
        }else{
            $('#phuong-thuc-thanh-toan-err').html('');
        }

        return bool;
    }

    $('#ten-the').blur(function (e) { 
        e.preventDefault();
        let ten_the = $(this).val();
        if(!regexTenThe.test(ten_the)){
            $('#ten-the-err').html('Tên thẻ không hợp lệ');
        }else{
            $('#ten-the-err').html('');
        }
    });

    $('#so-the').blur(function (e) { 
        e.preventDefault();
        let so_the = $(this).val();
        if(!regexSoThe.test(so_the)){
            $('#so-the-err').html('Số thẻ không hợp lệ');
        }else{
            $('#so-the-err').html('');
        }
    });

    $('#ma-bao-mat').blur(function (e) { 
        e.preventDefault();
        let ma_bao_mat = $(this).val();
        if(!regexMaBaoMat.test(ma_bao_mat)){
            $('#ma-bao-mat-err').html('Mã bảo mật không hợp lệ');
        }else{
            $('#ma-bao-mat-err').html('');
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

    $('#btn-thanh-toan').click(function (e) { 
        e.preventDefault();
        if(isValid()){
            alert("Thanh toán thành công");
        }
    });
});
