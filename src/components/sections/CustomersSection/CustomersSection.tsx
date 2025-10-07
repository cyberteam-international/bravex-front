'use client';

import { useState } from 'react';
import Image from 'next/image';
import Logo from '@/assets/icons/logo.svg';
import CustomersSectionBackground from '@/assets/about.webp'
import styles from './CustomersSection.module.css';

interface CustomerBlock {
  id: number;
  iconDefault: string;
  iconWhite: string;
  title: string;
  description: string;
}

const customerBlocks: CustomerBlock[] = [
  {
    id: 1,
    iconDefault: '/assets/icons/costumer1.svg',
    iconWhite: '/assets/icons/costumer1.svg',
    title: 'STRENGTH AND DURABILITY',
    description: 'The steel frame ensures resistance to loads and long-lasting structural durability.'
  },
  {
    id: 2,
    iconDefault: '/assets/icons/costumer2.svg',
    iconWhite: '/assets/icons/costumer2-white.svg',
    title: 'ENERGY EFFICIENCY',
    description: 'Foam concrete provides excellent thermal insulation, reducing energy costs.'
  },
  {
    id: 3,
    iconDefault: '/assets/icons/costumer3.svg',
    iconWhite: '/assets/icons/costumer3-white.svg',
    title: 'CONSTRUCTION SPEED',
    description: 'Prefabricated elements allow for rapid construction and reduced labor costs.'
  },
  {
    id: 4,
    iconDefault: '/assets/icons/costumer4.svg',
    iconWhite: '/assets/icons/costumer4-white.svg',
    title: 'ENVIRONMENTAL SAFETY',
    description: 'Eco-friendly materials and sustainable construction methods.'
  }
];

export default function CustomersSection() {
  const [activeBlock, setActiveBlock] = useState<number>(1);

  return (
    <section className={styles.customers}>
      <div className="container">
        <div className={styles.customersInner}>
          <div className={styles.customersHead}>
            <h2 className={styles.customersHeadHeader}>
              <pre className={styles.pc}>
                {`WHY CUSTOMERS
.                     CHOOSE HOSET`}
              </pre>
              <pre className={styles.mobile}>
                {`WHY CUSTOMERS
              CHOOSE HOSET`}
              </pre>
            </h2>

            <div className={styles.customersHeadContent}>
              <p className={styles.customersHeadContentText}>
                – is an innovative construction technology that combines durable steel structures with lightweight foam concrete casting.
              </p>
              <Image 
                src={Logo} 
                alt="Hoset Logo" 
                width={158}
                height={40}
                className={styles.logoHeader}
              />
            </div>
          </div>

          <div className={styles.customersContent}>
            <div className={styles.customersBlocksWrap}>
              {customerBlocks.map((block) => (
                <div
                  key={block.id}
                  className={`${styles.customersBlock} ${activeBlock === block.id ? styles.active : ''}`}
                  onMouseEnter={() => setActiveBlock(block.id)}
                >
                  <Image
                    className={styles.customersBlockIconUp}
                    src={block.iconWhite}
                    alt=""
                    width={30}
                    height={30}
                  />
                  <Image
                    className={styles.customersBlockIconCenter}
                    src={block.iconDefault}
                    alt=""
                    width={30}
                    height={30}
                  />
                  <div className={styles.customersBlockContent}>
                    <p className={styles.customersBlockName}>{block.title}</p>
                    <p className={styles.customersBlockText}>{block.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.customersImageWrap}>
              <Image
                className={styles.customersImageLogo}
                src={Logo}
                alt="Hoset Logo"
                width={158}
                height={40}
              />
              <Image
                className={styles.customersImageItem}
                src={CustomersSectionBackground}
                alt="Hoset Construction"
                fill
                sizes="(max-width: 999px) 100vw, 55vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}