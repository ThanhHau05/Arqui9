import styles from './Icons.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export const Close = ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={cx(classes)} viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
);

export const Next = ({ classes }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        className={cx(classes)}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <g>
            <path d="M0,0h24v24H0V0z" fill="none" />
        </g>
        <g>
            <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
        </g>
    </svg>
);

export const Prev = ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={cx(classes)} viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
    </svg>
);
