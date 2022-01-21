import { useEffect } from 'react';
import Link from 'next/link';
import Sidebar from './sidebar';
import styles from '../styles/ourServices.module.css';
import ActiveCategory from './usedComponents/activeCategory';
export default function OurServicesLayout({children})
{
    let {setActiveAttr} = ActiveCategory();
    useEffect(()=>
    {
        setActiveAttr('.CategoryUl li')
    })
    return(
        <>
            <section className='main_section'>
                <div className={styles.services}>
                    <ul className="CategoryUl">
                        <Link href='/our_services'>
                            <a><li data-active="/our_services">الخدمات</li></a>
                        </Link>
                        <Link href='/our_services/membership'>
                            <a><li data-active="/our_services/membership">العضوية</li></a>
                        </Link>
                        <Link href='/our_services/bookdoor'>
                            <a><li data-active="/our_services/bookdoor">كتاب لبابك</li></a>
                        </Link>
                        <Link href='/our_services/voicebooks'>
                            <a><li data-active="/our_services/voicebooks">الكتب الصوتية</li></a>
                        </Link>
                    </ul>
                    <div className={styles.activeCategory}>
                        {children}
                    </div>
                </div>
                <Sidebar />
            </section>
        </>
    );
}