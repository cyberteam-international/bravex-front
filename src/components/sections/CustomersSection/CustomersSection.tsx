'use client';

import { useState } from 'react';
import Image from 'next/image';
import Logo from '@/assets/icons/logo.svg';
//import CustomersSectionBackground from '@/assets/about.webp'
import styles from './CustomersSection.module.css';
import type { SectionProps, CustomerBlock } from '@/shared/types/common';
import { BASE_BACK_URL } from '@/services/api/requests';


const CustomersSection = ({ data }: SectionProps) => {
  const customerBlocks: CustomerBlock[] = data.CustomersBlocks || []
  const [activeBlock, setActiveBlock] = useState<number>(customerBlocks.length > 0 ? customerBlocks[0].id : 1);
  let CustomersSectionBackground = '';
  if (data.Image) {
    if (Array.isArray(data.Image)) {
      CustomersSectionBackground = data.Image.length > 0 ? BASE_BACK_URL + data.Image[0].url : '';
    } else {
      CustomersSectionBackground = BASE_BACK_URL + data.Image.url;
    }
  }
  return (
    <section className={styles.customers}>
      <div className="container">
        <div className={styles.customersInner}>
            <div className={`${styles.customersHead} ${data.lightVersion ? styles.lightVersion : ''}`}>

              <h2 className={`${styles.customersHeadHeader} fade-in`}>
                <pre className={styles.pc}>
                  {<p dangerouslySetInnerHTML={{ __html: (data.Title || '').replace(/\s*\./g, '<br>.') }} />}
                </pre>
                <pre className={styles.mobile}>
                  {<p dangerouslySetInnerHTML={{ __html: (data.Title || '').replace(/\s*\./g, '<br>.') }} />}
                </pre>
              </h2>

              <div className={`${styles.customersHeadContent} fade-in`}>
                <p className={styles.customersHeadContentText}>
                {data.Description}
                </p>
                <Image 
                  src={Logo} 
                  alt="Hoset Logo" 
                  className={styles.logoHeader}
                />
              </div>
          </div>

          <div className={styles.customersContent}>
              <div className={styles.customersBlocksWrap}>
              {customerBlocks.map((block) => (
                <div
                  key={block.id}
                  className={`fade-in ${styles.customersBlock} ${activeBlock === block.id ? styles.active : ''}`}
                  onMouseEnter={() => setActiveBlock(block.id)}
                >
                  {block.CustomersBlockIconUp?.url && (
                    <Image
                      className={styles.customersBlockIconUp}
                      src={BASE_BACK_URL + block.CustomersBlockIconUp.url}
                      alt=""
                      width={30}
                      height={30}
                    />
                  )}
                  {block.CustomersBlockIconCenter?.url && (
                    <Image
                      className={styles.customersBlockIconCenter}
                      src={BASE_BACK_URL + block.CustomersBlockIconCenter.url}
                      alt=""
                      width={30}
                      height={30}
                    />
                  )}
                  <div className={styles.customersBlockContent}>
                    <p className={styles.customersBlockName}>{block.Title || block.title}</p>
                    <p className={styles.customersBlockText}>{block.Description || block.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`fade-in ${styles.customersImageWrap}`}>
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

export default CustomersSection;