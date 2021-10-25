//대소문자 변환
        function solution(t){
            let a = t.split('');
            for(let i = 0; i < a.length; i++){
                if(a[i] == a[i].toUpperCase()){
                    let l = a[i].toLowerCase();
                    a.splice(i,1,l);
                }else{
                        let u = a[i].toUpperCase();
                        a.splice(i,1,u);
                    }
                }
            return a;
        }

        // function solution(s){
        //     let answer="";
        //     for(let x of s){         //  for문 돌릴떄 간단하게 표현 가능
        //         if(x===x.toUpperCase()) answer+=x.toLowerCase();   // 추가할 때 += 로 추가 가능
        //         else answer+=x.toUpperCase();
        //     }
        //     return answer;
        // }

        console.log(solution("StuDY"));
