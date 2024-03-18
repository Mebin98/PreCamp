let isStarted = false

let auth = () =>{

    if(!isStarted){
        // 타이머가 작동중이 아닐 때,
        isStarted = true
        document.getElementById("completeBtn").disabled = false
        let token = String(Math.floor(Math.random() * 1000000)).padStart(6,'0')
        document.getElementById("num").innerText = token
    
        let time = 10
        let timer

        timer = setInterval(function(){
            if(time >= 0){
                let min = Math.floor(time / 60) // 몫
                let sec = String(time % 60).padStart(2, "0") // 2자리가 안됐을때, 0 넣어줌
                document.getElementById("time").innerHTML = min + " : " + sec
                time = time - 1
            }else{
                document.getElementById("completeBtn").disabled = true
                isStarted = false;
                console.log("타이머 작동중")
                clearInterval(timer)
            }
        },1000)
    }else{
        // 타이머가 작동중일 때
    }

}