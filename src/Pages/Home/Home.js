import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { Videos } from '~/Videos/Videos';
import VideoContent from '~/Components/VideoContent';
import Content from '~/Components/Content';
import { ImagesHomeProduct } from '~/Images/ImagesHomeProduct';
import { ImagesHomeProductVisualisation } from '~/Images/ImagesHomeProductVisualisation';
import { ImagesHomeLogo } from '~/Images/ImagesHomeLogo';
import DisplayProduct from '~/Components/DisplayProduct';
import { Images } from '~/Images/Images';
const cx = classNames.bind(styles);

const CONTENT_IDEAS_INTO_REALITY = {
    title: [
        {
            title: (
                <strong>
                    <em>IDEAS INTO </em>
                </strong>
            ),
        },
        {
            title: <em>REALITY</em>,
        },
    ],
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
    product: {
        video: Videos.Video_Product,
        text_bold: 'PRODUCT ',
        text_lower: 'VISUALISATION',
        text_content:
            'We have come to embrace and innovate in the Green Energy and Biomedical product sectors. Creating stories and journeys that create value and investment opportunities for our clients.',
        button_more: {
            title: 'Learn more',
            href: '/product',
        },
    },
    meta: {
        video: Videos.Video_Home,
        text_bold: 'META',
        text_content:
            'Innovators in the metaverse space, Arqui9 has systemically developed various levels of alternate realities, through architectural form and expression. We design, create and explore the alternate worlds for clients in the digital space, creating VR, AR solutions that have become a part of our collective journey.',
        button_more: {
            title: 'Learn more',
            href: '/product',
        },
    },
    collective: {
        image: Images.ImageTheCollective,
        text_bold: 'THE COLLECTIVE',
        text_content:
            'Our team is comprised of multifaceted multitalented artists, architects and engineers. With a diverse team, we able to tackle the most demanding creative tasks, helping brands, developers, architects and clients build their visions.',
        button_more: {
            title: 'Learn more',
            href: '/product',
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
const DISPLAY_PRODUCT_TECHNOLOGICAL = [
    {
        image: ImagesHomeProductVisualisation[0],
        title: 'Ferrari / SF90',
    },
    {
        image: ImagesHomeProductVisualisation[1],
        title: 'Energy Vault / Dubai',
    },
];
const CONTENT_TECHNOLOGICAL = {
    title: [
        {
            title: (
                <span>
                    <strong>
                        <em>THE GREEN </em>
                    </strong>
                    <em>TECHNOLOGICAL </em>
                </span>
            ),
        },
        {
            title: <em>REVOLUTION</em>,
        },
    ],
    content: [
        {
            content: (
                <p>
                    Arqui9 has come to lead the way in <strong>creating visual guides</strong> for IPO’s and investor
                    relations, bringing the most diverse and creative minds together to{' '}
                    <strong>create visually engaging storylines</strong> that break down the tech into easily relatable
                    and sharable media. We offer;
                </p>
            ),
        },
        {
            content: (
                <ul style={{ paddingLeft: '20px' }}>
                    <li>
                        <p>Unique enticing visual stills, animations and narratives</p>
                    </li>
                    <li>
                        <p>Cinemagraphs, social media content creation</p>
                    </li>
                    <li>
                        <p>Interactive VR technology</p>
                    </li>
                </ul>
            ),
        },
        {
            content: (
                <p style={{ marginBottom: '0', marginTop: '24px' }}>
                    Find out about how we helped{' '}
                    <a href="/energyvaultinc" target="_blank" rel="noreferrer">
                        EnergyVaultInc
                    </a>{' '}
                    in bringing their vision to life.
                </p>
            ),
        },
    ],
};
const CONTENT_REALITIES = {
    title: [
        {
            title: (
                <strong>
                    <em>REALITIES </em>
                </strong>
            ),
        },
        {
            title: <em>BEYOND</em>,
        },
    ],
    content: [
        {
            content: (
                <p>
                    New forms of technology are changing the way we interact with media and content,{' '}
                    <strong>VR, AR and Web 3.0</strong> (Metaverse) all propose a different approach which we are
                    leading the way forward in creating.
                </p>
            ),
        },
        {
            content: (
                <p>We offer solutions that fit into each realm, from concept to final marketing plan Including:</p>
            ),
        },
        {
            content: (
                <ul style={{ paddingLeft: '20px' }}>
                    <li>
                        <p>360 Stereoscopic real-time VR walkthroughs, compatible with (Oculus Rift, HTC Vive, etc),</p>
                    </li>
                    <li>
                        <p>Interactive metaverse worlds connected with e-commerce</p>
                    </li>
                    <li>
                        <p>3D model and design consultancy</p>
                    </li>
                </ul>
            ),
        },
    ],
};
const CONTENT_THEIR = {
    title: [
        {
            title: (
                <strong>
                    <em style={{ fontWeight: 'bold' }}>THEIR </em>
                </strong>
            ),
        },
        {
            title: <em>FEEDBACK</em>,
        },
    ],
    content: [
        {
            content: <p>AECOM</p>,
        },
        {
            content: (
                <p className={cx('their-text')}>
                    “In the design field the most fundamental skill we can hope to have is to translate what we create
                    in our imagination and into a relatable and understandable proposal. Arqui9 are exactly the kind of
                    partner you need for that, they implicitly understand what we are trying to achieve and they always
                    make it better than we ever imagined.”
                </p>
            ),
        },
        {
            content: (
                <p>
                    <strong>Steven Velegrinis, Head of Masterplanning AECOM</strong>
                </p>
            ),
        },
    ],
    content_list_1: [
        {
            content: <h2 className={cx('their-h2')}>BPTW London</h2>,
        },
        {
            content: (
                <p className={cx('their-text')}>
                    “We worked together with Arqui9 recently on two large scale projects located in London. Arqui9
                    translated our vision into unique visuals which really captured the essence of the project.
                </p>
            ),
        },
        {
            content: (
                <p className={cx('their-text')}>
                    Their adaptive and tailored process allowed us to accompany every step of the way through an
                    artistic and creative approach. Meeting our requested deadlines and fitting those extra small
                    details that always count at the very end.”
                </p>
            ),
        },
        {
            content: (
                <p>
                    <strong>Chris Bath, Director of Architecture</strong>
                </p>
            ),
        },
    ],
    content_list_2: [
        {
            content: <h2 className={cx('their-h2')}>Energy Vault Inc</h2>,
        },
        {
            content: (
                <p className={cx('their-text')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Lorem ipsum dolor sit amet. Mauris nunc congue nisi vitae suscipit tellus
                    mauris a diam. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Viverra ipsum
                    nunc aliquet bibendum enim.
                </p>
            ),
        },
        {
            content: (
                <p>
                    <strong>Laurence Alexandre, Head of Marketing</strong>
                </p>
            ),
        },
    ],
};
function Home() {
    const _handleRenderTrademarks = () => {
        return ImagesHomeLogo.map((item, index) => (
            <div key={index} className={cx('trademark-image-container')}>
                <img src={item} alt="" />
            </div>
        ));
    };
    const _handleRenderTitle = (value) => {
        return value.map((item, index) => <span key={index}>{item.title}</span>);
    };
    const _handleRenderContent = (value) => {
        return value.map((item, index) => <div key={index}>{item.content}</div>);
    };
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
            <div className={cx('technological-content')}>
                <Content
                    classh2="technological-title"
                    classcontainer="technological-content-container"
                    data_title={CONTENT_TECHNOLOGICAL.title}
                    data_content={CONTENT_TECHNOLOGICAL.content}
                />
            </div>
            <VideoContent classh1="product-video-h1" data={CONTENT_VIDEOS.product} />
            <DisplayProduct data={DISPLAY_PRODUCT_TECHNOLOGICAL} />
            <div className={cx('realities-content')}>
                <Content data_title={CONTENT_REALITIES.title} data_content={CONTENT_REALITIES.content} />
            </div>
            <VideoContent data={CONTENT_VIDEOS.meta} />
            <div className={cx('trademark-wrap')}>
                <div className={cx('trademark-container')}>
                    <div className={cx('trademark-title')}>
                        <h2>
                            <em>OUR</em>
                            <strong>
                                <em> CLIENTS</em>
                            </strong>
                        </h2>
                    </div>
                    <span className={cx('trademark-line')}></span>
                    <div className={cx('trademark')}>{_handleRenderTrademarks()}</div>
                </div>
            </div>
            <div className={cx('their-content')}>
                <div className={cx('their-wrap')}>
                    <div className={cx('their-container')}>
                        <div className={cx('their-title')}>
                            <h2>{_handleRenderTitle(CONTENT_THEIR.title)}</h2>
                        </div>
                        <div className={cx('their-content_content')}>
                            <div>{_handleRenderContent(CONTENT_THEIR.content)}</div>
                            <div className={cx('their-content-list')}>
                                <div style={{ padding: '17px 17px 17px 0' }}>
                                    {_handleRenderContent(CONTENT_THEIR.content_list_1)}
                                </div>
                                <div style={{ padding: '17px 17px 17px 0' }}>
                                    {_handleRenderContent(CONTENT_THEIR.content_list_2)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoContent classimage="image" data={CONTENT_VIDEOS.collective} />
        </div>
    );
}

export default Home;
