// 1. 실습 문제
function changeQuery(){
    // 함수의 실행 내용(로직)을 작성해 주세요.
    document.getElementById('silsub1').innerHTML = document.getElementById('result1').value;
}
// 2. 실습 문제
function checkOddEven() {
    var num = prompt("숫자를 입력하세요.");
    var result = "";
    
    if(isNaN(num)){
        result = "숫자가 아닙니다.";
    } else{
       num % 2 == 0 || (result = "홀수 입니다.");
       num % 2 == 0 && (result = "짝수 입니다.");
    }
    document.getElementById('silsub2').innerHTML = result;
}

// 3. 실습 문제
function changeImage(){
   // hint : setAttribute('속성명', '속성값');
   document.getElementById('image1')
   .setAttribute('src', '../resources/images/android.gif');

   /* or
   document.getElementById('image1').src
       = '../resources/images/android.gif';
       */
}

// 4. 실습 문제
function changeCSS(){
    document.getElementById('silsub3').style.color = "navy";
}

// 5. 실습 문제
function calculator(op){
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    //변수에 담겨진 값은 string 입니다. "10"
    //"10"을 숫자형으로 바꾸려면 Number() 함수를 사용하세요.
    
    var result;

    switch(op){
    case '+':	result = n1 + n2;	break;
    case '-':	result = n1 - n2;	break;
    case '*':	result = n1 * n2;	break;
    case '/':	result = n1 / n2;	break;
    case '%':	result = n1 % n2;	break;
    }

    document.getElementById("calc").innerHTML = result;

    // eval() 함수 사용 시...
    // var result = n1 + op + n2;
    // document.getElementById("calc").innerHTML = eval(result);
}

function finish(obj){
    obj.style.color ="MidnightBlue";
    document.getElementById('bun').style.display = "block";
}

// bundle 문제
function hanoiStart(){
    plates = document.getElementById('hanoi').value;
    resultDiv = document.getElementById('bundle_hanoi');
    cnt = 0;
    
    if(Number(plates) > 5 || Number(plates) < 1) alert("1 ~ 5 사이의 값을 입력해주세요.");
    else{
        resultDiv.innerHTML = "";
        hanoiLogic(plates, 'A', 'B', 'C');
        resultDiv.innerHTML += ("-------------------------<br>"
            + "총 원판 : "+plates+" 개<br>"
            + "최소 이동 횟수 : "+cnt+" 회<br><br>");
    }
}

var hanoiLogic = (plates, a, b, c) => {
    if (plates > 0) {
            hanoiLogic(plates - 1, a, c, b);
            resultDiv.innerHTML +="원판 [" + plates + "] : "+a+" -------&gt; " 
                  + c + "<br>";
            cnt++;
            hanoiLogic(plates - 1, b, a, c);
        } 
};