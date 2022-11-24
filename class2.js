window.onload = () => {
    console.log("class2.html: " + localStorage.username);
    window.alert(localStorage.username); //-> 원래 형태. alert은 윈도우 메소드이기 때문에 window 생략 가능.
    
    const btns = document.querySelectorAll("button");
    btns[0].onclick = () => {
        print();
    } // ->인쇄버튼

    btns[1].onclick = () => {
        history.back();
    }
}