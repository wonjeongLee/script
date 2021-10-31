//격자판 최대합
function solution(arr){
    let first = 0;
    let second = 0;
    let third = 0;

    let max = [];

    for(let i = 0; i < arr.length ; i++){
        for(let j = 0; j < arr.length ; j++){
            //행의 합
            first += arr[i][j];

            //대각선의 합
            third = arr[0][0];
            third += arr[j+1][i+1];
        }
        max.push(first);
        //max.push(third);
        //sum1 += first + '/';
        first = 0;
        //third = 0;
    }
    //열의 합
    for(let i = 0 ; i < arr.length ; i ++){
        for (let j = 0 ; j < arr.length ; j ++){
            second += arr[j][i];
        }
        //sum2 += second + '/';
        max.push(second);
        second  = 0;

    }
    return max;
}

let arr=[[10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]];
console.log(solution(arr));