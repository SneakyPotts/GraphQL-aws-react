/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateStudent = /* GraphQL */ `subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
  onCreateStudent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStudentSubscriptionVariables,
  APITypes.OnCreateStudentSubscription
>;
export const onUpdateStudent = /* GraphQL */ `subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
  onUpdateStudent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStudentSubscriptionVariables,
  APITypes.OnUpdateStudentSubscription
>;
export const onDeleteStudent = /* GraphQL */ `subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
  onDeleteStudent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStudentSubscriptionVariables,
  APITypes.OnDeleteStudentSubscription
>;
export const onCreateExtracurricular = /* GraphQL */ `subscription OnCreateExtracurricular(
  $filter: ModelSubscriptionExtracurricularFilterInput
) {
  onCreateExtracurricular(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateExtracurricularSubscriptionVariables,
  APITypes.OnCreateExtracurricularSubscription
>;
export const onUpdateExtracurricular = /* GraphQL */ `subscription OnUpdateExtracurricular(
  $filter: ModelSubscriptionExtracurricularFilterInput
) {
  onUpdateExtracurricular(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateExtracurricularSubscriptionVariables,
  APITypes.OnUpdateExtracurricularSubscription
>;
export const onDeleteExtracurricular = /* GraphQL */ `subscription OnDeleteExtracurricular(
  $filter: ModelSubscriptionExtracurricularFilterInput
) {
  onDeleteExtracurricular(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExtracurricularSubscriptionVariables,
  APITypes.OnDeleteExtracurricularSubscription
>;
