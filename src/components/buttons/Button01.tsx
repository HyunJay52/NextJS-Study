import { css } from '@emotion/react'
import internal from 'stream';

type Props = {
    text: string;
     onClick: Function;
}

const Button01 : React.FC<Props> = ({
    text,
    onClick,
}) => {
    return <button onClick={ () => onClick() }>
        {text}
    </button>
}

export default Button01;

/* const obj = { width: 10, height: 15};
const area = obj.width * obj.height;

let a:number;
a = 10; */

let car:string = 'hyundai'
let age:number = 30
let isAdult:boolean = true

let a:number[] = [1,2,3]

let spell:Array<String> = ['a', 'b']
spell.push('c')

let b:[String, number]
b = ['b', 1]
b[0].toLocaleLowerCase()

// function
// void - no return
function sayHello():void {
    console.log('hello')
}
// never -> always reurn same thing or infinite loop fuc
function showError():never {
    throw new Error()
}
function infLoop():never {
    while(true) {
        // do sth
    }
}

// enum
enum Os {
    Window,
    Ios = 3,
    Android,
    Linux,
}

// null, undifined
let aNull:null = null
let bUndifined:undefined = undefined
