//가장 긴 문자열 찾기
function solution(s){
    let a = '';
    let s1 = '';
    let arr = [];
    for(let i = 1; i<s.length; i++){
        a = s[0].length;
        if(s[i].length > a){
            a = s[i].length;
            s1 = s[i];
            arr.push(a);
            arr.push(s1);
        }
    }
    return arr;

}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
