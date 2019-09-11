import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const randomColor = () => {
  const colorFirst = (Math.random() * 255).toFixed(0);
  const colorSecond = (Math.random() * 255).toFixed(0);
  const colorThird = (Math.random() * 255).toFixed(0);
  const color = `${colorFirst}, ${colorSecond}, ${colorThird}`;
  return color;
};

const Stats = ({ title, stats = [] }) => (
  <section className={styles.statsSection}>
    {title && <h2 className={styles.title}> {title} </h2>}
    <ul className={styles.statsList}>
      {stats.map(item => (
        <li
          key={item.id}
          style={{ backgroundColor: `rgb(${randomColor()})` }}
          className={styles.item}
        >
          <span className={styles.label}> {item.label} </span>
          <span className={styles.percentage}> {item.percentage} % </span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Stats;
