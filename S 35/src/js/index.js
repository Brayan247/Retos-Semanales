let effectiveness
let ultimateDamage

// Recepcion de datos
let attacker = prompt('Escoja el tipo del Pokemon atacante: 1 - Agua, 2 - Fuego, 3 - Planta, 4 - Electrico')
let protector = prompt('Escoja el tipo del Pokemon defensor: 1 - Agua, 2 - Fuego, 3 - Planta, 4 - Electrico')
let attackDamage = prompt('Ingrese el valor de su ataque (Debe estar entre 1 y 100)')
let defense = prompt('Ingrese el valor de su defensa (Debe estar entre 1 y 100)')

// Calcular la efectividad

function calculateEffectiveness () {
    if(attacker == 1 && protector == 2 || attacker == 2 && protector == 3 || attacker == 3 && protector == 4 || attacker == 4 && protector ==1) {
        effectiveness = 2
        alert('El ataque es muy efectivo')
    }else if (attacker == 1 && protector == 4 || attacker == 1 && defense == 1 || attacker == 2 && protector == 1 || attacker == 2 && protector == 2 || attacker == 3 && protector == 2 || attacker == 3 && protector == 3 || attacker == 4 && protector ==3 || attacker == 4 && protector == 4 ) {
        effectiveness = 0.5
        alert('El ataque no es muy efectivo')
    }else{
        effectiveness = 1
        alert('El ataque es neutral')
    }
}

// Calcular el daño de ataque

function calculateUltimateDamage () {
    calculateEffectiveness()
    ultimateDamage = 50 * (attackDamage / defense) * effectiveness
    alert(`El daño realizado es de ${ultimateDamage}`)
}

calculateUltimateDamage()