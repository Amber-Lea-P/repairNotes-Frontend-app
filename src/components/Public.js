import  Carousel  from "./carousel/Carousel.js"
import Featured from './featured/Featured.js'
import AsSeenOn from './asSeenOn/AsSeenOn.js'
import Navbar from './publicNavbar/Navbar.js'
import Footer from './footer/Footer.js'

const Public = () => {
    const content = (
        <section className="public">
            <Navbar />
            <Featured />
            <AsSeenOn />
            <main className="public__main">
                

                <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
                <Carousel
                show={3}
                infiniteLoop={true}
            >
                <div>
                    <div style={{padding: 4}}>
                        <img src="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/" alt="placeholder" style={{width: '300px', height: '300px'} } />
                    </div>
                </div>
                
                <div>
                    <div style={{padding: 4}}>
                        <img src="https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&w=1600/" alt="placeholder" style={{width: '300px', height: '300px'} } />
                    </div>
                </div>
                
                <div>
                    <div style={{padding: 4}}>
                        <img src="https://images.pexels.com/photos/3807297/pexels-photo-3807297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="placeholder" style={{width: '300px', height: '300px'} } />
                    </div>
                </div>
                <div>
                    <div style={{padding: 4}}>
                        <img src="https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="placeholder" style={{width: '300px', height: '300px'} } />
                    </div>
                </div>
                <div>
                    <div style={{padding: 4}}>
                        <img src="https://images.pexels.com/photos/13065697/pexels-photo-13065697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/" alt="placeholder" style={{width: '300px', height: '300px'} } />
                    </div>
                </div>
                <div>
                    <div style={{padding: 4}}>
                        <img src="https://images.pexels.com/photos/7006668/pexels-photo-7006668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="placeholder" style={{width: '300px', height: '300px'} }/>
                    </div>
                </div>
            </Carousel>
                </div>
            </main>
            <Footer />
        </section>

    )
    return content
}
export default Public