// data.js 를 참조해서 작업
import { questions } from "./data.js";
const numberElement =document.querySelector('.number')
const questionElement = document.querySelector('.qusetion')
const choice1 = document.querySelector('.choice1')
const choice2 = document.querySelector('.choice2')
const progressValue = document.querySelector('.value')

// 현재 문제 번호를 변수로 만들기
let currentNumber = 0;
// mbti 결과를 저장 할 변수
let mbti ='';

function rederQusetion(){
let question = questions[currentNumber];
  // data.js의 첫번째 질문의 번호
  numberElement.innerHTML = question.number;
  questionElement.innerHTML = question.question;
  choice1.innerHTML = question.choices[0].text;
  choice2.innerHTML = question.choices[1].text;
  progressValue.style.width = ((currentNumber +1) * 10) + '%';
  
}
// 현재 페이지 로딩시 실행되는 스크립ㅌ츠
rederQusetion();
// 처리 절차
// 1. 어느버튼이 눌렸는지 확인가능(이벤트 리스너 달아줘야함)
// 1. 아래 쪽 버튼 두개 중 한개를 클릭 하면 
// -- 다음문제를 보여줘..
// mbti 타입 저장
// 버튼에 이벤트 리스너 달기



choice1.addEventListener('click',
  // 콜백함수 (callback function)
  function() {nextQuestion(0)});

choice2.addEventListener('click',() => nextQuestion(1)); 



function nextQuestion(choice){
  // 1. mbti = istj
  // 2.10문제 문항을 모두 선택하면 문제가 없습니다 =>alert 출력

  // 전체 배열의 수를 출력
 if(currentNumber < questions.length-1){
  
  
  let question = questions[currentNumber];
  
  // mbti 결과 생성(버튼 눌렀을때 처리 =>보류)
  mbti = mbti + question.choices[choice].value
  console.log("MBTI :" + mbti);
  currentNumber ++;
  rederQusetion();
}
  else {
    // mbti 검사 결과를 보여줄 페이지로 이동
    window.location.href ='./results.html?str=' + mbti + '&name=장원영';
    return;
  }
} 





