/*---------------------------------------------------------
 ------------- README COMPONENT INSTRUCTIONS: -------------
 Type: Component
 Import statement: import Footer from '@/...path.../FooterComp'
 interface IFooter{
    author: string,
    copyright: string,
    date: string,
    version: string,
    styles?:{{}} // Optional inline styles
    classNames?: string // Optional multiple clases but the styling need to be in the global styles
 }
 
 <Footer 
    author= {'Alain Y. Rivera S.'}
    copyright= {'Personal Portfolio'}
    date= {'Feb 3, 2023'}
    version= {'1.0.0'}
    className= {'AppFooter'}
    styles?:{{}}
    classNames?: string
 />
---------------------------------------------------------*/

import React, { useContext } from 'react'
import styles from './FooterComp.module.css'

//Imported complements from other components
import ShareComp from '@/complements/components/ShareComp/ShareComp'

interface ILangsFooter{
    developed?: string,
    copyright?: string,
    made?: string,
    version?: string,
}

interface IFooter{
    author?: string,
    copyright?: string,
    date?: string,
    version?: string,
    styles?: any,
    classNames?: string
    langs?: ILangsFooter
}

function Footer(props:IFooter){

    return (
        <>
            <div id={styles.AppFooter} className={props.classNames} style={props.styles}>
                {props.author && ((props.langs?.developed ? props.langs.developed : 'Developed by') + ': ' + props.author + '.')}
                {props.copyright && (' ' + (props.langs?.copyright ? props.langs.copyright : 'copyright') +': ' + props.copyright + '.') }
                {props.date && (' ' + (props.langs?.made ? props.langs.made : 'made') +': ' + props.date + '.')}
                {props.version && (' ' + (props.langs?.version ? props.langs.version : 'version') +': ' + props.version + '.')}
                <a href="mailto:info@appyyo.com?subject = Feedback&body = Message">info@appyyo.com</a>
                <div>
                    <ShareComp 
                        styles={{margin:"3.5px"}}
                        IconSize={28}
                        facebook={{
                            url:'https://www.facebook.com/appy.yo5'
                        }}
                        linkedin={{
                            url:'https://www.linkedin.com/company/appy-yo/'
                        }}
                    />
                    <a href="https://www.instagram.com/appy.yo/" className="fa fa-instagram">
                        <img src={'./Icons/instaIcon.png'} style={{borderRadius:'8px'}} width={30} alt={'Instagram'} />
                    </a>
                </div>
            </div>
        </>
    )
}

export default React.memo(Footer)