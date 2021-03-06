import { Box, Spinner, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { StudentType } from "../api";
import { deleteStudent, getStudents } from "../api/student";

import StudentForm from "../components/StudentForm";
import StudentModal from "../components/StudentModal";
import StudentTable from "../components/StudentTable";

const Student = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGetData, setIsGetData] = React.useState<boolean>(false);
  const [students, setStudents] = React.useState<StudentType[]>([]);
  const [idStudent, setIdStudent] = React.useState<number | undefined>(
    undefined
  );

  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleGetStudents = async () => {
    setIsGetData(true);

    const res = await getStudents();
    if (res.data.status == 200) {
      setStudents(res.data.students);
      setIsGetData(false);
    }
  };

  const handleDeleteStudent = async (id: any) => {
    const res = await deleteStudent(Number(id));
    if (res.data.status == 200) {
      toast.success(res.data.message);
      handleGetStudents();
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

      <StudentModal
        isOpen={isOpen}
        onClose={onClose}
        idStudent={idStudent}
        handleGetStudents={handleGetStudents}
      />

      {!isGetData ? (
        <StudentTable
          data={students}
          onOpen={onOpen}
          setIdStudent={setIdStudent}
          handleDeleteStudent={handleDeleteStudent}
        />
      ) : (
        <Spinner size="xl" />
      )}

      <ToastContainer />
    </Box>
  );
};

export default Student;
