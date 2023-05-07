import "./ContactUs.css"
import Navbar from "../publicNavbar/Navbar"
import Footer from "../footer/Footer"



const ContactUs = () => {
    const content = (
        <section className="public">
           <Navbar />
            <main className="public__main">
                <div className="featured">
                    <div className="container">
                        <div className="left">
                            <h1>
                                Contact Raimo's Auto Repair!
                            </h1>
                            <h3>
                                Raimo Auto Repairs<br />
                                Maantie 8<br />
                                Kauhava, 62000 Finland<br />
                                Phone Number: +(385) 555-5555<br />
                                Owner: Raimo Kotala
                            </h3>
                         
                        </div>
                        <div className="right">
                            <img src="./img/man.png" alt="" classname="img_right"/>
    
                        </div>
                     </div>
                </div>
            </main>
                       
            <Footer />
        </section>
    )
    return content
}
export default ContactUs