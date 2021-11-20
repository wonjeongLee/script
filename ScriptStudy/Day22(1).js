function solution(participant, completion) {
    var answer ='';
    let p1 =0, p2=0;
    participant.sort();
    completion.sort();

    for(let i = 0 ; i < participant.length ; i++){
        if(participant[i] != completion[i]) {
            answer = participant[i];
            break;
        }
    }
    return answer;
}

let p = ["leo", "kiki", "eden"];
let c = ["eden", "kiki"];
console.log(solution(p,c));