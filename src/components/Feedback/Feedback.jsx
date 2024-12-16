import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <ul className={css.feedbackList}>
        <li className={css.feedbackItem}>😊 Good: {feedback.good}</li>
        <li className={css.feedbackItem}>😏 Neutral: {feedback.neutral}</li>
        <li className={css.feedbackItem}>🙁 Bad: {feedback.bad}</li>
      </ul>
      <ul className={css.feedbackStatsList}>
        <li className={css.feedbackItem}>📌 Total: {totalFeedback}</li>
        <li className={css.feedbackItem}>👍 Positive: {positiveFeedback}%</li>
      </ul>
    </>
  );
};

Feedback.propTypes = {
  feedback: PropTypes.objectOf(PropTypes.number),
  totalFeedback: PropTypes.number,
  positiveFeedback: PropTypes.number,
};

export default Feedback;
