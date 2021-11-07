//반복되는 단어 찾기
function solution(arr){
    let answer = '';
    // for(let i = 0 ; i < arr.length; i++){
    //     console.log(arr[i],arr.indexOf(arr[i]));
    //     if(arr.indexOf(arr[i]) === i){
    //         answer+= arr[i] + ',' ;
    //     }
    //
    // }
    answer=arr.filter((v, i)=>{
        //console.log(v, i);
        if(arr.indexOf(v)===i) return v;
    });
    return answer;
}
let arr = ['good','time','good','time','student']
console.log(solution(arr));
