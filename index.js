function callback(){
    return console.log("This is all it does");
}
function receivesAFunction(callback){
return callback();
}
function returnsANamedFunction(){
    return function callback1(){
        console.log("howboutnow");
    }
}

function returnsAnAnonymousFunction(){
return () => console.log("new thing!")
}