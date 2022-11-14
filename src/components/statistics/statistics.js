import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ title, stats }) => (
    <section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>

        <ul className={styles.statlist}>
            {stats.map(stats => (<li className={styles.item} style={{backgroundColor: getRandomHexColor()}} key={stats.id}>
                <span className={styles.label}>{stats.label}</span>
                <span className={styles.percentage}>{stats.percentage}%</span>
            </li>))}
            
           
   
        </ul>
    </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};



export default Statistics;