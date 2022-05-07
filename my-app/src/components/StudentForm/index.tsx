import {
  Box,
  Button,
  Flex,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createStudent } from "../../api/student";
import UploadImage from "../UploadImage";
import { FormType, StudentFormType } from "./StudentForm.type";

const StudentForm = ({ setIsLoading, handleGetStudents }: StudentFormType) => {
  const [avatar, setAvatar] = React.useState<any>();
  const [imgPreveiew, setImgPreveiew] = React.useState<any>();

  const [errorMessages, setErrorMessages] = React.useState<any | undefined>({
    name: "",
    avatar: "",
  });

  const { register, handleSubmit } = useForm<FormType>();

  //submit form
  const submit = async (data: any, event: any) => {
    setIsLoading(true);

    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("avatar", avatar);

    const response = await createStudent(formData);

    //when response data success
    if (response.data.status === 200) {
      setIsLoading(false);

      //set img preview empty
      setImgPreveiew("");

      //reset form
      event.target.reset();

      //alert message
      toast.success(response.data.message);

      //setErrorMessages
      setErrorMessages("");

      //call api handleGetStudents after create data
      handleGetStudents();
    } else if (response.data.status === 402) {
      console.log("fail");

      //fail
      setIsLoading(false);
      setErrorMessages(response.data.errorMessages);
    }
  };

  return (
    <Box maxWidth="700px" m="auto" borderWidth={1} p={4} boxShadow="lg">
      <form onSubmit={handleSubmit(submit)} encType="multipart/data">
        <Flex alignItems="center" gap="1rem">
          <Input
            type="text"
            placeholder="name"
            {...register("name")}
            name="name"
          />

          <UploadImage
            htmlFor={"avatar"}
            setAvatar={setAvatar}
            setImgPreveiew={setImgPreveiew}
            imgPreveiew={imgPreveiew}
            inputProps={{
              name: "avatar",
              id: "avatar",
              hidden: true,
            }}
          />
          <Button background="teal" type="submit">
            Add
          </Button>
        </Flex>
      </form>
      <Text fontSize="md" color="tomato">
        {errorMessages.name}
      </Text>
      <Text fontSize="md" color="tomato">
        {errorMessages.avatar}
      </Text>
    </Box>
  );
};
export default StudentForm;
