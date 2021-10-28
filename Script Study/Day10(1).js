//점수 구하기
function solution(arr){
    let  score = 0;
    let c =0;

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == 1){
           score ++;
           if(arr[i]===arr[i-1])c++;
       }else{ c = 0; }
       score += c
    }
    return score;
}
let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));