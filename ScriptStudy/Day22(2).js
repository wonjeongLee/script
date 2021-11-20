function solution(p){
    let answer = true;

    // for(let i =1; i < p.length ; i ++){
    //     if(p[i].indexOf(p[0]) == -1){
    //         answer = 'true'
    //     }else {
    //         answer = 'false'
    //         break;
    //     }
    // }

    console.log(p.sort());
    p.sort();
    console.log(p)
    for(let i =0; i < p.length; i ++){
        for(let j = i + 1; j < p.length; j ++){
            console.log(p[j].indexOf(p[i]))
            if(p[j].indexOf(p[i]) == -1){
                continue
            }
            else{
                answer = 'false';
                break;
            }
        }
    }
    // let p1=p2=0;
    //
    // while(p1 < p.length && p2 < p.length){
    //     if(p[j].indexOf(p[i]) == -1){
    //
    //     }else(){
    //
    //     }
    //
    // }


    return answer;
}

// let p = [ "97674223", "1195524421","119"];
//let p = ["119", "114", "112", "123223123", "1231231234"]
let p = ["119", "1197674223", "115524421","1234","456","789","1235","567","88"]
//let p = ["123","456","789"];
console.log(solution(p));


// import java.util.Arrays;
// class Solution {
//     public boolean solution(String[] p) {
//     boolean answer = true;
//
//     // for(int i =0; i < phone_book.length; i ++){
//     //     if(phone_book[i].indexOf(phone_book[0]) == 0){
//     //         answer = false;
//     //         break;
//     //      }
//     // }
//
//     // for(int i =0; i < phone_book.length; i ++){
//     //     for(int j =0; j < phone_book.length; j ++){
//     //         if(phone_book[i].indexOf(phone_book[j]) == 0){
//     //             answer = false;
//     //             break;
//     //         }
//     //     }
//     // }
//
//     Arrays.sort(p);
//     for(int i =0; i < p.length; i ++){
//     for(int j = i + 1; j < p.length; j ++){
//     if(p[j].indexOf(p[i]) == -1){
//     continue;
// }
// else{
//     answer = false;
//     break;
// }
// }
// }
// return answer;
// }
// }