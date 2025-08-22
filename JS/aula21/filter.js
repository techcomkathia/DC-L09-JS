//o método filter cria um novo array com os elementos filtrados pela função aplicada

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//criar um novo array com os numeros pares

function ehPar(num){
    if(num % 2 == 0){
        return num
    }
    
}

let numerosPares = numeros.filter(ehPar)
numerosPares = numeros.filter((num) => num % 2 == 0)

console.log(numeros)
console.log(numerosPares)

//crie um array apenas com os objetos que tenham idade maior que 18 e menor ou igual a 25
let listaPessoas = [
    {nome: 'João', idade: 20},
    {nome: 'Maria', idade: 25},
    {nome: 'Jose', idade: 40},
    {nome: 'Pedro', idade: 30},
    {nome: 'Ana', idade: 15},
    {nome: 'Lucas', idade: 10}
]

let idade = listaPessoas.filter((a) => a.idade > 18 && a.idade <= 25)
console.log(idade)




//atividade2

const funcionarios = [
  { nome: "Ana Silva", idade: 25, filhos: 0, departamento: "TI", sexo: "F", salario: 3500 },
  { nome: "Carlos Souza", idade: 32, filhos: 1, departamento: "RH", sexo: "M", salario: 4200 },
  { nome: "Mariana Costa", idade: 28, filhos: 0, departamento: "Financeiro", sexo: "F", salario: 3800 },
  { nome: "João Almeida", idade: 45, filhos: 2, departamento: "TI", sexo: "M", salario: 6000 },
  { nome: "Fernanda Lima", idade: 22, filhos: 0, departamento: "RH", sexo: "F", salario: 3100 },
  { nome: "Roberto Martins", idade: 39, filhos: 3, departamento: "Financeiro", sexo: "M", salario: 5200 },
  { nome: "Juliana Ribeiro", idade: 31, filhos: 0, departamento: "TI", sexo: "F", salario: 4000 },
  { nome: "Paulo Henrique", idade: 27, filhos: 0, departamento: "RH", sexo: "M", salario: 3700 },
  { nome: "Camila Torres", idade: 34, filhos: 2, departamento: "Financeiro", sexo: "F", salario: 4800 },
  { nome: "André Oliveira", idade: 29, filhos: 0, departamento: "TI", sexo: "M", salario: 3900 },
  { nome: "Tatiane Mendes", idade: 41, filhos: 4, departamento: "RH", sexo: "F", salario: 5500 },
  { nome: "Felipe Barbosa", idade: 36, filhos: 0, departamento: "Financeiro", sexo: "M", salario: 4600 },
  { nome: "Bianca Ferreira", idade: 23, filhos: 0, departamento: "TI", sexo: "F", salario: 3200 },
  { nome: "Ricardo Gomes", idade: 52, filhos: 3, departamento: "RH", sexo: "M", salario: 7000 },
  { nome: "Aline Rocha", idade: 26, filhos: 0, departamento: "Financeiro", sexo: "F", salario: 3600 },
  { nome: "Marcelo Dias", idade: 48, filhos: 2, departamento: "TI", sexo: "M", salario: 6400 },
  { nome: "Patrícia Nunes", idade: 30, filhos: 0, departamento: "RH", sexo: "F", salario: 3900 },
  { nome: "Gustavo Pinto", idade: 38, filhos: 1, departamento: "Financeiro", sexo: "M", salario: 5100 },
  { nome: "Letícia Araújo", idade: 21, filhos: 0, departamento: "TI", sexo: "F", salario: 3000 },
  { nome: "Eduardo Lima", idade: 55, filhos: 2, departamento: "RH", sexo: "M", salario: 7200 }
];

//a) crie um array para cada departamento. Filtrando apenas os funcionarios de
//funcionariosTI
const funcionariosTI = funcionarios.filter((funcionario) => funcionario.departamento === "TI");
//funcionariosRH
const funcionariosRH = funcionarios.filter((funcionario) => funcionario.departamento === "RH");
const funcionariosFinanceiro = funcionarios.filter((funcionario) => funcionario.departamento === "Financeiro");
//funcionariosFinanceiro
console.log(funcionariosTI);
console.log(funcionariosRH);
console.log(funcionariosFinanceiro);

//b) Usando o array funcionarios, filtre apenas os funcionários que: Trabalham no departamento TI , 
//Não têm filhos e  possuem salário maior que 3500
//funcionariosTIsemfilhosSalariosAltos
const funcionariosTIsemfilhosSalariosAltos = funcionarios.filter(
    (funcionario) => funcionario.departamento == "TI" && funcionario.filhos === 0 && funcionario.salario > 3500
)


console.log(funcionariosTIsemfilhosSalariosAltos);