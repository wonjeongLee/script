function solution(participant, completion) {
    var answer = '';
    let p1 =0, p2=0;
    let p = participant.sort();
    let c = completion.sort();

    while (p1 < p.length && p2 < c.length) {
        console.log(p1)
        if (p[p1] !== c[p2]) {
            answer.push(p[p1++]);
        }else {
            answer.push(c[p2++]);
        }
    }
    while(p1<p.length) answer.push(p[p1++]);
    while(p2<c.length) answer.push(c[p2++]);

    return answer;
}

let p = ["leo", "kiki", "eden"];
let c = ["eden", "kiki"];
console.log(solution(p,c));