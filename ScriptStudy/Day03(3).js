//홀수
function solution(arr){
      let sum = 0;
      let min =arr[0];
      let answer = [];      // 두개의 값을 동시에 추출하기 위해서는 배열로 선언해서 return 하는것
      //홀수인애들은 합하고, 홀수인 애들 중에서 제일 작은 값
      for(let i = 0; i < arr.length;  i++ ){
          if(arr[i] % 2 == 1){
              sum = sum + arr[i];           //합
              if(min < arr[i]){
                  min = arr[i];
              }
          }
      }
      answer.push(sum);
      answer.push(min);
      return answer;
  }
  let arr = [12,77,38,41,53,92,85];
  console.log(solution(arr));