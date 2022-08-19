import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('footer-total-container')}>
                    <div className={cx('footer-container')}>
                        <div className={cx('email-container')}>
                            <a href="mailto: info@Arqui9.com" target="_blank" rel="noreferrer">
                                info@arqui9.com
                            </a>
                        </div>
                        <div className={cx('phone-container')}>
                            <p>Headquarters</p>
                            <a href="/" target="_blank" rel="noreferrer">
                                +44 (0) 1737 223 342
                            </a>
                        </div>
                        <div className={cx('address-container')}>
                            <p>7-11 Lonsdale House, High St, Reigate, RH2 9AA</p>
                            <div className={cx('address-link')}>
                                <p>United Kingdom</p>
                                &nbsp;
                                <a href="https://goo.gl/maps/P7qTAJcu4jaWnMT2A" target="_blank" rel="noreferrer">
                                    MAP
                                </a>
                            </div>
                        </div>
                        <div className={cx('footer-cookies')}>
                            <a href="/" target="_blank" rel="noreferrer">
                                Cookies
                            </a>
                            &nbsp;/&nbsp;
                            <a href="/" target="_blank" rel="noreferrer">
                                Privacy
                            </a>
                            &nbsp;/&nbsp;
                            <a href="/" target="_blank" rel="noreferrer">
                                Terms
                            </a>
                        </div>
                    </div>
                    <div className={cx('footer-info')}>
                        <a href="/" target="_blank" rel="noreferrer">
                            Instagram
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            Behance
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            Facebook
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            Youtube
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            Linkedin
                        </a>
                        <div className={cx('footer-fadeln')}>©2022 All rights reserved</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
