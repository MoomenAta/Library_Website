let ASdata = {
    "youthSection":[
        {
            id: 0,
            title : "دورة HTML للمبتدئين",
            date : "ديسمبر 12 , 2021",
            describtion : " دورات معتمدة من وزارة الإتصالات و شركة مايكروسوفت للشباب من 16 : 35 سنة",
            liked : 20,
            comments : 10,
            imgURL : "../../../imgs/activity.png"
        },
        {
            id: 1,
            title : "دورة css للمبتدئين",
            date : "ديسمبر 14 , 2021",
            describtion : " دورات معتمدة من وزارة الإتصالات و شركة مايكروسوفت للشباب من 16 : 35 سنة",
            liked : 10,
            comments : 5,
            imgURL : "../../../imgs/activity.png"
        },
    ],
}

export default function dataProvider(req,res)
{
    res.status(200).json(ASdata)
}