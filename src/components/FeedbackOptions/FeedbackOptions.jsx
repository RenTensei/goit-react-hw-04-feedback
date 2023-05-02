export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          key={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option.charAt(0).toUpperCase() + option.substr(1)}
        </button>
      ))}
    </>
  );
};
