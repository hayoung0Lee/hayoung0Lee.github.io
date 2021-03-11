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

### 실행 컨텍스트(execution context)란?

- `실행 컨텍스트`: 실행할 코드에 제공할 환경 정보들을 모아놓은 객체
- `콜 스택`: `실행 컨텍스트`가 순서대로 쌓이는곳. 위에꺼부터 꺼내서 실행한다

### 활성화된 실행 컨텍스트가 가지는 정보

- `VariableEnvironment`: 최초의 스냅샷
- `LexicalEnvironment`: 변경사항이 계속 반영

  - `environmetRecord`:
    - 현재 컨텍스트 내의 식별자 정보를 저장하는 것. 내부전체를 읽고 순서대로 데이터를 수집하는데 이걸 `hoisting(호이스팅)`이라고 한다. 마치 변수를 젤 위에 모아서 선언해놓은 느낌
  - `outerEnvironmentReference`:

    - 어떤 컨텍스트가 활성화 될때, 이 활성화되는 환경(직전 컨텍스트)의 `lexical environmet`, 즉 현재 상태를 가리키는 것.
    - 이전 실행 컨택스트를 가리킨다고 생각

    ```javascript
    let a = 1;
    function funcA() {
      // funcA
      console.log(a); // (1)
    }
    funcA();

    console.log(a);
    ```

    전역컨텍스트는 `outerEnvironmentReference`가 없다. 그런데 funcA는 전역 컨텍스트가 호출하기 때문에, 전역객체의 `lexical environmet` 지금 상태를 가리킨다.
    그래서 (1) 에서 a가 funcA 내에 없기때문에 `outerEnvironmentReference` 얘를 타고 참조해서 전역객체의 a 값을 읽어온다.

- `ThisBinding`: this가 뭔지
  - 컨텍스트가 활성화 될때 뭐 딱히 지정안했으면 전역객체다. 브라우저에서는 `window`, node 에서는 `global`

### 함수 선언문과 함수 표현식

```javascript
// 함수 선언문 방식: function 함수이름 일케만 쓴다.
function a() {}
a();

let b = function () {}; //함수표현식인데, 함수에 이름은 없다. 이렇게쓸때는 이름을 안써도 된다.

let c = function d() {}; // 이렇게도 된다
```

- 호이스팅할때 함수 선언문 방식은 함수 전체가 호이스팅 되지만, 함수표현식의 경우에 변수만 호이스팅되고, 함수자체는 나중에 해당 위치에서 할당된다고 생각하면 된다.

### 스코프

[상세](https://poiemaweb.com/js-scope)

- `let, const` 키워드를 쓰면 다른 언어와 같이 block단위의 스코핑을 지원하는데 var를 쓰면 함수단위로 스코핑한다. let, const를 사용하자

### this

JavaScript에서 제일이해안되던 `this`. 지금도 딱히 잘되진 않는데 다시한번 정리

- JavaScript에서 `this는 실행 컨텍스트가 생성될때, 즉 함수가 호출될때` 생성된다

  - 그래서 함수 호출 방식에 따라 `this 가 뭔지 달라진다`

- 전역 공간에서의 this:

  - window, 또는 global
  - 전역 컨텍스트를 생성하는 주체는 전역객체라고 정의되어있음

- 함수로 호출하거나 메서드로 호출할때의 this

  - 함수로 호출하면 `호출한 실행컨텍스트가 this`: 지정을 안하면 global/window다
  - 메서드로 호출하면 `.앞에 붙어있는 객체 명이 this`: 호출 주체는 .앞에 있는거

    ```javascript
    let func = function (x) {
      console.log(this, x);
    };

    func(1); // 함수로 호출한것, 이때 생성되는 실행 컨텍스트 내의 this는 별도로 지정을 안해주면 window/global이다

    let obj = {
      method: func,
    };
    obj.method(1); // 이렇게 .앞에 있는게 메소드로 호출한 것, 이때의 생성되는 실행 컨텍스트 내의 this는 obj이다.
    ```

- 함수 호출방식을 할때 this가 전역객체가 되는 문제

  - 일단 좀 뭔가 이상한것같다.
  - 그래서 이걸 해결하는 방법들이 있다(메서드 내에서 함수 호출을 할때 this가 전역객체가 되는 문제를 해결)
  - 호출 주체가 엇을때 호출하는 주변환경의 this(호출한 실행컨택스트의 this)를 상속받는 방법

    - `ES6`: arrow 함수는 this를 아예 바인딩을 안해서, 객체를 타고 올라가서 상위의 this를 사용할 수 있게된다.(this 가 아예 없는 것)

    ```javascript
    let obj = {
      outer: function () {
        console.log("outer의 this", this); // 이 this를 기억해보자!

        let innerFunc = () => {
          console.log("innerFunc의 this", this); // 얘도!!
        };

        innerFunc(); // 얘는 arrow function 이라 아예 this를 바인딩 자체를 안한다. 그러면 innerFunc의 실행 컨텍스트 내에서 this를 호출하면 없으니까, innerFunc를 호출한 outer 객체를 참조하고 여기의 this값을 그대로 읽어올 수 있다.
      },
    };

    obj.outer();
    ```

  - 명시적으로 `call, apply, bind` 함수로 명시적으로 this를 지정할 수 있다
  - [call vs apply vs bind](https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind#:~:text=Call%20invokes%20the%20function%20and,and%20any%20number%20of%20arguments.)
    - call, apply: 즉시 호출
    - bind: 새로운 함수를 만들기만 함

### Callback 함수

- 인자로 넘겨지는 함수
- 넘겨받은 함수에서 언제 실행할지 제어한다.
- 이를 통해 비동기처리같은걸 하곤한다
- 특별한 경우말고는 콜백 함수는 함수이기때문에 별다른 지정을 안하면 this가 전역객체가 된다

### 콜백지옥과 비동기 제어

- 동기적인 코드는 현재 실행중인거 하고, 다음거 하는 것
- 비동기적: 뭔 이유에선가 코드가 완료되던 말던 다음코드로 넘어가는건데, 대부분 cpu 계산시간이 길거나, 이벤트가 발생하거나 하는거를 처리할때 비동기적으로 처리한다
- 비동기 제어를 위해 `ES6에서 Promise/Generator` 가 도입, `ES2017에서는 async/await`가 도입됬다
- [mdn promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [promise 읽어보기](https://ko.javascript.info/promise-basics)
  - promise.then은 또다른 promise를 반환하기 때문에 chaining 할수있다. 아니면 그 내에서 아예 새로운 promise를만들어도 된다. 값을 반환하더라고 Promise.resolve(1) 이런식으로 반환된단 말

### 클로저

- 어떤함수에서 선언한 변수를 참조하는 내부함수에서 발생하는 현상. 외부함수를 lexical environment의 outerEnvironmentReference를 통해서 접근할 수 있는데, 이렇게 참조하는 변수는 내부함수에서 사용하는 동안은 외부함수의 실행컨텍스트가 지워질때도 가비지 콜렉터가 정리하지 않기 때문에 일어나는 일

> 클로저란
> 어떤 함수 A에서 선언한 변수 a를 참조하는 내부함수 B를 외부로 전달할 경우 A의 실행 컨텍스트가 종료된 이후에도 a가 사라지지 않는 현상

```javascript
let outer = (function () {
  let a = 1;
  let inner = function () {
    return ++a;
  };
  return inner;
})();

console.log(outer());
console.log(outer());
outer = null; //참조를 끊으면 갈비지 콜렉팅 당함
```

### 커링 함수(currying function)

- 여러개의 인자를 받는 함수를 하나의 인자만 받는 함수로 나눠서 순차적으로 호출될 수 있게 체인 형태로 구성

```javascript
let curry3 = function (func) {
  return function (a) {
    return function (b) {
      return func(a, b);
    };
  };
};

let getMaxWith = curry3(Math.max)(10);
console.log(getMathWith(8));
```

- 필요한 인자 개수만큼 함수를 만들어서 리턴해주면서 사용이 가능해서, 직접 만들어 쓰기 좋음
- `지연 실행 lazy execution`: 당장 필요한 ㅂ정보만 받아서 전달하다가 마지막인자가 넘어갈때까지 실행을 미루는 것이 됨
- 클로저는 본질적으로 메모리를 계속 차지하는 개념이므로 더는 사용하지 않게 된 클로저에 대해서는 메모리를 차지하지 않도록 관리해줘야한다.

### Reference

- [코어 자바스크립트 책](http://www.yes24.com/Product/Goods/78586788?OzSrank=1)
- [JavaScript.info](https://ko.javascript.info/js)
