import AllSections from "../../components/allsections";
import Activity from "../../components/activity";
import { useState , useEffect } from "react";
export default function Children()
{
    const [childrenSection , setchildrenSection] = useState([]);
    useEffect(()=>
    {
        let fetchApi = async()=>
        {
        let res = await fetch('../api/sections/childrenSection');
        const data = await res.json();
        let childrenSection = await data.childrenSection;
        setchildrenSection(childrenSection);
        }
        fetchApi();
    },[])
    return(
        <>
        {childrenSection.map((item)=>{
            return(
                <Activity key={item.id} id={item.id} title={item.title} date={item.date} describtion={item.describtion} liked={item.liked} comments={item.comments} imgUrl={item.imgURL}/>
            )
        })}
        </>
    );
}

Children.getLayout = AllSections;