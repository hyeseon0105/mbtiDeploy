import { results, mbtis } from "./data.js";

// 1. str=infj 중에 infj 를 추출
// 2. infj가 data.js mbti 값 중 몇번째 값인지 확인
// 결과 infj=2
// 3.결과값과 일지하는 results배열에서 2번쨰 배열값을 가져와서 출력
const resultMBTI = new URLSearchParams(location.search).get('str');
console.log('resultMBTI = ' + resultMBTI);

console.log(resultMBTI +'MBTI 값은 : ' + mbtis[resultMBTI]);

// mbti 값을 색인 값으로 전환 처리
let findIndex = mbtis[resultMBTI]

// 색인 값으로 result에서 찾기
let find = results[findIndex];

const title = find.title;
console.log(title);


// 각위치에 있는 태그 위치 가져오기
const titleE1 = document.querySelector('.page-title');
titleE1.innerHTML =title;

// 캐릭터 종류
const characterE1 = document.querySelector('.character');
// src="./images/result_character1.png"
// data js
// character: '/images/result_character1.png',
const resultImgUrl = find.character;
console.log(resultImgUrl)
characterE1.src = resultImgUrl;

// 결과 4개 얻어오기
const boxElement =document.querySelectorAll('.box')
console.log(boxElement[3]);
// boxElement 배열을 순회하면서 값을 넣어주면된다
boxElement.forEach((X, index) => {
  console.log(find.results[index]);
  X.innerHTML = find.results[index];
})

// 직업상자 결과 연결
const jobs = document.querySelectorAll('.job')

jobs.forEach((x,i) => {
  x.innerHTML = find.jobs[i];
})

// 결과에 따른 lectureImg 연결
const lectImg = document.querySelector('.lecture img')
lectImg.src = find.lectureImg;


// 결과에 따른 lectureurl연결
const lectUrl = document.querySelector('.lecture')

lectUrl.href = find.lectureUrl;
console.log(find.lectureUrl);