export default function Activity({id,title,date,describtion,liked,comments,imgUrl})
{
    return(
        <div key={id} className='activity'>
            <div className='textPart'>
                <h3>{title}</h3>
                <div className='date'>
                    <img src='/icons/Icon material-date-range.png' alt="date"/>
                    <p>{date}</p>
                </div>
                <p>{describtion}</p>
                <div className='buttons'>
                    <button type='button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11.077" viewBox="0 0 12 11.077">
                    <path id="Icon_ionic-md-heart-empty" data-name="Icon ionic-md-heart-empty" d="M12.075,4.5a3.549,3.549,0,0,0-2.7,1.266A3.549,3.549,0,0,0,6.675,4.5a3.262,3.262,0,0,0-3.3,3.32c0,2.293,2.039,4.134,5.129,6.972l.871.785.871-.785c3.089-2.838,5.129-4.679,5.129-6.972A3.262,3.262,0,0,0,12.075,4.5ZM9.744,14l-.121.113-.248.225-.248-.225L9.006,14A36.665,36.665,0,0,1,5.466,10.48,4.232,4.232,0,0,1,4.3,7.82,2.4,2.4,0,0,1,4.985,6.11a2.348,2.348,0,0,1,1.69-.687,2.646,2.646,0,0,1,1.993.938l.707.839.707-.839a2.636,2.636,0,0,1,1.993-.937,2.359,2.359,0,0,1,1.693.687,2.4,2.4,0,0,1,.684,1.711,4.255,4.255,0,0,1-1.165,2.66A36.739,36.739,0,0,1,9.744,14Z" transform="translate(-3.375 -4.5)" fill="#e54b4b"/>
                    </svg>
                    <span>{liked}</span>
                    </button>
                    <button type='button'>
                    <span>{comments}</span>
                    تعليق
                    </button>
                    <button type='button'>
                    <img src='/icons/Icon feather-share-2.png' alt="share" />
                    شارك
                    </button>
                    <button type='button'>
                    أكمل القراءة
                    </button>
                </div>
            </div>
            <div className='imgPart'>
                <img src={imgUrl} alt='activity' />
            </div>
        </div>
    )
}