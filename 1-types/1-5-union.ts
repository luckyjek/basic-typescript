{
    /**
     * Union Types: OR
     */
    type Direction = 'left' | 'right'| 'up'| 'down';
    /**
     * 
     * @param direction : Direction;
     * 받아오는 Type별로 어떤 Direction이냐에 따라서 어느 방향으로 움직일건지, 결정하는 함수
     */
    function move(direction: Direction){
         console.log(direction);
    }
    move('right');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    //function: login -> success, fail 
    type SuccessState = {
        response:{
            body:string;
        };
    }
    type FailState = {
        reason:string;
    }
    type LoginState = SuccessState | FailState;
    // function login(): SuccessState | FailState {
    // function login(id: string, password: string): Promise<LoginState> {
    function login(): LoginState {
        return{
            response:{
                body:'logged in!',
            }
        }
    }

//  me->    type Login = 'success' | 'fail';
    //     function login(success: Login){
    //         console.log(success);
    //     }

    //     login('success');

    //-------------------------------------------

    //homework 
    //printLoginState(state: LoginState)
    //success -> 🎉 body
    //fail -> 😭 reason 

    function printLoginState(state: LoginState){
         if('response' in state){
             console.log(`🎉${state.response.body}`);
         }else{
             console.log(`😭${state.reason}`)
         }
    }
    
}