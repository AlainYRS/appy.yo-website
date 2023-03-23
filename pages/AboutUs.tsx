import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import PagesHeadComp from "@/complements/components/PagesHeadComp/PagesHeadComp";
import FooterComp from "@/complements/components/FooterComp/FooterComp";
import styles from '@/styles/aboutUs.module.css'
import {HeaderCompBoots} from '@/complements/components/HeaderComp/HeaderCompBoots';

interface IClicked{
    title: string
    image:string,
    content: any,
}

export default function AboutUs(){
    const[Clicked,setClicked] = useState<IClicked>({
        title: 'About Us',
        image:'/Images/AppyyoLogo.jpg',
        content:
        <>
            <p className={styles.Description} style={{position: 'relative', textAlignLast:'initial'}}>We split our work into the following phases;</p><br/>
            <ul  className={styles.ULDesc}>
                <li><b>Research:</b> In-depth look at the business, detailed discussions around needs and wants. Setting up goals.</li>
                <li><b>Design:</b> Combining research, set goals and needs into a visual representation to showcase how the end product will look. 
                This is the area where we want to make sure this is exactly what you want.
                We will Review of the layout, colors and functionality. Its important for us to spend time in this phase to capture all your comments and answer any questions.</li>
                <li><b>Build:</b>Once the design is approved we will move over to bringing your plans to reality.</li>
                <li> <b>Test:</b>Full testing cycle to assure that you understand how it works and you are satisfied.</li>
                <li><b>Delivery:</b>Once testing has passed we will provide the full product to you</li>
                <li><b>Support:</b> The key to being successful is also in the support. One month warranty period along
                with full support systems as monthly based plans. So you can focus on your business will we do the backend work</li>
            </ul>
        </>,
    })

    return (
        <>
            <Head>
                <title>About Us</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/Icons/manifest_icons/appyyo.png" />
                <meta name="theme-color" content="#2F303A" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv='ScreenOrientation' content='autoRotate:disabled' />
            </Head>
            <PagesHeadComp
                data={{
                    faviconURL: "/Icons/manifest_icons/appyyo.png", //URL of icon to be displayed besides the title tab.
                    title: "Appy.yo - Home", //Title to be displayed in the tab. In case of traslations needs to consider the marker and tag to be traslated, such as this sample.
                    description: "", //Description to be read by SEO for this page
                    keywords: "", //Keywords to be read by SEO for this page
                }}
            />
            <HeaderCompBoots />
            <main className={styles.main}>
                <div className={styles.Image}>
                    <Image className={styles.Img} src={Clicked.image} fill alt={Clicked.title}/>
                </div>
                <article className={styles.article}>
                    <h1 className={styles.Subtitle}>{Clicked.title}</h1>
                    <div>{Clicked.content}</div>
                </article>
                <div id={styles.IconsServOffer}>
                    <div className={styles.ServOffered} onClick={()=>setClicked({
                            title: 'About Us',
                            image:'/Images/AppyyoLogo.jpg',
                            content:
                            <>
                                <p className={styles.Description} style={{position: 'relative', textAlignLast:'initial'}}>We split our work into the following phases;</p><br/>
                                <ul  className={styles.ULDesc}>
                                    <li><b>Research:</b> In-depth look at the business, detailed discussions around needs and wants. Setting up goals.</li>
                                    <li><b>Design:</b> Combining research, set goals and needs into a visual representation to showcase how the end product will look. 
                                    This is the area where we want to make sure this is exactly what you want.
                                    We will Review of the layout, colors and functionality. Its important for us to spend time in this phase to capture all your comments and answer any questions.</li>
                                    <li><b>Build:</b>Once the design is approved we will move over to bringing your plans to reality.</li>
                                    <li> <b>Test:</b>Full testing cycle to assure that you understand how it works and you are satisfied.</li>
                                    <li><b>Delivery:</b>Once testing has passed we will provide the full product to you</li>
                                    <li><b>Support:</b> The key to being successful is also in the support. One month warranty period along
                                    with full support systems as monthly based plans. So you can focus on your business will we do the backend work</li>
                                </ul>
                            </>,
                        })}>
                        <Image className={styles.IconSO} src={'/Images/about.png'} width={70} height={70} alt={'About Us'}/>
                    </div>
                    <div className={styles.ServOffered} onClick={()=>setClicked({
                            title: 'Experience',
                            image:'/Images/aboutus.jpg',
                            content:
                                <p>Years of experience over 10 years of experience working with various businesses and
                                stakeholders meeting the needs and goals of very small companies to enterprise level
                                organizations.</p> ,
                        })}>
                        <Image className={styles.IconSO} src={'/Images/exprience1.png'} width={70} height={70} alt={'Experience'}/>
                    </div>
                    <div className={styles.ServOffered} onClick={()=>setClicked({
                            title: 'Professional',
                            image:'/Images/professional.jpg',
                            content:
                                <p>Professional: Organized and in a professional manner working with you towards your goals.</p>,
                        })}>
                        <Image className={styles.IconSO} src={'/Images/pro.png'} width={70} height={70} alt={'Professional'}/>
                    </div>
                    <div className={styles.ServOffered} onClick={()=>setClicked({
                            title: 'Collaboration',
                            image:'/Images/col.jpg',
                            content:
                                <p>Collaboration (instead of work closely) : We work closely with you to walk you through each 
                                    step and make sure you feel informed and comfortable on this journey.</p>,
                        })}>
                        <Image className={styles.IconSO} src={'/Images/colla.png'} width={70} height={70} alt={'Collaboration'}/>
                    </div>
                    <div className={styles.ServOffered} onClick={()=>setClicked({
                            title: 'Timely Manner',
                            image:'/Images/Time1.jpg',
                            content:
                                <p>Timely manner: We understand that your business is dependent on these projects. We work with your 
                                    schedule to set clear timelines and align to your deadlines.</p>,
                        })}>
                        <Image className={styles.IconSO} src={'/Images/time.png'} width={70} height={70} alt={'Timely Manner'}/>
                    </div>
                    <div className={styles.ServOffered} onClick={()=>setClicked({
                            title: 'Organization',
                            image:'/Images/org.webp',
                            content:
                                <p>Organization: Our organizational skills will provide you with a focused and clear road on
                                delivering your needs.</p>,
                        })}>
                        <Image className={styles.IconSO} src={'/Images/organize1.png'} width={70} height={70} alt={'Organization'}/>
                    </div>
                </div>
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