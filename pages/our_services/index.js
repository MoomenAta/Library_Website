import OurServicesLayout from '../../components/ourServices';
import styles from '../../styles/ourServices.module.css';
export default function Our_services()
{
    return(
        <>
            <div className={styles.service}>
                <img src='/imgs/clubs/serv-09-360x203.png' alt="service" />
                <div className={styles.info}>
                    <h3>نادي السينما</h3>
                    <p>مشاهدة كل ماهو جديد في عالم السينما</p>
                </div>
            </div>
            <div className={styles.service}>
                <img src='/imgs/clubs/serv-07-360x203.png' alt="service" />
                <div className={styles.info}>
                    <h3>نادي العلوم</h3>
                    <p>نادي يمكنك فيه انشاء تجارب علمية و إكتشاف نتائجها و تحليلها</p>
                </div>
            </div>
            <div className={styles.service}>
                <img src='/imgs/clubs/serv-08-360x203.png' alt="service" />
                <div className={styles.info}>
                    <h3>نادي الأدبي</h3>
                    <p>مناقشة للكتب و توضيح اهدافها و التعلم منها من جميع المجالات</p>
                </div>
            </div>
            <div className={styles.service}>
                <img src='/imgs/clubs/serv-06-360x203.png' alt="service" />
                <div className={styles.info}>
                    <h3>نادي الحاسب الالي</h3>
                    <p>دراسة الحاسب الالي للاطفال و جعلهم علي دارية بالاستخدام الصحيح للتكنولوجيا</p>
                </div>
            </div>
            <div className={styles.service}>
                <img src='/imgs/clubs/serv-05-360x203.png' alt="service" />
                <div className={styles.info}>
                    <h3>نادي الوسائط المتعددة</h3>
                    <p>نادي يمكنك فيه انشاء تجارب علمية و إكتشاف نتائجها و تحليلها</p>
                </div>
            </div>
            <div className={styles.service}>
                <img src='/imgs/clubs/serv-03-360x203.png' alt="service" />
                <div className={styles.info}>
                    <h3>نادي الإعارة الجامعية</h3>
                    <p>نادي يمكنك فيه انشاء تجارب علمية و إكتشاف نتائجها و تحليلها</p>
                </div>
            </div>
            <div className={styles.service}>
                <img src='/imgs/clubs/serv-04-360x203.png' alt="service" />
                <div className={styles.info}>
                    <h3>نادي الدوريات</h3>
                    <p>نادي يمكنك فيه انشاء تجارب علمية و إكتشاف نتائجها و تحليلها</p>
                </div>
            </div>
            <div className={styles.service}>
                <img src='/imgs/clubs/serv-02-360x203.png' alt="service" />
                <div className={styles.info}>
                    <h3>نادي الإستعارة الخارجية</h3>
                    <p>نادي يمكنك فيه انشاء تجارب علمية و إكتشاف نتائجها و تحليلها</p>
                </div>
            </div>
            <div className={styles.service}>
                <img src='/imgs/clubs/serv-10-360x203.png' alt="service" />
                <div className={styles.info}>
                    <h3>نادي الخدمات لذوي الاحتياجات الخاصة</h3>
                    <p>نادي يمكنك فيه انشاء تجارب علمية و إكتشاف نتائجها و تحليلها</p>
                </div>
            </div>
            <div className={styles.service}>
                <img src='/imgs/clubs/reading-book-360x203.png' alt="service" />
                <div className={styles.info}>
                    <h3>نادي الاطلاع الداخلي</h3>
                    <p>نادي يمكنك فيه انشاء تجارب علمية و إكتشاف نتائجها و تحليلها</p>
                </div>
            </div>
            <div className={styles.service}>
                <img src='/imgs/clubs/كتابك-لبابك-موقع-2-360x188.png' alt="service" />
                <div className={styles.info}>
                    <h3>نادي كتابك لبابك</h3>
                    <p>نادي يمكنك فيه انشاء تجارب علمية و إكتشاف نتائجها و تحليلها</p>
                </div>
            </div>
        </>
    );
}
Our_services.getLayout = OurServicesLayout

