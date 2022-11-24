
class User{ // #을 사용하면 자바에서의 프라이빗과 동일
    username;
    password;
    name;
    email;
    // setUsername(username){
    //     this.#username = username;
    // }
    // getUsername(){
    //         return this.#username;
    //     } //-> 평상시에는 입력 자주X
    constructor(username, password, name, email){ //-> 생성자
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
    }
    printName(){
        console.log(this.name + '님의 정보');
    }
}
        
class UserMain{
    static #instance = null; // -> 싱글톤(자주 사용됨)
    static getInstance(){
        if(this.#instance == null){
            this.#instance = new UserMain();
        }
        return this.#instance;
    }

    main(){
        let user = new User("junil", "1234", "김준일", "junil@naver.com");
        // user.username = "junil";
        // user.password = "1234";
        // user.name = "김준일";
        // user.email = "junil@naver.com";

        console.log(user);

        // localStorage
        localStorage.username = user.username; // ->PC안에 정보를 저장하는것.
        console.log("username: " + localStorage.username); // -> 다른 html에서도 정보를 끌어다 쓸 수 있게 한다. 

        user.printName();
    }
}
    // let user = {
    //     username: "junil",
    //     password: "1234"
    // }; //-> 위와 동일.

window.onload = () => {
    let userMain = UserMain.getInstance();

    userMain.main(User);
}