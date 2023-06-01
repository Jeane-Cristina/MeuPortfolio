import './Botaodois.css'

function Botaodois(props){
    return(
        <div onClick={()=>{}}>
                <a href='https://vercel.com/jeane-cristina' type="button" className='bots'>
                  {props.children}
                </a>     
            </div>
    )
}

export default Botaodois