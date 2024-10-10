"use client";

import { useState } from "react";
import ProjectHeader from "./ProjectHeader";

type Props = {
  params: { id: string };
};
const Project = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState<boolean>(false);
  return (
    <div>
      {/*  Modal New Task */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {/*  {activeTab === "Board" && (*/}
      {/*    <Board />*/}
      {/*  )}*/}
    </div>
  );
};

export default Project;
