{
    //local scope

 /**
   * JavaScript
   * Primitive(원시): number, string, boolean, bigint, symbol, null, undefined
   * Object(복잡): function, array.....
   */

 //number
 const num: number = -6;

 //string
 const str: string = 'hello';

 //boolean
 const boal: boolean=false;

 //undefined 값이 있는지 없는지 아무것도 결정되어있지 않은상태
 let name: undefined; //💩
 let age: number | undefined;
 age=undefined;
 age=1;
 function find(): number | undefined {
     return undefined;
 }

 //null -> 이미 결정된 '비었다!' - 조금더 명확! ('여기는 텅텅 비어져있어~')
 let person: null;//💩
 let persno2: string | null;


}