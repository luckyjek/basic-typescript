
{
    type CoffeeCup = {
        shots: number;
        hasMilk:boolean;
    }

    // public
    // private
    // protected
    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7; // class level 함께공유
        private coffeeBeans: number = 0; //instance (object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans:number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greatre than 0')
            }
            this.coffeeBeans += beans;
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

    const maker = CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(32);
    console.log(maker);
    console.log(maker.makeCoffee(8), '남은 beans 수량 :', maker);
    
    class User {
        // fullName: string;
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;
        get age(): number{
            return this.internalAge;
        }
        set age(num: number){
            this.internalAge = num;
        }
        constructor(private firstName: string, private lastName: string){
        }
    } 
    const user = new User('Steve', 'Jobs');
    user.age = 6;
    console.log(user.fullName);
    console.log(user.age);
}