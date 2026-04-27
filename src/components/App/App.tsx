import { useState, useEffect } from "react";
import type { Votes } from "../../types/votes";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification/Notification";
import css from "./App.module.css";

export default function App() {
  const [votes, setVotes] = useState<Votes>(() => {
    const savedVotes = window.localStorage.getItem("saved-votes");
    return savedVotes !== null
      ? JSON.parse(savedVotes)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-votes", JSON.stringify(votes));
  }, [votes]);

  const handleVote = (voteType: keyof Votes) => {
    setVotes((prev) => ({
      ...prev,
      [voteType]: prev[voteType] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes > 0 ? Math.round((votes.good / totalVotes) * 100) : 0;

  return (
    <div className={css.container}>
      <CafeInfo />
      
      <VoteOptions 
        onVote={handleVote} 
        onReset={resetVotes} 
        canReset={totalVotes > 0} 
      />

      {totalVotes > 0 ? (
        <VoteStats 
          stats={votes} 
          total={totalVotes} 
          positivePercentage={positiveRate} 
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

