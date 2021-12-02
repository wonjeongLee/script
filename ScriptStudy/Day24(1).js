//해당 배열에서 target 이 되는 수의 합이 되는 값의 자릿수 구하기
//LeetCode
function solution (arr , t){
    let answer = nArr = [];
    let n = arr.length;
    let p1 = p2 = 0;
    let num = 0;

    // 배열을 배열의 길이까지 돌면서
    // 시작하는 수부터 끝나는 지점까지 더한다.
    // target 값과 같아지면 처음 숫자를 뺀다.
    while(p2 < n){
        num += arr[p1];
        nArr.push(p1);
        // console.log(nArr)
        // console.log(num)
        if ( num == Number(t)){
            answer = nArr;
            break;
        }else(
            p1++
        )
    }
    return answer;
}
let num = [2,4,3];
let target = 6;
console.log(solution(num , target))
