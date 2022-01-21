let ASdata = {
    "allSections":[
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
        {
            id: 2,
            title : "دورة تعليم الكيروشيه",
            date : "أكتوبر 19 , 2021",
            describtion : " دورة تعليم الكيروشيه للسيدات و التدرب علي جميع الاشكال",
            liked : 60,
            comments : 80,
            imgURL : "../../../imgs/kerochet.jpg"
        },
        {
            id: 3,
            title : "رحلة الاهرامات",
            date : "ديسمبر 6 , 2021",
            describtion : " رحلة لرؤية و التمتع بأثار مصر العظيمه و واحدة من عدائب الدنيا السبع",
            liked : 100,
            comments : 110,
            imgURL : "../../../imgs/pyramids.jpg"
        },
        {
            id: 4,
            title : "ألعاب ذكاء للأطفال",
            date : "ديسمبر 12 , 2021",
            describtion : " العاب ذكاء للأطفال و تنمية تفكيرهم الابداعي و المنطقي",
            liked : 70,
            comments : 7,
            imgURL : "../../../imgs/Moka3ab.jpg"
        },
        {
            id: 5,
            title : "قواعد ريادة الأعمال",
            date : "ديسمبر 12 , 2021",
            describtion : " دليل شامل لكي تصبح رائد اعمال ناجح و متميز و التعلم من اخطاء الاخرين و عدم الوقوع فيها",
            liked : 150,
            comments : 90,
            imgURL : "../../../imgs/EntrepreneurGraphic-01.jpg"
        },
    ]
}

export default function dataProvider(req,res)
{
    res.status(200).json(ASdata)
}