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
                <title>WeVibe Project</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/Icons/manifest_icons/appyyo.png" />
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
                        menu: 'Newest Project',
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
                    <h1 className={styles.NewProj}>WeVibe</h1>
                    <p>
                        Dating apps offer a new way to connect with people but currently the replies sometimes are so slow. In theory dating apps are great but they don&apos;t work well in practice. People take too long to reply, we judge people by the picture and it&apos;s not a true connection.
                    </p>
                    <p>
                        WeVibe allows you to connect with someone who meets your criteria, speak to them for 4 mins and if you connect you can continue the conversation. It&apos;s really about the human connection.
                    </p>
                </article>
                <span className={styles.Image}>
                    <Image className={styles.Img} src="/Images/Wevibe.png" fill alt="Poste"/>
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