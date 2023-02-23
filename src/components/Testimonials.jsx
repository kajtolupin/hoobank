import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'



const Testimonials = () => (
  <div className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] rounded-full blue__gradient -right-[50%]"/>

    <div className={`w-full flex justify-between items-center md:flex-row 
    flex-col sm:mb-16 mb-6 relative z-[1]`}>
      <div className={`${styles.heading2}`}>
        What people are <br className="sm:block hidden" />saying about us
      </div>
      <div className={`w-full md:mt-0 mt-6`}>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
    </div>

    <div className="flex flex-wrap w-full sm:justify-start justify-center 
    feedback-container relative z-[1]">
      {feedback.map((card, index) => (
        <FeedbackCard key={index} {...card} />
      ))}
    </div>
  </div>
)

export default Testimonials