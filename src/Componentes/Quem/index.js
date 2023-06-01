import BotaoCont from '../BotaoCont';
import BotaoProg from '../BotaoProg';
import Botaodois from '../Botaodois';
import Botaoum from '../Botaoum';
import './Quem.css';

function Quem (){

    return(
        <div className='container-dois'>
            <div className='containers'>
                <br></br>
                <div className='contzero'><div className='quem'>Quem sou eu?</div>
                <div className='eu'>Sou uma estudante de Engenharia de Software apaixonada pelo mundo da tecnologia. Atualmente, me desenvolvolvo na área de programção e de gestão ágil buscando a qualificação para uma vaga relaciona a estas áreas. Tem uma oportunidade na área? </div>
                <div className='Certificacoes'>Olha só algumas das minhas certificações:</div>
                </div>        
                <div className='contum'>Gestão Ágil<hr></hr>
                    <ul className='itensum'>
                        <li className='um'>Nome: Certified ScrumMaster®</li>
                        <li className='dois'>Competência: SCRUM</li>
                        <li className='tres'>Descrição: Veja minha certificação ligada a gestão ágil:</li>
                        
                        <div><BotaoCont>Veja!</BotaoCont></div>
                    </ul>
                </div>
                <div className='contdois'>Programação<hr></hr>
                <ul className='itensum'>
                        <li className='um'>Nome: HTML,CSS,JS,REACT e outros</li>
                        <li className='dois'>Competência: Programação</li>
                        <li className='tres'>Descrição: Veja todas as certificações clicando no botão a seguir:</li>
                        <div><BotaoProg>Veja!</BotaoProg></div>
                    </ul>
                </div>
            </div>
            <div className='caixa-preta'>
                <div className='texto'>FICO FELIZ EM SABER QUE TODOS ESSES PROJETOS JÁ FORAM DESENVOLVIDOS :</div>
                <div className='botoes'>
                    <div><Botaoum>Veja o código.</Botaoum></div>
                    <div><Botaodois>Projeto pronto.</Botaodois></div>
                </div>
            </div>
        </div>
    )
}

export default Quem