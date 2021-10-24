function solution(a){
          let n = a;

          let sum = 0;
          for (let i = 1; n >= i; i++) {
              sum = sum + i;
          }
          return sum;
      }
      console.log(solution(6));
