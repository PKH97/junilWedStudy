
class User{ // #을 사용하면 자바에서의 프라이빗과 동일
    username;
    password;
    name;
    email;
    setUsername(username){
        this.#username = username;
    }
    getUsername(){
            return this.#username;
        } //-> 평상시에는 입력 자주X
}
        
class UserMain{
    main(){
        let user = new User();
        user.username = "junil";
        user.password = "1234";
        user.name = "김준일";
        user.email = "junil@naver.com";

        console.log();
    }
}
    // let user = {
    //     username: "junil",
    //     password: "1234"
    // }; //-> 위와 동일.

window.onload = () => {
    let userMain = new UserMain();

    userMain.main(User);
}