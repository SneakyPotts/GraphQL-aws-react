import { useEffect, useState } from 'react'

import { Students } from '@services/Student.api.ts'
import { CreateStudentInput, Student } from '@/API.ts'


export const StudentList = () => {
  const [students, setStudents] = useState<Student[]>([])

  const handleGet = () => {
    Students.get().then((res) => {
      console.log('handleGet', res)
      setStudents(res || [])
    }).catch(console.log)
  }

  const handleAdd = () => {
    const newStudent: CreateStudentInput = {
      name: `${students.length + 1} John Doe`,
      dob: '2002-12-31',
      grade: '1st grade',
      address: '123 main st.',
      motherName: 'Jane Doe',
      fatherName: 'Doe Sr.',
      note: 'Some notes here'
    }

    Students.create(newStudent).then((res) => {
      console.log('handleAdd', res)
      handleGet()
    }).catch(console.log)
  }

  const handleRemove = (id: string) => {
    Students.remove(id).then((res) => {
      console.log('handleAdd', res)
      handleGet()
    }).catch(console.log)
  }

  useEffect(() => {
    handleGet()
  }, [])

  return (
    <div>
      <h2>Amplify Todos</h2>
      <button onClick={handleAdd}>Add student</button>
      <ul>
        {students && students.map((student: Student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <button onClick={() => handleRemove(student.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
