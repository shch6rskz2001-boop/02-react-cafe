import css from './CafeInfo.module.css';

export default function CafeInfo() {
  const options = ['Good', 'Neutral', 'Bad'];

  return (
    <div className={css.container}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.description}>
        Please rate our service by selecting one of the options below.
      </p>
      
      <div className={css.buttonList}>
        {options.map((option) => (
          <button key={option} className={css.button}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

