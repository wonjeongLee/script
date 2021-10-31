//보이는 학생
function solution(arr){
    let answer = 1;
    let max = arr[0];                 // ✨✨✨  max 값 선언
    for(let i = 1 ; i < arr.length; i++){
         if(max <  arr[i]) {
             answer += 1;
             max = arr[i];
         }else{
             continue;
        }
    }
    return answer;
}
let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));

