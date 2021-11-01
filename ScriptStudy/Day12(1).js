function solution (arr){
    let dx = [-1,0,1,1];
    let dy = [0,1,0,-1];
    let c = 0;

    for(let i = 0 ; i < arr.length ; i++){
        for (let j = 0; j < arr.length; j++){

            for(let k = 0; k <dx.length; k++){
                for (let l = 0 ; l< dy.length; l++){
                    if(arr[i][j] > arr[i+dx[k]][j+dy[l]]) {
                        c++;
                    }
                }
            }


        }
    }
    return c;
}
let arr=[[5, 3, 7, 2, 3],
        [3, 7, 1, 6, 1],
        [7, 2, 5, 3, 4],
        [4, 3, 6, 4, 1],
        [8, 7, 3, 5, 2]];
console.log(solution(arr));