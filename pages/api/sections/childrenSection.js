let ASdata = {
    "childrenSection":[
        {
            id: 0,
            title : "رحلة الاهرامات",
            date : "ديسمبر 6 , 2021",
            describtion : " رحلة لرؤية و التمتع بأثار مصر العظيمه و واحدة من عدائب الدنيا السبع",
            liked : 100,
            comments : 110,
            imgURL : "../../../imgs/pyramids.jpg"
        },
        {
            id: 1,
            title : "ألعاب ذكاء للأطفال",
            date : "ديسمبر 12 , 2021",
            describtion : " العاب ذكاء للأطفال و تنمية تفكيرهم الابداعي و المنطقي",
            liked : 70,
            comments : 7,
            imgURL : "../../../imgs/Moka3ab.jpg"
        },
    ]
}

export default function dataProvider(req,res)
{
    res.status(200).json(ASdata)
}