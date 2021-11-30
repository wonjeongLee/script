//해당 배열에서 target 이 되는 수의 합이 되는 값의 자릿수 구하기
//LeetCode
function solution (arr , t){
    let answer = [];
    let n = arr.length;
    let p1 = 0;
    let num = 0;

    while(p1 < n){
        while(num == t){
            num += arr[p1++];
            answer.push(p1);
            num = 0;
        }
    }
    return answer;
}
let num = [3,2,4];
let target =  6;
console.log(solution(num , target))