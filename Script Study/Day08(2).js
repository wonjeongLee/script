//반복되는 단어 찾기
function solution(arr){
    let answer = '';
    for(let i = 0 ; i < arr.length; i++){
        console.log(arr[i],arr.indexOf(arr[i]));
        if(arr.indexOf(arr[i]) === i){
            answer+= arr[i] + ',' ;;
        }
    }
    return answer;
}
let arr = ['good','time','good','time','student']
console.log(solution(arr));
