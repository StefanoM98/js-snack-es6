const biciCorsa = [
    {
        nome: "Gianni",
        peso: 7.4
    },
    {
        nome: "Franco",
        peso: 6.4
    },
    {
        nome: "Lorenzo",
        peso: 7.9
    },
    {
        nome: "Giuseppe",
        peso: 10.3
    },
    {
        nome: "Salvatore",
        peso: 9.4
    },
];

let biciLeggera = biciCorsa[0]

for(let i = 0; i < biciCorsa.length; i++) {
    if (biciCorsa[i].peso < biciLeggera.peso) {
        biciLeggera = biciCorsa[i]
    }
}

const {nome, peso} = biciLeggera;
console.log(biciLeggera);

document.getElementById("risultato").innerHTML = `La bici che pesa meno è ${nome} perchè pesa ${peso} kg`