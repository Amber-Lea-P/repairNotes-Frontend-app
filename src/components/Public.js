import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Minna's Auto Repair!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful city of Kauhava, Minna's Auto Repair provides a trained staff ready to meet your auto repair needs.</p>
                <address className="public__addr">
                Minna's Auto Repair<br />
                    555 Luomotie<br />
                    Kauhava, FI 62000<br />
                    <a href="tel:+35855555555555">(358) 555-555555</a>
                </address>
                <br />
                <p>Owner: Minna Rantala</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public