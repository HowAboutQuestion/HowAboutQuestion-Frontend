import React from 'react';
import styles from '@/pages/help/components/HelpSidebar.module.scss';
import type { HelpCategory } from '@/pages/help/types';

interface Props {
  categories: HelpCategory[];
  activeStepId: string;
  onStepClick: (categoryId: string, stepId: string) => void;
}

/**
 *
 */
const HelpSidebar: React.FC<Props> = ({ categories, activeStepId, onStepClick }) => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {categories.map(category => (
          <div key={category.id} className={styles.navSection}>
            <p className={styles.navCategory}>{category.label}</p>
            <ul className={styles.stepList}>
              {category.steps.map(step => (
                <li key={step.id}>
                  <button
                    className={`${styles.stepItem} ${activeStepId === step.id ? styles.active : ''}`}
                    onClick={() => onStepClick(category.id, step.id)}
                  >
                    {step.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default HelpSidebar;
