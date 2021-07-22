import React from "react";
import './index.css';
import { Link } from "react-router-dom";
import background from "../../../src/assets/img/background.jpg"


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
                <li><Link to="#">Serviços</Link></li>
                <li><Link to="#">Central do Cliente</Link></li>
                <li><Link to="#">Contato</Link></li>
                <li className="cadastro"><Link  to="#">Cadastrar</Link></li>
            </ul>
        
        </div> 
        <div className="corpo">
            <div className="artigos">

            </div>
            <div className="barra-lateral">

            </div>
        </div>   
        <div className="rodape">
            <ul>
                <li><Link to="#">Sobre</Link></li>
                <li><Link to="#">Ajuda</Link></li>
                <li><Link to="#">Contato</Link></li>
                
            </ul>   

        </div>
      
      </div>  
    )


}