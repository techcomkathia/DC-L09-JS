import ComponenteB from "./ComponenteB";

export default function ComponenteA({objeto}) {
    return (
        <div>
            <h1>Componente A</h1>
            <ComponenteB objeto={objeto} />
        </div>
    );
}

