import React, { useCallback, useMemo, useState } from "react";
import PageContainer from "../shared/pageContainer";
import Card from "./Card";
import { projects } from "./const";
import CustomModal from "./CustomModal";

const ProjectsPage = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);

  const handleOpen = (id) => {
    setId(id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <PageContainer>
      <h4 className="text-2xl mb-5 text-center font-bold px-4">Projects</h4>
      <div className="grid gap-x-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-12 px-4">
        {projects.length &&
          projects.map((project) => (
            <React.Fragment key={project.id}>
              <Card
                handleOpen={useCallback(() => handleOpen(project.id), [project.id])}
                project={useMemo(() => project, [project.id])}
              />
            </React.Fragment>
          ))}
        {open && <CustomModal project={projects[id]} handleClose={handleClose} open={open} />}
      </div>
    </PageContainer>
  );
};

export default ProjectsPage;
