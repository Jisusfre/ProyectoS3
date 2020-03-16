import '../styles/css/home.css';

const leftMenu = ( ) => {
    const view = `
    <div class="menu">
    <img src="./images/logo.webp" class="logo" alt="Not found">
   
    <p class="titulo">Instagram</p>
   
    <img src="./images/fotoPerfil.jpg" class="fotoP" alt="Foto perfil">
   
    <a href="https://www.facebook.com/PizzaDude007">
        <p class="face">@PizzaDude007</p>
    </a>

    <a href="./home.html">
        <p class="home">Home</p>
    </a>

    <a href="./informacion.html">
        <p class="informacion">Informacion personal</p>
    </a>

    <a href="./fotos.html">
        <p class="fotos">Fotos</p>
    </a>

    <a href="./configuracion.html">
        <p class="config">Configuración</p>
    </a>
</div>
    `;
    return view;
};

export default Header;