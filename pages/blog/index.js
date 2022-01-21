import { useEffect, useState } from "react";
import Activity from "../../components/activity";
import Sidebar from "../../components/sidebar";
import Styles from '../../styles/blog.module.css';

export default function Blog()
{
    const [article , setArticle] = useState({})
    useEffect(async()=>{
        let res = await fetch('../api/sections/childrenSection');
        const data = await res.json();
        let article = await data.childrenSection[0];
        setArticle(article);
    },[])
    return(
        <>
            <section className="main_section">
                <div className={Styles.blog_section}>
                    <div className='title'>
                        <div className='icon'>
                            <img src='/icons/Icon feather-activity.png' alt="lastUpdate"/>
                        </div>
                        <p>أحدث المقالات</p>
                    </div>
                    <Activity key={article.id} id={article.id} title={article.title} date={article.date} describtion={article.describtion} liked={article.liked} comments={article.comments} imgUrl={article.imgURL} />
                </div>
                <Sidebar />
            </section>
        </>
    );
}