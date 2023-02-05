import { Caramel, Numans } from "@next/font/google";
import { doesNotThrow } from "assert";

type Props = {
    text: string;
     onClick: Function;
}

const Note : React.FC<Props> = ({
    text,
    onClick,
}) => {
    return <button onClick={ () => onClick() }>
        {text}
    </button>
}

export default Note

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

// interface
type Score = 'A' | 'B' | 'C'

// interface User {
//     name: string,
//     age?: number,
//     gender?: string,
//     readonly birthYear: number,
//     // 1?: string,
//     // 2?: string,
//     // 3?: string,
//     // [grade:number]: string,
//     [grade:number]: Score,
// }

// let user:object;

// let user:  User = {
//     name: 'xx',
//     age: 30,
//     birthYear: 2002,
//     // 1: 'A+',
//     // 2: 'C',
//     1: 'A'
// }
// user.age = 1
// user.birthYear = 2003 <- readonly
// console.log(user.name) -> property 정해서 객체 표현을 위해서 interface 필요

interface Add {
    (num1: number, num2: number): number;
}
const add: Add = function(x, y) {
    return x+y
}
add(10, 20)

interface IsAdult {
    (age:number): boolean
}
const person:IsAdult = (age) => {
    return age > 20
}
person(30)

// implements
interface Car {
    color: string,
    wheels: number,
    start(): void
}
class Bmw implements Car {
    color
    wheels = 4;

    constructor(color:string,) {
        this.color = color
    }

    start() {
        console.log('just started ... !')
    }
}
const myCar = new Bmw('black')

// interfaceextends
interface Benz extends Car {
    door: number
    stop(): void
}
const benz: Benz = {
    color: 'black',
    wheels: 4,
    start() {
        console.log('Benz is started ... !')
    },
    door: 5,
    stop() {
        console.log('stopped the car. ...')
    }
}

interface Car {
    color: string,
    start(): void
}
interface Toy {
    name: string
    price: number,
}
interface ToyCar extends Car, Toy {
    age: number
}

// function 
function addNumber(num1: number, num2: number): void {
    // return num1 + num2
    console.log(num1 + num2)
}
function hello(name?: string) {
    // function hello(name = 'world')
    return `Hello, ${name || 'Typescript'}`
}
const result = hello()

function hello02(name:string, age?: number) {
    if(age !== undefined) {
        return `Hello, I am ${name} and ${age}`
    } else {
        return `Hello, I am ${name}`
    }
}
const result02 = hello02('Sam')

function addNumber02(...nums: number[]) {
    return nums.reduce((result, num) => result + num, 0)
}
addNumber02(1, 2, 3)
addNumber02(1, 2, 10, 20)

// this & bind
interface User {
    name: string;
    age?: number
}

const Sam: User = {name: 'Sam'}

function showName(this: User, age: number, gender: 'm' | 'f') {
// function showName(this: User) {
    console.log(this.name, age, gender)
}

const aa = showName.bind(Sam)
aa(30, 'f');

function join(name: string, age: number): User //overload
function join(name: string, age: string): string // override
function join(name: string, age: number | string) : User | string {
    if(typeof age === 'number') {
        return {
            name,
            age
        }
    } else {
        return 'onyl number !'
    }
}

const john: User = join('john', 30) //error -> return User or String to fix by using override? overload?
const jane: string = join('jane', '30') // error -> return User or String to fix by using overrid? overload?

// literal types
const userName01 = 'Bob' // 바뀔 수 없음
let userName02 = 'Tom' // 바뀔 수 있음

userName02 = 'Tim'
userName02 = 'Timothy'

type Job = 'police' | 'developer' | 'teacher'

interface UserInfo {
    name: string;
    job: Job;
}

const userInfo: UserInfo = {
    name: 'Lay',
    job: 'developer'
}

interface HighSchoolStuden {
    name: string;
    grade: 1 | 2 | 3
}
const student: HighSchoolStuden = {
    name: 'Lola',
    grade: 2
}

// union types === or
interface Car02 {
    name: 'car';
    color: string;
    start(): void;
}
interface Mobile {
    name: 'mobile';
    color: string;
    call(): void;
}

function getGift(gift: Car02 | Mobile) {
    console.log(gift.color)

    if(gift.name === 'car') {
        gift.start()
    } else {
        gift.call()
    }
}

// intersection types === and
interface Car03 {
    name: string;
    start(): void;
}
interface Toy02 {
    name: string;
    color: string;
    price: number;
}

const toyCar: Toy02 & Car03 = {
    name: 'Tayo',
    start() {},
    color: 'green',
    price: 10000,
}

// class
// 접근 제한자(Access modifier) - public(all), #private(only parents), protected (parents & children)
// public : 자식 클래스 클래스 인스턴스 모두 접근 가능
// protected : 자식 클래스 접근 가능
// private : 해당 클래스 내부에서만 접근 가능
class CarClass {
    static wheels = 4;
    readonly name: string = 'car';
    color: string;
    //color: string; // ts 클래스 작성 시, 멤버 미리 작성

    constructor(color: string, name: string) { // public or readonly
        this.color = color;
        this.name = name;
    }
    start() {
        console.log(`${this.name}starting the car!`)
    }
}
// const lay = new classCar('blue')
class Genesis extends CarClass {
    constructor(color: string, name: string) {
        super(color, name)
    }
    showName() {
        // console.log(super.name);
        console.log('?');
    }
}

const buyThisCar = new Genesis('yellow', 'GV80')
console.log(CarClass.wheels)
// abstract class -> new로 객체 생성 불가 + 상속을 통해서만 객체 생성 가능
abstract class Bike {
    color: string

    constructor(color: string) {
        this.color = color
    }
    start() {
        console.log('riding ~')
    }
    abstract doSth(): void; // 추상 클래스 내부에서 함수 구체화 불가능
}
// const bike = new Bike('white')
class EBike extends Bike {
    constructor(color: string) {
        super(color)
    }
    doSth() {
        console.log('abstract function')
    }
}

// Generic - class, func, interface 재사용 가능
function getSize<T>(arr: T[]): number { // arr: number[] || string[] || ...
    return arr.length;
}

const arr1 = [1, 2, 3]
getSize<number>(arr1)
const arr2 = ['a', 'b', 'c']
getSize<string>(arr2)

interface GenericMobile<T> {
    name: string;
    price: number;
    option: T;
}

const gMobile1: GenericMobile<object> = {
                // <{color: string; coupon: boolean}>
    name: 'iphone 12',
    price: 100,
    option: {
        color: 'space-gray',
        coupom: false,
    }
}

const gMobile2: GenericMobile<string> = {
    name: 'iphone 14',
    price: 300,
    option: 'latest'
}

interface GenericUser {
    name: string,
    age: number,
}
interface GenericCar {
    name: string,
    color: string,
}
interface GenericBook {
    price: number,
}

const gUser: GenericUser = {name: 'Tom', age: 22}
const gCar: GenericCar = {name: 'genesis', color: 'white'}
const gBooK: GenericBook = {price: 3000}

function showGenericName<T extends { name: string }>(data: T): string {
    return data.name;
}

showGenericName(gUser)
showGenericName(gCar)
// showGenericName(gBook)

// Utility Types
interface UtilUser {
    id: number;
    name: string;
    age: number;
    gender?: 'm' | 'f';
}
// * keyof - map의 key를 key로 사용
type UtilUserKey = keyof UtilUser; // 'id' | 'name' | 'age' | 'gender'
const uk: UtilUserKey = 'id'
// * Partial<T> - 일부만 사용 
let admin: Partial<UtilUser> = {
    id: 1,
    name: 'Bob'
}
// * Required<T> - 모든 prop이 필수로 바뀜 
const firstUser: Required<UtilUser> = {
    id: 2,
    name: 'jane',
    age: 23,
    gender: 'f'
}
// * Readonly<T> - 읽기 전용으로 변경 
let secUser: Readonly<UtilUser> = {
    id: 3,
    name: 'matilda',
    age: 13,
}
// secUser.id = 4; <- error
// * Record<K, T> K = key, T = Type
interface UtilSchool {
    '1': 'A' | 'B' | 'C' | 'D';
    '2': 'A' | 'B' | 'C' | 'D';
    '3': 'A' | 'B' | 'C' | 'D';
    '4': 'A' | 'B' | 'C' | 'D';
}
// const uScore: Record<'1' | '2' | '3' | '4', 'A' | 'B' | 'C' | 'D'> = {
type Grade = '1' | '2' | '3' | '4'
type TypeScore = 'A' | 'B' | 'C' | 'D'
const uScore: Record<Grade, TypeScore> = {
    1: 'D',
    2: 'C',
    3: 'A',
    4: 'B',
}

// function isValidUser(user: UtilUser) {
//     const result: Record<keyof UtilUser, boolean> = {
//         id: user.id > 0,
//         name: user.name !== '',
//         age:  user.age > 0,
//         // gender: user.gender !== ''
//     }

//     return result
// }
// * Pick<T, K>
const pickAdmin: Pick<UtilUser, 'id' | 'name'> = {
    id: 10,
    name: 'john'
}
// * Omit<T, K> - 키를 이용해 프로퍼티 제거 
const omitAdmin: Omit<UtilUser, 'age' | 'gender'> = {
    id: 100,
    name: 'lena'
}
// * Exclude<T1, T2> - t1에서 t2를 제거 (타입으로 제거)
type T1 = string | number | boolean
type T2 = Exclude<T1, number>
type T3 = Exclude<T1, string | boolean>
// * NonNullable<Type> - null & undefined 제외
type T4 = string | null | undefined | void
type T5 = NonNullable<T4>