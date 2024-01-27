/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getStudent = /* GraphQL */ `query GetStudent($id: ID!) {
  getStudent(id: $id) {
    id
    name
    dob
    grade
    address
    motherName
    fatherName
    note
    extracurricular {
      id
      musicSchool
      artSchool
      sportsSchool
      createdAt
      updatedAt
      extracurricularStudentIDId
      __typename
    }
    createdAt
    updatedAt
    studentExtracurricularId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetStudentQueryVariables,
  APITypes.GetStudentQuery
>;
export const listStudents = /* GraphQL */ `query ListStudents(
  $filter: ModelStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      dob
      grade
      address
      motherName
      fatherName
      note
      createdAt
      updatedAt
      studentExtracurricularId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStudentsQueryVariables,
  APITypes.ListStudentsQuery
>;
export const getExtracurricular = /* GraphQL */ `query GetExtracurricular($id: ID!) {
  getExtracurricular(id: $id) {
    id
    musicSchool
    artSchool
    sportsSchool
    studentID {
      id
      name
      dob
      grade
      address
      motherName
      fatherName
      note
      createdAt
      updatedAt
      studentExtracurricularId
      __typename
    }
    createdAt
    updatedAt
    extracurricularStudentIDId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetExtracurricularQueryVariables,
  APITypes.GetExtracurricularQuery
>;
export const listExtracurriculars = /* GraphQL */ `query ListExtracurriculars(
  $filter: ModelExtracurricularFilterInput
  $limit: Int
  $nextToken: String
) {
  listExtracurriculars(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      musicSchool
      artSchool
      sportsSchool
      createdAt
      updatedAt
      extracurricularStudentIDId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExtracurricularsQueryVariables,
  APITypes.ListExtracurricularsQuery
>;
