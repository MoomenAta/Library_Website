import Link from 'next/link';
import { useRouter } from "next/dist/client/router"
import { useEffect , useRef, useState } from 'react';

export default function Navbar()
{
    let roter = useRouter();
    let searchInputRef = useRef();
    let navigationRef = useRef();
    let collapse = useRef();
    let [inputValue , setInputValue]=useState('');
    let [show , setShow] = useState(false)

    let activeLi = ()=>
    {
        let allLi = document.querySelectorAll('#allNavBar li');
        allLi.forEach(li=>li.classList.remove('active'))
        setShow(false);
    }
    useEffect(()=>
    {
        if(roter.asPath === '/')
        {
            activeLi();
            document.getElementsByTagName('li')[0].classList.add('active');
        }
        if(roter.asPath.startsWith('/books'))
        {
            activeLi();
            document.getElementsByTagName('li')[1].classList.add('active');
        }
        if(roter.asPath.startsWith('/sections'))
        {
            activeLi();
            document.getElementsByTagName('li')[2].classList.add('active');
        }
        if(roter.asPath.startsWith('/blog'))
        {
            activeLi();
            document.getElementsByTagName('li')[3].classList.add('active');
        }
        if(roter.asPath.startsWith('/about_us'))
        {
            activeLi();
            document.getElementsByTagName('li')[4].classList.add('active');
        }
        if(roter.asPath.startsWith('/our_services'))
        {
            activeLi();
            document.getElementsByTagName('li')[5].classList.add('active');
        }
        if(roter.asPath.startsWith('/call_us'))
        {
            activeLi();
            document.getElementsByTagName('li')[6].classList.add('active');
        }
    },[roter.asPath]);

    useEffect(()=>
    {
        let timer ;
        window.addEventListener("scroll",()=>{
            clearTimeout(timer);
            document.getElementById('navCollapseContainer').style.left= "-4rem";
            timer = setTimeout(() => {
                document.getElementById('navCollapseContainer').style.left= "1.3rem";
            }, 150);
        })
    },[])

    let toBigScale = (e)=>
    {
        let ele = document.querySelector("[data-target ='searchInput']")
        if (inputValue == "")
        {
            e.preventDefault();
            ele.style.transform="scaleX(1)";
            ele.style.width = "80%";
        }
        else
        {
            ele.style.transform="scaleX(0)";
            ele.style.width = "0";
            setInputValue("");
        }
    }

    useEffect(()=>
    {
        document.addEventListener("mousedown",(e)=>{
            if(!searchInputRef.current.contains(e.target))
            {
                document.querySelector("[data-target ='searchInput']").style.transform="scaleX(0)";
                document.querySelector("[data-target ='searchInput']").style.width="0";
            }
        })

        document.addEventListener("mousedown",(e)=>{
            if(!navigationRef.current.contains(e.target) &&!collapse.current.contains(e.target))
            {
                setShow(false)
            }
        })
    },[])
    
    useEffect(()=>
    {
        if(show)
        {
            document.getElementById('allNavBar').classList.add('ulLeft');
            collapse.current.childNodes[0].classList.add('close0')
            collapse.current.childNodes[1].classList.add('close1')
            collapse.current.childNodes[2].classList.add('close2')
            console.log(show)
        }
        else
        {
            document.getElementById('allNavBar').classList.remove('ulLeft');
            collapse.current.childNodes[0].classList.remove('close0')
            collapse.current.childNodes[1].classList.remove('close1')
            collapse.current.childNodes[2].classList.remove('close2')
            console.log(show)
        }

    },[show])
    let menuPressed = ()=>
    {
        setShow(!show);
    }

    return(
        <>
            <div className='container'>
                <Link href='/'>
                    <a><h3 className='h3'>مكتبة مصر العامة</h3></a>
                </Link>
                    <div ref={collapse} id="navCollapseContainer" className='collapseSpans' onClick={menuPressed}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className='navigation'>
                        <nav>
                            <ul id="allNavBar" ref={navigationRef} className='ul'>
                                <Link href='/'>
                                    <li className=''>الرئيسية</li>
                                </Link>
                                <Link href='/books'>
                                    <li>الكتب</li>
                                </Link>
                                <Link href='/sections'>
                                    <li>الأقسام</li>
                                </Link>
                                <Link href='/blog'>
                                    <li>المدونة</li>
                                </Link>
                                <Link href='/about_us'>
                                    <li>عن المكتبة</li>
                                </Link>
                                <Link href='/our_services'>
                                    <li>الخدمات</li>
                                </Link>
                                <Link href='/call_us'>
                                    <li>إتصل بنا</li>
                                </Link>
                            </ul>
                        </nav>
                        <div ref={searchInputRef} className='searchContainer'>
                            <Link  href={`/books${inputValue&&`?&title=${inputValue}`}`}>
                                <a>
                                    <button  onClick={toBigScale} id="searchInput" type='button'>
                                        <img src='/icons/searchIcon.png' alt="search" />
                                    </button>
                                </a>
                            </Link>
                            <input data-target="searchInput" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type='text' placeholder='أبحث عن' />
                        </div>
                    </div>
            </div>
        </>
    )
}