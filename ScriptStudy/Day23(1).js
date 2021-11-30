//두 배열 합치기
//LeetCode
function solution(arr1 , arr2){
    let answer=[];
    let p1 = p2 = 0;
    let a = arr1.length;

    while(p1 < a && p2 < a ){
        if(arr1[p1] < arr2[p2] ){
            answer.push(arr1[p1++]);
        }else{
            answer.push(arr2[p2++]);
        }
    }

    while(p1 < a )answer.push(arr1[p1++]);
    while(p2 < a )answer.push(arr2[p2++]);

    return answer;
}

list1 = [1,2,4],
list2 = [1,3,4]
console.log(solution(list1, list2));

//[1,1,2,3,4,4]