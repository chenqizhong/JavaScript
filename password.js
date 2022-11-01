//輸入密碼判定，最多4次
var password = 123456;                                  // 密碼
var passwordtop = 100000;                                    // 可輸入的次數上限
var keyinpasswordqty = 0;
var keyinPasswordQty = 0;                            // 已輸入次數
var outkeyun = false;                                   // 是否已超過輸入上限
var inpute;                                             // 輸入的密碼  

if
while
for
do while

while (password != inpute && !outkeyun) {
    //!outkeyun：outkeyun不等於false，所以就是ture那就會跑以下迴圈，如果已超過輸入上限，outkeyun !=ture 那就是 false 就會跳出迴圈
    keyinpasswordqty++;                                 //每跑一次迴圈。就增加一次輸入次數
    if (keyinpasswordqty <= passwordtop) {              //判斷如果輸入次數還沒超過上限，就再讓使用者輸入一次
        inpute = prompt(keyinpasswordqty + "請輸入密碼");
    }
    else {                                              // 否則把outkeyun改成ture
        outkeyun = true;
    }
}
if (outkeyun) {                                         //當outkeyun 變成 ture代表登入超出次數上限了
    alert("已超出登入次數");

}
else {                                                  //若沒超出上限，又跳出迴圈就代表登入成功
    alert("歡迎登入");
}


