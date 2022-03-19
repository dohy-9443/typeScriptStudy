
// class 복사하고 싶으면 extends 붙이면 된다.
// 기존 class와 비슷한 class를 많이 만들어야할 때 사용

// 복습 private 붙이면 class {}  안에서만 사용 가능

// private와 유사한 protected

class User4 {
  protected x = 10;
}

class User5 extends User4 {
  doThis() {
    this.x = 20;
  }
}

// protected: extends된 class는 사용가능, 자식들 사용불가
// private: extends된 class는 사용불가능, 자식들 사용불가
