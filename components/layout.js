import Footer from "./staticComponents/footer";
import Navbar from "./staticComponents/navbar";

export default function Layout({children})
{
    return(
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>

    );
}