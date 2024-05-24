//for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.
//for (let i = 0.1; i < 1; i = i + 0.1); console.log(i);
for (let i = 0.1; i < 1; i = i + 0.1) console.log(Number(i.toFixed(1)));

//1~10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오.
//Math.sqrt() 사용, 무리수만 출력! (무리수만 출력 보류..)
for (let i = 1; i <= 10; i = i + 1)
  console.log(i, Number(Math.sqrt(i).toFixed(3)));
