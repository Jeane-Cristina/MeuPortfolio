import './BotaoCont.css'

function BotaoCont(props){
    return(
        <div onClick={()=>{}}>
                <a href='https://bcert.me/bc/html/show-badge.html?b=aqeggfmu' type="button" className='bot'>
                  {props.children}
                </a>     
            </div>
    )
}

export default BotaoCont