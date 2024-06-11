import React, { memo } from "react";

const AttemptsList = ({ attempts, removeAttempt }) => {

  console.log('Render AttemptsList');
  return (
    <div>
    {
      attempts.map((item) => {
        return <div
          onClick={() => removeAttempt(item.id)}
          key={item.id}>{`${item.attemptData} ${item.id}`}</div>;
      })
    }
    </div>
  );
};

export default memo(AttemptsList, /*(prevProps, nextProps) => {
  //console.log(prevProps.removeAttempt === nextProps.removeAttempt);

  return prevProps.attempts !== nextProps.attempts;
}*/);