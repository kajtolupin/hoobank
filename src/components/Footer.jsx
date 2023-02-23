import { logo } from '../assets'
import styles from '../style'
import { footerLinks, socialMedia } from '../constants'


const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>

      <div className="flex flex-col flex-1 justify-start mr-10">
        <img src={logo} alt="logo" className="w-[266px] h-[72px] object-contain" />
        <div className={`${styles.paragraph} mt-5 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</div>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between 
      flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink, index) => (
          <div key={index} className="flex flex-col ss:my-0 my-6 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-5">
              {footerLink.title}
            </h4>
            <ul>
              {footerLink.links.map((link, index) => (
                <li key={link.name} 
                    href={link.link} 
                    className={`font-poppins font-normal text-[16px] list-none
                    leading-[24px] text-dimWhite hover:text-secondary cursor-pointer
                    ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"}` }>
                      {link.name}
                    </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="flex items-center md:flex-row flex-col 
    justify-between w-full pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-center text-[18px] 
      leading-[27px] text-dimWhite">
        2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-5">
        {socialMedia.map((social,index) => (
          <img 
            key={social.id} 
            src={social.icon} 
            alt={social.id} 
            className={`w-[21px] h-[21px] object-contain cursor-pointer mx-4`} 

          />
        ))}
      </div>
    </div>
  </section>
)


export default Footer