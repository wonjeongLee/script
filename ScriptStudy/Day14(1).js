// 유효한 펠린드롬
function solution(s){
    let answer = 'YES';
    let s1 = s.toLowerCase().replace(/[^a-z]/g,'')  //문자가 아닌것들은 다 '' 처리
    let s2 = s.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim,'')
    let s3 = s.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim,'')
    let s4 = s.toLowerCase().replace(/[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/g,'')

    if(s1.split('').reverse().join('') !== s1) return answer = 'NO'  //reverce 는 배열 처리할때
    console.log(s1)
    console.log(s2)
    console.log(s3)
    console.log(s4)
    return answer;

}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));