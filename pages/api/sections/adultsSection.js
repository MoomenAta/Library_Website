let ASdata = {
    "adultsSection":[
        {
            id: 0,
            title : "دورة تعليم الكيروشيه",
            data : "أكتوبر 19 , 2021",
            describtion : " دورة تعليم الكيروشيه للسيدات و التدرب علي جميع الاشكال",
            liked : 60,
            comments : 80,
            imgURL : "../../../imgs/kerochet.jpg"
        },
        {
            id: 1,
            title : "قواعد ريادة الأعمال",
            data : "ديسمبر 12 , 2021",
            describtion : " دليل شامل لكي تصبح رائد اعمال ناجح و متميز و التعلم من اخطاء الاخرين و عدم الوقوع فيها",
            liked : 150,
            comments : 90,
            imgURL : "../../../imgs/EntrepreneurGraphic-01.jpg"
        }
    ]
}

export default function dataProvider(req,res)
{
    res.status(200).json(ASdata)
}