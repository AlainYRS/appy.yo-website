import React, { useContext } from "react";
import GlobalContext from "@/complements/components/GlobalContextComp/GlobalContextComp";
import Image from "next/image";
import Head from "next/head";
import HeaderComp from "@/complements/components/HeaderComp/HeaderComp";
import PagesHeadComp from "@/complements/components/PagesHeadComp/PagesHeadComp";
import FooterComp from "@/complements/components/FooterComp/FooterComp";
import styles from '@/styles/project.module.css'

export default function Project(){
  //------ User global context ------
  const { Environment,UsrCookie,setUsrCookie}: any = useContext(GlobalContext)

 
  function HandleSignIn(e:any){
    console.log(e)
  }


    return (
        <>
            <Head>
                <title>Poste Project</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/Icons/manifest_icons/appyyo.png" />
                <meta name="theme-color" content="#2F303A" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv='ScreenOrientation' content='autoRotate:disabled' />
            </Head>
            <PagesHeadComp
                data={{
                    faviconURL: "/Icons/manifest_icons/appyyo.png", //URL of icon to be displayed besides the title tab.
                    title: "Appy.yo® - Home", //Title to be displayed in the tab. In case of traslations needs to consider the marker and tag to be traslated, such as this sample.
                    description: "", //Description to be read by SEO for this page
                    keywords: "", //Keywords to be read by SEO for this page
                }}
            />
            <HeaderComp 
                logo={'/Icons/manifest_icons/MaskableLogo.png'}
                menus={[
                    {
                        menu: 'Home',
                        link: '/'
                    },
                    {
                        menu: 'About Us',
                        link: '/AboutUs'
                    },
                    {
                        menu: 'Innovation Lab',
                        link: '/InnovationLab'
                    },
                    {
                        menu: 'Newest Projects',
                        link: '/NewestProject'
                    },
                    {
                        menu: 'Professional Services',
                        link: '/ProfessionalServices'
                    },
                    {
                        menu: 'Digital Transformation',
                        link: '/DigitalTransformation'
                    },
                    {
                        menu: 'Get in Touch',
                        link: '/GetInTouch'
                    },
                ]}
            />

            <main className={styles.main}>
                <article className={styles.article}>
                    <h1 className={styles.NewProj}>Poste</h1>
                    <p>
                        On daily basis we have so much information coming our way especially if you are on different social media platforms. Some of this information can very useful and you will save it.  Although Facebook, instagram and tik tok have save features but you may forget where its saved and you have to dig through all these items.
                    </p>
                    <p>
                        Poste offers a centralized way to pull in all that information. Any posts that you see on facebook, instagram, email, twitter, tik tok you can save it in poste. Poste allows you to organize these posts, put them in folders and share these folders with your friends!
                    </p>
                    <p>
                        So next time you can’t find the restaurant you saved poste will help you with that!
                    </p>
                </article>
                <span className={styles.Image}>
                    <Image className={styles.Img} src="/Images/Poste.png" fill alt="Poste"/>
                </span>
            </main>
            <FooterComp 
                classNames={''}
                langs={{
                developed: "Developed by",
                copyright: "Copyright",
                made: "made",
                version: "version",
                }}
            />
        </>
    )
}