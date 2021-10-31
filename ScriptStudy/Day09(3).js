//가위바위보
function solution(a, b){
    let answer = '';
    for(let i =0 ; i < a.length ; i++){
        if (Math.abs(a[i]-b[i])===2){
            if(Math.min(a[i],b[i])===a[i]) answer+= 'A'
            else answer+='B'
        }
        else if(a[i]-b[i]  < 0 ) answer += 'B'
        else if(a[i]-b[i]  > 0 ) answer+= 'A'
        else answer +='D'

    }
    return answer;
}
let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));
