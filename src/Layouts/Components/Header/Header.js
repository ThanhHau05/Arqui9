import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Images } from '~/Images/Images';
import { useContext, useEffect, useState } from 'react';
import { UseContext } from '~/Layouts/DefaultLayout/DefaultLayout';
const cx = classNames.bind(styles);

function Header() {
    const [background, setbackground] = useState('');
    const { bars, setBars } = useContext(UseContext);
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
                <a style={{ display: 'flex' }} href="/">
                    <img className={cx('logo')} src={Images.Logo} alt="Logo Arqui9" />
                    {!bars && <img className={cx('logo-icon')} src={Images.LogoIcon} alt="Logo Arqui9" />}
                </a>
                {!bars && (
                    <div className={cx('bars-box')} onClick={() => setBars(true)}>
                        <div className={cx('top-bun')}></div>
                        <div className={cx('patty')}></div>
                        <div className={cx('bottom-bun')}></div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
