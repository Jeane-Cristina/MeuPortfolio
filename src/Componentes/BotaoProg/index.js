import './BotaoProg.css'

function BotaoProg(props){
    
    
    return(
            <div onClick={()=>{}}>
                <a href='https://www.linkedin.com/in/jeane-cristina-oliveira-martins-341110256/details/certifications/' type="button" className='bot-um'>
                  {props.children}
                </a>     
            </div>
        
        
    )
}

export default BotaoProg
