{
    //JavaScript 💩
    // function jsAdd(num1, num2){
    //     return num1 + num2;
    // }

    // //TypeScript ✨
    // function add(num1: number, num2: number): number{
    //     return num1 + num2;
    // }

    // //JavaScript 💩
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //     resolve(100);
    //     });
    // }
    // // TypeScript ✨
    // // function fetchNum(id: string): object {
    //     // 인자로는 string을 받아서 Promise를 return하는구나.
    //     // 그리고 이 Promise는 fetch가 완료된 다음에 숫자의 데이터를 
    //     // return하겠구나라고 예상할 수가 있다.
    // function fetchNum(id: string):Promise<number> {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //     resolve(100);
    //     });
    // }
    

    //JavaScript ✨ => TypeScript
    //Optional parameter
    function printName(firstName: string, lastName?:string){
        console.log(firstName);
        console.log(lastName);
    }

    printName('Steve', 'Jobs');
    printName('Ellie');
    printName('Anna',undefined);

    //Default parameter
    function printMessage(message: string = 'default message'){
        console.log(message);
    }
    printMessage();

    //Rest parameter
    // function addNumbers(num1: number, ...rest: number[]): number{
    function addNumbers(...numbers: number[]): number{
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3,4));
    console.log(addNumbers(1,2,3,4,5,0));
}