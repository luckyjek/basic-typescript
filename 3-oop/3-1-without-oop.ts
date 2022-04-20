// 전역적으로 커피 콩을 가지고 있는 변수
// 커피를 만들 수 있는 함수를 만든다.
// 커피를 만드는 makeCoffee() 에는 한가지 인자를 전달할 수 있는데, 
// 바로 shot이다. 연하게 , 진하게 
// Return은 커피!
{
    // let bean = 10;
    // function makeCoffee(num:number):number{
    //     return  bean - num;
    // }
    // console.log(makeCoffee(1));
    type CoffeeCup = {
        shots: number;
        hasMilk:boolean;
    }
    const BEANS_GRAMM_PER_SHOT: number = 7;
    let coffeeBeans: number = 0;
    function makeCoffee(shots: number): CoffeeCup{
        if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
        }
        coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
        return {
            // shots:shots,
            shots,
            hasMilk:false,
        }
    }
    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee);
}