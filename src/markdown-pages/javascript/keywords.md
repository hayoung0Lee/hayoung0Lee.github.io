---
slug: "/javascript/keywords"
title: "JavaScript Keywords 정리"
---

## Keywords

### 기본형 타입 vs 참조형 타입

- 기본형 타입 `primitive type`: number, string, boolean, null, undefined, `Symbol`
- 참조형 타입 `reference type`: Object, Array, Function , Date, RegExp, `Map, WeakMap, Set, WeakSet`
- `여기` 있는것 es6에서 추가된 것을 의미
- 기본형과 참조형이 어떻게 다른가?
  - 기본형은 복사를 할때, 값자체를 복사한다. number를 복사하면 해당 숫자 `값` 자체를 복사한다는 말
  - 참조형은 복사를 할때, 주소를 복사한다. 긍께, `Array`를 복사하면 `값`이 아니라 `Array 자체의 메모리상의 주소`를 복사한다.
  - call by value랑 call by reference 차이다. Value를 넘기느냐, Reference를 넘기느냐
- JavaScript는 숫자를 정수형, 부동소수점형 이런거 구분없이 그냥 무조건 `64byte`할당한다.
- 메모리에서 변수가 저장이 되는 영역이 있고, 데이터 자체가 저장되는 영역은 따로 있다.
  - 이렇게 한 이유는 변수에 들어있는 데이터가 변할때 메모리 상의 공간을 더 차지할 수도 있는데, 변수와 데이터를 따로 저장하면 데이터가 변할때, 메모리의 새로운 공간에 데이터를 쓰고, 변수에는 이 새로운 공간의 주소만 업데이트 해주면 된다
  - 그리고 같은 데이터값은 서로 다른 변수가 공용으로 사용할 수 있어서 중복되는 값을 메모리의 여러 곳에 저장할 필요가 없어진다.

### 불변성이란? Immutability

- 메모리상에서 변경가능하지 않는 것
- number, string 등은 Immutable 하다. 왜?

  ```javascript
  let a = 1;
  a = 2;
  ```

  이때 보면 a의 값이 변했으니 number가 어째서 immutable 한가 싶을 수 있다. 하지만 1 이 저장된 메모리상의 공간 자체를 찾아가서 2라고 값을 업데이트 하지않는다.
  메모리의 새로운 공간에 2라는 값을 저장하고, 변수영역은 새로운 주소를 가진다. 즉 값 자체는 `Immutable`하다.

### 참조형이 메모리에 생성되는 과정

```javascript
let arr = {
  a: 1,
  b: [1, 2, 3],
};
```

이렇게 있다면 arr은 변수영역에 저장된다.

그리고 JavaScript는 얘가 데이터 뭉치라는 것을 보고 `데이터 뭉치가 들어갈 메모리 상의 공간을 확보`하고 `이 공간의 주소를 데이터 영역에 저장`한다음, 이 값이 저장된 곳의 주소를 `arr이 참조`한다.

### 불변 객체를 만드는 방법

- 얕은 복사가 아니라 깊은 복사를 하기 위해 순회를 하거나 라이브러리를 쓸 수 있다. [immer vs immutable.js](https://praxent.com/blog/immer-js-for-immutability-react)

### undefined vs null

[undefined vs null](https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript)

- undefined: 값이 없는거
- null: 이건 선언해야한다. 아무값도 아니라고

### Reference

[코어 자바스크립트 책](http://www.yes24.com/Product/Goods/78586788?OzSrank=1)
[JavaScript.info](https://ko.javascript.info/js)
