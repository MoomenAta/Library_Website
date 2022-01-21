import AllSections from "../../components/allsections";
import Activity from "../../components/activity";
import { useState , useEffect } from "react";


export default function Youth()
{
    const [youthSection , setyouthSection] = useState([]);
    useEffect(()=>
    {
        let fetchApi = async()=>
        {
            const res = await fetch('../api/sections/youthSection');
            const data = await res.json();
            let youthSection = await data.youthSection;
            setyouthSection(youthSection);
        }
        fetchApi();
    },[])
    return(
        <>
        {youthSection.map((item)=>{
            return(
                <Activity key={item.id} id={item.id} title={item.title} date={item.date} describtion={item.describtion} liked={item.liked} comments={item.comments} imgUrl={item.imgURL}/>
            )
        })}
        </>
    );
}

Youth.getLayout = AllSections;