import getHash from "../utils/getHash";


const Home = () => {
    const id = getHash()
    const view = `
        <div class="Header-logo">
            <h1>Home de bryan</h1>
        </div>
    `;
    return view;
}

export default Home; 