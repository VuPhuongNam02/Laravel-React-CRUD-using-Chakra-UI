import { InputProps } from "@chakra-ui/react"
import { Dispatch, SetStateAction } from "react"

export type UploadType = {
    setImgPreveiew: Dispatch<SetStateAction<any>>
    imgPreveiew: any
    setAvatar: Dispatch<SetStateAction<any>>
    inputProps: InputProps
    htmlFor: string
}