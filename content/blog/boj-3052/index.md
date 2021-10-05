---
title: "백준 #3052 | Node.js | 나머지"
date: "2021-10-06T02:55:03.284Z"
description: "Node.js로 풀어본 백준 3052번 문제: 나머지"
---

![백준 3052번 문제 나머지. Node.js 풀이](./thumbnail.png)

## 문제

두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다.

수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

## 문제 난이도

<span style="color: #ad5600">브론즈 Ⅱ</span>

## 제한

| **시간 제한** | **메모리 제한** |
| ------------- | --------------- |
| 1초           | 128 MB          |

## 알고리즘 분류

- 수학
- 사칙연산

## 입력

첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.

## 출력

첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

## 예제 입력 1

각 수를 42로 나눈 나머지는 1, 2, 3, 4, 5, 6, 7, 8, 9, 10이다.

```
1
2
3
4
5
6
7
8
9
10
```

## 예제 출력 1

```
10
```

## 예제 입력 2

모든 수를 42로 나눈 나머지는 0이다.

```
42
84
252
420
840
126
42
84
420
126
```

## 예제 출력 2

```
1
```

## 예제 입력 3

각 수를 42로 나눈 나머지는 39, 40, 41, 0, 1, 2, 40, 41, 0, 1이다. 서로 다른 값은 6개가 있다.

```
39
40
41
42
43
44
82
83
84
85
```

## 예제 출력 3

```
6
```

## 풀이

```javascript
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const restSet = new Set(input.map(i => i % 42));
const result = [...restSet];

console.log(result.length);
```

이번 문제는 입력값에 42를 나눈 나머지 값들 중에서 중복되지 않는 값의 수를 구하는 것이였다.

1. `%` 연산자로 나머지를 구해서 결과 값을 배열에 담음
2. 유일한 값만을 저장하는 특성을 가진 `Set`에 1번에서 만든 배열을 넘겨서 중복 값 제거
3. 유일한 값만이 남은 `resetSet`에 spread operator를 이용하여 값을 빈 배열(`result`)에 펼쳐줌
4. `result`의 길이를 출력

## Comment

다양한 자료와 메소드를 알고 있는 것이 빠른 문제 해결의 길을 찾을 수 있다는 것을 느꼈다!

## References

- [나머지 연산자(%)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
