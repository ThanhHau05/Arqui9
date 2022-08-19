import PropTypes from 'prop-types';
import Header from '../Components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import ScrollTop from '~/Components/ScrollTop';
import Footer from '../Components/Footer';
import Bars from '../Components/Header/Bars';
import { useState } from 'react';
import { createContext } from 'react';
const cx = classNames.bind(styles);
export const UseContext = createContext();

function DefaultLayout({ children }) {
    const [bars, setBars] = useState(false);
    return (
        <UseContext.Provider value={{ setBars, bars }}>
            <div className={cx('container')}>
                <Header />
                <div className={cx('content')}>
                    {children}
                    <ScrollTop />
                    <Footer />
                </div>
                {bars && <Bars />}
            </div>
        </UseContext.Provider>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
