{
    /**
     * Type Aliases 
     * */

    //원시타입
    type Text = string;
    // const name: string = 'ellie';   
    const name: Text = 'ellie';   
    const address: Text = 'korea';
    type Num = number;
    
    //Object타입
    type Student = {
        name: string;
        age: number;   
    };
    //student변수가 Student타입이고, 들어가는 Object는 아무거나 할당할 수 없다.
    const student: Student = {
        // animal:'dog' --아무거나 할당X
        name:'ellie',
        age:12,

    }

    /**
     * String Literal Types
     */
    type Name = 'name';
    let ellieName: Name;
    ellieName = 'name';
    type JSON = 'json';
    const json: JSON = 'json';
}