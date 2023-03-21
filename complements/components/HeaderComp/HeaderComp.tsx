import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './HeaderComp.module.css'

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

export default function HeaderComp(props:IHeadersMenu){
    const [DispMenu, setDispMenu] = useState(true)

    function MenuDisplay(){
        setDispMenu(!DispMenu)
    }

    useEffect(() => {
        addEventListener('resize', ()=>{
            window.innerWidth <= 490 ? setDispMenu(false) : setDispMenu(true)
        })
        addEventListener('onpageshow', ()=>{
            window.innerWidth <= 490 ? setDispMenu(false) : setDispMenu(true)
        })
    }, [])

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
                <h1 className={styles.Name}>Appy.yo</h1>
                {DispMenu &&
                    <>
                        <div className={styles.MenusContainer} style={{justifyContent: 'end'}} >
                            {props.menus?.map((menu:any, i:any)=>{
                                return(
                                    <a href={menu.link} className={styles.MenuButton} key={i}>{menu.menu}</a>
                                    )
                                })
                            }
                        </div>
                    </>
                }
                <div className={styles.HidenMenus}>
                    <Image src={'/Icons/MenuIcon.png'} width={35} height={35} alt="Menu Icon" onClick={()=>MenuDisplay()}/>
                </div>
            </div>
        </>
    )
}