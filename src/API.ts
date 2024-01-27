/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStudentInput = {
  id?: string | null,
  name: string,
  dob: string,
  grade: string,
  address: string,
  motherName: string,
  fatherName: string,
  note?: string | null,
  studentExtracurricularId?: string | null,
};

export type ModelStudentConditionInput = {
  name?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  grade?: ModelStringInput | null,
  address?: ModelStringInput | null,
  motherName?: ModelStringInput | null,
  fatherName?: ModelStringInput | null,
  note?: ModelStringInput | null,
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
  studentExtracurricularId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Student = {
  __typename: "Student",
  id: string,
  name: string,
  dob: string,
  grade: string,
  address: string,
  motherName: string,
  fatherName: string,
  note?: string | null,
  extracurricular?: Extracurricular | null,
  createdAt: string,
  updatedAt: string,
  studentExtracurricularId?: string | null,
};

export type Extracurricular = {
  __typename: "Extracurricular",
  id: string,
  musicSchool: boolean,
  artSchool: boolean,
  sportsSchool: boolean,
  studentID: Student,
  createdAt: string,
  updatedAt: string,
  extracurricularStudentIDId: string,
};

export type UpdateStudentInput = {
  id: string,
  name?: string | null,
  dob?: string | null,
  grade?: string | null,
  address?: string | null,
  motherName?: string | null,
  fatherName?: string | null,
  note?: string | null,
  studentExtracurricularId?: string | null,
};

export type DeleteStudentInput = {
  id: string,
};

export type CreateExtracurricularInput = {
  id?: string | null,
  musicSchool: boolean,
  artSchool: boolean,
  sportsSchool: boolean,
  extracurricularStudentIDId: string,
};

export type ModelExtracurricularConditionInput = {
  musicSchool?: ModelBooleanInput | null,
  artSchool?: ModelBooleanInput | null,
  sportsSchool?: ModelBooleanInput | null,
  and?: Array< ModelExtracurricularConditionInput | null > | null,
  or?: Array< ModelExtracurricularConditionInput | null > | null,
  not?: ModelExtracurricularConditionInput | null,
  extracurricularStudentIDId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateExtracurricularInput = {
  id: string,
  musicSchool?: boolean | null,
  artSchool?: boolean | null,
  sportsSchool?: boolean | null,
  extracurricularStudentIDId?: string | null,
};

export type DeleteExtracurricularInput = {
  id: string,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  grade?: ModelStringInput | null,
  address?: ModelStringInput | null,
  motherName?: ModelStringInput | null,
  fatherName?: ModelStringInput | null,
  note?: ModelStringInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
  studentExtracurricularId?: ModelIDInput | null,
};

export type ModelStudentConnection = {
  __typename: "ModelStudentConnection",
  items:  Array<Student | null >,
  nextToken?: string | null,
};

export type ModelExtracurricularFilterInput = {
  id?: ModelIDInput | null,
  musicSchool?: ModelBooleanInput | null,
  artSchool?: ModelBooleanInput | null,
  sportsSchool?: ModelBooleanInput | null,
  and?: Array< ModelExtracurricularFilterInput | null > | null,
  or?: Array< ModelExtracurricularFilterInput | null > | null,
  not?: ModelExtracurricularFilterInput | null,
  extracurricularStudentIDId?: ModelIDInput | null,
};

export type ModelExtracurricularConnection = {
  __typename: "ModelExtracurricularConnection",
  items:  Array<Extracurricular | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionStudentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  dob?: ModelSubscriptionStringInput | null,
  grade?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  motherName?: ModelSubscriptionStringInput | null,
  fatherName?: ModelSubscriptionStringInput | null,
  note?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionExtracurricularFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  musicSchool?: ModelSubscriptionBooleanInput | null,
  artSchool?: ModelSubscriptionBooleanInput | null,
  sportsSchool?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionExtracurricularFilterInput | null > | null,
  or?: Array< ModelSubscriptionExtracurricularFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
  createStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    dob: string,
    grade: string,
    address: string,
    motherName: string,
    fatherName: string,
    note?: string | null,
    extracurricular?:  {
      __typename: "Extracurricular",
      id: string,
      musicSchool: boolean,
      artSchool: boolean,
      sportsSchool: boolean,
      createdAt: string,
      updatedAt: string,
      extracurricularStudentIDId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentExtracurricularId?: string | null,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
  updateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    dob: string,
    grade: string,
    address: string,
    motherName: string,
    fatherName: string,
    note?: string | null,
    extracurricular?:  {
      __typename: "Extracurricular",
      id: string,
      musicSchool: boolean,
      artSchool: boolean,
      sportsSchool: boolean,
      createdAt: string,
      updatedAt: string,
      extracurricularStudentIDId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentExtracurricularId?: string | null,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
  deleteStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    dob: string,
    grade: string,
    address: string,
    motherName: string,
    fatherName: string,
    note?: string | null,
    extracurricular?:  {
      __typename: "Extracurricular",
      id: string,
      musicSchool: boolean,
      artSchool: boolean,
      sportsSchool: boolean,
      createdAt: string,
      updatedAt: string,
      extracurricularStudentIDId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentExtracurricularId?: string | null,
  } | null,
};

export type CreateExtracurricularMutationVariables = {
  input: CreateExtracurricularInput,
  condition?: ModelExtracurricularConditionInput | null,
};

export type CreateExtracurricularMutation = {
  createExtracurricular?:  {
    __typename: "Extracurricular",
    id: string,
    musicSchool: boolean,
    artSchool: boolean,
    sportsSchool: boolean,
    studentID:  {
      __typename: "Student",
      id: string,
      name: string,
      dob: string,
      grade: string,
      address: string,
      motherName: string,
      fatherName: string,
      note?: string | null,
      createdAt: string,
      updatedAt: string,
      studentExtracurricularId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    extracurricularStudentIDId: string,
  } | null,
};

export type UpdateExtracurricularMutationVariables = {
  input: UpdateExtracurricularInput,
  condition?: ModelExtracurricularConditionInput | null,
};

export type UpdateExtracurricularMutation = {
  updateExtracurricular?:  {
    __typename: "Extracurricular",
    id: string,
    musicSchool: boolean,
    artSchool: boolean,
    sportsSchool: boolean,
    studentID:  {
      __typename: "Student",
      id: string,
      name: string,
      dob: string,
      grade: string,
      address: string,
      motherName: string,
      fatherName: string,
      note?: string | null,
      createdAt: string,
      updatedAt: string,
      studentExtracurricularId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    extracurricularStudentIDId: string,
  } | null,
};

export type DeleteExtracurricularMutationVariables = {
  input: DeleteExtracurricularInput,
  condition?: ModelExtracurricularConditionInput | null,
};

export type DeleteExtracurricularMutation = {
  deleteExtracurricular?:  {
    __typename: "Extracurricular",
    id: string,
    musicSchool: boolean,
    artSchool: boolean,
    sportsSchool: boolean,
    studentID:  {
      __typename: "Student",
      id: string,
      name: string,
      dob: string,
      grade: string,
      address: string,
      motherName: string,
      fatherName: string,
      note?: string | null,
      createdAt: string,
      updatedAt: string,
      studentExtracurricularId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    extracurricularStudentIDId: string,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    dob: string,
    grade: string,
    address: string,
    motherName: string,
    fatherName: string,
    note?: string | null,
    extracurricular?:  {
      __typename: "Extracurricular",
      id: string,
      musicSchool: boolean,
      artSchool: boolean,
      sportsSchool: boolean,
      createdAt: string,
      updatedAt: string,
      extracurricularStudentIDId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentExtracurricularId?: string | null,
  } | null,
};

export type ListStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentsQuery = {
  listStudents?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      name: string,
      dob: string,
      grade: string,
      address: string,
      motherName: string,
      fatherName: string,
      note?: string | null,
      createdAt: string,
      updatedAt: string,
      studentExtracurricularId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetExtracurricularQueryVariables = {
  id: string,
};

export type GetExtracurricularQuery = {
  getExtracurricular?:  {
    __typename: "Extracurricular",
    id: string,
    musicSchool: boolean,
    artSchool: boolean,
    sportsSchool: boolean,
    studentID:  {
      __typename: "Student",
      id: string,
      name: string,
      dob: string,
      grade: string,
      address: string,
      motherName: string,
      fatherName: string,
      note?: string | null,
      createdAt: string,
      updatedAt: string,
      studentExtracurricularId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    extracurricularStudentIDId: string,
  } | null,
};

export type ListExtracurricularsQueryVariables = {
  filter?: ModelExtracurricularFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExtracurricularsQuery = {
  listExtracurriculars?:  {
    __typename: "ModelExtracurricularConnection",
    items:  Array< {
      __typename: "Extracurricular",
      id: string,
      musicSchool: boolean,
      artSchool: boolean,
      sportsSchool: boolean,
      createdAt: string,
      updatedAt: string,
      extracurricularStudentIDId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    dob: string,
    grade: string,
    address: string,
    motherName: string,
    fatherName: string,
    note?: string | null,
    extracurricular?:  {
      __typename: "Extracurricular",
      id: string,
      musicSchool: boolean,
      artSchool: boolean,
      sportsSchool: boolean,
      createdAt: string,
      updatedAt: string,
      extracurricularStudentIDId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentExtracurricularId?: string | null,
  } | null,
};

export type OnUpdateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    dob: string,
    grade: string,
    address: string,
    motherName: string,
    fatherName: string,
    note?: string | null,
    extracurricular?:  {
      __typename: "Extracurricular",
      id: string,
      musicSchool: boolean,
      artSchool: boolean,
      sportsSchool: boolean,
      createdAt: string,
      updatedAt: string,
      extracurricularStudentIDId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentExtracurricularId?: string | null,
  } | null,
};

export type OnDeleteStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    dob: string,
    grade: string,
    address: string,
    motherName: string,
    fatherName: string,
    note?: string | null,
    extracurricular?:  {
      __typename: "Extracurricular",
      id: string,
      musicSchool: boolean,
      artSchool: boolean,
      sportsSchool: boolean,
      createdAt: string,
      updatedAt: string,
      extracurricularStudentIDId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentExtracurricularId?: string | null,
  } | null,
};

export type OnCreateExtracurricularSubscriptionVariables = {
  filter?: ModelSubscriptionExtracurricularFilterInput | null,
};

export type OnCreateExtracurricularSubscription = {
  onCreateExtracurricular?:  {
    __typename: "Extracurricular",
    id: string,
    musicSchool: boolean,
    artSchool: boolean,
    sportsSchool: boolean,
    studentID:  {
      __typename: "Student",
      id: string,
      name: string,
      dob: string,
      grade: string,
      address: string,
      motherName: string,
      fatherName: string,
      note?: string | null,
      createdAt: string,
      updatedAt: string,
      studentExtracurricularId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    extracurricularStudentIDId: string,
  } | null,
};

export type OnUpdateExtracurricularSubscriptionVariables = {
  filter?: ModelSubscriptionExtracurricularFilterInput | null,
};

export type OnUpdateExtracurricularSubscription = {
  onUpdateExtracurricular?:  {
    __typename: "Extracurricular",
    id: string,
    musicSchool: boolean,
    artSchool: boolean,
    sportsSchool: boolean,
    studentID:  {
      __typename: "Student",
      id: string,
      name: string,
      dob: string,
      grade: string,
      address: string,
      motherName: string,
      fatherName: string,
      note?: string | null,
      createdAt: string,
      updatedAt: string,
      studentExtracurricularId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    extracurricularStudentIDId: string,
  } | null,
};

export type OnDeleteExtracurricularSubscriptionVariables = {
  filter?: ModelSubscriptionExtracurricularFilterInput | null,
};

export type OnDeleteExtracurricularSubscription = {
  onDeleteExtracurricular?:  {
    __typename: "Extracurricular",
    id: string,
    musicSchool: boolean,
    artSchool: boolean,
    sportsSchool: boolean,
    studentID:  {
      __typename: "Student",
      id: string,
      name: string,
      dob: string,
      grade: string,
      address: string,
      motherName: string,
      fatherName: string,
      note?: string | null,
      createdAt: string,
      updatedAt: string,
      studentExtracurricularId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    extracurricularStudentIDId: string,
  } | null,
};
