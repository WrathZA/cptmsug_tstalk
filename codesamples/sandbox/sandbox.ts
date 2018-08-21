enum Things {
    Boat,
    Shoe,
    Banana,
    Whatever = 99
}

function DoThing(thing: Things){
    switch (thing){
        case Things.Banana: console.log('Yellow'); break;
        case Things.Shoe: console.log('Laces!'); break;
        default: throw new Error(`DIDN'T DEAL WITH THING!`)
    }
}
