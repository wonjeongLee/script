// 문자열 함축
function solution(s){
    let answer=[];
    let ps = [];
    let p = 1;
    let s1 = s.split('');

    for(let i = 0; i < s1.length; i++){
        if(s1.indexOf(s1[i])===i){
            if(p !== 1)answer.push(p);
            p=1
            answer.push(s[i]);
        }else{
            p++;
        }
    }
    return answer.join('');
}
let str="KKHSSSSSSSE";
console.log(solution(str));