//회문 문자열
function solution(s){
    let answer = '';
    let text = s.toLowerCase();
    let one = text.split('');
    let two = text.split('');
    let two1 = two.reverse();

    let newText = text.split('').reverse().join('')   // reverse 로 배열에 입력하고 join으로 결합
    console.log(newText);

    // for(let i = 0; i < one.length; i++){
    //         if(one[i]===two1[i]){
    //             answer = 'YES'
    //         }else{
    //             answer = 'NO'
    //             break;
    //
    //     }
    // }

    let len = one.length;
    //reverse 함수 사용하지 않을 때
    // for (let i = 0; i < Math.floor(len/2); i++){
    //     if(one[i] === one[len-i-1])  answer = 'YES'
    //     else answer = 'NO'
    // }


            return answer;
    }
let str="sander";
console.log(solution(str));
