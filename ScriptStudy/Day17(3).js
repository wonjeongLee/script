//연속부분수열1
function solution(m,arr){

    // rt 증가시켜주면서 더함
    // 만약 6보다 커진다면 lt 를 빼줌
    // 6과 같아진다면 lt 를 증가시켜줌

        let answer=0, lt=0, sum=0;
        for(let rt=0; rt<arr.length; rt++){     //rt 증가
            sum+=arr[rt];
            if(sum===m) answer++;
            while(sum>=m){                      //sum 이 6보다 크면
                sum-=arr[lt++];                 // lt 증가 시킴
                if(sum===m) answer++;
            }
        }
        return answer;

}
let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

