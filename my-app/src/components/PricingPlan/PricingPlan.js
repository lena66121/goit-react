import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from './PricingItem/PricingItem';
import styles from './PricingPlan.module.css';

const PricingPlan = ({ items }) => (
  <ul className={styles.pricingPlan}>
    {items.map(item => (
      <li key={item.id} className={styles.pricingPlan}>
        <PricingItem
          item={items}
          label={item.label}
          icon={item.icon}
          capacity={item.capacity}
          price={item.price}
          description={item.description}
          primaryColor={item.primaryColor}
        />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      capacity: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      primaryColor: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PricingPlan;
