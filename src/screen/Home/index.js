import React from "react";
import './index.css';
import { Link } from "react-router-dom";
import background from "../../../src/assets/img/background-fundo.jpg"








export default function Home(){

    return(
     <div className="principal"> 
        <div className="cabecalho">
            <div className="logo-cabecalho">
                <Link to="#">
                    A Revisora                  
				</Link>
                <div className="Pesquisa">
                    <form className="form-header" onSubmit={() => false} method="GET">
                        <input className="au-input au-input-xl" type="text" name="search"
                                 placeholder="Busca ..." />
                                <button className="au-btn-submit" type="submit">
                                     Pesquisa
								</button>
                    </form>
                </div>
            </div>
           
        </div>
        <div className="menu">
            <ul className="menu-ul">
                <li><Link className="ativo" to="#">Apresentação</Link></li>
                <li><Link to="/servicos">Serviços</Link></li>
                <li><Link to="#">Central do Cliente</Link></li>
                <li><Link to="#">Contato</Link></li>
                <li className="cadastro"><Link  to="/login">Cadastrar</Link></li>
            </ul>
        
        </div> 
        <div className="corpo">
            <div className="artigos">
                <div className="fundo-home">
                  <img src={background} width="100%" heigth="50"alt="bakground-home" className="background-home-foto"></img>
                </div>
            </div>
            <div className="servicos">
                <div className="box">
                    <div className="box-content">
                        <div className="icon-home">
                            
                        </div>
                        <h2 className="titulo">Sobre a Empresa</h2>
                        <p>Localizada em Goiânia - Go.</p>
                        <p>Atendemos clientes de todo o Brasil!</p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2 className="titulo">Serviços</h2>
                        <li>Revisão gramatical</li>
                        <li>Adequação às normas da ABNT</li>
                        <li>Textual-gramatical</li>
                        <li>Edição/formatação</li>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2 className="titulo">Clientes</h2>
                        <p>Atendemos os melhores!</p>
                        <p>Se você objetiva publicar o seu trabalho, 
                        conte com a experiência e a agilidade de nossa equipe.</p>
                        <Link to="#">Solicite um orçamento!</Link>
                    </div>
               </div>
            </div>
        </div>   
        <div className="rodape">
            <ul>
                <li><Link to="#">Sobre</Link></li>
                <li><Link to="#">Ajuda</Link></li>
                <li><Link to="#">Contato</Link></li>              
            </ul>   
            < p className="criador" >Copyright (C)  Vicente / Witney 2021</p>
        </div>
      
      </div>  
    )


}