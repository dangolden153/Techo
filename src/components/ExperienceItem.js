import React from 'react';

function ExperienceItem({exp}) {
  return (
  <div className="mb-2 self-start">
      <h2 className="text-lg font-bold capitalize my-px">{exp.experience}</h2>
      <p className="text-sm text-textPrimary">{exp.created_at}</p>
  </div>);
}

export default ExperienceItem;
