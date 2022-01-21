import Head from 'next/head'
import { useEffect } from 'react/cjs/react.development';
import GoogleMapReact from 'google-map-react';
import Sidebar from '../../components/sidebar'
import styles from '../../styles/callUs.module.css';
export default function Call_us()
{

        
    return(
        <>
        <Head>
            <title>Call us</title>
            
        </Head>
            <section className='main_section'>
                <div className={styles.mainContent}>
                    <div className='title'>
                        <div className='icon'>
                            <img src='/icons/Icon ionic-ios-chatbubbles.png' alt="lastUpdate"/>
                        </div>
                        <p>إتصل بنا</p>
                    </div>
                    <div className={styles.part}>
                        <div className={styles.part_1 + " " + styles.fwidth}>
                            <h2> ! لنتحدث؛ نشارك؛ ننقد …. لنتواصل</h2>
                            <p>في مكتبة مصر العامة بالزقازيق نحب جداً ان نتواصل
                                مع كل من يهتم بقراءة 
                                ما يعرض علي موقعنا لسنا كاملين ومتأكدين من هذا … لكننا نتطلــع دومــاً لنصبح الأفضل، 
                                تواصلكم معناً سيعنى لنـا الكثير. تواصـل وتحــدث معنـــا فــي اي شئ، 
                                وتأكد ان معلوماتك التي تزودنا بها تبقي سرية، ولا نستخدمها الا لغرض التواصل معك فقط</p>
                            <img src='/imgs/character2.png' alt="char" />
                        </div>
                        <div className={styles.part_2 + " " + styles.fwidth}>
                            <h1>
                                <span>
                                    <img src='/icons/Icon material-location-on.png' alt='location' />
                                </span>
                                موقعنا علي الخريطة
                            </h1>
                            
                            <div id="map" style={{height: '90%' , width :'100%' }}>
                                <GoogleMapReact
                                bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_API_BOOK_KEY }}
                                defaultCenter={{lat: 30.58768,lng: 31.502}}
                                defaultZoom={11}
                                >
                                    <div style={{borderRadius:'20px'}}></div>
                                </GoogleMapReact>

                            </div>
                        </div>
                        <div className={styles.part_3 + " " + styles.fwidth}>
                            <h1>
                                <span>
                                    <img src='/icons/Icon material-message.png' alt='location' />
                                </span>
                                إرسل لنا رسالة
                            </h1>
                            <form>
                                <label>إسمك</label>
                                <input type="text" placeholder='الاسم' />
                                <label>الايميل</label>
                                <input type="text" placeholder='الايميل' />
                                <label>عنوان الرسالة</label>
                                <input type="text" placeholder='عنوان الرسالة' />
                                <label>رسالتك</label>
                                <textarea placeholder='رسالتك' />
                                <button type='submit'>إرسال</button>
                            </form>
                        </div>
                        <div className={styles.part_4 + " " + styles.fwidth}>
                            <h1>
                                <span>
                                    <img src='/icons/Icon material-my-location.png' alt='location' />
                                </span>
                                عنوان المكتبة
                            </h1>
                            <p>جمهورية مصر العربية , – محافظة الشرقية</p>
                            <p>الزقازيق ,تقسيم المعلمين – 2 ش ابوبكر الصديق ,بجوار نادى احمد عرابي
                            ,امام جامعة الزقازيق </p>
                            <div className={styles.teleFax}>
                                <p>
                                    <img src='/icons/Icon awesome-fax.png' alt='fax' />
                                    Fax: +002 055 2318166
                                </p>
                                <p>
                                    <img src='/icons/Icon map-volume-control-telephone.png' alt='telephone' />
                                    Tel: +002 055 2318164
                                </p>
                            </div>
                            <div className={styles.emails}>
                                <p>
                                    <img src='/icons/Icon zocial-email.png' alt='email' />
                                    إيميل الإستعلامات : info@mplzag.org.eg 
                                </p>
                                <p>
                                    <img src='/icons/Icon zocial-email.png' alt='email' />
                                    إيميل الإستعلامات : info@mplzag.org.eg 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Sidebar />
            </section>
        </>
            
    );
}