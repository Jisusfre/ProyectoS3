import '../styles/css/Error.css'

const Error404 = () => {
    location.hash = '/404c'
    const view = `
        <div class="Error404">
            <h2>Error 404</h2>
            <img src="../src/images/404.png">
        </div>
    `;
    return view;
};

export default Error404;