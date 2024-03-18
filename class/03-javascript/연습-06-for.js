let persons = [
    {name : "철수", age:17},
    {name : "영희", age:22},
    {name : "도넛", age:5},
    {name : "그루트", age:65},
    {name : "도비", age:3}
]

// undefined
for(let count = 0; count < persons.length; count++){
    if(persons[count].age >= 19){
        console.log("성인입니다.")
    }
}
// 2VM973:3 성인입니다.

for(let count = 0; count < persons.length; count++){
    if(persons[count].age >= 19){
        console.log(persons[count].name + "님은 성인입니다.")
    }else{
        console.log(persons[count].name + "님은 미성년자입니다.")
    }
}
// VM1213:5 철수님은 미성년자입니다.
// VM1213:3 영희님은 성인입니다.
// VM1213:5 도넛님은 미성년자입니다.
// VM1213:3 그루트님은 성인입니다.
// VM1213:5 도비님은 미성년자입니다.

const fruits = [
    {number : 1, title: "레드향" },
    {number : 2, title: "샤인머스캣" },
    {number : 3, title: "산청딸기"},
    {number : 4, title: "한라봉" },
    {number : 5, title: "사과" },
    {number : 6, title: "애플망고" },
    {number : 7, title: "딸기" },
    {number : 8, title: "천혜향" },
    {number : 9, title: "과일선물세트" },
    {number : 10, title: "귤" }
]

for(let i = 0; i < fruits.length; i++){
    console.log("Fruit of " + fruits[i].number + " is " + fruits[i].title)
}

// Fruit of 1 is 레드향
// VM1217:15 Fruit of 2 is 샤인머스캣
// VM1217:15 Fruit of 3 is 산청딸기
// VM1217:15 Fruit of 4 is 한라봉
// VM1217:15 Fruit of 5 is 사과
// VM1217:15 Fruit of 6 is 애플망고
// VM1217:15 Fruit of 7 is 딸기
// VM1217:15 Fruit of 8 is 천혜향
// VM1217:15 Fruit of 9 is 과일선물세트
// VM1217:15 Fruit of 10 is 귤

for(let i = 0; i < fruits.length; i++){
    console.log(`${fruits[i].number} ${fruits[i].title}`)
}
// VM1294:2 1 레드향
// VM1294:2 2 샤인머스캣
// VM1294:2 3 산청딸기
// VM1294:2 4 한라봉
// VM1294:2 5 사과
// VM1294:2 6 애플망고
// VM1294:2 7 딸기
// VM1294:2 8 천혜향
// VM1294:2 9 과일선물세트
// VM1294:2 10 귤


for(let i = 0; i < fruits.length; i++){
    console.log(`과일 차트 ${fruits[i].number}위는 ${fruits[i].title}입니다.`)
}

for(let i = 0; i < fruits.length; i++){
    console.log(`과일 차트 ${fruits[i].number}위는 ${fruits[i].title}입니다.`)
}
// VM1298:2 과일 차트 1위는 레드향입니다.
// VM1298:2 과일 차트 2위는 샤인머스캣입니다.
// VM1298:2 과일 차트 3위는 산청딸기입니다.
// VM1298:2 과일 차트 4위는 한라봉입니다.
// VM1298:2 과일 차트 5위는 사과입니다.
// VM1298:2 과일 차트 6위는 애플망고입니다.
// VM1298:2 과일 차트 7위는 딸기입니다.
// VM1298:2 과일 차트 8위는 천혜향입니다.
// VM1298:2 과일 차트 9위는 과일선물세트입니다.
// VM1298:2 과일 차트 10위는 귤입니다.