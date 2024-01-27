import { listStudents } from '@graphql/queries.ts'
import { generateClient } from 'aws-amplify/api'
import { CreateStudentInput } from '@/API.ts'
import { createStudent, deleteStudent } from '@graphql/mutations.ts'

const client = generateClient()

export const Students = {
  create: async (input: CreateStudentInput) => {
    try {
      await client.graphql({
        query: createStudent,
        variables: {
          input
        }
      })
    } catch (err) {
      console.log('error fetching Student.create()', err)
    }
  },
  get: async () => {
    try {
      const studentList = await client.graphql({
        query: listStudents,
      })

      return studentList.data.listStudents.items
    } catch (err) {
      console.log('error fetching Student.get()', err)
    }
  },
  remove: async (id: string) => {
    try {
      await client.graphql({
        query: deleteStudent,
        variables: {
          input: { id }
        }
      })
    } catch (err) {
      console.log('error fetching Student.remove()', err)
    }
  }
}
