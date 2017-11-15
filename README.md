
Instalação do typescrypt

npm install typescript -g

compilar arquivo

tsc app.ts

Monitorar diretório

tsc -w


Executar arquivo transpilado

node dist/app.js


{
  "compileOnSave": true,
  "compilerOptions": {
    "outDir": "dist",
    "noEmitOnError": true
  }
}

Template string ``
ex: console.log(`Is distance ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughtoBeatMF(distance) ? 'YES' : 'NO'} `)


```javascript

let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!"
console.log(message);

let episode: number = 4
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is "+episode);

let favoriteDroid: string
favoriteDroid = 'BB-8'
console.log("My favorite droid "+favoriteDroid);

//Função anonima
let isEnoughtoBeatMF = function (parsecs: number): boolean {
  return parsecs < 12
}
let distance = 11
//obs: Template string ``
console.log(`Is distance ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughtoBeatMF(distance) ? 'YES' : 'NO'} `)

//obs: Arrow functions
let call = (name: string) => console.log(`Doyou copy, ${name}?`)
call('R2')


//parâmetros padrões
function inc(speed: number, inc: number = 1) : number {
  return speed + inc
}
console.log(`inc (5, 1) = ${inc(5, 1)}`);
console.log(`inc (5) = ${inc(5)}`);

```
