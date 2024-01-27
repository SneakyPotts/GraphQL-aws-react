/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createStudent = /* GraphQL */ `mutation CreateStudent(
  $input: CreateStudentInput!
  $condition: ModelStudentConditionInput
) {
  createStudent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateStudentMutationVariables,
  APITypes.CreateStudentMutation
>;
export const updateStudent = /* GraphQL */ `mutation UpdateStudent(
  $input: UpdateStudentInput!
  $condition: ModelStudentConditionInput
) {
  updateStudent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateStudentMutationVariables,
  APITypes.UpdateStudentMutation
>;
export const deleteStudent = /* GraphQL */ `mutation DeleteStudent(
  $input: DeleteStudentInput!
  $condition: ModelStudentConditionInput
) {
  deleteStudent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteStudentMutationVariables,
  APITypes.DeleteStudentMutation
>;
export const createExtracurricular = /* GraphQL */ `mutation CreateExtracurricular(
  $input: CreateExtracurricularInput!
  $condition: ModelExtracurricularConditionInput
) {
  createExtracurricular(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateExtracurricularMutationVariables,
  APITypes.CreateExtracurricularMutation
>;
export const updateExtracurricular = /* GraphQL */ `mutation UpdateExtracurricular(
  $input: UpdateExtracurricularInput!
  $condition: ModelExtracurricularConditionInput
) {
  updateExtracurricular(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateExtracurricularMutationVariables,
  APITypes.UpdateExtracurricularMutation
>;
export const deleteExtracurricular = /* GraphQL */ `mutation DeleteExtracurricular(
  $input: DeleteExtracurricularInput!
  $condition: ModelExtracurricularConditionInput
) {
  deleteExtracurricular(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteExtracurricularMutationVariables,
  APITypes.DeleteExtracurricularMutation
>;
