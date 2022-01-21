import { useRouter } from "next/dist/client/router";
export default function ActiveCategory()
{
    let router = useRouter();
    let page = router.asPath;
    let setActiveAttr = (selector)=>
    {
        let allli = document.querySelectorAll(selector);
        allli.forEach((li)=>li.classList.remove('activeCategory'))
        document.querySelector(`[data-active="${page}"]`).classList.add('activeCategory');
    }

    return { setActiveAttr };
}

