let av1 = Number(prompt("Digite sua nota da av1"))
let av2 = Number(prompt("Digite sua nota da av2"))
let av3 = Number(prompt("Digite sua nota da av3"))
let media = (av1 + av2 + av3) / 3
if (media < 7){
    alert(`Você reprovou com media ${media.toFixed(2)}`)
} else {
    alert(`Você Aprovou com media ${media.toFixed(2)}`)
}


console.log('codigo novo')