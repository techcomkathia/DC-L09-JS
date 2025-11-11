//componente que esperar receber interno a ele filhos, no sentido de agrupar e estilizar os filhos

function Container(props){
 return(
    <div >
        {props.children}
    </div>
 )
}
export default Container



