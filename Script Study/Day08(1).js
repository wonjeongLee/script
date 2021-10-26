//반복되는 문자열 찾기
function solution(t){
    let answer='';
    for(let i = 0; i< t.length ; i++){
        //console.log(t.indexOf(t[i]);

        //indexOf() ->헤당 문자열 안에서 () 안에 있는 문자의 위치를 알려줌
        //            만약 같은 문자를 찾았다면 , 결과값은 0이 된다
        if( t.indexOf(t[i]) !== i ){
            //t.slice(0,i-1);
            answer+=t[i];
        }
    }
    return answer;
}
console.log(solution("ksekkset"));



