import styles from './ScrollTop.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function ScrollTop() {
    const [count, setCount] = useState('');
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 299) {
                setCount('show');
            } else {
                setCount('');
            }
        });
    }, []);
    const ScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container', count)}>
                <button className={cx('button')} onClick={ScrollUp}>
                    <h5>TOP</h5>
                </button>
            </div>
        </div>
    );
}

export default ScrollTop;
