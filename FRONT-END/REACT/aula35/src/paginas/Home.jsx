import { Link } from "react-router-dom"


export default function Home() {
    const id = 123
    return (
        <>
            <h2>Home</h2>
            {/* copartilhar informações usando os parametros da rota */}

            <Link to={`/sobrenos/${id}`}>Sobre Nós</Link>


        </>
    )
}