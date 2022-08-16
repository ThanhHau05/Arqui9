import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { Videos } from '~/Videos/Videos';
import VideoContent from '~/Components/VideoContent';
import Content from '~/Components/Content';
import { ImagesHomeProduct } from '~/Images/ImagesHomeProduct';
import DisplayProduct from '~/Components/DisplayProduct';
const cx = classNames.bind(styles);

const CONTENT_IDEAS_INTO_REALITY = {
    title: {
        title1: 'IDEAS INTO ',
        title2: 'REALITY',
    },
    content: [
        {
            content: (
                <p>
                    <strong>ARQUI9</strong> is an award-winning 3D creative agency dedicated to bringing visual concepts
                    to life in this world and the next. Specializing in architecture, marketing and metaverse 3D
                    applications.
                </p>
            ),
        },
        {
            content: (
                <p>
                    We integrate the latest technological advancements with a unique artistic approach to visualize and
                    refine tomorrow’s concepts into real-world tangible and investable digital visual outputs.
                </p>
            ),
        },
        {
            content: (
                <p>
                    Our client list includes many of the world’s leading firms and practices, AECOM, AEDAS,
                    Foster+Partners, Buro OS, Zaha Hadid Architects, as well as many leading Green Energy and Biomedical
                    firms.
                </p>
            ),
        },
    ],
};

const CONTENT_VIDEOS = {
    home: {
        video: Videos.Video_Home,
        text_bold: 'VISUALISING THIS WORLD',
        text_lower: 'AND THE NEXT',
    },
    architectural: {
        video: Videos.Video_Architectural,
        text_bold: 'ARCHITECTURAL',
        text_lower: 'VISUALISATION',
        text_content:
            'The heart and soul of Arqui9 has been it’s creatively inspiring visuals. Imagining future builds, masterplans and concepts, both in the concept phase and marketing phase.',
        button_more: {
            title: 'Learn more',
            href: '/visualisation',
        },
    },
};

const DISPLAY_PRODUCT = [
    {
        image: ImagesHomeProduct[0],
        title: 'Perkins Will / Boston, USA',
    },
    {
        image: ImagesHomeProduct[1],
        title: 'Arqui9 / Field of dreams',
    },
    {
        image: ImagesHomeProduct[2],
        title: 'Ferrari / SF90',
    },
    {
        image: ImagesHomeProduct[3],
        title: 'Undisclosed',
    },
    {
        image: ImagesHomeProduct[4],
        title: 'HKS / Kingdom of Saudi Arabia',
    },
    {
        image: ImagesHomeProduct[5],
        title: 'Undisclosed',
    },
    {
        image: ImagesHomeProduct[6],
        title: 'Zaha Hadid Architects / Hong Kong',
    },
    {
        image: ImagesHomeProduct[7],
        title: 'Undisclosed / Germany',
    },
];
function Home() {
    return (
        <div className={cx('wrapper')}>
            <VideoContent data={CONTENT_VIDEOS.home} />
            <div className={cx('home-content')}>
                <Content
                    data_title={CONTENT_IDEAS_INTO_REALITY.title}
                    data_content={CONTENT_IDEAS_INTO_REALITY.content}
                />
            </div>
            <VideoContent data={CONTENT_VIDEOS.architectural} architectural />
            <DisplayProduct data={DISPLAY_PRODUCT} />
        </div>
    );
}

export default Home;
