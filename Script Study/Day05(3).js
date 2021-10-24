//문자열 찾기
function solution(a,b){
    let n =0;
        for(let x of a){
            if(x===b) n++;
        }
    return n;
}
let text = 'COMPUTERPROGRAMMING';
let c = 'R';
console.log(solution(text,c));
