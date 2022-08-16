import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Images } from '~/Images/Images';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function Header() {
    const [background, setbackground] = useState('');
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 99) {
                setbackground('header-background');
            } else {
                setbackground('');
            }
        });
    }, []);
    return (
        <div className={cx('wrapper', background)}>
            <div className={cx('container')}>
                <img src={Images.Logo} alt="Logo Arqui9" />
                <div className={cx('bars-box')}>
                    <div className={cx('top-bun')}></div>
                    <div className={cx('patty')}></div>
                    <div className={cx('bottom-bun')}></div>
                </div>
            </div>
        </div>
    );
}

export default Header;
