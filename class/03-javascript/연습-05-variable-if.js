//  데이터 타입, 연산자 실습

1 + 1
// 2
1 + "만원"
// '1만원'
1 + '1'
// '11'
1 - "1"
// 0
"코드" + "캠프"
// '코드캠프'
"123" == 123
// true
"123" === 123
// false
"123" !== 123
// true
true && true
// true
true && false
// false
false || true
// true
!false
// true
!true
// false

if(1+1 == 2){
    console.log("정답")
}else{
    console.log("오답")
}
// VM1009:2 정답
// undefined
if(true){
    console.log("정답")
}else{
    console.log("오답")
}
// VM1029:2 정답
// undefined
if(!true){
    console.log("정답")
}else{
    console.log("오답")
}
// VM1033:4 오답
// undefined
if(0){
    console.log("정답")
}else{
    console.log("오답")
}
// VM1107:4 오답
// undefined
if(1){
    console.log("정답")
}else{
    console.log("오답")
}
// VM1112:2 정답
// undefined
if(2){
    console.log("정답")
}else{
    console.log("오답")
}
// VM1117:2 정답

const profile = {
    name : "철수", 
    age : 12, 
    school : "다람쥐초등학교"
}
// undefined
if(profile.age >= 20){
    console.log("성인입니다.")
}else if(profile.age >= 8){
    console.log("학생입니다.")
}else if(profile.age > 0) {
    console.log("어린이입니다.")
}else{
    console.log("잘못 입력하셨습니다.")
}
// VM1915:4 학생입니다.