function solution(arr) {
        let min = arr[0];
         for (let i = 0; i < arr.length; i++) {
             if (arr[i] < min) {
                 min = arr[i];
             }
         }
         let answer =  min;
         return answer;
     }

/*     function solution(){
         let answer = Math.min(...arr);  -- 전개 연산자(배열을 입력할 경우 안들어가지므로 ... 을 넣는다)
         let answer = Math.min.apply(null, arr); --전개 연산자를 사용하지 않을 경우
         console.log(Math.max(...arr));
         return answer;
     }*/

    let arr = [5,3,11,1,3,2,9]
    console.log(solution(arr));