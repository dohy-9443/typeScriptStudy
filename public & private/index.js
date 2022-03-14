class User5 {
    constructor() {
        this.name = 'kim';
    }
}
let userOne = new User5();
userOne.name = 'park'; // 가능
console.log(userOne.name);
// class에서 쓰는 public 키워드
// - public 붙으면 모든 자식들이 사용가능
// 사실 public은 안붙여도 몰래 붙어있다고한다.
class User3 {
    constructor(a) {
        this.familyName = 'kim';
        this.name = this.familyName + a;
    }
    familyNameChange() {
        this.familyName = 'park';
    }
}
let userThree = new User3('park');
console.log(userThree);
// private 키워드를 붙이면 수정이 불가능함
// 무조건 class {} 중괄호 안에서만 수정 및 사용이가능하다.
// 심지어 class 부터 생산된 자식 object에서도 private가 붙은건 사용 불가능하다. (class 중괄호 내부가 아니니까)
// 만약 변경하고 싶으면 함수를 만들면 된다.
userThree.familyNameChange();
console.log(userThree);
// private는 데이터를 외부로부터 보호하고싶을 때 자주 사용하는 패턴이다.
// public 키워드 쓰면 this.어쩌구 생략가능
class User4 {
    constructor(name) {
        this.name = name;
    }
}
let userFour = new User4('kim');
