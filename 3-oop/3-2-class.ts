// Object를 이용해서 커피기계를만들자 
// Coffee머신이라는 class구현 
// Coffee머신에는 어떤게 있어야 할까?
// coffeeBeans
// makeCoffee
{
    type CoffeeCup = {
        shots: number;
        hasMilk:boolean;
    }
    class CoffeeMaker {
        static BEANS_GRAM_PER_SHOT: number = 7; // class level 함께공유
        coffeeBeans: number = 0; //instance (object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans:number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup{
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                // shots:shots,
                shots,
                hasMilk:false,
            }
        }
    }

    const maker = new CoffeeMaker(32);
    console.log(maker);
    const maker2 = new CoffeeMaker(14);
    console.log(maker2);

    const maker3 = CoffeeMaker.makeMachine(3);
    console.log(maker3);
}