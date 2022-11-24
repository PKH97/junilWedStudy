window.onload = () => {
    const btns = document.querySelectorAll("button");
    btns[0].onclick = () => {
        location.href = "http://www.naver.com";
    } 

    btns[1].onclick = () => {
        const urlInput = document.querySelector("input");
        urlInput.value = location.pathname;
    }

    btns[2].onclick = () => {
        location.reload();
    }

    btns[3].onclick = () => { // -> 키스토리를 남기지 않음. 이전으로 돌아갈 수 없음
        location.replace("http://www.google.com");
    }
}