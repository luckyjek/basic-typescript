{
    /**
     * Type Inference
     */

    let text = 'hello';
    // text = 1;
    function print(message = 'hello') {
        console.log(message);
    }
    print('hello');

    function add(x:number, y:number): number {
        return x + y;
    }
    const result = add(1, 2);
}