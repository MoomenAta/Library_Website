import Sidebar from "./sidebar";
import Link from 'next/link';
import { useEffect } from "react";
import ActiveCategory from "./usedComponents/activeCategory";
export default function AllSections({children})
{
    let {setActiveAttr} = ActiveCategory();
    useEffect(()=>
    {
        setActiveAttr('.CategoryUl li')
    })
    return(
        <>
        <section className="main_section">
            <div className="all_sections">
                <ul className="CategoryUl">
                    <Link href='/sections'>
                    <a><li data-active="/sections">كل الأقسام</li></a>
                    </Link>
                    <Link href='/sections/children'>
                        <a><li data-active="/sections/children">قسم الأطفال</li></a>
                    </Link>
                    <Link href='/sections/youth'>
                        <a><li data-active="/sections/youth">قسم الشباب</li></a>
                    </Link>
                    <Link href='/sections/adults'>
                        <a><li data-active="/sections/adults">قسم الكبار</li></a>
                    </Link>
                    
                </ul>
                <div className="active_Section">
                    {children}
                </div>
            </div>
            <Sidebar />
        </section>
        </>
    )
}