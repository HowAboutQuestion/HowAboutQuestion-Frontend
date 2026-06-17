import { forwardRef } from 'react';
import styles from '@/pages/help/components/HelpSection.module.scss';
import type { HelpStep } from '@/pages/help/types';

interface Props {
  step: HelpStep;
}

const HelpSection = forwardRef<HTMLElement, Props>(({ step }, ref) => {
  const imageUrls = Array.isArray(step.imageUrl)
    ? step.imageUrl
    : step.imageUrl
      ? [step.imageUrl]
      : [];

  return (
    <section id={step.id} className={styles.section} ref={ref}>
      <h3 className={styles.title}>{step.title}</h3>
      {imageUrls.length > 0 && (
        <div className={styles.imageWrap}>
          {imageUrls.map((url, idx) => (
            <img key={idx} src={url} alt={`${step.title} ${idx + 1}`} className={styles.image} />
          ))}
        </div>
      )}
      <p className={styles.description}>{step.description}</p>
    </section>
  );
});

HelpSection.displayName = 'HelpSection';

export default HelpSection;
