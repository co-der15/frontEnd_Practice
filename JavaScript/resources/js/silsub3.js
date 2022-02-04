/*
	실습 문제 3: javascript 파일
	작성자 : 홍길동
	작성일 : 2021-09-06
	스크립트 설명 :
	   실습3 에 해당하는 자바스크립트 파일입니다.
*/
function showDiv(element){
    // 요구한 내용을 변수, 연산자, 제어문 등을 사용하여 실행되게 하세요.
    // 제목 체크시, titleBox 만 보여지게
    // 날짜 체크시, dateBox 만 보여지게
    // 작성자 체크시, writerBox 만 보여지게 함

   hideElement();
   document.getElementById(element.value + 'Box').style.display = 'block';
}

function hideElement(){
   var list = document.getElementsByClassName('box');
   for( var i = 0 ; i < list.length ; i++) {
       list[i].style.display = 'none';
   }
}