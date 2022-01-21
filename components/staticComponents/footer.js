import Link from 'next/link';

export default function Footer()
{
    return(
        <>
            <footer>
                    <div className="emailSubs">
                        <div className="textContent">
                            <h3>إشترك معنا ليصلك كل جديد</h3>
                            <p>سجل إيميلك لنرسل لك كل جديد</p>
                        </div>
                        <div className="inputContent">
                            <input type='text' placeholder="ادخل ايميلك" />
                            <button type="button">إشترك</button>
                        </div>
                    </div>
                    <div className='copyrightContainer'>
                        <p>Copyright 2021 Misr Public Library Zagazig | MA </p>
                        <div className='iconsConatiner'>
                            <ul>
                                <li>
                                    <img src='/icons/Icon awesome-facebook.png' alt='facebook' />
                                </li>
                                <li>
                                    <img src='/icons/Icon metro-instagram.png' alt='instagram' />
                                </li>
                                <li>
                                    <img src='/icons/Icon awesome-twitter.png' alt='twitter' />
                                </li>
                                <li>
                                    <img src='/icons/Icon awesome-google-plus-g.png' alt='g+' />
                                </li>
                                <li>
                                    <img src='/icons/Icon awesome-soundcloud.png' alt='soundcloud' />
                                </li>
                                <li>
                                    <img src='/icons/Icon awesome-youtube.png' alt='youtube' />
                                </li>
                            </ul>
                        </div>
                    </div>
            </footer>
        </>
    );
}