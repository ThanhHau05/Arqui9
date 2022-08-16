import styles from './DisplayProduct.module.scss';
import classNames from 'classnames/bind';
import Slider from '../Slider';
import { useState } from 'react';
const cx = classNames.bind(styles);

function DisplayProduct({ data }) {
    const [showslider, setShowSlider] = useState(false);
    const [indeximage, setIndexImage] = useState();
    const _handleImage = (index) => {
        setShowSlider(true);
        setIndexImage(index);
    };
    const _handleRenderImage = () => {
        return data.map((item, index) => (
            <div key={index} className={cx('image')} onClick={() => _handleImage(index)}>
                <div className={cx('image-container')}>
                    <div className={cx('title-container')}>
                        <h2>{item.title}</h2>
                    </div>
                    <img src={item.image} alt="Product" />
                </div>
            </div>
        ));
    };
    return (
        <>
            <div className={cx('container')}>{_handleRenderImage()}</div>
            {showslider && <Slider data={data} index_image={indeximage} image_length={data.length - 1} />}
        </>
    );
}

export default DisplayProduct;
