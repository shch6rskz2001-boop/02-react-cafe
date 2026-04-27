


interface VoteStatsProps {
  votes: {
    good: number;
    neutral: number;
    bad: number;
  };
  totalVotes: number;
  positiveRate: number;
}


const VoteStats = ({ votes, totalVotes, positiveRate }: VoteStatsProps) => {
  const { good, neutral, bad } = votes;

  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalVotes}</li>
      <li>Positive feedback: {positiveRate}%</li>
    </ul>
  );
};

export default VoteStats;


