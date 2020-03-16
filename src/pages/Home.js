import getHash from "../utils/getHash";
import '../styles/css/home.css'

const Home = () => {
    const id = getHash()
    location.hash = '/:id'; 
    const view = `
    <div class="cuerpo">
        <h1 class="nombre">Pieter Van Der Warf</h1>
        <img src="../src/images/PORTADA.jpg" class="portada" alt="Portada">
        <p class="seguidores">Seguidores 1k</p>
        <p class="seguidos">Seguidos 20k</p>
        <p class="agregarF">Agregar foto</p>
        <a href="#/404c" id = "add">
            <img src="../src/images/agregarImg.png" class="agregarImg" alt="Agregar foto">
        </a>
    </div>
        <div class="menu">
            <img src="../src/images/logo.webp" class="logo" alt="Not found">
           
            <p class="titulo">Instagram</p>
           
            <img src="../src/images/fotoPerfil.jpg" class="fotoP" alt="Foto perfil">
           
            <a href="https://www.facebook.com/PizzaDude007">
                <p class="face">@PizzaDude007</p>
            </a>

            <a href="/">
                <p class="home">Home</p>
            </a>

            <a href="/">
                <p class="informacion">Informacion personal</p>
            </a>

            <a href="#/fotos">
                <p class="fotos">Fotos</p>
            </a>

            <a href="/">
                <p class="config">Configuración</p>
            </a>

            <><>
        </div>


        

    `;
    return view;
}

export default Home; 