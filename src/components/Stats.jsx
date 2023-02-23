import { stats } from '../constants';
import styles from '../style';
import { useState } from 'react';

const Stats = () => {


  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap 
    sm:mb-12 mb-6`}>
      {stats.map((stat, index) => {
        return (
          <div className={`flex items-center flex-row justify-center 
          flex-1 m-3 md:my-3 mb-5`} id={stat.id} key={index}>
            <h4 className="font-poppins text-white font-semibold 
            xs:text-[35px] text-[25px] xs:leading-[53px] leading-[43px]">
              {stat.value}
            </h4>
            <p className="font-poppins text-white font-semibold text-gradient
            xs:text-[25px] text-[10px] xs:leading-[36px] leading-[21px] uppercase
            ml-3">
              {stat.title}
            </p>
          </div>
        )
      })}
    </section>
  )
}

export default Stats