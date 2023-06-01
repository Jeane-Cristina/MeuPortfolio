import './Formulario.css';
import { useState } from 'react';

function Formulario(){
    const salvandoFormulário = ()=>{
        console.log("NOME: ",nome ,"MENSAGEM:" ,mensagem);
    }

    const [nome,setNome]=useState("");
    const [mensagem,setMensagem]=useState("");


    return(
        <div className='contato' onSubmit={(e)=>salvandoFormulário(e.preventDefault())}>
            <div className='borda'>
                <div className='Esquerda'>
                    <div className='Titulo'>Você tem alguma oportunidade, projeto , ideia, ou boas práticas pra compartilhar?</div>
                </div>
                <div className='Direita'>
                    <form className='formularioo'>
                        <label >
                            <div className='nome'>NOME</div>
                            <input className='formulario-completo' type="text" name="name" placeholder='Digite aqui seu nome...' onChange={(e)=>setNome(e.currentTarget.value)} />              
                            <div className='mensagem'>MENSAGEM</div>
                            <textarea className='formulario-completo' placeholder='Digite aqui sua mensagem...' onChange={(e)=>setMensagem(e.currentTarget.value)}></textarea>
                            <br></br>
                            <input className='envio' type="submit" value="ENVIAR"/>
                        </label>
                    </form>
                 </div>
            </div>
        </div>
    )
}

export default Formulario