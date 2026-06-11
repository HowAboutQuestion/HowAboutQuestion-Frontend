import { forwardRef } from 'react';
import styles from '@/pages/help/components/HelpSection.module.scss';
import type { HelpStep } from '@/pages/help/types';

interface Props {
  step: HelpStep;
}

const HelpSection = forwardRef<HTMLElement, Props>(({ step }, ref) => {
  return (
    <section id={step.id} className={styles.section} ref={ref}>
      <h3 className={styles.title}>{step.title}</h3>
      {step.imageUrl && (
        <div className={styles.imageWrap}>
          <img src={step.imageUrl} alt={step.title} className={styles.image} />
        </div>
      )}
      <p className={styles.description}>{step.description}</p>
    </section>
  );
});

HelpSection.displayName = 'HelpSection';

export default HelpSection;
