import officeService from "./office";
import projectService from "./project";

import r from "../random";

export const augmentPerson = person => {
  const offices = officeService.all();
  const projects = projectService.all();

  const office = offices.get(r.integer(1, offices.count()) - 1);
  const project = projects.get(r.integer(1, projects.count()) - 1);
  return {
    ...person,
    officeId: office.id,
    projectId: project.id
  };
};

export const augmentPersons = persons => persons.map(augmentPerson);
