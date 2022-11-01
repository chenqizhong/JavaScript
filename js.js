// 註解
/*
//計算機
var num1=prompt("請輸入數字1");
var num2=prompt("請輸入數字2");
num1=parseInt(num1);
num2=parseInt(num2);
document.write(num1+num2);

//這是一樣的意思
var num1=prompt("請輸入數字1");
var num2=prompt("請輸入數字2");
document.write(Math.round(+num1)+(+num2));
*/

/*
var ohho=[20,30,40,50,"瓜瓜"];
ohho[4]="50";
document.write(ohho.length);
*/

/*
function add(qty1,qty2){
//   document.write(qty1 + qty2)
    return  qty1 + qty2;
}

document.write( add(5,2) * 3);
*/

/*
function max_num(qty1,qty2,qty3){
    document.write(Math.max(qty1,qty2,qty3));
}

max_num(20,30,499);
*/




// function qty(qty1,qty2,qty3){
//   if(qty1>qty2 && qty1>qty3){
//     return qty1;}
//   else if (qty2>qty1 && qty2>qty3){
//     return qty2;}
//   else{
//     return qty3;}
//   };
  
//   whoisbig=qty(20,50,40);
//   document.write(whoisbig);


// function aa(a1,a2,a3){
//   document.write(Math.max(a1,a2,a3));
// }
// aa(550,4000,60);



// function max_num(qty1,qty2,qty3){
//   document.write(Math.max(qty1,qty2,qty3));
// }

// max_num(20,30,499);


//物件 [object]
// var person = {
//   name:"我",
//   qty:60,
//   is_male:true,
//   print_name:function(){
//     document.write(this.name);
//   }
// };

// document.write(person.qty)


//while

// var i=1
// while(i<=99){
//   document.write(i);
//   document.write("</br>");
//   i=i+1; 
// }

//無限登入程式

//先制定一些條件變數
// var password = 123456;   // 密碼
// var passwordtop = 4;     // 可輸入的次數上限
// var keyinpasswordqty = 0;// 已輸入次數
// var outkeyun=false;      // 是否已超過輸入上限
// var inpute;              // 輸入的密碼  

// while(password!=inpute && !outkeyun){  //!outkeyun：outkeyun不等於false，所以就是ture那就會跑以下迴圈，如果已超過輸入上限，outkeyun !=ture 那就是 false 就會跳出迴圈
//   keyinpasswordqty++;                  //每跑一次迴圈。就增加一次輸入次數
//   if(keyinpasswordqty<=passwordtop){   //判斷如果輸入次數還沒超過上限，就再讓使用者輸入一次
//     inpute=prompt(keyinpasswordqty+"請輸入密碼"); 
//   }
//   else {           // 否則把outkeyun改成ture
//      outkeyun=true;
//     }
//   }
// if (outkeyun){    //當outkeyun 變成 ture代表登入超出次數上限了
//   alert("已超出登入次數"); 
// }
// else{     //若沒超出上限，又跳出迴圈就代表登入成功
// alert("歡迎登入");}


