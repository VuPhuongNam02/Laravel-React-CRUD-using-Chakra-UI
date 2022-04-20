import { Box, Button, Flex, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const StudentForm = () => {
  return (
    <Box maxWidth="700px" m="auto" borderWidth={1} p={4} boxShadow="lg">
      <form encType="multipart/data">
        <Flex alignItems="center" gap="1rem">
          <Input type="text" placeholder="name" name="name" />
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
          <Input type="file" name="avatar" id="avatar" hidden />
          <Button background="teal">Add</Button>
        </Flex>
      </form>
    </Box>
  );
};
export default StudentForm;
