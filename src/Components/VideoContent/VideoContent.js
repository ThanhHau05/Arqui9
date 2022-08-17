import styles from './VideoContent.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function VideoContent({ data, architectural, classh1 }) {
    const classes = {
        architectural,
    };
    return (
        <div className={cx('video-container')}>
            <div className={cx('video')}>
                <video src={data.video} autoPlay loop muted playsInline></video>
            </div>
            <div className={cx('content-video-wrapper')}>
                <div className={cx('content-video-container', classes)}>
                    <div className={cx('content-video')}>
                        <h1 className={cx(classh1)}>
                            <strong>
                                <em>{data.text_bold}</em>
                            </strong>
                            {classh1 ? <>&#160;</> : <br></br>}
                            <em>{data.text_lower}</em>
                        </h1>
                        {data.text_content && <p>{data.text_content}</p>}
                    </div>
                    <div className={cx('button-content')}>
                        {data.button_more && <a href={data.button_more.href}>{data.button_more.title}</a>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoContent;
