export default function Navigation() {
    return (
        <nav>
            <div className="logo">
                <span className="gray">React</span>Deploy
            </div>
            <div className="urls">
                <a href="">Features</a>
                <a href="">Precios</a>
                <a href="">Información</a>
            </div>
            <div className="account">
                <button id="signin">Registrarse</button>
                <button id="login">Entrar</button>
            </div>
        </nav>

    )
}