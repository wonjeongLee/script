//격자판 최대합
function solution(arr){
    let first = 0;
    let second = 0;
    let third = 0;
    let third1 =0;

    for(let i = 0; i < arr.length ; i++){
        for(let j = 0; j < arr.length ; j++){
            //행의 합
            first += arr[i][j];
            //열의 합
            second += arr[j][i];
        }
        first = 0;
        second  = 0;
    }
    //대각선의 합
    third = 0;
    third1  = 0;
    for(let i = 0 ; i < arr.length ; i ++){
            third += arr[i][i];
            third1 += arr[i][arr.length-i-1];

    }
    let max1 = Math.max(first,second,third,third1);
    return max1;
}
let arr=[[10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]];
console.log(solution(arr));