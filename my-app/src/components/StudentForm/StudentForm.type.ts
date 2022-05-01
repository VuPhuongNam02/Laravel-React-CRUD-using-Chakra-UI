import React from "react"

export type FormType = {
    name: string
    avatar: string
}

export type StudentFormType = {
    handleGetStudents: () => void
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}
