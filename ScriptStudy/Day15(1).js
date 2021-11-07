//가장 짧은 문자거리  ( 왼쪽 오른쪽 방향 생각하면서)
function solution(s, t){

    let answer =[];
    let a = s.split('');
    let p = 1000;

    for(let i = 0; i < a.length ; i++){
        if(a[i] === 'e') {
            p = 0;
        } else{
            p ++;
        }
        answer.push(p);
    }

    for (let j = a.length-1; j >= 0; j--){              //배열 거꾸로 이돌할 때 조건
        if(a[j] === 'e'){
            p = 0
        } else {
            p ++;
        }
        let n =  Math.min(p,answer[j]);
        answer.splice(j,1,n);
    }

    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));

1001, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0
