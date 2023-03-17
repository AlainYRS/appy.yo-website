import React, { useContext } from "react";
import Link from "next/link";
import GlobalContext from "@/complements/components/GlobalContextComp/GlobalContextComp";
import Image from "next/image";
import Head from "next/head";
import HeaderComp from "@/complements/components/HeaderComp/HeaderComp";
import PagesHeadComp from "@/complements/components/PagesHeadComp/PagesHeadComp";
import FooterComp from "@/complements/components/FooterComp/FooterComp";
import styles from '@/styles/newestProject.module.css'

export default function NewestProject(){
  //------ User global context ------
  const { Environment,UsrCookie,setUsrCookie}: any = useContext(GlobalContext)

  function HandleSignIn(e:any){
    console.log(e)
  }

    return (
        <>
            <Head>
                <title>Newest Project</title>
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
                ]}
                signin='Get in Touch'
                onClick={(e:any)=>HandleSignIn(e)} 
            />
            <main>
                    <h1 className={styles.NewProj}>Newest Projects</h1>
                    <div className={styles.imagecontainer}>
                        <figure className={styles.Proj}>
                            <figcaption><h2>Poste</h2></figcaption>
                            <span className={styles.Image}>
                                <Link href="/Project">
                                    <Image className={styles.Img} src="/Images/project.jpeg" fill alt="Newest_Project"/>
                                </Link>
                            </span>
                        </figure>
                        <figure className={styles.Proj}>
                            <figcaption><h2>Shopful</h2></figcaption>
                            <span className={styles.Image}>
                                <Link href="/Project">
                                    <Image className={styles.Img} src="/Images/project.jpeg" fill alt="Newest_Project"/>
                                </Link>
                            </span>
                        </figure>
                        <figure className={styles.Proj}>
                            <figcaption><h2>WeVibe</h2></figcaption>
                            <span className={styles.Image}>
                                <Link href="/Project">
                                    <Image className={styles.Img} src="/Images/project.jpeg" fill alt="Newest_Project"/>
                                </Link>
                            </span>
                        </figure>
                    </div>
                    
                </main>
            <FooterComp 
                copyright= {'Appy.yo'}
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