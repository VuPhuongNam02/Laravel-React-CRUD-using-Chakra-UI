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
import { StudentFormType } from "./StudentForm.type";

const StudentForm = ({ setIsLoading }: any) => {
  const [avatar, setAvatar] = React.useState<any>(null);
  const [imgPreveiew, setimgPreveiew] = React.useState<any>(null);

  const [errorMessages, setErrorMessages] = React.useState<any>({
    name: "",
    email: "",
  });

  const { register, handleSubmit, reset } = useForm<StudentFormType>();

  //img preview
  const handleImgPreview = (event: any) => {
    const fileSelected = event.target.files[0];
    setAvatar(fileSelected);

    let reader = new FileReader();
    reader.onloadend = () => {
      setimgPreveiew(reader.result);
    };
    reader.readAsDataURL(fileSelected);
  };

  //submit form
  const submit = async (data: any, event: any) => {
    setIsLoading(true);

    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("avatar", avatar);

    const response = await createStudent(formData);

    //when response data success
    if (response.data.status == 200) {
      setIsLoading(false);

      //set img preview empty
      setimgPreveiew("");

      //reset form
      event.target.reset();

      //alert message
      toast.success(response.data.message);

      //setErrorMessages
      setErrorMessages("");
    } else if (response.data.status == 402) {
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
          <FormLabel
            htmlFor="avatar"
            textAlign="center"
            width="300px"
            p={2}
            cursor="pointer"
            borderRadius="lg"
            background="gray"
          >
            Choose file
          </FormLabel>
          <Input
            type="file"
            {...register("avatar")}
            onChange={handleImgPreview}
            name="avatar"
            id="avatar"
            hidden
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
      <Image src={imgPreveiew} w="200px" />
    </Box>
  );
};
export default StudentForm;
