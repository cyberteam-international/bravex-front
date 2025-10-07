import Image from 'next/image';
import styles from './AdvantagesSection.module.css';
import Logo from '@/assets/icons/logo.svg';

interface AdvantageItem {
  name: string;
  text: string;
  number: string;
}

const advantagesData: AdvantageItem[] = [
  {
    name: "SPEED",
    text: "Factory-produced components and on-site assembly cut construction time by 30–50 percent. Industrial design and prefabrication ensure faster completion with consistent quality.",
    number: "/01"
  },
  {
    name: "FLEXIBILITY / ADAPTABILITY",
    text: "The system can be customized for diverse climates, from cold northern regions to hot, humid zones. Off-site manufacturing allows delivery and installation even in hard-to-reach areas.",
    number: "/02"
  },
  {
    name: "STRENGTH",
    text: "A galvanized steel frame provides exceptional load-bearing capacity and earthquake resistance. The zinc-magnesium coating protects against corrosion for decades of durability.",
    number: "/03"
  },
  {
    name: "MODULARITY",
    text: "Standardized modules and ready-made components allow easy scaling and quick design adjustments. Projects can grow or change without disrupting schedules or budgets.",
    number: "/04"
  },
  {
    name: "PRECISION",
    text: "Comprehensive factory planning integrates architectural and engineering elements into a single system. This minimizes on-site errors and ensures exact fits at every construction stage.",
    number: "/05"
  }
];

const AdvantagesSection: React.FC = () => {
  return (
    <div className="container-max">
      <div className={styles.advantagesInner}>
        <div className={`${styles.advantagesHead} fade-in`}>
          <h2 className={styles.advantagesHeadHeader}>CAPABILITIES AND ADVANTAGES</h2>
          <Image src={Logo} alt="" className={`${styles.logoHeader} logo-header`} width={90} height={26} />
        </div>

        <div className={styles.advantagesContent}>
          {advantagesData.map((advantage, index) => (
            <div key={index} className={`${styles.advantagesContentItem} fade-in`}>
              <p className={styles.advantagesName}>{advantage.name}</p>
              <p className={styles.advantagesText}>{advantage.text}</p>
              <p className={styles.advantagesNumber}>{advantage.number}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;