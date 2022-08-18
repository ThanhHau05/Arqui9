import styles from './Content.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Content({ data_title, data_content, classh2, classcontainer }) {
    const _handleContent = () => {
        return data_content.map((item, index) => <div key={index}>{item.content}</div>);
    };
    const _handleRenderTitle = () => {
        return data_title.map((item, index) => <span key={index}>{item.title}</span>);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title-container')}>
                    <h2 className={cx('title', classh2)}>{_handleRenderTitle()}</h2>
                </div>
                <div className={cx('content-container', classcontainer)}>{_handleContent()}</div>
            </div>
        </div>
    );
}

export default Content;
