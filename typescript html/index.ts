// 타입스크립트로 HTML 변경과 조작할 때 주의점

const titleEl = document.querySelector('#title');

// titleEl.innerHTML = '반가워요'

// 에러가 나는데 이게 아까 켜놓은 strict 옵션 덕분에 에러가 난다.
// 이유는 셀렉터로 html을 찾으면 타입이 Element | null 이기 때문에 그렇다고 한다.

// HTML 조작시 narrowing 방법 5개
// 1. 
if (titleEl !== null) {
  titleEl.innerHTML = '반가워요'
}
// 2. instanceof 연산자 ( 이걸 젤 많이 사용한다고 한다. )

if (titleEl instanceof Element) {
  // 오른쪽에 클래스명같은거를 기입 왼쪽이 오브젝트를 기입
  // 왼쪽에 있는게 오른쪽에 있는거에 자식(instance)? true : false 이렇게 뱉는다고 한다.

  titleEl.innerHTML = '반가워요'
}

// 3. as 키워드 사용 ( 비상시 100% 확실할 때 사용 )
// const titleEl = document.querySelector('#title') as Element;
//                        이 요소는                타입을 Element로 간주해주세요.

// 4. 오브젝트에 붙이는 ? ( optional chaining 연산자 )
if (titleEl?.innerHTML !== undefined) {
  titleEl.innerHTML = '반가워요'
}
// 무슨 뜻이냐면 
// js 신문법인데 뭔 뜻이냐면 왼쪽에 있는 object 자료안에 
// .innerHTML이 존재하면 그거 써주시고 없으면 undefined 남겨주세요~ 이다.
// 그래서 가끔 ?. 연산자로 해결할 때도 있다.

// 5. "strictNullChecks" 이거 꺼버리기 / 아니면 typescript 쓰지 말기

// a 태그는 이렇게 
const linkEl = document.querySelector('.link');

if (linkEl instanceof HTMLAnchorElement) {
  linkEl.href = 'https://kakao.com';
}

// 버튼 태그에 이벤트 걸기
const btnEl = document.querySelector('#button');
// btnEl?.addEventListener('click', function(){
  
// })

// Q1. 버튼을 누르면 이미지를 바꿔봅시다.
const imgEl = document.querySelector('#image');

const btnClick = () => {
  if (imgEl instanceof HTMLImageElement) {
    imgEl.setAttribute('src', './img/bonobono.jpg');
  }
}

btnEl?.addEventListener('click', btnClick);

// Q2. 바꾸고 싶은 html 요소가 많습니다.
/*
  <a href="naver.com" class="naver">링크</a>
  <a href="naver.com" class="naver">링크</a>
  <a href="naver.com" class="naver">링크</a>

  3개의 링크가 있는데 이 요소들의 
  href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.
  자바스크립트 코드를 어떻게 짜야할까요? 
*/

const anchorEls = document.querySelectorAll('.naver');

anchorEls.forEach((el) => {
  if (el instanceof HTMLAnchorElement) {
    
  }
})