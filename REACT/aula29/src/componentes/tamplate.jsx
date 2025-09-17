function Tamplate(props) {
    return (
        <div>
            <Cabecalho/>
                {props.children}
            <Rodape/>
        </div>
    )
}