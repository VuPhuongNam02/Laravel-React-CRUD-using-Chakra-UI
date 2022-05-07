import { FormLabel, Image, Input } from "@chakra-ui/react";
import React from "react";
import { UploadType } from "./UploadImage.type";

const UploadImage = ({
  setAvatar,
  setImgPreveiew,
  imgPreveiew,
  inputProps,
  htmlFor,
}: UploadType) => {
  const handleImgPreview = (event: any) => {
    const fileSelected = event.target.files[0];
    setAvatar(fileSelected);

    let reader = new FileReader();
    reader.onloadend = () => {
      setImgPreveiew(reader.result);
    };
    reader.readAsDataURL(fileSelected);
  };
  return (
    <>
      <FormLabel
        htmlFor={htmlFor}
        textAlign="center"
        width="300px"
        p={2}
        cursor="pointer"
        borderRadius="lg"
        background="gray"
      >
        Choose file
      </FormLabel>
      <Input type="file" onChange={handleImgPreview} {...inputProps} />

      <Image src={imgPreveiew} w="200px" />
    </>
  );
};

export default UploadImage;
