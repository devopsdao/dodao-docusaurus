import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'We believe in «future of work»',
    Svg: require('@site/static/img/dodao/cat-future-ill.svg').default,
    description: (
      <>
        Our goal is to bring “real-world-business” to blockchain to reduce recruiting- and service fees and providing transparency, immutability, scalability and accessibility.
      </>
    ),
    url: '/docs/intro'
  },
  {
    title: 'How dodao dApp works',
    Svg: require('@site/static/img/dodao/notebook-ill.svg').default,
    description: (
      <>
        At the moment, you can test the Devopsdao WebApp at <a href="https://dodao.dev">dodao.dev</a>. Android dApp is available for download from <a href="https://github.com/devopsdao/devopsdao/releases/">Github</a>, in future builds for iOS and Windows will be released. Open the Homescreen, connect your Wallet, get yourself some Moonbase-alpha DEV Test Tokens and start testing Devopsdao now! Join Devopsdao today as one of the first users!
      </>
    ),
    url: '/docs/how-dodao-works'
  },
  {
    title: 'Hire industry Superstars!',
    Svg: require('@site/static/img/dodao/cat-star-ill.svg').default,
    description: (
      <>
        We will onboard and issue personal NFTs to key blockchain industry developers, so you could post a specific job for developers involved in setting industry standards
      </>
    ),
    url: '/docs/community-programs/developer-program'
  },
];

function Feature({Svg, title, description, url}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={url}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
