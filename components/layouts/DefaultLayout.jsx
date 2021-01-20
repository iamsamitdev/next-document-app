import Footer from "../inclues/Footer"
import Navbar from "../inclues/Navbar"
import Sidebar from "../inclues/Sidebar"

const DefaultLayout = ({children}) => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="content">
                    {children}
                </div>
                <Sidebar />
            </div>
            <Footer />
        </>    
        
    )
}

export default DefaultLayout