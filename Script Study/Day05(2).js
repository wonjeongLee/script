//A가 몇개 들어있는지 찾기
 function solution(s){
    const c = /A/gi;  //전체 문자열에서 바꿀거라는 정규식을 이용하여 변경
    let s1 = s.replace(c,'#');
        return s1;
}
let s = 'BANANA';
console.log(solution(s));
