import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Slider({ data, index_image, image_length }) {
    const [activeindex, setActiveIndex] = useState(index_image);
    const _handleRenderImage = () => {
        return data.map((item, index) => (
            <div key={index} className={cx(index === activeindex ? 'show' : 'hide')}>
                <img className={cx('image')} src={item.image} alt="" />
            </div>
        ));
    };
    return <div className={cx('image-container')}>{_handleRenderImage()}</div>;
}

export default Slider;
