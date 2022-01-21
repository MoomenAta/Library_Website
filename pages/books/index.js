import Head from 'next/head'
import { useRouter } from "next/dist/client/router"
import Link from 'next/link'
import { useState } from "react";
import { useEffect } from "react";
import Book from "../../components/book"
import Sidebar from "../../components/sidebar"
import Modal from '../../components/modal'; //modal component

export default function Books({items})
{
    let [books , setBooks] = useState(items);
    let [titleName , setTitleName]=useState('');
    let [authorName , setAuthorName]=useState('');
    let [volumeName , setVolumeName]=useState('');
    let [maxResults , setMaxResults]=useState(10);
    /* FILTER ITEM IDS */
    let booksIds = [];
    useEffect(()=>
    {
        if(typeof window !=='undefined')
        {
            let x = window.localStorage.getItem('maxResults');
        }

        return ()=> booksIds=[];
    },[])
    
    /* URL PARAMS */
    const router = useRouter();
    let volume = router.query.volume || "all";
    let title = router.query.title || '';
    let author = router.query.author || '';
    /* GET ITEMS DEPENDING ON URL */
    let actualParams = `${volume.replace('?','')}${title&&`+intitle:${title.replace('?','')}`}${author&&`+inauthor:${author}`}`
    useEffect(()=>
    {
        console.log(actualParams)
        if(router.asPath.includes('?') || maxResults!==10)
        {
            let fetchApi = async ()=>
            {
                let url =
                `https://www.googleapis.com/books/v1/volumes?q=${actualParams}&maxResults=${maxResults}&key=${process.env.NEXT_PUBLIC_API_BOOK_KEY}`;
                let getdata = await fetch(url);
                let res = await getdata.json();
                let actualData = await res.items;
                setBooks(actualData)
            }
            localStorage.setItem('maxResults',maxResults);
            fetchApi();
        }
    },[actualParams,maxResults,router.asPath])

    /* STATES FOR MODAL */
    let [open , setOpen] = useState(false);
    let [titleToShow , setTitleToShow] = useState('');
    return(
        <>
        <Head>
            <title>Misr Public Library | Books</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
            <div className="search_section">
                
                <input type='text' placeholder="إسم الكتاب" value={titleName} onChange={(e)=>setTitleName(e.target.value)} />
                <input type='text' placeholder="إسم المؤلف" value={authorName} onChange={(e)=>setAuthorName(e.target.value)}/>
                <input type='text' placeholder="التصنيف" value={volumeName} onChange={(e)=>setVolumeName(e.target.value)}/>
                <Link href={`/books${(volumeName&&`?&volume=${volumeName}`)}${(titleName&&`?&title=${titleName}`)}${(authorName&&`?&author=${authorName}`)}`}>
                <button type="button"><img src="/icons/searchIcon.png" alt="search" />بحث</button>
                </Link>
            </div>
            <section className="main_section">
                <div className="books_section">
                    <ul className="CategoryUl">
                        <Link href='/books/?volume=all'>
                            <a>
                                <li className={ (router.asPath.includes(volume) && volume =="all" || router.asPath == "/books" ) ?"activeCategory":''}>كل الكتب</li>
                            </a>
                        </Link>
                        <Link href='/books/?volume=business'>
                            <a>
                                <li className={volume=='business'?"activeCategory":''}>ريادة الاعمال</li>
                            </a>
                        </Link>
                        <Link href='/books/?volume=science'>
                            <a>
                                <li className={volume=='science'?"activeCategory":''}>علمي</li>
                            </a>
                        </Link>
                        <Link href='/books/?volume=fiction'>
                            <a>
                                <li className={volume=='fiction'?"activeCategory":''}>خيال</li>
                            </a>
                        </Link>
                        <Link href='/books/?volume=rwayat'>
                            <a>
                                <li className={volume=='rwayat'?"activeCategory":''}>روايات</li>
                            </a>
                        </Link>
                        <Link href='/books/?volume=philosophy'>
                            <a>
                                <li className={volume=='philosophy'?"activeCategory":''}>فلسفة</li>
                            </a>
                        </Link>
                        <Link href='/books/?volume=self'>
                            <a>
                                <li className={volume=='self'?"activeCategory":''}>سير ذاتية</li>
                            </a>
                        </Link>
                    </ul>
                    <div className="categoryBooks_section">
                    
                    {books?books.filter((book)=>
                    {
                    if(!booksIds.includes(book.id))
                    {
                        booksIds.push(book.id);
                        return book;
                    }
                    }).map((book)=>{
                    return(
                        <Book onClick={()=>{setOpen(true); setTitleToShow(book.volumeInfo.title)}} key={book.id} id={book.id} img={book.volumeInfo.imageLinks?.thumbnail} describtion={book.volumeInfo.subtitle} title={book.volumeInfo.title} />
                    )
                    }):<h3>Please enter Author name properly</h3>}
                    {/* MODAL TO SHOW */}
                    <Modal open={open} setOpen={setOpen} titleToShow={titleToShow} />
                    </div>
                    <button onClick={()=>setMaxResults(maxResults+5)} className='more' type='button'>رؤية المزيد <span>`{'>>'}`</span></button>
                </div>
                <Sidebar />
            </section>
        </>
    )
}

export async function getServerSideProps(context)
{
    let url;
    let volume = context.query.volume || "all";
    let title = context.query.title || '';
    let author = context.query.author || '';
    let actualParams = `${volume.replace('?','')}${title&&`+intitle:${title.replace('?','')}`}${author&&`+inauthor:${author}`}`
    
    
    url = `https://www.googleapis.com/books/v1/volumes?q=${actualParams}&maxResults=10&startIndex=0`;
    let res = await fetch(url);
    let data = await res.json();
    let items = await data.items
    return{
        props : {
            items,
        },
    }
}