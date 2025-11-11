import './Titulo.css'

let meuEstilo ={
    backgroundColor:'black',
    fontSize:'80px',
    color: 'blue'
}



function Titulo(props){
 return <h1 className='text-danger' style={meuEstilo}>
    {props.children}
</h1>

}

export default Titulo

//<Titulo> Texto aqui </Titulo>