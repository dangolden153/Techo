import React from "react";

function SkillsItem({ skills }) {
  const { skill } = skills;
  return (
    <div>
      <h2 className="text-lg font-bold mb-1 capitalize">{skill}</h2>
    </div>
  );
}

export default SkillsItem;
