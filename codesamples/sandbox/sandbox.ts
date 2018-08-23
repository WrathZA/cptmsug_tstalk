function DoThing(arg: string | number){
    if (typeof arg === "string") {
        arg.toUpperCase();
        arg.toExponential();
    } else {
        arg.toUpperCase();
        arg.toExponential();
        return;
    }
    
}

//Control flow anal

type foo = {
    yolo: 1
}

function isFoo(arg: any): arg is foo {
    return typeof arg === "object" && arg.yolo === 1;
}

function bar(value) {
    if (isFoo(value)){
        value.
    }
}



