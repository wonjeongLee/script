//소문자를 대문자로 바꾸기
function solution(t){
  let a = t.split('');

  for(let i=0; i<a.length;i++){
    if(a[i]==a[i].toLowerCase()){
      let n = a[i].toUpperCase();
      a.splice(i,1,n);
      //splice()
        // : splice(i,1,n) i 번째에 1개 요소를 지우고 n 을 삽입
        // : splice(i,0,n) i 번째에  n 을 삽입
    }
  }
  return a;
}

console.log(solution("ItisTimeToStudy"));
