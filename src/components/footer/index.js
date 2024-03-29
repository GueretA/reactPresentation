import Link from 'next/link'
import Image from 'next/image'

import FooterLogo from '../../assets/footer-logo.svg'

import style from '../../css/main.module.css'

function Footer() {
    return (
        <footer className={style.footer_content}>
            <div className={style.footer_divLogo}>
                <Link href='/'>
                    <Image src={FooterLogo} alt='Logo de Pet Store' className={style.footer_logo} />
                </Link>
            </div>
            <div className={style.footer_divText}>
                <p>© 2023 Pet store. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer