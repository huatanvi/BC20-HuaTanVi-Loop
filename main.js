/**
 * bài 1: Tìm số chẵn lẻ
 *  //for
 * -tạo biến soChan ,soLe
 * - tạo điều kiện vòng lặp nhỏ hơn 100, tạo bước nhảy
 * - dùng lệnh if xét điều kiện nếu %2 == 0 thì chẵn , ngược lại là lẻ
 * - xuất Số chẵn và số lẻ lên UI
 */

//Dùng for
// function timSoChanLe(){
//     var soChan = " ";
//     var soLe = " ";
//     for(var i = 0 ; i < 100; i++ ){
//         if (i %2 == 0 ){
//          soChan +=" " + i 
//         }else
//         soLe += " " +i 
//     }
//     document.getElementById("txtNumber").innerHTML = "Số Chẵn: " + soChan + " Số Lẻ: " + soLe
// }
// document.getElementById("btnNumber").onclick = timSoChanLe;

//Dùng while

function timSoChanLe() {
    var soChan = " ";
    var soLe = " ";
    var n1 = 0;

    while (n1 < 100) {
        if (n1 % 2 == 0) {
            soChan += " " + n1;
        } else
            soLe += " " + n1;

        n1++
    }
    document.getElementById("txtNumber").innerHTML = "Số Chẵn: " + soChan + " Số Lẻ: " + soLe
}

document.getElementById("btnNumber").onclick = timSoChanLe;


/**
 * bài 2: Đếm số chia hết cho 3 từ 0 đến 1000
 */
// Dùng for
// function chiaHetCho3 (){
//    
//     var count = 0;
//     for(var i = 0 ; i < 1000; i++ ){
//         if (i % 3 == 0){

//             count +=1
//         }
//     }
// document.getElementById("txtNumber3").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count + " số"
// }
// document.getElementById("btnNumber3").onclick = chiaHetCho3 

//Dùng While

function chiaHetCho3() {
    var content = " ";
    var count = 0;
    var num = 0;

    while (num < 1000) {
        if (num % 3 == 0) {
            content = count++
        }
        num++
    }
    document.getElementById("txtNumber3").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count + " số"
}

document.getElementById("btnNumber3").onclick = chiaHetCho3


/***
 * bài 3: Tìm số nguyên dương nhỏ nhất
 * - tạo biến sum , n 
 * - tạo điều kiện vòng lặp  
 *  for (var i = 0,i< 10000, i++)
 * - nếu  i< 10000 thì sum = sum + i
 * - nếu sum > 10000 thì n++
 * - Đến khi sum >10000 thì dừng lại và hiện số n lên UI
 */

function soNguyenNhoNhat() {
    var sum = 0;
    var n = 0
    for (var i = 0; i < 10000; i++) {
        sum += i;
        if (sum > 10000) {
            break;
        }
        n++
    }
    document.getElementById("txtNumber4").innerHTML = "Số nguyên dương nhỏ nhất: " + n
}
document.getElementById("btnNumber4").onclick = soNguyenNhoNhat



/**
 * bài 4: Tính tổng 
 * tạo biến n1 n2 lấy dữ liệu từ iput
 * tạo điều kiện vòng lặp
 * 
 *       => 
 *  
 */

function tinhTong(event) {
    event.preventDefault();
    var x = document.getElementById("n1").value;
    var n = document.getElementById("n2").value;
    var pow = 0;
    var S = 0;

    for (var i = 1; i <= n; i++) {
        pow = Math.pow(x, i)
        S += pow
    }
    document.getElementById("txtNumber5").innerHTML = "Tổng: " + S
}
document.getElementById("btnNumber5").addEventListener("click", tinhTong)

/**
 * 
 *  bài 5 :Tính Giai Thừa
 */
function tinhGiaiThua(event) {
    event.preventDefault();

    var num = document.getElementById("num").value;
    var content = 1;

    for (var i = 1; i <= num; i++) {
        content *= i
    }
    document.getElementById("txtNumber6").innerHTML = "Giai Thừa: " + content
}
document.getElementById("btnNumber6").addEventListener("click", tinhGiaiThua)


/**
 *  bài 6 : Tạo thẻ div
 */

function taoThediv() {
    var divs = document.getElementsByClassName("div1");

    for (var i = 0; i < divs.length; i++) {
        if (i % 2 == 0) {

            divs[i].style.background = "blue"


        } else

            divs[i].style.background = "red"

    }
    document.getElementById("txtNumber7").innerHTML = divs
}
document.getElementById("btnNumber7").onclick = taoThediv

/**
 * 
 */

function kiem_tra_snt(n) {
    // Biến cờ hiệu
    var flag = true;

    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2) {
        flag = false;
    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    }
    else {
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }

    return flag;
}

// Hàm in ra các số nguyên tố từ 1 tới n
function print_snt() {
    
    // Lấy number
    var number = document.getElementById("number").value;

    // Ép number sang kiểu INT
    number = parseInt(number);

    // Lặp để in kết quả
    var content = "";
    for (var i = 1; i <= number; i++) {
        // Nếu là số nguyên tố thì in ra
        if (kiem_tra_snt(i)) {
            content += i + ' <br/>';
        }
    }
    document.getElementById("result").innerHTML = content
}