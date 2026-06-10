import React from 'react';
import Navbar from '@/shared/navbar/Navbar';
import styles from '@/pages/customerservice/CustomerService.module.scss';
import { FaDiscord } from 'react-icons/fa';

const DISCORD_URL = 'https://discord.gg/zMjs9HM3SV';

/**
 *
 */
const CustomerService: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>고객센터</h1>
          <p>궁금한 점이 있으신가요? 디스코드에서 질문해 주세요.</p>
        </div>

        <div className={styles.card}>
          <FaDiscord className={styles.icon} />
          <p className={styles.cardTitle}>Discord 커뮤니티</p>
          <p className={styles.cardDescription}>
            문제 어때 공식 디스코드 채널에서 문의하시면 빠르게 도움을 받으실 수 있어요.
          </p>
          <button
            className={styles.discordButton}
            onClick={() => window.open(DISCORD_URL, '_blank')}
          >
            <FaDiscord />
            Discord 참여하기
          </button>
        </div>
      </main>
    </div>
  );
};

export default CustomerService;
