

var giohang = new Array();
// document.getElementById("showcart").style.display = 'none';

function themvaogiohang(x){
    var boxsp = x.parentElement.children;
    var hinh = boxsp[0].children[0].src;
    var gia = boxsp[1].innerText
    var tensp = boxsp[2].innerText;
    var soluong = parseInt(boxsp[3].value)
    var sp = new Array(hinh, gia,tensp, soluong);
    var kt = 0;
    for (let i = 0; i < giohang.length; i++) {
        if (giohang[i][2] == tensp) {
            kt = 1;
            soluong += parseInt(giohang[i][3]);
            giohang[i][3] = soluong;
            break;
        }
    }
    if (kt == 0) {
        // thêm mới add thêm
        giohang.push(sp);
    }
    showmycart();
    // luu gio hang len sesionstorage
    sessionStorage.setItem("giohang", JSON.stringify(giohang));
    count();
}

function showcart() {
    var x = document.getElementById("showcart")
    if (x.style.display == "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
    showmycart();
}
//Hàm đếm giỏ hàng
function count(){
    document.getElementById("countsp").innerHTML= giohang.length;
}
// Trang giỏ hàng
function showmycart() {
    var giohang = sessionStorage.getItem("giohang");
    // đổi dạng chuổi thành dạng cũ
    var giohang = JSON.parse(giohang);
    showlaimycart(giohang);
}
function showlaimycart() {
    var kq = ""
    var tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        var ttien = parseInt(giohang[i][1].replaceAll('.', '')) * parseInt(giohang[i][3]);
        tong += ttien;
        kq += "<tr>";
        kq += " <td>" + (i + 1) + "</td>";
        kq += '<td><img src="' + giohang[i][0] + '"alt=""></td>';
        kq += '<td>' + giohang[i][1] + '</td>';
        kq += '<td>' + giohang[i][2] + '</td>';
        kq += " <td>" + giohang[i][3] + "</td>";
        kq += "<td>" + ttien + "</td>";
        kq += '<td><button onclick="xoasp(this)">Xóa</button></td>';
        kq += "</tr>"
    }
    kq += '<tr>' +
        '<th colspan="6">Tổng đơn hàng</th>' +
        '<th>' +
        ' <div>' + tong + '</div>' +
        '</th>' +

        '</tr>';
    document.getElementById("mycart").innerHTML = kq;
}
// Trang thanh toan
function showgiohang_trangthanhtoan() {
    // lấy giỏ hàng trên sesionstoragd về 
    var giohang = sessionStorage.getItem("giohang");
    // đổi dạng chuổi thành dạng cũ
    var giohang = JSON.parse(giohang);
    var kq = ""
    var tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        var ttien = parseInt(giohang[i][1].replaceAll('.', '')) * parseInt(giohang[i][3]);
        tong += ttien;
        kq += "<tr>";
        kq += " <td>" + (i + 1) + "</td>";
        kq += '<td><img src="' + giohang[i][0] + '"alt=""></td>';
        kq += '<td>' + giohang[i][1] + '</td>';
        kq += '<td>' + giohang[i][2] + '</td>';
        kq += " <td>" + giohang[i][3] + "</td>";
        kq += "<td>" + ttien + "</td>";
        kq += '<td><button onclick="xoasp(this)">Xóa</button></td>';
        kq += "</tr>"
    }
    kq += '<tr>' +
        '<th colspan="6">Tổng đơn hàng</th>' +
        '<th>' +
        ' <div>' + tong + '</div>' +
        '</th>' +

        '</tr>';
    document.getElementById("mycart").innerHTML = kq;
}

function xoasp(x){
    var giohang = sessionStorage.getItem("giohang");
    // đổi dạng chuổi thành dạng cũ
    var giohang = JSON.parse(giohang);
    //xoa tr
    var tr = x.parentElement.parentElement;
    var tensp = tr.children[3].innerText;
    tr.remove();
    

    // alert(tensp);
    //xoas san pham trong mang
    for (let i = 0; i < giohang.length; i++) {
        if (giohang[i][2] == ten) {
            // gh.splice(i, 1);
            console.log(giohang[i][2]);
            if(confirm("Bạn có muốn xóa sản phẩm này không")){
                giohang.splice(i,1);

            break;
            }
        }
    }
    sessionStorage.setItem("giohang",JSON.stringify(giohang));
    var giohang = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(giohang);
    showlaimycart(giohang);

}
 

// function dangkithongtin(){
//     // lấy giỏ hàng trên sesionstoragd về 
//     var gh = sessionStorage.getItem("giohang");
//     // đổi dạng chuổi thành dạng cũ
//     var giohang = JSON.parse(gh);
//     var kq = ""
//     var tong = 0;
//     for (let i = 0; i < giohang.length; i++) {
//         var ttien = parseInt(giohang[i][1].replaceAll('.', '')) * parseInt(giohang[i][3]);
//         tong += ttien;
//         kq += "<tr>";
//         kq += " <td>" + (i + 1) + "</td>";
//         kq += '<td><img src="' + giohang[i][0] + '"alt=""></td>';
//         kq += '<td>' + giohang[i][1] + '</td>';
//         kq += '<td>' + giohang[i][2] + '</td>';
//         kq += " <td>" + giohang[i][3] + "</td>";
//         kq += "<td>" + ttien + "</td>";
//         kq += '<td><button onclick="xoasp(this)">Xóa</button></td>';
//         kq += "</tr>"
//     }
//     kq += '<tr>' +
//         '<th colspan="6">Tổng đơn hàng</th>' +
//         '<th>' +
//         ' <div>' + tong + '</div>' +
//         '</th>' +

//         '</tr>';
//     document.getElementById("mycart").innerHTML = kq;
// }
// trang dang ky
function dongydathang() {
    var ttnh = document.getElementById("thongtinnhanhang").children;
    var hoten = ttnh[0].children[1].children[0].value;
    var diachi = ttnh[1].children[1].children[0].value;
    var dienthoai = ttnh[2].children[1].children[0].value;
    var email = ttnh[3].children[1].children[0].value;
    var tentk = ttnh[4].children[1].children[0].value;
    var mk = ttnh[5].children[1].children[0].value;
    var nguoinhan = new Array(hoten, diachi, dienthoai, email,tentk,mk);
    // lưu lên mãng người nhận lên sessionStorage 
    sessionStorage.setItem("nguoinhan", JSON.stringify(nguoinhan));
    // console.log(nguoinhan);
    // đẩy qua trang đăng nhập
    window.location.assign("dangnhap.html");
}
// trang dang nhap
function showdangki() {

    // window.location.assign("checkout.html");

}
// trang check out
function checkout(){
    var nguoinhan= sessionStorage.getItem("nguoinhan");
    var thongtin = JSON.parse(nguoinhan);

    var tt ='<tr>'+
    '<td width="20%">Họ và tên</td>'+
    '<td>'+thongtin[0]+'</td>'+
'</tr>'+
'<tr>'+
    '<td>Địa Chỉ</td>'+
    '<td>'+thongtin[1]+'</td>'+
'</tr>'+
'<tr>'+
    '<td>Số Điện thoại</td>'+
    '<td>'+thongtin[2]+'</td>'+
'</tr>'+
'<tr>'+
    '<td>Email</td>'+
    '<td>'+thongtin[3]+'</td>'+
'</tr>';
document.getElementById("thongtinnhanhang").innerHTML = tt;
}
var admin = "dangki.json";


function getUser(x){
    fetch(admin).then(function(res){
        return res.json().then(x);

    });
}
function load(x){
    var name = document.getElementById("name").value;
    var pass = document.getElementById("password").value;
    var flag = false;
    x.forEach((x) => {
        if(x.name == name && x.passwork == pass)
        
        flag = true;
    });
    if(flag==true){
        alert("Đăng nhập ok");
        window.location.href = "./checkout.html";

    }else{
        alert("Vui Lòng Nhập Lại");
    }
}
function dangnhap(){
    getUser(load);
}

