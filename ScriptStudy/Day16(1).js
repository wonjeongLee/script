//자리  수의 합
function solution(n, arr){
    //let b, max =0 , sum = 0 , answer;
    let answer, max=Number.MIN_SAFE_INTEGER;
    for(let x of arr){// 몫이 0이 될때까지
        //let sum=0, tmp=x;
        /*while(tmp){
            sum += tmp % 10;                       // 구한 나머지를 sum 에 대입
            tmp  = parseInt(tmp / 10);               // 나머지를 구한다

        }*/
        let sum=x.toString().split('').reduce((a, b)=>a+Number(b), 0);
        if(max < sum){
            max = sum
            answer = x;
        }else if(sum===max){
            if(x>answer) answer=x;
        }
    }
    return answer;

}
let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));