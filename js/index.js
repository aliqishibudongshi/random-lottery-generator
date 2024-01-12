//福彩双色球 红6个 1-33 ，蓝1个 1-16
//体彩大乐透 前区5个 1-35 ，后区2个 1-12

let frontArea = [];
let rearArea = [];
let result = {};
//获取button，答案框
let btns = document.querySelectorAll("button");
let answerArea = document.getElementById("answer");

function calculate(frontNum, rearNum, lotteryName){
    //前区
    frontArea = [];
    for(let i = 1; i <= frontNum; i++){
        let frontResult = frontNum == 5 ? Math.round(Math.random()*(frontNum * 7 - 1) + 1) : Math.round(Math.random()*((frontNum * 6 + 3) - 1) + 1);
        frontArea.push(frontResult);
    }
    //后区
    rearArea = [];
    for(let j = 1; j <= rearNum; j++){
        let rearResult = rearNum == 1 ? Math.round(Math.random()*(rearNum * 16 - 1) + 1) : Math.round(Math.random()*(rearNum * 6 - 1) + 1);
        rearArea.push(rearResult);
    }
    
    result = {"frontArea": frontArea, "rearArea": rearArea};
    console.log(result);
    answerArea.innerHTML = `
    <p>亲亲~${lotteryName}推荐的结果是：</p>
    <p>前区选择${result.frontArea}</p>
    <p>后区选择${result.rearArea}</p>
    <p>祝您一定中大奖！！！</p>`;
};

function lottery(lotteryName){
    if(lotteryName.target.value == "福彩双色球"){
        calculate(6, 1, "福彩双色球");
    }else if(lotteryName.target.value == "体彩大乐透"){
        calculate(5, 2, "体彩大乐透");
    }
}

//点击按钮，调用结果
for(let i = 0; i < btns.length; i++){
    btns[i].onclick = function(e){
        lottery(e);
    }
}


