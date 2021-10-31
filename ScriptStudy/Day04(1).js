//10부제 차량
    function solution(a,arr) {
        let car = 0;
        for(let i =0; i < arr.length ; i++){
            let n = arr[i] % 10             //나머지를 보고 판단
            if(n === a){
                car +=1 ;
            }
        }
        return car;
    }

    let arr = [25,23,11,27,53,17,33]
    console.log(solution(3,arr));
