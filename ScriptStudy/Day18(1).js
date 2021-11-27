//연속부분수열2
// 합이 5이하가 되는 연속부분수열
function solution(m, arr){
    let answer = 0 , sum = 0;
    let lt = 0;

    // for(let rt = 0 ; rt < arr.length ; rt++){
    //     sum += arr[rt];
    //     while(sum=m){
    //         sum -=arr[lt++]
    //     }
    //     answer+=(rt-lt+1);
    // }
    // return answer;
    for(let rt=0; rt<arr.length; rt++){
        sum+=arr[rt];
        while(sum>m){
            sum-=arr[lt++];
        }
        console.log(rt-lt+1)
        answer+=(rt-lt+1);
    }
    return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));