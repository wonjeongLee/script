
}

let a=[1, 3, 9];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));
// 1 2 3 5 9
// 2 3 5 7 8//공통 원소 구하기
// function solution(arr1, arr2){
//     let answer = [];
//     n = arr1.sort().length;
//     m = arr2.sort().length;
//     let l = 0;
//     let P1 = P2 = 0;
//
//     if( n <= m )  l = n
//     else  l = m
//     console.log(l)
//
//    while(P1 < l && P2 < l){
//         if(arr1[P1] === arr2[P2]) {
//             answer.push(arr1[P1++])
//             P2 ++;
//         }else if (arr1[P1] < arr2[P2]){
//             P1 ++;
//         } else{
//             P2 ++;
//         }
//    }
//     return answer;