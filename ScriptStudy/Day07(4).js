//가운데 문자 출력
    function solution(s){
        let a = s.split('');
        let n = Math.ceil(a.length / 2);        //Math.ceil 은 반올림 해주는 Math 함수
        let arr = [];
            if(a.length % 2 == 1){
                return a[n-1]
            }else{
                arr.push(a[n]) ;
                arr.push(a[n-1]);
                return arr;
            }
    }
    console.log(solution("book"));
