//7난쟁이 (가짜 난쟁이 고르기)
function solution(arr){
    let a = 0;
    let sum = arr.reduce((a,b) => (a+b));//배열안의 숫자들은 for 문으로 더하면 안되고 reduce 문으로 더할것

    for(let i=0; i<8;i++){  // 범위
        for(let j =i+1;j<9;j++){ //범위 계산
            a = sum - (arr[i]+arr[j]);
            if(a === 100) {
                arr.splice(j,1); // j 먼저 뺴야함
                arr.splice(i,1);
            }
        }
    }
    return arr;
}
let arr = [20,7,23,19,10,15,25,8,13];
console.log(solution(arr));
