import React from "react";
import TutorialTable from "../core/TutorialTable";
import CreateTutorialFormDialog from "../core/components/CreateTutorialFormDialog";
export default function TutorialModule(props) {
  return (
    <div>
      <h2>Decide your Destination</h2>
      <TutorialTable />
      <CreateTutorialFormDialog/>
    </div>
  );
}
