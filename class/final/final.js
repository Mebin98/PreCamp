const checkInfo = () => {
    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let pwFirst = document.getElementById("pwFirst").value
    let pwAgain = document.getElementById("pwAgain").value

    if (email === "" || name === "" || pwFirst === "" || pwAgain === "") {
        return false;
    }
    return true;
}


const changeFocus = () => {
    let phone1 = document.getElementById("p1").value
    if(phone1.length == 3){
        document.getElementById("p2").focus()
    }
}

const changeFocus2 = () => {
    let phone2 = document.getElementById("p2").value
    if(phone2.length == 4){
        document.getElementById("p3").focus()
    }
}

const numCompleted = () => {
    let phone3 = document.getElementById("p3").value
    if(phone3.length == 4 && (checkInfo())){
        document.getElementById("auth__rec__btn").disabled = false
        document.getElementById("auth__rec__btn").style.color = "#0068FF"
    }else{
        document.getElementById("auth__rec__btn").style.color = "gray"
    }
}

const applyStyle = (btnId) => {
    var btn = document.getElementById(btnId);
    // 현재 스타일 저장
    btn.setAttribute('data-original-color', btn.style.color);
    btn.setAttribute('data-original-background', btn.style.backgroundColor);

    // 새로운 스타일 적용
    btn.style.color = "white";
    btn.style.backgroundColor = "#0068FF";
};


const revertStyle = (btnId) => {
    var btn = document.getElementById(btnId);
    // 저장된 스타일로 복원
    btn.style.color = btn.getAttribute('data-original-color');
    btn.style.backgroundColor = btn.getAttribute('data-original-background');
}

let isStarted = false
let successAuth = false
const rec__num = () => {
    if(!isStarted) // 타이머가 작동중이 아닐 때,
    {
        isStarted = true
        document.getElementById("auth__rec__time").disabled = false
        let token = String(Math.floor(Math.random()*1000000)).padStart(6,'0')
        document.getElementById("rec__num").innerText = token
        document.getElementById("auth__rec__time").style.color = "#0068FF"

        let time = 180
        let timer

        var btn = document.getElementById("auth__rec__btn");
        // 현재 스타일 저장
        btn.setAttribute('data-original-color', btn.style.color);
        btn.setAttribute('data-original-background', btn.style.backgroundColor);

        timer = setInterval(function(){
            if(time >= 0){

                document.getElementById("auth__rec__time").onmousedown = function() {
                    this.style.color = "white";
                    this.style.backgroundColor = "#0068FF";
                };
                
                document.getElementById("auth__rec__time").onmouseup = function() {
                    var btn = document.getElementById("auth__rec__time");
                    btn.style.color = btn.getAttribute('data-original-color');
                    btn.style.backgroundColor = btn.getAttribute('data-original-background');
                };

                document.getElementById("auth__rec__time").onclick = function(){
                    document.getElementById("auth__rec__time").disabled = true
                    isStarted = false
                    document.getElementById("auth__rec__time").style.color = "gray"
                    successAuth = true
                    clearInterval(timer)
                }
                
                let min = Math.floor(time / 60) // 몫
                let sec = String(time % 60).padStart(2, "0") // 2자리가 안됐을때, 0 넣어줌
                document.getElementById("rec__time").innerHTML = min + " : " + sec
                time = time - 1
            }else{
                document.getElementById("auth__rec__time").disabled = true
                isStarted = false
                document.getElementById("auth__rec__time").style.color = "gray"
                clearInterval(timer)
            }
        }, 1000)
    }else{ // 타이머가 작동중일 때
    }
}

const rec__time = () => {
    document.getElementById("auth__rec__time").disabled = true
    isStarted = false
    document.getElementById("auth__rec__time").style.color = "gray"
}

const final = () =>{
    let registerCheck = true

    var emailCheck = document.getElementById("email").value
    var errorMessageEmail = document.getElementById("emailError");
    if(!emailCheck.includes('@')){
        errorMessageEmail.textContent = "이메일을 다시 입력해주세요."
        registerCheck = false
    }else{
        errorMessageEmail.textContent = ""
    }

    var nameCheck = document.getElementById("name").value
    var errorMessageName = document.getElementById("nameError")
    if(nameCheck == ""){
        errorMessageName.textContent = "이름을 다시 입력해주세요."
        registerCheck = false
    }else{
        errorMessageName.textContent = ""
    } 

    var pw1Check = document.getElementById("pwFirst").value
    var errorMessagePw1 = document.getElementById("pwError1")
    if(pw1Check == ""){
        errorMessagePw1.textContent = "비밀번호를 다시 입력해주세요."
        registerCheck = false
    }else{
        errorMessagePw1.textContent = ""
    }

    var pw2Check = document.getElementById("pwAgain").value
    var errorMessagePw2 = document.getElementById("pwError2")
    if(pw1Check != pw2Check){
        errorMessagePw2.textContent = "비밀번호가 같지 않습니다."
        registerCheck = false
    }else{
        errorMessagePw2.textContent = ""
    }

    // 지역 선택 확인
    var selectBox = document.querySelector(".select__box");
    var selectedValue = selectBox.value;
    var errorMessageLocation = document.getElementById("regionError"); // 지역 선택 에러 메시지를 출력할 요소의 ID

    if(selectedValue === "value1" || selectedValue === ""){
        errorMessageLocation.textContent = "지역을 선택해주세요.";
        registerCheck = false
    }else{
        errorMessageLocation.textContent = ""; // 에러 메시지 제거
    }

    // 성별 선택 확인
    var genderRadios = document.getElementsByName("gender");
    var genderSelected = Array.from(genderRadios).some(radio => radio.checked);
    var errorMessageGender = document.getElementById("genderError"); // 성별 선택 에러 메시지를 출력할 요소의 ID

    if(!genderSelected){
        errorMessageGender.textContent = "성별을 선택해주세요.";
        registerCheck = false
    }else{
        errorMessageGender.textContent = ""; // 에러 메시지 제거
    }

    if(!successAuth){
        alert("인증이 미완료 상태입니다.");
        registerCheck = false
    }

    if(registerCheck){
        alert("회원가입을 축하합니다!");
        location.reload(); // 페이지 새로고침
    }
    
}