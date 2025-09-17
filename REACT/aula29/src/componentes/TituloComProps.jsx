import './TituloComProps.css'

function TituloComProps({titulo,texto}) {
    return (
        <div >
            <h1>{titulo}</h1>
            <p>{texto}</p>
        </div>
    )
}

export default TituloComProps