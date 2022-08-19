import PropTypes from 'prop-types';
import Header from '../Components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import ScrollTop from '~/Components/ScrollTop';
import Footer from '../Components/Footer';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('container')}>
            <Header />
            <div className={cx('content')}>
                {children}
                <ScrollTop />
                <Footer />
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
