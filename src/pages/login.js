import '../styles/css/style.css' //El color del formato si lo mete

const Login = () => {
    const view = `
        <div id = "pic">
        </div> 
        <div class = "start">
            <h1>INICIAR SESION</h1>
            <form action = "#/:id">
                <input type="text" placeholder="Username" required>
                <input type="password" placeholder="Password" required>
                <input type="submit" value = "START">
            </form>
        </div> 
    `;
    return view;
};

export default Login;