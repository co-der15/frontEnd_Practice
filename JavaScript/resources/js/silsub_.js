/*
    352 Class JS code
    파일 명 : silsub_.js
    작성자  : 홍길동
    작성일  : 2021-09-01
    내용    : 352반 실습용 코드
        재배포 및 수정 불가
*/
// 실습 문제 스크립트 작성부
function test1(){
    // 함수의 실행 내용(로직)을 작성해 주세요.
    var prblem = document.getElementById('silsub1');
    var answer = document.querySelector('#result1').value;
    // INSERT INTO EMPLOYEE VALUES ('100', '홍길동', 'HR부서', 2000000, 0.1);
    prblem.innerHTML = answer;
}

function test2(){
    // 함수의 실행 내용(로직)을 작성해 주세요.
    var ori = 507000;
    var quan = document.getElementById('quan').value;

    var price = document.getElementById('price');
    price.innerHTML = ori * quan;
}

function test3(op){
    // 함수의 실행 내용(로직)을 작성해 주세요.
    // hint : console.log(op);
    // if-else / switch 사용!
    var num1 = Number(document.querySelector('#num1').value);
    var num2 = Number(document.querySelector('#num2').value);
    var calc = document.querySelector('#calc');
    var result = 0;
    switch(op){
        case '+' : result = num1 + num2; break;
        case '-' : result = num1 - num2; break;
        case '*' : result = num1 * num2; break;
        case '/' : result = num1 / num2; break;
        case '%' : result = num1 % num2; break;
    }

    calc.innerHTML = (isNaN(result) ? "숫자가 아닙니다." : result);
}