import React from "react";
import './index.css';
import { Link } from "react-router-dom";
import logo from "../../assets/img/LOGOSITE.jpg";


export default function Home(){

    return(
          
        <header>
        <div className="page-wrapper">            
		<aside className="menu-sidebar d-none d-lg-block">
			<div className="logo">
				<Link to="#">
                <img src={logo} alt="Revisão Textual" class="img-responsive" />
				</Link>
			</div>
			<div className="menu-sidebar-content js-scrollbar1">
				<nav className="navbar-sidebar">
					<ul className="list-unstyled navbar-list">
						<li>
							<Link to="#">Sobre a Empresa</Link>
						</li>
						<li>
							<Link to="#">Serviços</Link>
						</li>
						<li>
							<Link to="#">Clientes</Link>
						</li>

					</ul>
				</nav>
			</div>
		</aside>
        <div className="page-container">
        <header className="header-desktop">
				<div className="section-content section-content-p30">
					<div className="container-fluid">
						<div className="header-wrap">
                            <div className="menu">
                                <ul>
                                    <li><Link to="#">Apresentação</Link></li>
                                    <li><Link to="#">Serviços</Link></li>
                                    <li><Link to="#">Central do Cliente</Link></li>
                                    <li><Link to="#">Contato</Link></li>
                                </ul>
                            </div>
                                                            
							<div className="cart-area d-n">
								<Link to="shopping-detail.html">
                                <form class="form-header" onSubmit={() => false}  method="GET">
                                    <button class="au-btn-submit" type="submit">
                                        Cadastrar
                                    </button>
							    </form>
								</Link>
							</div>
						</div>
						<div className="account-wrap"></div>
					</div>
				</div>
			</header>
            <h1>Corpo do site</h1>
            <h1>Corpo do site</h1>
            <h1>Corpo do site</h1>
            <h1>Corpo do site</h1>
            <h1>Corpo do site</h1>
        </div>
        </div>
        <footer>
            <ul>
                <li><Link to="#">Sobre</Link></li>
                <li><Link to="#">Ajuda</Link></li>
                <li><Link to="#">Contato</Link></li>
                
            </ul>    
        </footer>   
        </header>
        
    )


}