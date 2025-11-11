import ComponenteC from "./ComponenteC";

function ComponenteB({objeto}) {
    return (
        <div>
            <h1>Componente B</h1>
            <ComponenteC nome={objeto.nome} />
        </div>
    );
}

export default ComponenteB;