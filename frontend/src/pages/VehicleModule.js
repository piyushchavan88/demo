import React from "react";
import VehicleTable from "../core/VehicleTable";
import CreateVehicleFormDialog from "../core/components/CreateVehicleFormDialog";
export default function VehicleModule(props) {
  return (
    <div>
      <h2>Choose your convenient partner for your journey.</h2>
      <VehicleTable />
      <CreateVehicleFormDialog/>
    </div>
  );
}
