import { StudentFormType } from "../components/StudentForm/StudentForm.type";
import axios from "./axios";

export const getStudents = () => {
    return axios.get('/students')
}

export const getStudentById = (id: number) => {
    return axios.get(`/students/${id}`)
}

export const createStudent = (data: any) => {
    return axios.post('/students/create', data)
}

export const updateStudent = (id: number, data: any) => {
    return axios.post(`/students/update/${id}`, data)
}

export const deleteStudent = (id: number) => {
    return axios.delete(`/students/delete/${id}`)
}