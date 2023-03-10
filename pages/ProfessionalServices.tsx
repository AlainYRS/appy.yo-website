import React, { useContext } from "react";
import Image from "next/image";
import Head from "next/head";
import PagesHeadComp from "@/complements/components/PagesHeadComp/PagesHeadComp";
import HeaderComp from "@/complements/components/HeaderComp/HeaderComp";
import FooterComp from "@/complements/components/FooterComp/FooterComp";
import GlobalContext from "@/complements/components/GlobalContextComp/GlobalContextComp";
import styles from "@/styles/professionalServices.module.css"

export default function ProfessionalServices(){
  //------ User global context ------
  const { Environment,UsrCookie,setUsrCookie}: any = useContext(GlobalContext)

 
  function HandleSignIn(e:any){
    console.log(e)
  }

    return(
        <>
            <Head>
                <title>Professional Services</title>
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
            <main className={styles.main}>
                <i id="PSTitle">Professional Services</i>
                <p className={styles.ServicesText}>
                    ...............................SERVICE...............................
                    ...............................OFFERED...............................
                    ..............................DESCRIPTION............................
                </p>
                <span className={styles.Image}>
                    <Image className={styles.Img} src="/Images/ProfesionalServices.jpeg" fill alt="Innovation_Lab"/>
                </span>
                <button className={styles.ServicesButton} id="ServNeeded">Describe the services you need</button>
            </main>
            {/*Footer Component*/}
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