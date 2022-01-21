export default function Sidebar()
{
    return(
        <div className="sidebar">
            <div className="news_section">
                <div className="newsTitle">
                    <div className="imgIcon">
                        <img src="/icons/Icon material-autorenew.png" alt="latest" />
                    </div>
                    <span>أخر الاخبار و المقالات</span>
                </div>
                <ul className="newsUl">
                    <li>
                        <div className="imgIconLi">
                            <img src="/icons/Icon material-autorenew.png" alt="latest" />
                        </div>
                        كورس التصميم الجرافيكي
                    </li>
                    <li>
                        <div className="imgIconLi">
                            <img src="/icons/Icon material-autorenew.png" alt="latest" />
                        </div>
                        كورس التصميم الجرافيكي
                    </li>
                    <li>
                        <div className="imgIconLi">
                            <img src="/icons/Icon material-autorenew.png" alt="latest" />
                        </div>
                        كورس التصميم الجرافيكي
                    </li>
                </ul>
            </div>
            <div className="workTime">
                <div className="newsTitle">
                    <div className="imgIcon">
                        <img src="/icons/Icon ionic-md-time.png" alt="latest" />
                    </div>
                    <span>مواعيد العمل</span>
                </div>
                <p>من السبت الي الخميس</p>
                <p>من الساعة التاسعة صباحاً إلي الساعة الخامسة عصراً </p>
                <p>يوم الجمعة</p>
                <p>من الساعة التاسعة صباحاً إلي الساعة الثانية ظهراً </p>
            </div>
        </div>
    );
}