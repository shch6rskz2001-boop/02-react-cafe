import css from './VoteStats.module.css';

import type { Votes } from '../../types/votes'; 

interface VoteStatsProps {
  stats: Votes;
  total: number;
  positivePercentage: number;
}

export default function VoteStats({ stats, total, positivePercentage }: VoteStatsProps) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>Good: {stats.good}</li>
        <li className={css.item}>Neutral: {stats.neutral}</li>
        <li className={css.item}>Bad: {stats.bad}</li>
        <li className={css.item}>Total: {total}</li>
        <li className={css.item}>Positive: {positivePercentage}%</li>
      </ul>
    </div>
  );
}

