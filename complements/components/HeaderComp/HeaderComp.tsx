import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import styles from './HeaderComp.module.css'
import GlobalContext from '../GlobalContextComp/GlobalContextComp'

interface IFlagLang{
    Lng: string,
    Icon: string,
}

interface IMenus{
    menu: string,
    link?: string,
}

interface IHeadersMenu{
    logo?: any,
    menus?: IMenus[],
    LangsFlags?: IFlagLang[],
    signin?: string,
    onClick?: any,
}

function HandleLogin(elem:any){
    console.log(elem)
}

export default function HeaderComp(props:IHeadersMenu){
    const { Environment,UsrCookie,setUsrCookie}: any = useContext(GlobalContext)

    return (
        <>
            <div className={styles.Header}>
                {props.logo && 
                        <Link href="/">
                            <div className={styles.HeaderLogo}>
                                <Image src={props.logo} fill alt="appy.yo logo"/>
                            </div>
                        </Link>
                }
                    <div className={styles.MenusContainer}>
                        <div className={styles.HidenMenus}>Appy.yo
                            <Image src={'/Icons/MenuIcon.png'} width={35} height={35} alt="Menu Icon"/>
                        </div>
                        {props.menus?.map((menu:any, i:any)=>{
                                return(
                                    <a href={menu.link} className={styles.MenuButton} key={i}>{menu.menu}</a>
                                )
                            })
                        }
                    </div>
                {props.signin && 
                    <button className={styles.SignInButton} onClick={props.onClick}>{props.signin}</button>
                }
            </div>
            <hr/>
        </>
    )
}