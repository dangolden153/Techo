import React from "react";
import moment from "moment";
function Projects({ project }) {
  const {
    title,
    image_url,
    description,
    project_launch_date,
    project_start_date,
    created_at,
    id,
  } = project;

  const project_img =
    "https://getnave.com/blog/wp-content/uploads/2018/01/what-is-project-management-process.png";
  return (
    <div className="flex flex-col items-start mb-4 ">
      <div className="flex justify-center items-start">
        <img
          src={image_url || project_img}
          alt={title}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div className=" flex flex-col items-start ">
          <h2 className="text-lg font-bold mb-1 capitalize">{title}</h2>
          <p className="text-sm text-textPrimary capitalize">{description}</p>
          <div className="flex justify-center items-center">
            <p className="text-sm text-textPrimary mr-3">
              {moment(project_start_date).format("dd-mm-yy")}
            </p>
            <p className="text-sm text-textPrimary">{project_launch_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
