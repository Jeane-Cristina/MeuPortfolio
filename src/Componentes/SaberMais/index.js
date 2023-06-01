import'./SaberMais.css'

function SaberMais(){
    return(
        <div className='caixa-redes-3'>
            <div className='chamado'>CONHEÇA MAIS PELAS REDES SOCIAIS!</div>
            <div className='caixas-redes'>
                <div className='caixaUm'>Acesse meu Linkedn e veja meus estudos e experiências diariamente!<a href='https://www.linkedin.com/in/jeane-cristina-oliveira-martins-341110256/' className='linkL'><button className='um-botao'>LINKEDN</button></a></div>
                <div className='caixaDois'>Acesse meu GitHub e fique por dentro dos meus projetos e códigos.<a href='https://github.com/Jeane-Cristina' className='linkG'><button className='dois-botao'>GITHUB</button></a></div>
            </div>
        </div>
    )
}

export default SaberMais