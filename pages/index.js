import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Activity from '../components/activity';
import Book from '../components/book';
import Modal from '../components/modal';


let startIndexx = 0;

export default function Home({itData,programmingData}) {
  /* DATA FROM PROPS */
  let [books , setBooks]=useState(itData);
  let [books2 , setBooks2]=useState(programmingData);
  /* FILTERED IDS */
  let allitIds = [];
  let allprogrammingIds = [];

  /*NEWS DATA */
  let {newsData} = require('../data/news.json');
  let [news , setNews]= useState(newsData);
  let [activities , setActivities]= useState([])
  /* INTERVAL VARS */
  let newsInterval, imgsinterval , i = 0;

  /* NEWS SLIDEBAR */
  useEffect(()=>{
    let newsBar = document.getElementById('newsBar');
    newsBar.innerText=news[i].text;
    newsInterval = setInterval(() => {
      if(i < news.length)
      {
        newsBar.innerText=news[i].text;
        i++;
      }else 
      {
        i=0
      }
    }, 4000);

    return ()=>
    {
      clearInterval(newsInterval);
      allitIds = [];
      allprogrammingIds = [];
    }
  },[])
  /* ACTIVITIES */
  useEffect(()=>
  {
    fetch('/api/sections/allSections').then(async(res)=>{
      let data = await res.json();
      setActivities(data.allSections)
    })
  },[])
  /* IMGS SLIDEBAR */
  useEffect(()=>
  {
    let dt= 2;
    document.querySelector(`[data-target = "${dt}"]`);
    imgsinterval = setInterval(() => {
      dt++;
      if(dt>3)
      dt = 1;
      let allImgs = document.querySelectorAll('.imgs_1 img');
      allImgs.forEach((img)=>{
        img.classList.remove('centeredImg');
      })
      document.querySelector(`[data-target = "${dt}"]`).classList.add('centeredImg');
    }, 5000);

    return ()=>
    {
      clearInterval(imgsinterval);
    }
  },[])

  /* NEWSBAR CONTROLLER */
  let next = ()=>
  {
    clearInterval(newsInterval);
    if(i<news.length)
    newsBar.innerText=news[i++].text;
    else
    {
      i=0
      newsBar.innerText=news[i++].text;
    }
  }
  let prev = ()=>
  {
    clearInterval(newsInterval);
    if(i<=0)
    {
      i=news.length-1
      newsBar.innerText=news[i--].text;
    }
    else
    newsBar.innerText=news[i--].text;
  }
  /* END NEWSBAR CONTROLLER */

  /* INDEX TO START FETCHING DATA FROM */
  let [startIndex , setStartIndex]=useState(5);

  /* SEE MORE BUTTONit */
  let seeMore = async (volume , index)=>
  {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${volume}&maxResults=5&startIndex=${index}`;
    let getdata = await fetch(url);
    setStartIndex(startIndex + 5);
    let res = await getdata.json();
    let actualData = await res.items;
    if(volume == 'it')
    setBooks([...books , ...actualData]);
    if(volume == 'programming')
    setBooks2([...books2,...actualData])
  }

  /* MODAL */
  let [open , setOpen] = useState(false);
  let [titleToShow , setTitleToShow] = useState('');
  return (
    <>
      <Head>
            <title>Misr Public Library</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <main>
      <div className='newsContainer'>
        <div className='newsContent'>
          <div className='tagline'>
            <h4>أخر الأخبار</h4>
          </div>
          <div className='newsAddress'>
            <h6 id="newsBar">ورش و كورسات تجدها هنا</h6>
            <div className='arrows'>
              <span onClick={prev}><img src='/icons/Icon ionic-ios-arrow-back-1.png' alt='prev'/></span>
              <span onClick={next}><img src='/icons/Icon ionic-ios-arrow-back-1.png' alt='next'/></span>
            </div>
          </div>
        </div>
        
      </div>
      <div className='section_1'>
        <div className='textContent_1'>
          <h6>مرحبا بكم في</h6>
          <h3>مكتبة مصر العامة في الزقازيق</h3>
          <h6>منارة الثقافة و الإبداع</h6>
        </div>
        <div className='imgs_1'>
          <img data-target='3' src='/imgs/3.jpg' alt='first'/>
          <img data-target='2' className="centeredImg" src='/imgs/1.jpg' alt='second'/>
          <img data-target='1' src='/imgs/2.jpeg' alt='third'/>
        </div>
      </div>
      <div className='section_2'>
        <div className='lastUpdate'>
          <div className='title'>
            <div className='icon'>
              <img src='/icons/Icon material-autorenew.png' alt="lastUpdate"/>
            </div>
            <p>ورد حديثاً</p>
          </div>
          <div className='books'>
            {books.filter((book)=>
            {
              if(!allitIds.includes(book.id))
              {
                allitIds.push(book.id);
                return book;
              }
            }).map((book)=>{
              return(
                <Book key={book.id} onClick={()=>{setOpen(true); setTitleToShow(book.volumeInfo.title)}}  id={book.id} img={book.volumeInfo.imageLinks.thumbnail} describtion={book.volumeInfo.subtitle} title={book.volumeInfo.title} />
              )
            })}
            <Modal open={open} setOpen={setOpen} titleToShow={titleToShow} />
          </div>
          
          <button onClick={()=>{seeMore('it' , startIndex)}} className='more' type='button'>رؤية المزيد <span>`{'>>'}`</span></button>
        </div>
        <div className='mostReading'>
          <div className='title'>
            <div className='icon'>
              <img src='/icons/Icon awesome-readme.png' alt="lastUpdate"/>
            </div>
            <p>الأكثر قراءة</p>
          </div>
          <div className='books'>
            {books2.filter((book)=>
            {
              if(!allprogrammingIds.includes(book.id))
              {
                allprogrammingIds.push(book.id);
                return book;
              }
            }).map((book)=>{
              return(
                <Book key={book.id} onClick={()=>{setOpen(true); setTitleToShow(book.volumeInfo.title)}}  id={book.id} img={book.volumeInfo.imageLinks.thumbnail} describtion={book.volumeInfo.subtitle} title={book.volumeInfo.title} />
              )
            })}
          </div>
          <button onClick={()=>seeMore('programming' , startIndex)} className='more' type='button'>رؤية المزيد <span>`{'>>'}`</span></button>
        </div>
      </div>
      <div className='section_3'>
        <div className='activitiesContainer'>
          <div className='title'>
            <div className='icon'>
              <img src='/icons/Icon feather-activity.png' alt="lastUpdate"/>
            </div>
            <p>أحدث الأنشطة و الدورات</p>
          </div>
          <div className='activities'>
          {activities.map((item)=>{
            return(
                <Activity key={item.id} id={item.id} title={item.title} date={item.date} describtion={item.describtion} liked={item.liked} comments={item.comments} imgUrl={item.imgURL}/>
            )
          })}
            <button className='more' type='button'>رؤية المزيد <span>`{'>>'}`</span></button>
          </div>
          
        </div>
      </div>
    </main>
    </>
  )
}


export async function getServerSideProps()
{
  let it = await fetch(`https://www.googleapis.com/books/v1/volumes?q=it&maxResults=5&startIndex=${startIndexx}`);
  let programming = await fetch('https://www.googleapis.com/books/v1/volumes?q=programming&maxResults=5&startIndex=0');
  let itRes = await it.json();
  let programmingRes = await programming.json();
  let itData = await itRes.items;
  let programmingData= await programmingRes.items;
  return{
    props : {
      itData,
      programmingData
    }
  }
}