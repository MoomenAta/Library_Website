import OurServicesLayout from '../../components/ourServices';
import Styles from '../../styles/bookdoor.module.css';
export default function Bookdoor()
{
    return(
        <>
        <div className={Styles.bookdoor}>
            <img src='/imgs/clubs/كتابك-لبابك-موقع-2-360x188.png'/>
            <h1>كتاب لبابك</h1>
            <p>لوقتي تقدر ترد وتستعير الكتب من مكتبة مصر العامة بالزقازيق عن طريق
            خدمة كتابك لبابك Book Delivery</p>
            <button type='button'>شارك</button>
        </div>
            
        </>
    );
}

Bookdoor.getLayout = OurServicesLayout
