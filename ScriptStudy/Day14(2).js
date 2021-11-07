//숫자만 출력
function solution(str){
    let answer="";
    for (let i of str){                     //이 구문은 문자열을 반복하는 for 문
        if(!isNaN(i))   answer += i
    }
    return parseInt(answer);
}
let str="g0en2T0s8eSoft";
console.log(solution(str));