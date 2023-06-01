import './BotaoScroll.css'


function BotaoScroll(){
  const hanleClick=()=>{

    window.scroll(
      {
        top:450,
      }
    )
    return false


  }

  const hanleClick2=()=>{

    window.scroll(
      {
        top:1050,
      }
    )
    return false


  }

  const hanleClick3=()=>{

    window.scroll(
      {
        top:1440,
      }
    )
    return false


  }

  const hanleClick4=()=>{

    window.scroll(
      {
        top:2000,
      }
    )
    return false


  }

    return(
      <nav>
        <ul className='menuu'>
          <li className='listados'><a href='.container-dois'  className='options1' onClick={(e)=>hanleClick(e.preventDefault())}>QUEM SOU EU?</a></li>
          <li className='listados'><a href='.caixa-redes-3' className='options2' onClick={(e)=>hanleClick2(e.preventDefault())}>MINHAS REDES SOCIAIS</a></li>
          <li className='listados'><a href='.Agilidade' className='options3' onClick={(e)=>hanleClick3(e.preventDefault())}>GESTÃO</a></li>
          <li className='listados'><a href='.contato' className='options4' onClick={(e)=>hanleClick4(e.preventDefault())}>CONTATO</a></li>
        </ul>
      </nav>
    )
}

export default BotaoScroll