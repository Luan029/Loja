import React from "react"
import "./Header.css"
import Imagem from "./tenis.png"
import { IoPersonSharp, IoHeartSharp} from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import { IoMdCart } from "react-icons/io";
const Header = () =>
    <React.Fragment>
        <header>
            <div className="logo">
                <img src={Imagem} alt="logo" />
                <h1>Loja</h1>
            </div>
            <div>
                <form>
                    <input type="text" id="pesquisa" placeholder="O que você está procurando?" />
                    <div id="lupa"><ImSearch/></div>
                </form>
            </div>
            <nav className="dir">
                <a href="https://luan029.github.io/PointDoAcai/"><IoPersonSharp/>Entrar</a>
                <a href="https://luan029.github.io/PointDoAcai/"><IoHeartSharp/>Lista de Desejos</a>
                <a href="https://luan029.github.io/PointDoAcai/"><IoMdCart/> Carrinho</a>
            </nav>
        </header>
    </React.Fragment>

export default Header