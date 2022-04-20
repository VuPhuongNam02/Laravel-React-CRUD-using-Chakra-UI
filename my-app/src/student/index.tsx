import { Box } from "@chakra-ui/react";
import React from "react";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

const Student = () => {
  return (
    <Box textAlign="center" margin="30px auto">
      <StudentForm />
      <StudentTable />
    </Box>
  );
};

export default Student;
