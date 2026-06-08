import styles from '@/pages/landing/Landing.module.scss';
import type { FeatureItem } from '@/pages/landing/types';

interface FeatureDetailCardProps {
  feature: FeatureItem;
}

/**
 *
 */
const FeatureDetailCard = ({ feature }: FeatureDetailCardProps) => {
  return (
    <div className={styles.featureDetailCard} role="tabpanel" aria-live="polite">
      <div className={styles.featureDetailContent}>
        <p className={styles.featureDetailLabel}>{feature.label}</p>
        <h3 className={styles.featureDetailTitle}>{feature.title}</h3>
        <p className={styles.featureDetailDescription}>{feature.description}</p>

        {feature.paragraphs.map(paragraph => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <ul className={styles.featureDetailList}>
          {feature.bullets.map(bullet => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureDetailCard;
