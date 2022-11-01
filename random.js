//  function anayqty() {
//      document.getElementById("danana1").innerText = Math.round(Math.random() * 49);
//      document.getElementById("danana2").innerText = Math.round(Math.random() * 49);
//      document.getElementById("danana3").innerText = Math.round(Math.random() * 49);
//      document.getElementById("danana4").innerText = Math.round(Math.random() * 49);
//      document.getElementById("danana5").innerText = Math.round(Math.random() * 49);
//      document.getElementById("danana6").innerText = Math.round(Math.random() * 49);
//      document.getElementById("danana7").innerText = Math.round(Math.random() * 49);
//  }

var number = [1,1,1,1,0,0,0];
var lotteryNumber = 0;
var randomNumber = 0;
function anayNumber(){
    if (lotteryNumber < 7) {
        while (number[lotteryNumber] < 7) {
            if (randomNumber = number[0]){
                randomNumber=Math.round(Math.random()*49);
            }
            else if (randomNumber = number[1]){
                randomNumber=Math.round(Math.random()*49);
            }
            else if (randomNumber = number[2]){
                randomNumber=Math.round(Math.random()*49);
            }
            else if (randomNumber = number[3]){
                randomNumber=Math.round(Math.random()*49);
            }
            else if (randomNumber = number[4]){
                randomNumber=Math.round(Math.random()*49);
            }
            else if (randomNumber = number[5]){
                randomNumber=Math.round(Math.random()*49);
            }
            else if (randomNumber = number[6]){
                randomNumber=Math.round(Math.random()*49);
            }
            else{
            number[lotteryNumber] = randomNumber;
            lotteryNumber++;
        }            
        }
    }
    else {
        document.getElementById("number1").innerText = number[0];
        document.getElementById("number2").innerText = number[1];
        document.getElementById("number3").innerText = number[2];
        document.getElementById("number4").innerText = number[3];
        document.getElementById("number5").innerText = number[4];
        document.getElementById("number6").innerText = number[5];
        document.getElementById("number7").innerText = number[6];
    }
};


/*document.getElementById("danana1").innerText = number[0];
document.getElementById("danana2").innerText = number[1];
document.getElementById("danana3").innerText = number[2];
document.getElementById("danana4").innerText = number[3];
document.getElementById("danana5").innerText = number[4];
document.getElementById("danana6").innerText = number[5];
document.getElementById("danana7").innerText = number[6];
*/

/*
//樂透選號用while迴圈的寫法var 
lottery = [];
var n;
//跑迴圈，直到lottery陣列選滿6個號碼
while (lottery.length <6){
   //隨機選出1~49之間的數字
   n = Math.floor(Math.random()*49)+1;
   //如果選出來的n不存在，就放入lottery陣列中
   if(lottery.index[n] === -1){
       lottery.push(n)
 }
}*/