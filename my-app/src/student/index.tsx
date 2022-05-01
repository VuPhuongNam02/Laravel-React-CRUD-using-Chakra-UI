import { Box, Spinner } from "@chakra-ui/react";
import React from "react";
import { ToastContainer } from "react-toastify";
import { StudentType } from "../api";
import { getStudents } from "../api/student";

import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

const Student = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGetData, setIsGetData] = React.useState<boolean>(false);
  const [students, setStudents] = React.useState<StudentType[]>([]);

  const handleGetStudents = async () => {
    setIsGetData(true);

    const res = await getStudents();
    if (res.data.status == 200) {
      setStudents(res.data.students);
      setIsGetData(false);
    }
  };

  React.useEffect(() => {
    handleGetStudents();
  }, []);

  return (
    <Box textAlign="center" margin="30px auto">
      {isLoading ? <div className="loading-lazy"></div> : ""}
      <StudentForm
        setIsLoading={setIsLoading}
        handleGetStudents={handleGetStudents}
      />

      {!isGetData ? <StudentTable data={students} /> : <Spinner size="xl" />}

      <ToastContainer />
    </Box>
  );
};

export default Student;
