import { Box } from "@chakra-ui/react";
import React from "react";
import { ToastContainer } from "react-toastify";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

const Student = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <Box textAlign="center" margin="30px auto">
      {isLoading ? <div className="loading-lazy"></div> : ""}
      <StudentForm setIsLoading={setIsLoading} />
      <StudentTable />
      <ToastContainer />
    </Box>
  );
};

export default Student;
