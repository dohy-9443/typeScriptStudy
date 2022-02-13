// 함수에 타입 지정하는 법 & void 타입
// 파라미터에 type 지정
function fun1(x) {
    return x * 2;
}
// return ( 반환값 ) 에 type 지정
function fun2(y) {
    return y * 2;
}
// 파라미터랑 return값에 type 지정
function fun3(z) {
    return z * 2;
}
// 함수에서 void 타입 활용가능
// void 는 return 없는거
// 실수로 return 하는 것을 막아준다.
function fun4(x) {
    1 + 1;
}
// 자바스크립트와 다른점
// 파라미터도 타입을 다 지정해놨으면 
fun4(2);
// 꼭 파라미터도 써줘야한다.
// 파라미터 옵션일 경우 (있을 수도 있고 없을 수도 있을 때)
// 파라미터 변수? :타입
function fun5(x) {
    1 + 1;
}
fun5();
// Q1 이름을 파라미터로 입려하면 콘솔창에 '안녕하세요 홍길동'을 출력
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 '이름이 없음' 출력
function q1(x) {
    if (x) {
        return console.log(`안녕하세요 ${x}`);
    }
    else {
        return console.log('이름이 없음');
    }
}
q1();
q1('홍길동');
// Q2 함수에 숫자 또는 문자를 집어 넣으면 자릿수를 세어 출력
function q2(x) {
    if (typeof x === 'number') {
        return `${x}`.length;
    }
    else {
        return x.length;
    }
}
q2(123);
q2('12345');
// q3 결혼 가능 확률르 알려주는 함수
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상','중','하')입력
// 2. 월소득 만원 당 1점 , 집보유시 500점 & 미보유시 0점 , 매력점수는 '상'일 때만 100점으로 계산
// 3. 총 점수가 600점 이상일 경우 '결혼가능' return 그 외엔 아무것도 return x
// 예시 결혼가능하냐 (700,false,'중') 이렇게 사용할 경우 '결혼가능'을 return
// 예시 결혼가능하냐 (100, false, '상') 이렇게 사용할 경우 아무것도return 되지 않음
function q3(pay, isHome, charm) {
    let total = 0;
    total += pay;
    if (isHome === true) {
        total += 500;
    }
    if (charm === '상') {
        total += 100;
    }
    if (total >= 600) {
        return '결혼가능';
    }
    else {
        return null;
    }
}
q3(700, false, '중');
q3(100, false, '상');
