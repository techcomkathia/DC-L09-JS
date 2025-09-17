
function somar(a, b){
    return a + b
}

function MeuComponente() {

    return(
    <div>
        <h1>Meu Componente</h1>
        <p>Parágrafo que mostra um cálculo feito com js {somar(1, 2)}</p>
    </div>)
    
}

export default MeuComponente