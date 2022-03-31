{
    //차별화하는, 구별할 수 있는
    //union타입의 차별화되는 이름이 동일한 타입을 두고, 간편하게 구분할 수 있는것을 말한다.
    //즉, 어떤 case든지 공통적인 propertise를 가지고 있음으로써 조금 더 구분하기 쉽게 만든다! 
    
        //function: login -> success, fail 
        type SuccessState = {
            result:'success';
            response:{
                body:string;
            };
        }
        type FailState = {
            result:'fail';
            reason:string;
        }
        type LoginState = SuccessState | FailState;
        function login(): LoginState {
            return{
                result:'success',
                response:{
                    body:'logged in!',
                }
            }
        }
   
    //homework 
    //printLoginState(state: LoginState)
    //success -> 🎉 body
    //fail -> 😭 reason 
        function printLoginState(state: LoginState){
            //  if('response' in state){
             if(state.result === 'success') {
                 console.log(`🎉${state.response.body}`);
             }else{
                 console.log(`😭${state.reason}`)
             }
        }
        
}