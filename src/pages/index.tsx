import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import '../apis/index'
import styles from './index.module.css';
import {useEffect} from "react";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  useEffect(()=> {
      console.log('打印数据');
      fetch('https://v1.hitokoto.cn/?c=d&c=i&encode=json&lang=cn', {
          method: 'GET'
      }).then(res => {
          return res.json()
      }).then(data => {
          console.log(data)
      })
  })

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={styles.buttons + ' ' + "button button--secondary button--lg"}
            to="/docs/next">
              <span>开启文档</span>
              <svg className={styles.icon} viewBox="0 0 1024 1024" width="24" height="24"><path d="M695.629739 224.593198c-6.04774 0-11.587919-4.027733-13.220093-10.155291-1.966795-7.305383 2.367931-14.82566 9.68764-16.778128l31.403221-8.416693c7.291057-1.980097 14.811334 2.367931 16.778128 9.686616 1.952468 7.305383-2.382257 14.82566-9.68764 16.779152l-31.403221 8.41567C697.998693 224.445842 696.806541 224.593198 695.629739 224.593198z" fill="#272636"></path><path d="M409.267732 301.314557c-6.04774 0-11.586896-4.027733-13.219069-10.155291-1.966795-7.305383 2.367931-14.82566 9.68764-16.778128l227.006154-60.813041c7.346315-1.9934 14.812357 2.367931 16.778128 9.68764 1.953492 7.305383-2.381234 14.824637-9.68764 16.778128l-227.006154 60.812017C411.636686 301.167201 410.445558 301.314557 409.267732 301.314557z" fill="#272636"></path><path d="M232.288972 949.922864c-17.72878 0-34.440393-8.081049-51.098795-24.753777L76.210217 820.181965c-52.008514-51.995211-12.938684-91.051739 5.833869-109.823268C208.739627 589.323063 268.856819 531.961634 297.504276 504.665964l-116.192326-74.862012c-40.047088-21.702278-60.987003-60.531632-56.062853-104.111173 5.981225-52.918233 49.426713-99.039667 108.084671-114.76072L779.737322 64.553225c59.635215-16.015765 112.326275-2.823302 141.013641 34.574447 23.387663 30.480198 29.100782 74.005504 16.095583 122.535801l-146.404418 546.364669c-18.839067 70.365604-81.177857 102.417601-131.125433 102.417601l0 0c-40.890292 0-74.822103-20.097734-88.912006-52.563146l-59.527768-114.186645c-29.676903 29.208229-91.185792 89.566922-219.368196 215.159338C277.152762 933.197948 257.243317 949.922864 232.288972 949.922864zM104.937492 768.683057c0.106424 0 1.297552 4.027733 10.021238 12.751419L219.939713 886.421598c8.616238 8.616238 12.30935 8.696056 12.349259 8.696056 0.561795 0 5.873778-0.427742 20.658506-15.225773 65.74947-64.404846 236.721423-231.991702 245.109464-240.514819 5.861498-6.235005 14.277168-9.392928 22.89443-8.482185 9.111518 0.976234 17.139356 6.448876 21.381983 14.569834l77.162404 148.024312c0.361227 0.708128 0.696872 1.431605 1.00284 2.167363 7.707542 18.545378 31.658024 19.990287 38.817074 19.990287 29.690206 0 66.819848-19.335371 78.178547-61.803601l146.418744-546.363645c8.496511-31.711236 6.141884-58.337663-6.635117-74.996065-12.698207-16.537651-33.410947-20.00359-48.556902-20.00359-10.704806 0-22.411429 1.685385-34.802644 5.003967L247.529071 263.863596c-42.843784 11.480472-64.933895 42.428322-67.823712 67.997674-2.408863 21.341051 7.653307 39.137369 28.339442 50.094932 0.695848 0.361227 1.364067 0.762363 2.020006 1.177825l146.418744 94.329389c7.305383 4.710278 11.948123 12.604062 12.510942 21.287839 0.548492 8.670473-3.037173 17.099447-9.686616 22.706141-5.178953 4.803399-174.302815 166.314887-238.968603 228.090858-12.938684 12.951987-15.093766 17.688871-15.400758 19.147082L104.938516 768.683057z" fill="#272636"></path></svg>
          </Link>
        </div>
      </div>
</header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
