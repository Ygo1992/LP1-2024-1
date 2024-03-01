import { ehPar, ehPar2 } from "./matematica.js";

//v1
console.log(ehPar('asdasd'));

//v2
ehPar2(1)
.then((resultado) => {
    console.log(resultado);
})
.catch((erro) => {
    console.log(erro);
})