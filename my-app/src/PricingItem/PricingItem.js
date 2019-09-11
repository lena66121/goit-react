import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const PricingItem = ({
  label,
  icon,
  capacity,
  price,
  description,
  primaryColor,
}) => (
  <div className={styles.pricingItem}>
    <div className={styles.iconBlock}>
      <i className={styles.icon} style={{ content: `url(${icon})` }} />
    </div>

    <h2 className={styles.label} style={{ color: primaryColor }}>
      {label}
    </h2>
    <p className={styles.capacity}>{capacity}</p>
    <p className={styles.description}>{description}</p>
    <p className={styles.price}>{`$${price}/MO`}</p>
    <button
      className={styles.button}
      type="button"
      style={{ backgroundColor: primaryColor }}
    >
      Get Started
    </button>
  </div>
);

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
};

export default PricingItem;
