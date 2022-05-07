export type StudentModalType = {
    isOpen: boolean
    onClose: () => void
    idStudent: number | undefined
    handleGetStudents: () => void
}