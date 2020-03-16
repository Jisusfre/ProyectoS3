import '../styles/css/style.css' //El color del formato si lo mete

const Login = () => {
    const view = `
        <div id = "pic">
        </div> 
        <div class = "start">
            <h1>INICIAR SESION</h1>
                <input type="text" placeholder="Username" required>
                <input type="password" placeholder="Password" required>
                <button onclick="validar()" id = "boton"></button>
        </div> 
    `;
    return view;
};

export default Login;