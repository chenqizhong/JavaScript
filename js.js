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


function max_num(qty1,qty2,qty3){
    if(qty1>=qty2 && qty1 >= qty3){
       return qty1;
    }
    else if(qty2>=qty1 && qty2 >= qty3){
       return qty2;
     }
     else {
       return qty3;
     }
}

who=max_num(99,300,100);
document.write(who);