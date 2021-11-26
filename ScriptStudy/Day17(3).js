//연속부분수열1
function solution(m,arr){
    let p1=p2=0;            let a=[1, 2, 1, 3, 1, 1, 1, 2];
    console.log(solution(6, a));
    let answer = cnt = 0;
    let n = arr.length;
    console.lof(n)

    let b = 0;
    while(p1 < n && p2 < n){
        // p2 를 옮기면서 p1 에서 계속 더한다
        // 만약 더한값이 6을 넘긴다면 p1 증가시킨다.
        console.log(arr[p1]);
        b += arr[p2];
        p2++;
        if(b > 6) {
            cnt ++;
            p1++;
        }

    }
    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));