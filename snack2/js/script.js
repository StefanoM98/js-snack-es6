const squadre = [
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Fiorentina",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Crotone",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Chievo",
        puntiFatti: 0,
        falliSubiti: 0
    },
]

// GENERAZIONI DI PUNTI E FALLI IN MODO CASUALE CON LA PROPIETA' MATH RANDOM
for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = Math.floor(Math.random() * 50);
    squadre[i].falliSubiti = Math.floor(Math.random() * 300);
}

const squadreFalliSubiti = squadre.map (({nome, falliSubiti}) => ({nome, falliSubiti}))

console.log("Squadre di calcio:", squadre);
console.log("Squadre e falli:", squadreFalliSubiti);