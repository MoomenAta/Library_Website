import { useState } from "react";
import { useEffect } from "react";
import Activity from "../../components/activity";
import AllSections from "../../components/allsections";

export default function Sections()
{
    const [allsections , setAllsections] = useState([]);
    useEffect(()=>
    {
        let fetchApi = async()=>
        {
            const res = await fetch('api/sections/allSections');
            const data = await res.json();
            let allSections = await data.allSections;
            setAllsections(allSections);
        }
        fetchApi();
    },[])
    return(
        <>
        {allsections.map((item)=>{
            return(
                <Activity key={item.id} id={item.id} title={item.title} date={item.date} describtion={item.describtion} liked={item.liked} comments={item.comments} imgUrl={item.imgURL}/>
            )
        })}
        </>
    );
}

Sections.getLayout = AllSections;
