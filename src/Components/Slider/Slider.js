import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { Close, Next, Prev } from '../Icons/Icons';
import { useContext, useState } from 'react';
import { UseContext } from '../DisplayProduct/DisplayProduct';
const cx = classNames.bind(styles);

function Slider({ data, index_image, image_length, background_black, background_white }) {
    const setShowSlider = useContext(UseContext);
    const classes = {
        background_black,
        background_white,
    };
    const [activeindex, setActiveIndex] = useState(index_image);
    const _handleRenderImage = () => {
        return data.map((item, index) => {
            return index === activeindex ? (
                <div key={index} className={cx('image-wrap')}>
                    <div className={cx('all-button')}>
                        <div
                            className={cx('button-wrap', 'prev-container')}
                            onClick={() => setActiveIndex(activeindex < 1 ? image_length : activeindex - 1)}
                        >
                            <Prev classes="prev-icon" />
                        </div>
                        <div
                            className={cx('button-wrap', 'next-container')}
                            onClick={() => setActiveIndex(activeindex === image_length ? 0 : activeindex + 1)}
                        >
                            <Next classes="next-icon" />
                        </div>
                    </div>
                    <img className={cx('image')} src={item.image} alt="" />
                </div>
            ) : null;
        });
    };
    const _handleClose = () => {
        var style = document.createElement('style');
        style.innerHTML = `body {overflow: auto;}`;
        document.head.appendChild(style);
        setShowSlider(false);
    };
    return (
        <div className={cx('image-container')}>
            <div className={cx('close-container')}>
                <div className={cx('close')} onClick={_handleClose}>
                    <Close classes="close-icon" />
                </div>
            </div>
            <div className={cx('g-option', classes)}></div>

            {_handleRenderImage()}
        </div>
    );
}

export default Slider;
