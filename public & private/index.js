class User2 {
    constructor() {
        this.name = 'kim';
    }
}
let userOne = new User2();
userOne.name = 'park'; // 가능
console.log(userOne.name);
