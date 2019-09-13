import React from 'react';
import styles from './App.module.css';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import PricingPlan from '../PricingPlan/PricingPlan';
import planData from '../../json/pricing-plan.json';
import transactions from '../../json/transactions';
import { user, stats } from './data';

const App = () => (
  <div className={styles.App}>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Stats title="Upload stats" stats={stats} />
    <PricingPlan items={planData} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
