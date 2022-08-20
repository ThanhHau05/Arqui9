import styles from './VideoContent.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function VideoContent({ data, architectural, classh1, classimage }) {
    const classes = {
        architectural,
    };
    return (
        <div className={cx('video-container')}>
            <div className={cx(classimage ? classimage : 'video')}>
                {data.image ? (
                    <img src={data.image} alt="" />
                ) : (
                    <video autoPlay loop muted playsInline>
                        <source src={data.video} type="video/mp4" />
                    </video>
                )}
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
                        {data.button_more && (
                            <a href={data.button_more.href} target="_blank" rel="noreferrer">
                                {data.button_more.title}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoContent;
