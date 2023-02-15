
    /* MENU */

import CartWidget from "./CartWidget";
import logo from "./images/Logo.png"


const Navbar = () => {
    return (
<div className="container">
    <div className="row">
        <div className="col">
            <nav className="navbar navbar-expand-lg bg-">
                <div className="container-fluid">
                        <a className="navbar-brand" href="/"><img src={logo} width={"120"}></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link text-light justify-content-end " href="{/Fragancias}">Colonias</a>
                            <a className="nav-link text-light" href="{/Relojes}">Relojes</a>
                            <a className="nav-link text-light"href="{/Anillos}">Anillos</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <div className="col d-flex align-items-center justify-content-end">
        <CartWidget></CartWidget>
    </div>
</div>
    )
}

export default Navbar;