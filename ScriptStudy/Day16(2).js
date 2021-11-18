//뒤집은 소수 만들기
function isPrime(num){                                      // 소수는 1과 자기자신만이 약수가 되어야 함
    if(num ===1 ) return false;
    for(let i = 2 ; i < parseInt(Math.sqrt(num)) ; i++){    // 제곱근 까지 보면 됨
        if(num % i === 0)     return false
    }
    return true;
}
function solution(arr){
    let answer = [];
    for(let x of arr){
        let a = Number(x.toString().split('').reverse().join(''));
        if(isPrime(a)) answer.push(a);
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));