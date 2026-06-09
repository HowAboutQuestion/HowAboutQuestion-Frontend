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
        <h3 className={styles.featureDetailTitle}>{feature.title}</h3>
        <p className={styles.featureDetailDescription}>{feature.description}</p>
        <ul className={styles.featureDetailList}>
          {feature.bullets.map(bullet => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
      {feature.imageUrl && (
        <img className={styles.featureDetailImage} src={feature.imageUrl} alt={feature.label} />
      )}
    </div>
  );
};

export default FeatureDetailCard;
