import styles from './Bars.module.scss';
import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { UseContext } from '~/Layouts/DefaultLayout/DefaultLayout';
import { SiInstagram, SiYoutube, SiBehance } from 'react-icons/si';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { Images } from '~/Images/Images';
const cx = classNames.bind(styles);

const ICONS = [
    {
        icon: <SiInstagram className={cx('icon')} />,
    },
    {
        icon: <FaFacebookF className={cx('icon')} />,
    },
    {
        icon: <SiYoutube className={cx('icon')} />,
    },
    {
        icon: <SiBehance className={cx('icon')} />,
    },
    {
        icon: <FaLinkedinIn className={cx('icon')} />,
    },
    {
        icon: <FiMail className={cx('icon')} />,
    },
];

function Bars() {
    const { setBars } = useContext(UseContext);
    const [count, setCount] = useState('');
    const _hanldeContacts = () => {
        return ICONS.map((item, index) => (
            <div key={index} className={cx('contact')}>
                <a href="/">{item.icon}</a>
            </div>
        ));
    };
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 99) {
                setCount('barsp');
            } else {
                setCount('');
            }
        });
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('bars-box-container', count)}>
                    <img className={cx('logo-icon')} src={Images.LogoIcon} alt="Logo Arqui9" />
                    <div className={cx('bars-box')} onClick={() => setBars(false)}>
                        <div className={cx('top-bun')}></div>
                        <div className={cx('bottom-bun')}></div>
                    </div>
                </div>
                <div className={cx('bars')}>
                    <div className={cx('pages-container')}>
                        <div className={cx('page')}>
                            <a href="/">Home</a>
                        </div>
                        <div className={cx('page')}>
                            <a href="/">Visualisation</a>
                        </div>
                        <div className={cx('page')}>
                            <a href="/">Product</a>
                        </div>
                        <div className={cx('page')}>
                            <a href="/">Meta</a>
                        </div>
                        <div className={cx('page')}>
                            <a href="/">Studio</a>
                        </div>
                        <div className={cx('page')}>
                            <a href="/">Contact</a>
                        </div>
                    </div>
                    <div className={cx('contact-container')}>{_hanldeContacts()}</div>
                </div>
            </div>
        </div>
    );
}

export default Bars;
