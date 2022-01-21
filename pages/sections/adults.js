import AllSections from "../../components/allsections";
import Activity from "../../components/activity";
import { useState , useEffect } from "react";


export default function Adults()
{
    const [adultsSection , setadultsSection] = useState([]);
    useEffect(()=>
    {
        let fetchApi = async()=>
        {
        const res = await fetch('../api/sections/adultsSection');
        const data = await res.json();
        let adultsSection = await data.adultsSection;
        setadultsSection(adultsSection);
        }
        fetchApi();
    },[])
    return(
        <>
        {adultsSection.map((item)=>{
            return(
                <Activity key={item.id} id={item.id} title={item.title} date={item.date} describtion={item.describtion} liked={item.liked} comments={item.comments} imgUrl={item.imgURL}/>
            )
        })}
        </>
    );
}

Adults.getLayout = AllSections;