//대문자 찾기
function solution(t){
    let a = t.split('');   // 문자열 -> 배열 || 배열->문자열 toString()
    let c = 0;

    for(let i = 0; i<a.length; i++){
        if(a[i]==a[i].toUpperCase()){    //a[i] 가 uppercase 일 경우
            c++;
        }
    }
    return c;
}
console.log(solution("KoreaTimeGood"));
