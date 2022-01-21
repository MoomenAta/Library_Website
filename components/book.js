import Link from 'next/link';

export default function Book(props)
{
    return(
        <>
            <div id={props.id} className='book'>
                <Link href={`/books/${props.id}?&title=${props.title}`}>
                <a><img src={props.img} alt="book" /></a>
                </Link>
                <h4>{props.title}</h4>
                <p>{props.describtion}</p>
                <button onClick={props.onClick} type='button'>إستعارة</button>
            </div>
        </>
    )
}