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

//unknown 💩
let notSure: unknown = 0;
notSure = 'he';
notSure = true;

//any 💩
let anything: any = 0;
anything = 'hello';

//void
function print(): void {
  console.log('hello');
  return;
}
let unusable: void = undefined; //💩

//naver -- 함수에서 절때 return되지 않는경우
function throwError(message: string): never {
  // message -> server (log)
  throw new Error(message);
  while (true) {}
}
let neverEnding: never; // 💩

//object --원시타입을 제외한 모든 object를 할당할 수 있다.
let obj: object; // 💩
function acceptSomeObject(obj: object) {}
acceptSomeObject({ name: 'ellie' });
acceptSomeObject({ animal: 'dog' });
}