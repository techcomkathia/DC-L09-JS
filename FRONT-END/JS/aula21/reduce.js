let numeros = [1,2,3,4,5,6,7,8,9,10]

//acumulador, elemento 

let soma = numeros.reduce(
    (soma,num)=>{
    soma += num
    return soma
    }
)
console.log(numeros)
console.log(soma)

//para o array de funcionarios, reduza todas as propriedades salario para o valor total dos salarios dos funcionarios
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

let salarioTotal = funcionarios.reduce(
    (soma, funcionario) => soma += funcionario.salario , 0
)
console.log(salarioTotal)






let faturamentoMes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let faturamentoMesesAnteriores = 100

//let faturamentoTotal = faturamentoMes.reduce( funcaoReducao, valorInicial)

let faturamentoTotal = faturamentoMes.reduce(
    (soma, itemArray) => {
        soma += itemArray
        return soma
    },
    faturamentoMesesAnteriores
)
console.log(faturamentoTotal)


//para o array de funcionarios, reduza para o total dos salarios