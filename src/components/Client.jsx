import { clients } from '../constants'
import styles from '../style'

const Client = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client, index) => (
        <div key={index} className={`${styles.flexCenter} flex-1
        sm:min-w-[192px] min-w-[120px] sm:m-4 m-2`}>
          <img src={client.logo} alt="client" className="sm:w-[192px] 
          w-[100px] object-contain"/>

        </div>
      ))}
    </div>
  </section>
)

export default Client