import './Botaoum.css'

function Botaoum(props){
    return(
        <div onClick={()=>{}}>
                <a href='https://github.com/Jeane-Cristina' type="button" className='botao'>
                  {props.children}
                </a>     
            </div>
    )
}

export default Botaoum