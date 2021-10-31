//연필 한다스 문제 풀이
  function solution(a){
    let n = a;
    let nm1 ,pencil;

    nm1 = n/12;

    pencil  = Math.ceil(nm1); // 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환
    return pencil;
  }
  console.log(solution(25));
