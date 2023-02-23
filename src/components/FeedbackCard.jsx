import { quotes } from "../assets"
import styles from "../style"

const FeedbackCard = ({id, content, name, title, img}) => (
    <div className="flex flex-col justify-between px-10 py-12 
    rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5
    mr-0 feedback-card">
        <img src={quotes} alt="quotes" className="w-[42px] h-[42px] object-contain"/>
        <p className={`flex-1 font-poppins font-normal text-[18px] text-white 
        leading-[32px] my-10`}>{content}</p>
        <div className="flex flex-row items-center">
            <img src={img} alt={img} className="w-[48px] h-[48px] object-contain"/>
            <div className="flex flex-col ml-4">
                <h4 className="font-poppins font-semibold text-white leading-[32px] text-[20px]">{name}</h4>
                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{title}</p>
            </div>
        </div>
    </div>
)

export default FeedbackCard