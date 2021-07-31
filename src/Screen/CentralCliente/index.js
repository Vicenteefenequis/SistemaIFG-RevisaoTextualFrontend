import React, { useEffect } from "react";
import { apiRevisaoTextual } from "../../config/api";

const CentralCliente = () => {
  useEffect(() => {
    apiRevisaoTextual.get("/budget").then((response) => console.log(response));
  }, []);

  return (
    <div>
      <h1>OLA</h1>
    </div>
  );
};

export default CentralCliente;
