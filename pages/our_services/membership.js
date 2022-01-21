import OurServicesLayout from '../../components/ourServices';
import Styles from '../../styles/membership.module.css'
export default function Membership()
{
    return(
        <>
        <div className={Styles.membership}>
            <h1>عضوية مكتبة مصر العامة بالزقازيق</h1>
            <p>تقبل المكتبة أشتراك جميع فئات المجتمع بدءً من سن ثلاث سنوات</p>
            <p>يوجد خصم 25% للأشتراك العائلي على الأجمالى</p>
            <p>يتمتع العضو بجميع الخدمات الى تقدمها المكتبة</p>
        </div>
        <div className={Styles.membershipCards}>
            <div className={Styles.card}>
                <h3>عضوية الأطفال</h3>
                <p>العمر 3 – 15 سنة</p>
                <div className={Styles.price}>
                    <p>سنوي </p><span>20  جنية</span>
                </div>
                <ul>
                    <li>أستمارة أشتراك عضوية
                    ” تحصل عليها من المكتبة “</li>
                    <li>أستمارة ضمانة
                    ” تحصل عليها من المكتبة “
                    </li>
                    <li>عدد 2 صورة 6X4</li>
                    <li>صورة شهادة الميلاد</li>
                    <li>صورة بطاقة ولى الأمر</li>
                    <li>صورة بطاقة الضامن</li>
                </ul>
                <button type='button'>تسجيل</button>
            </div>

            <div className={Styles.card}>
                <h3>عضوية الأطفال</h3>
                <p>العمر 3 – 15 سنة</p>
                <div className={Styles.price}>
                    <p>سنوي </p><span>20  جنية</span>
                </div>
                <ul>
                    <li>أستمارة أشتراك عضوية
                    ” تحصل عليها من المكتبة “</li>
                    <li>أستمارة ضمانة
                    ” تحصل عليها من المكتبة “
                    </li>
                    <li>عدد 2 صورة 6X4</li>
                    <li>صورة شهادة الميلاد</li>
                    <li>صورة بطاقة ولى الأمر</li>
                    <li>صورة بطاقة الضامن</li>
                </ul>
                <button type='button'>تسجيل</button>
            </div>

            <div className={Styles.card}>
                <h3>عضوية الأطفال</h3>
                <p>العمر 3 – 15 سنة</p>
                <div className={Styles.price}>
                    <p>سنوي </p><span>20  جنية</span>
                </div>
                <ul>
                    <li>أستمارة أشتراك عضوية
                    ” تحصل عليها من المكتبة “</li>
                    <li>أستمارة ضمانة
                    ” تحصل عليها من المكتبة “
                    </li>
                    <li>عدد 2 صورة 6X4</li>
                    <li>صورة شهادة الميلاد</li>
                    <li>صورة بطاقة ولى الأمر</li>
                    <li>صورة بطاقة الضامن</li>
                </ul>
                <button type='button'>تسجيل</button>
            </div>

            <div className={Styles.card}>
                <h3>عضوية الأطفال</h3>
                <p>العمر 3 – 15 سنة</p>
                <div className={Styles.price}>
                    <p>سنوي </p><span>20  جنية</span>
                </div>
                <ul>
                    <li>أستمارة أشتراك عضوية
                    ” تحصل عليها من المكتبة “</li>
                    <li>أستمارة ضمانة
                    ” تحصل عليها من المكتبة “
                    </li>
                    <li>عدد 2 صورة 6X4</li>
                    <li>صورة شهادة الميلاد</li>
                    <li>صورة بطاقة ولى الأمر</li>
                    <li>صورة بطاقة الضامن</li>
                </ul>
                <button type='button'>تسجيل</button>
            </div>
        </div>
        <div className={Styles.notes}>
            <h1>ملاحظات مهمة</h1>
            <ul>
                <li>تصرف إستمارة العضوية وإستمارة الضمانة من المكتبة</li>
                <li>للأعضاء الغير راغبين فى أستعارة الكتب خارج المكتبة لا تشترط الضمانة عند الأشتراك</li>
            </ul>
        </div>
        </>
    );
}

Membership.getLayout = OurServicesLayout
