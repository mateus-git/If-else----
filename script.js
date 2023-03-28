//Substituir texto
let texto = 'estão chegando as provas'
console.log(texto.replace('provas', 'avaliações'))

//Fixar valor
let num = 223.45555
console.log(num.toFixed(2))

//caixa alert
alert('olá meu amigo(a)')

//caixa de confirmação
let teste =confirm('você é um aluno')
console.log(teste)

//caixa de prompt
let texto1 =prompt('digite seu nome')
//console.log('O nome dele é ',texto1)
document.write('o nome dele é: ', texto1)
document.write('<br><br>')

//estrutura de repetição if
if(20 > 10){
    document.write('20 é maior')
    document.write('<br><br>')
}

//if e else
if(25 < 15){
    document.write('numero maior')
}else{
    document.write('numero menor')
    document.write('<br><br>')
}

//if e else declarando variavel
let numero = 10

if(numero > 10){
    document.write('numero maior')
} else{
    document.write('numero menor')
    document.write('<br><br>')
}

//if else encadeado
//let idade = 18

/* let idade = prompt('digite sua idade')

if(idade <= 12){
    document.write('é uma criança')
} else if(idade <= 17){
    document.write('é um adolescente')
} else if(idade <= 30){
    document.write('é um jovem adulto')
}else{
    document.write('é um adulto maduro')
} */

// && 'e' - || 'ou'


// if cadeado 
let idade = prompt('digite sua idade')

if(idade < 9){
    document.write('você so pode ir na festa do amigo')
} else if(idade >= 12 && idade <= 17){
    document.write('você pode ir numa matine')
} else{
    document.write('voce pode ir em baladas')
}