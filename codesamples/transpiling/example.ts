function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function dramaticHello() {
    console.log('Hello');
    await wait(1000);
    console.log('World');
}

function* generatorFn() {
    console.log('Generator entry')
    yield 1;
    console.log('Generator resume')
    yield 2;
    console.log('Generator flat yield');
    yield* [3, 4];
}

//Of is the same as for of in c# don't confuse with in
for (const value of generatorFn()) {
    console.log(value);
}

//Classes are just syntactical sugar
class SomeClass {
    field = 1;
    constructor() {
    }

    method() {
        return this.field;
    }

    lambda = () => {
        //Lamda notation binds this to lexical scope
        this.field;
    }

    static foo() {
        //No this
        return "foo";
    }
}

const obj = {
    bar: "bar",
    foo: 123,
    fn() {
        return this.foo;
    }
};

function defaultArg(value = 1) {
    return value + 2;
}

function restArgs(...value) {
    return value.length;
}

restArgs(1, 2, 3);

//Descructuring
const { fn, foo: fooNum, ...restObj } = obj;
const [one, , three, ...restArr] = [1, 2, 3, 4, 5];

//Spread
const spreadObj = { ...restObj };
const spreadArr = [one, ...restArr];
