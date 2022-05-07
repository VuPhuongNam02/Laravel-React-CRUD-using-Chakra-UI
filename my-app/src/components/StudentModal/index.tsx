import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
  Text,
} from "@chakra-ui/react";
import UploadImage from "../UploadImage";
import { StudentModalType } from "./StudentModal.type";
import { getStudentById, updateStudent } from "../../api/student";
import { useForm } from "react-hook-form";
import { FormType } from "../StudentForm/StudentForm.type";
import { toast } from "react-toastify";

const StudentModal = ({
  isOpen,
  onClose,
  idStudent,
  handleGetStudents,
}: StudentModalType) => {
  const [avatar, setAvatar] = React.useState<any>();
  const [imgPreveiew, setImgPreveiew] = React.useState<any>();
  const [imgStudentCurrent, setImgStudentCurrent] = React.useState<any>();
  const { register, handleSubmit, reset } = useForm<FormType>();

  const handleGetStudentById = async () => {
    const res = await getStudentById(Number(idStudent));
    if (res.data.status === 200) {
      reset(res.data.student);
      setImgStudentCurrent(res.data.student.avatar);
    }
  };

  const submit = async (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("avatar", avatar);

    const response = await updateStudent(Number(idStudent), formData);
    if (response.data.status === 200) {
      toast.success(response.data.message);
      onClose();
      setImgPreveiew("");
      handleGetStudents();
    }
  };

  React.useEffect(() => {
    if (idStudent != undefined) {
      handleGetStudentById();
    }
  }, [idStudent]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(submit)}>
            <ModalHeader>Update student</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="First name"
                  {...register("name")}
                  name="name"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Avatar</FormLabel>
                <Text mt={2}>Current Avatar</Text>
                <Image
                  src={`http://127.0.0.1:8000/img/${imgStudentCurrent}`}
                  borderRadius="full"
                  boxSize="100px"
                  objectFit="cover"
                />
                <Text mt={2}>New Avatar</Text>
                <UploadImage
                  htmlFor={"avatarEdit"}
                  {...register("avatar")}
                  setAvatar={setAvatar}
                  setImgPreveiew={setImgPreveiew}
                  imgPreveiew={imgPreveiew}
                  inputProps={{
                    name: "avatar",
                    id: "avatarEdit",
                    hidden: true,
                  }}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StudentModal;
