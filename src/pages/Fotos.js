const Fotos = () => {
    location.hash = '/fotos'
    const view = `
    <div class="contenedor">
    <div class="menu">
        <img src="../src/images/logo.webp" class="logo" alt="Not found">
       
        <p class="titulo">Instagram</p>
       
        <img src="../src/images/fotoPerfil.jpg" class="fotoP" alt="Foto perfil">
       
        <a href="https://www.facebook.com/PizzaDude007">
            <p class="face">@PizzaDude007</p>
        </a>

        <a href="#/:id">
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
    <div class="cuerpo">
        <div class="foto1">
                <img src="../src/images/foto1.jpg" class="pic" alt="Not found">
                <button class="megusta">Me gusta</button>
                <button class="comentar">Comentar</button>
        </div>
        <div class="foto2">
            <img src="../src/images/foto2.jpg" class="pic" alt="Not found">
            <button class="megusta">Me gusta</button>
            <button class="comentar">Comentar</button>
    </div>
    <div class="foto3">
        <img src="../src/images/foto3.jpg" class="pic" alt="Not found">
        <button class="megusta">Me gusta</button>
        <button class="comentar">Comentar</button>
</div>
    </div>
</div>
    `;
    return view;
};

export default Fotos;