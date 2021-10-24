function solution(a,b,c) {
        let big = 0;
        let yes = 'YES';
        let no = 'NO';

        if (a>b){
            a = big;
            if(big>b+c){
                return yes
            }else{
                return no
            }
        }else if (a<b){
            b = big;
            if(big>a+c){
                return yes
            }else{
                return no
            }
        }else if(big<c){
            c = big;
            if(big>a+b){
                return yes
            }else{
                return no
            }
        }
    }

    console.log(solution(3,5,10));