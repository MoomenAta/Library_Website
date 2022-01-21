import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from "next/dist/client/router"
import styles from '../../styles/bookId.module.css';
import { useEffect } from 'react';

export default function BookId({specifiedBook})
{
    if(typeof specifiedBook === "string")
    {
        return (
            <>
            <Head>
                <title>{specifiedBook}</title>
            </Head>
            <Link href='/books'>
            <a className={styles.back}>&gt;</a>
            </Link>
            <h1 style={{minHeight:"70vh" ,fontSize : "3em" , width : "90%" , textAlign: "center"}}>{ specifiedBook }</h1>
            </>
        );
    }

    return(
        <>
        <div>
            <Head>
                <title>{specifiedBook.volumeInfo.title}</title>
            </Head>
        </div>
        
        <Link href='/books'>
            <a className={styles.back}>&gt;</a>
        </Link>
        <div className={styles.bookIdContainer}>
            <div className={styles.bookImg}>
                <img id="bookImg" className='animationImg' src={specifiedBook.volumeInfo.imageLinks?.thumbnail} />
            </div>
            <div id="bookDetails" className={styles.bookDetails + " " + 'animationText'}>
                <div className={styles.detailsHead}>
                    <h1>{specifiedBook.volumeInfo.title}</h1>
                    <span><span>Language</span> {specifiedBook.volumeInfo.language}</span>
                    <p>by {specifiedBook.volumeInfo.authors?specifiedBook.volumeInfo.authors[0]:"UNKNOWN"}</p>
                </div>
                <div className={styles.detailsBody}>
                    <h3>Describtion</h3>
                    <p>{specifiedBook.volumeInfo?.subtitle}</p>
                </div>
                <div className={styles.detailsFooter}>
                    <p><span>Pages: </span>{specifiedBook.volumeInfo.pageCount}</p>
                    <button type='button'>إستعارة</button>
                </div>
            </div>
            <h1>{specifiedBook.volumeInfo.saleInfo?.saleability}</h1>
            <h1>{specifiedBook.volumeInfo.accessInfo?.pdf.isAvailable}</h1>
        </div>
        </>
    )
}

export async function getServerSideProps(context)
{
    let id = context.query.id;
    let title = context.query.title;
    let specifiedBook;
    let url = `https://www.googleapis.com/books/v1/volumes?q=${title}`
    try{let res = await fetch(url);
    let returnedData = await res.json();
    let allBooks = returnedData.items;
    specifiedBook = await allBooks.find((book)=>book.id == id) || "notfound"; }
    catch(error)
    {
        specifiedBook = "Not found";
    }
    
    return{
        props : {
            specifiedBook,
        }
    }
}