import OurServicesLayout from '../../components/ourServices';
import styles from '../../styles/ourServices.module.css';
export default function Voicebooks()
{
    
    return(
        <div className={styles.iframediv}>
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https://soundcloud.com/alafasy/maryam-hafse&amp;">
            </iframe>

            <iframe width="100%" height="600" scrolling="yes" frameBorder="no" allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https://soundcloud.com/alafasy/sets/quran1">
            </iframe>
        </div>
    );
}

Voicebooks.getLayout = OurServicesLayout
