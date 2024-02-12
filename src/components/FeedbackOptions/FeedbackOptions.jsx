import { Section } from 'components/Section/Section';
import style from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ title, onLeaveFeedback }) => {
  return (
    <Section title={title}>
      <button className={style.button} name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={style.button} name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={style.button} name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </Section>
  );
};
