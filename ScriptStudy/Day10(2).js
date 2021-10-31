//등수 구하기
function solution(arr) {
    let c = 1;
    let score ='';
    //let n = arr.length;
    //let answer = Array.from({length : n} ,()=>1);    // 길이가 5인 arr 을 1인 배일로 초기화

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                c++;
            }
        }
        score += c;
        c=1;
    }
    return score;
}
let arr1 = [87, 89 ,92 ,100 ,76];
console.log(solution(arr1));
