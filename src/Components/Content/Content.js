import styles from './Content.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Content({ data_title, data_content, title_reverse = false }) {
    const _handleContent = () => {
        return data_content.map((item, index) => <div key={index}>{item.content}</div>);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('total-title')}>
                    {title_reverse ? (
                        <div className={cx('title-container')}>
                            <h2>
                                <em>{data_title.title2}</em>
                                <strong>
                                    <em>{data_title.title1}</em>
                                </strong>
                            </h2>
                        </div>
                    ) : (
                        <div className={cx('title-container')}>
                            <h2>
                                <strong>
                                    <em>{data_title.title1}</em>
                                </strong>
                                <em>{data_title.title2}</em>
                            </h2>
                        </div>
                    )}
                </div>
                <div className={cx('content-container')}>{_handleContent()}</div>
            </div>
        </div>
    );
}

export default Content;
