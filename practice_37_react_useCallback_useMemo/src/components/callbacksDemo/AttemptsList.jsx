import React from "react";

const AttemptsList = ({ attempts }) => {
  return attempts.map((item) => {
    return <div key={item.id}>{`${item.attemptData} ${item.id}`}</div>;
  });
};

export default AttemptsList;