import { createPortal } from "react-dom";
import styles from '../styles/modal.module.css'

export default function Modal({open , setOpen , titleToShow})
{
    if(!open) return null;
    return createPortal(
        <>
        <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
            <button onClick={()=>setOpen(false)} className={styles.close} type="button">Close</button>
                <h1>{titleToShow}</h1>
                <form>
                    <label>الإسم</label>
                    <input type='text' placeholder="برجاء ادخال الاسم ثلاثي" />
                    <label>رقم العضوية</label>
                    <input type='text' placeholder="رقم العضوية" />
                    <label>رقم الهاتف</label>
                    <input type='text' placeholder="رقم الهاتف للتواصل" />
                </form>
                <button onClick={()=>setOpen(false)} type="button">إرسال الطلب</button>
            </div>
            
        </div>
        </>,document.getElementById('modal'));
}