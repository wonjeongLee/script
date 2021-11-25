//두 배열 합치기
function solution(arr1 , arr2){
    let answer = [];
    n = arr1.length;
    m = arr2.length;
    let p1=p2=0;        //포인터 정의

    while(p1 < n && p2 < m){
        console.log(arr1[p1])
        console.log(arr2[p2])
        if(arr1[p1] < arr2[p2]) answer.push(arr1[p1++])
        else answer.push(arr2[p2++])
    }

    while(p1<n) answer.push(arr1[p1++]);
    while(p2<m) answer.push(arr2[p2++]);

    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));