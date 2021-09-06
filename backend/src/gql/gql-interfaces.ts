import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "schoolnotes.notes" */
  delete_schoolnotes_notes?: Maybe<Schoolnotes_Notes_Mutation_Response>;
  /** delete single row from the table: "schoolnotes.notes" */
  delete_schoolnotes_notes_by_pk?: Maybe<Schoolnotes_Notes>;
  /** delete data from the table: "schoolnotes.read_only_notes" */
  delete_schoolnotes_read_only_notes?: Maybe<Schoolnotes_Read_Only_Notes_Mutation_Response>;
  /** delete single row from the table: "schoolnotes.read_only_notes" */
  delete_schoolnotes_read_only_notes_by_pk?: Maybe<Schoolnotes_Read_Only_Notes>;
  /** delete data from the table: "schoolnotes.users" */
  delete_schoolnotes_users?: Maybe<Schoolnotes_Users_Mutation_Response>;
  /** delete single row from the table: "schoolnotes.users" */
  delete_schoolnotes_users_by_pk?: Maybe<Schoolnotes_Users>;
  /** delete data from the table: "server_functions.apps" */
  delete_server_functions_apps?: Maybe<Server_Functions_Apps_Mutation_Response>;
  /** delete single row from the table: "server_functions.apps" */
  delete_server_functions_apps_by_pk?: Maybe<Server_Functions_Apps>;
  /** insert data into the table: "schoolnotes.notes" */
  insert_schoolnotes_notes?: Maybe<Schoolnotes_Notes_Mutation_Response>;
  /** insert a single row into the table: "schoolnotes.notes" */
  insert_schoolnotes_notes_one?: Maybe<Schoolnotes_Notes>;
  /** insert data into the table: "schoolnotes.read_only_notes" */
  insert_schoolnotes_read_only_notes?: Maybe<Schoolnotes_Read_Only_Notes_Mutation_Response>;
  /** insert a single row into the table: "schoolnotes.read_only_notes" */
  insert_schoolnotes_read_only_notes_one?: Maybe<Schoolnotes_Read_Only_Notes>;
  /** insert data into the table: "schoolnotes.users" */
  insert_schoolnotes_users?: Maybe<Schoolnotes_Users_Mutation_Response>;
  /** insert a single row into the table: "schoolnotes.users" */
  insert_schoolnotes_users_one?: Maybe<Schoolnotes_Users>;
  /** insert data into the table: "server_functions.apps" */
  insert_server_functions_apps?: Maybe<Server_Functions_Apps_Mutation_Response>;
  /** insert a single row into the table: "server_functions.apps" */
  insert_server_functions_apps_one?: Maybe<Server_Functions_Apps>;
  /** update data of the table: "schoolnotes.notes" */
  update_schoolnotes_notes?: Maybe<Schoolnotes_Notes_Mutation_Response>;
  /** update single row of the table: "schoolnotes.notes" */
  update_schoolnotes_notes_by_pk?: Maybe<Schoolnotes_Notes>;
  /** update data of the table: "schoolnotes.read_only_notes" */
  update_schoolnotes_read_only_notes?: Maybe<Schoolnotes_Read_Only_Notes_Mutation_Response>;
  /** update single row of the table: "schoolnotes.read_only_notes" */
  update_schoolnotes_read_only_notes_by_pk?: Maybe<Schoolnotes_Read_Only_Notes>;
  /** update data of the table: "schoolnotes.users" */
  update_schoolnotes_users?: Maybe<Schoolnotes_Users_Mutation_Response>;
  /** update single row of the table: "schoolnotes.users" */
  update_schoolnotes_users_by_pk?: Maybe<Schoolnotes_Users>;
  /** update data of the table: "server_functions.apps" */
  update_server_functions_apps?: Maybe<Server_Functions_Apps_Mutation_Response>;
  /** update single row of the table: "server_functions.apps" */
  update_server_functions_apps_by_pk?: Maybe<Server_Functions_Apps>;
};


/** mutation root */
export type Mutation_RootDelete_Schoolnotes_NotesArgs = {
  where: Schoolnotes_Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Schoolnotes_Notes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Schoolnotes_Read_Only_NotesArgs = {
  where: Schoolnotes_Read_Only_Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Schoolnotes_Read_Only_Notes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Schoolnotes_UsersArgs = {
  where: Schoolnotes_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Schoolnotes_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Server_Functions_AppsArgs = {
  where: Server_Functions_Apps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Server_Functions_Apps_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Schoolnotes_NotesArgs = {
  objects: Array<Schoolnotes_Notes_Insert_Input>;
  on_conflict?: Maybe<Schoolnotes_Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Schoolnotes_Notes_OneArgs = {
  object: Schoolnotes_Notes_Insert_Input;
  on_conflict?: Maybe<Schoolnotes_Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Schoolnotes_Read_Only_NotesArgs = {
  objects: Array<Schoolnotes_Read_Only_Notes_Insert_Input>;
  on_conflict?: Maybe<Schoolnotes_Read_Only_Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Schoolnotes_Read_Only_Notes_OneArgs = {
  object: Schoolnotes_Read_Only_Notes_Insert_Input;
  on_conflict?: Maybe<Schoolnotes_Read_Only_Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Schoolnotes_UsersArgs = {
  objects: Array<Schoolnotes_Users_Insert_Input>;
  on_conflict?: Maybe<Schoolnotes_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Schoolnotes_Users_OneArgs = {
  object: Schoolnotes_Users_Insert_Input;
  on_conflict?: Maybe<Schoolnotes_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Server_Functions_AppsArgs = {
  objects: Array<Server_Functions_Apps_Insert_Input>;
  on_conflict?: Maybe<Server_Functions_Apps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Server_Functions_Apps_OneArgs = {
  object: Server_Functions_Apps_Insert_Input;
  on_conflict?: Maybe<Server_Functions_Apps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Schoolnotes_NotesArgs = {
  _set?: Maybe<Schoolnotes_Notes_Set_Input>;
  where: Schoolnotes_Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Schoolnotes_Notes_By_PkArgs = {
  _set?: Maybe<Schoolnotes_Notes_Set_Input>;
  pk_columns: Schoolnotes_Notes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Schoolnotes_Read_Only_NotesArgs = {
  _set?: Maybe<Schoolnotes_Read_Only_Notes_Set_Input>;
  where: Schoolnotes_Read_Only_Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Schoolnotes_Read_Only_Notes_By_PkArgs = {
  _set?: Maybe<Schoolnotes_Read_Only_Notes_Set_Input>;
  pk_columns: Schoolnotes_Read_Only_Notes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Schoolnotes_UsersArgs = {
  _set?: Maybe<Schoolnotes_Users_Set_Input>;
  where: Schoolnotes_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Schoolnotes_Users_By_PkArgs = {
  _set?: Maybe<Schoolnotes_Users_Set_Input>;
  pk_columns: Schoolnotes_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Server_Functions_AppsArgs = {
  _append?: Maybe<Server_Functions_Apps_Append_Input>;
  _delete_at_path?: Maybe<Server_Functions_Apps_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Server_Functions_Apps_Delete_Elem_Input>;
  _delete_key?: Maybe<Server_Functions_Apps_Delete_Key_Input>;
  _inc?: Maybe<Server_Functions_Apps_Inc_Input>;
  _prepend?: Maybe<Server_Functions_Apps_Prepend_Input>;
  _set?: Maybe<Server_Functions_Apps_Set_Input>;
  where: Server_Functions_Apps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Server_Functions_Apps_By_PkArgs = {
  _append?: Maybe<Server_Functions_Apps_Append_Input>;
  _delete_at_path?: Maybe<Server_Functions_Apps_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Server_Functions_Apps_Delete_Elem_Input>;
  _delete_key?: Maybe<Server_Functions_Apps_Delete_Key_Input>;
  _inc?: Maybe<Server_Functions_Apps_Inc_Input>;
  _prepend?: Maybe<Server_Functions_Apps_Prepend_Input>;
  _set?: Maybe<Server_Functions_Apps_Set_Input>;
  pk_columns: Server_Functions_Apps_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "schoolnotes.notes" */
  schoolnotes_notes: Array<Schoolnotes_Notes>;
  /** fetch data from the table: "schoolnotes.notes" using primary key columns */
  schoolnotes_notes_by_pk?: Maybe<Schoolnotes_Notes>;
  /** fetch data from the table: "schoolnotes.read_only_notes" */
  schoolnotes_read_only_notes: Array<Schoolnotes_Read_Only_Notes>;
  /** fetch data from the table: "schoolnotes.read_only_notes" using primary key columns */
  schoolnotes_read_only_notes_by_pk?: Maybe<Schoolnotes_Read_Only_Notes>;
  /** fetch data from the table: "schoolnotes.users" */
  schoolnotes_users: Array<Schoolnotes_Users>;
  /** fetch data from the table: "schoolnotes.users" using primary key columns */
  schoolnotes_users_by_pk?: Maybe<Schoolnotes_Users>;
  /** fetch data from the table: "server_functions.apps" */
  server_functions_apps: Array<Server_Functions_Apps>;
  /** fetch data from the table: "server_functions.apps" using primary key columns */
  server_functions_apps_by_pk?: Maybe<Server_Functions_Apps>;
};


export type Query_RootSchoolnotes_NotesArgs = {
  distinct_on?: Maybe<Array<Schoolnotes_Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Schoolnotes_Notes_Order_By>>;
  where?: Maybe<Schoolnotes_Notes_Bool_Exp>;
};


export type Query_RootSchoolnotes_Notes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSchoolnotes_Read_Only_NotesArgs = {
  distinct_on?: Maybe<Array<Schoolnotes_Read_Only_Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Schoolnotes_Read_Only_Notes_Order_By>>;
  where?: Maybe<Schoolnotes_Read_Only_Notes_Bool_Exp>;
};


export type Query_RootSchoolnotes_Read_Only_Notes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSchoolnotes_UsersArgs = {
  distinct_on?: Maybe<Array<Schoolnotes_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Schoolnotes_Users_Order_By>>;
  where?: Maybe<Schoolnotes_Users_Bool_Exp>;
};


export type Query_RootSchoolnotes_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootServer_Functions_AppsArgs = {
  distinct_on?: Maybe<Array<Server_Functions_Apps_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Server_Functions_Apps_Order_By>>;
  where?: Maybe<Server_Functions_Apps_Bool_Exp>;
};


export type Query_RootServer_Functions_Apps_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "schoolnotes.notes" */
export type Schoolnotes_Notes = {
  __typename?: 'schoolnotes_notes';
  content: Scalars['String'];
  date: Scalars['timestamptz'];
  done: Scalars['Boolean'];
  id: Scalars['uuid'];
  important: Scalars['Boolean'];
  last_modified: Scalars['timestamp'];
  owner: Scalars['uuid'];
  public: Scalars['Boolean'];
  /** An array relationship */
  read_only_notes: Array<Schoolnotes_Read_Only_Notes>;
  subject: Scalars['String'];
  title: Scalars['String'];
  /** An object relationship */
  user: Schoolnotes_Users;
};


/** columns and relationships of "schoolnotes.notes" */
export type Schoolnotes_NotesRead_Only_NotesArgs = {
  distinct_on?: Maybe<Array<Schoolnotes_Read_Only_Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Schoolnotes_Read_Only_Notes_Order_By>>;
  where?: Maybe<Schoolnotes_Read_Only_Notes_Bool_Exp>;
};

/** order by aggregate values of table "schoolnotes.notes" */
export type Schoolnotes_Notes_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Schoolnotes_Notes_Max_Order_By>;
  min?: Maybe<Schoolnotes_Notes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "schoolnotes.notes" */
export type Schoolnotes_Notes_Arr_Rel_Insert_Input = {
  data: Array<Schoolnotes_Notes_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Schoolnotes_Notes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "schoolnotes.notes". All fields are combined with a logical 'AND'. */
export type Schoolnotes_Notes_Bool_Exp = {
  _and?: Maybe<Array<Schoolnotes_Notes_Bool_Exp>>;
  _not?: Maybe<Schoolnotes_Notes_Bool_Exp>;
  _or?: Maybe<Array<Schoolnotes_Notes_Bool_Exp>>;
  content?: Maybe<String_Comparison_Exp>;
  date?: Maybe<Timestamptz_Comparison_Exp>;
  done?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  important?: Maybe<Boolean_Comparison_Exp>;
  last_modified?: Maybe<Timestamp_Comparison_Exp>;
  owner?: Maybe<Uuid_Comparison_Exp>;
  public?: Maybe<Boolean_Comparison_Exp>;
  read_only_notes?: Maybe<Schoolnotes_Read_Only_Notes_Bool_Exp>;
  subject?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Schoolnotes_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "schoolnotes.notes" */
export enum Schoolnotes_Notes_Constraint {
  /** unique or primary key constraint */
  NotesIdKey = 'notes_id_key',
  /** unique or primary key constraint */
  NotesPkey = 'notes_pkey'
}

/** input type for inserting data into table "schoolnotes.notes" */
export type Schoolnotes_Notes_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['timestamptz']>;
  done?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  important?: Maybe<Scalars['Boolean']>;
  last_modified?: Maybe<Scalars['timestamp']>;
  owner?: Maybe<Scalars['uuid']>;
  public?: Maybe<Scalars['Boolean']>;
  read_only_notes?: Maybe<Schoolnotes_Read_Only_Notes_Arr_Rel_Insert_Input>;
  subject?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<Schoolnotes_Users_Obj_Rel_Insert_Input>;
};

/** order by max() on columns of table "schoolnotes.notes" */
export type Schoolnotes_Notes_Max_Order_By = {
  content?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_modified?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  subject?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** order by min() on columns of table "schoolnotes.notes" */
export type Schoolnotes_Notes_Min_Order_By = {
  content?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_modified?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  subject?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "schoolnotes.notes" */
export type Schoolnotes_Notes_Mutation_Response = {
  __typename?: 'schoolnotes_notes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Schoolnotes_Notes>;
};

/** input type for inserting object relation for remote table "schoolnotes.notes" */
export type Schoolnotes_Notes_Obj_Rel_Insert_Input = {
  data: Schoolnotes_Notes_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Schoolnotes_Notes_On_Conflict>;
};

/** on conflict condition type for table "schoolnotes.notes" */
export type Schoolnotes_Notes_On_Conflict = {
  constraint: Schoolnotes_Notes_Constraint;
  update_columns?: Array<Schoolnotes_Notes_Update_Column>;
  where?: Maybe<Schoolnotes_Notes_Bool_Exp>;
};

/** Ordering options when selecting data from "schoolnotes.notes". */
export type Schoolnotes_Notes_Order_By = {
  content?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  done?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  important?: Maybe<Order_By>;
  last_modified?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  public?: Maybe<Order_By>;
  read_only_notes_aggregate?: Maybe<Schoolnotes_Read_Only_Notes_Aggregate_Order_By>;
  subject?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  user?: Maybe<Schoolnotes_Users_Order_By>;
};

/** primary key columns input for table: schoolnotes_notes */
export type Schoolnotes_Notes_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "schoolnotes.notes" */
export enum Schoolnotes_Notes_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Date = 'date',
  /** column name */
  Done = 'done',
  /** column name */
  Id = 'id',
  /** column name */
  Important = 'important',
  /** column name */
  LastModified = 'last_modified',
  /** column name */
  Owner = 'owner',
  /** column name */
  Public = 'public',
  /** column name */
  Subject = 'subject',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "schoolnotes.notes" */
export type Schoolnotes_Notes_Set_Input = {
  content?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['timestamptz']>;
  done?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  important?: Maybe<Scalars['Boolean']>;
  last_modified?: Maybe<Scalars['timestamp']>;
  owner?: Maybe<Scalars['uuid']>;
  public?: Maybe<Scalars['Boolean']>;
  subject?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** update columns of table "schoolnotes.notes" */
export enum Schoolnotes_Notes_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Date = 'date',
  /** column name */
  Done = 'done',
  /** column name */
  Id = 'id',
  /** column name */
  Important = 'important',
  /** column name */
  LastModified = 'last_modified',
  /** column name */
  Owner = 'owner',
  /** column name */
  Public = 'public',
  /** column name */
  Subject = 'subject',
  /** column name */
  Title = 'title'
}

/** columns and relationships of "schoolnotes.read_only_notes" */
export type Schoolnotes_Read_Only_Notes = {
  __typename?: 'schoolnotes_read_only_notes';
  id: Scalars['uuid'];
  /** An object relationship */
  note: Schoolnotes_Notes;
  note_id: Scalars['uuid'];
  /** An object relationship */
  user: Schoolnotes_Users;
  user_id: Scalars['uuid'];
};

/** order by aggregate values of table "schoolnotes.read_only_notes" */
export type Schoolnotes_Read_Only_Notes_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Schoolnotes_Read_Only_Notes_Max_Order_By>;
  min?: Maybe<Schoolnotes_Read_Only_Notes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "schoolnotes.read_only_notes" */
export type Schoolnotes_Read_Only_Notes_Arr_Rel_Insert_Input = {
  data: Array<Schoolnotes_Read_Only_Notes_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Schoolnotes_Read_Only_Notes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "schoolnotes.read_only_notes". All fields are combined with a logical 'AND'. */
export type Schoolnotes_Read_Only_Notes_Bool_Exp = {
  _and?: Maybe<Array<Schoolnotes_Read_Only_Notes_Bool_Exp>>;
  _not?: Maybe<Schoolnotes_Read_Only_Notes_Bool_Exp>;
  _or?: Maybe<Array<Schoolnotes_Read_Only_Notes_Bool_Exp>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  note?: Maybe<Schoolnotes_Notes_Bool_Exp>;
  note_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Schoolnotes_Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "schoolnotes.read_only_notes" */
export enum Schoolnotes_Read_Only_Notes_Constraint {
  /** unique or primary key constraint */
  ReadOnlyNotesPkey = 'read_only_notes_pkey'
}

/** input type for inserting data into table "schoolnotes.read_only_notes" */
export type Schoolnotes_Read_Only_Notes_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  note?: Maybe<Schoolnotes_Notes_Obj_Rel_Insert_Input>;
  note_id?: Maybe<Scalars['uuid']>;
  user?: Maybe<Schoolnotes_Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "schoolnotes.read_only_notes" */
export type Schoolnotes_Read_Only_Notes_Max_Order_By = {
  id?: Maybe<Order_By>;
  note_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "schoolnotes.read_only_notes" */
export type Schoolnotes_Read_Only_Notes_Min_Order_By = {
  id?: Maybe<Order_By>;
  note_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "schoolnotes.read_only_notes" */
export type Schoolnotes_Read_Only_Notes_Mutation_Response = {
  __typename?: 'schoolnotes_read_only_notes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Schoolnotes_Read_Only_Notes>;
};

/** on conflict condition type for table "schoolnotes.read_only_notes" */
export type Schoolnotes_Read_Only_Notes_On_Conflict = {
  constraint: Schoolnotes_Read_Only_Notes_Constraint;
  update_columns?: Array<Schoolnotes_Read_Only_Notes_Update_Column>;
  where?: Maybe<Schoolnotes_Read_Only_Notes_Bool_Exp>;
};

/** Ordering options when selecting data from "schoolnotes.read_only_notes". */
export type Schoolnotes_Read_Only_Notes_Order_By = {
  id?: Maybe<Order_By>;
  note?: Maybe<Schoolnotes_Notes_Order_By>;
  note_id?: Maybe<Order_By>;
  user?: Maybe<Schoolnotes_Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: schoolnotes_read_only_notes */
export type Schoolnotes_Read_Only_Notes_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "schoolnotes.read_only_notes" */
export enum Schoolnotes_Read_Only_Notes_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NoteId = 'note_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "schoolnotes.read_only_notes" */
export type Schoolnotes_Read_Only_Notes_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  note_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "schoolnotes.read_only_notes" */
export enum Schoolnotes_Read_Only_Notes_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NoteId = 'note_id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "schoolnotes.users" */
export type Schoolnotes_Users = {
  __typename?: 'schoolnotes_users';
  email: Scalars['String'];
  id: Scalars['uuid'];
  /** An array relationship */
  notes: Array<Schoolnotes_Notes>;
  password: Scalars['String'];
  /** An array relationship */
  read_only_notes: Array<Schoolnotes_Read_Only_Notes>;
  registered_at: Scalars['timestamp'];
  username: Scalars['String'];
};


/** columns and relationships of "schoolnotes.users" */
export type Schoolnotes_UsersNotesArgs = {
  distinct_on?: Maybe<Array<Schoolnotes_Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Schoolnotes_Notes_Order_By>>;
  where?: Maybe<Schoolnotes_Notes_Bool_Exp>;
};


/** columns and relationships of "schoolnotes.users" */
export type Schoolnotes_UsersRead_Only_NotesArgs = {
  distinct_on?: Maybe<Array<Schoolnotes_Read_Only_Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Schoolnotes_Read_Only_Notes_Order_By>>;
  where?: Maybe<Schoolnotes_Read_Only_Notes_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "schoolnotes.users". All fields are combined with a logical 'AND'. */
export type Schoolnotes_Users_Bool_Exp = {
  _and?: Maybe<Array<Schoolnotes_Users_Bool_Exp>>;
  _not?: Maybe<Schoolnotes_Users_Bool_Exp>;
  _or?: Maybe<Array<Schoolnotes_Users_Bool_Exp>>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  notes?: Maybe<Schoolnotes_Notes_Bool_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  read_only_notes?: Maybe<Schoolnotes_Read_Only_Notes_Bool_Exp>;
  registered_at?: Maybe<Timestamp_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "schoolnotes.users" */
export enum Schoolnotes_Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersIdKey = 'users_id_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint */
  UsersUsernameKey = 'users_username_key'
}

/** input type for inserting data into table "schoolnotes.users" */
export type Schoolnotes_Users_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  notes?: Maybe<Schoolnotes_Notes_Arr_Rel_Insert_Input>;
  password?: Maybe<Scalars['String']>;
  read_only_notes?: Maybe<Schoolnotes_Read_Only_Notes_Arr_Rel_Insert_Input>;
  registered_at?: Maybe<Scalars['timestamp']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "schoolnotes.users" */
export type Schoolnotes_Users_Mutation_Response = {
  __typename?: 'schoolnotes_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Schoolnotes_Users>;
};

/** input type for inserting object relation for remote table "schoolnotes.users" */
export type Schoolnotes_Users_Obj_Rel_Insert_Input = {
  data: Schoolnotes_Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Schoolnotes_Users_On_Conflict>;
};

/** on conflict condition type for table "schoolnotes.users" */
export type Schoolnotes_Users_On_Conflict = {
  constraint: Schoolnotes_Users_Constraint;
  update_columns?: Array<Schoolnotes_Users_Update_Column>;
  where?: Maybe<Schoolnotes_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "schoolnotes.users". */
export type Schoolnotes_Users_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  notes_aggregate?: Maybe<Schoolnotes_Notes_Aggregate_Order_By>;
  password?: Maybe<Order_By>;
  read_only_notes_aggregate?: Maybe<Schoolnotes_Read_Only_Notes_Aggregate_Order_By>;
  registered_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: schoolnotes_users */
export type Schoolnotes_Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "schoolnotes.users" */
export enum Schoolnotes_Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  RegisteredAt = 'registered_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "schoolnotes.users" */
export type Schoolnotes_Users_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  registered_at?: Maybe<Scalars['timestamp']>;
  username?: Maybe<Scalars['String']>;
};

/** update columns of table "schoolnotes.users" */
export enum Schoolnotes_Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  RegisteredAt = 'registered_at',
  /** column name */
  Username = 'username'
}

/** columns and relationships of "server_functions.apps" */
export type Server_Functions_Apps = {
  __typename?: 'server_functions_apps';
  active: Scalars['Boolean'];
  definition: Scalars['String'];
  docker_id?: Maybe<Scalars['String']>;
  env_vars: Scalars['jsonb'];
  id: Scalars['Int'];
  name: Scalars['String'];
  path?: Maybe<Scalars['String']>;
  port: Scalars['Int'];
};


/** columns and relationships of "server_functions.apps" */
export type Server_Functions_AppsEnv_VarsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Server_Functions_Apps_Append_Input = {
  env_vars?: Maybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "server_functions.apps". All fields are combined with a logical 'AND'. */
export type Server_Functions_Apps_Bool_Exp = {
  _and?: Maybe<Array<Server_Functions_Apps_Bool_Exp>>;
  _not?: Maybe<Server_Functions_Apps_Bool_Exp>;
  _or?: Maybe<Array<Server_Functions_Apps_Bool_Exp>>;
  active?: Maybe<Boolean_Comparison_Exp>;
  definition?: Maybe<String_Comparison_Exp>;
  docker_id?: Maybe<String_Comparison_Exp>;
  env_vars?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  path?: Maybe<String_Comparison_Exp>;
  port?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "server_functions.apps" */
export enum Server_Functions_Apps_Constraint {
  /** unique or primary key constraint */
  FunctionNameKey = 'function_name_key',
  /** unique or primary key constraint */
  FunctionPkey = 'function_pkey',
  /** unique or primary key constraint */
  FunctionPortKey = 'function_port_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Server_Functions_Apps_Delete_At_Path_Input = {
  env_vars?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Server_Functions_Apps_Delete_Elem_Input = {
  env_vars?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Server_Functions_Apps_Delete_Key_Input = {
  env_vars?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "server_functions.apps" */
export type Server_Functions_Apps_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  port?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "server_functions.apps" */
export type Server_Functions_Apps_Insert_Input = {
  active?: Maybe<Scalars['Boolean']>;
  definition?: Maybe<Scalars['String']>;
  docker_id?: Maybe<Scalars['String']>;
  env_vars?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "server_functions.apps" */
export type Server_Functions_Apps_Mutation_Response = {
  __typename?: 'server_functions_apps_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Server_Functions_Apps>;
};

/** on conflict condition type for table "server_functions.apps" */
export type Server_Functions_Apps_On_Conflict = {
  constraint: Server_Functions_Apps_Constraint;
  update_columns?: Array<Server_Functions_Apps_Update_Column>;
  where?: Maybe<Server_Functions_Apps_Bool_Exp>;
};

/** Ordering options when selecting data from "server_functions.apps". */
export type Server_Functions_Apps_Order_By = {
  active?: Maybe<Order_By>;
  definition?: Maybe<Order_By>;
  docker_id?: Maybe<Order_By>;
  env_vars?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
  port?: Maybe<Order_By>;
};

/** primary key columns input for table: server_functions_apps */
export type Server_Functions_Apps_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Server_Functions_Apps_Prepend_Input = {
  env_vars?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "server_functions.apps" */
export enum Server_Functions_Apps_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Definition = 'definition',
  /** column name */
  DockerId = 'docker_id',
  /** column name */
  EnvVars = 'env_vars',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Path = 'path',
  /** column name */
  Port = 'port'
}

/** input type for updating data in table "server_functions.apps" */
export type Server_Functions_Apps_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  definition?: Maybe<Scalars['String']>;
  docker_id?: Maybe<Scalars['String']>;
  env_vars?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['Int']>;
};

/** update columns of table "server_functions.apps" */
export enum Server_Functions_Apps_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Definition = 'definition',
  /** column name */
  DockerId = 'docker_id',
  /** column name */
  EnvVars = 'env_vars',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Path = 'path',
  /** column name */
  Port = 'port'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "schoolnotes.notes" */
  schoolnotes_notes: Array<Schoolnotes_Notes>;
  /** fetch data from the table: "schoolnotes.notes" using primary key columns */
  schoolnotes_notes_by_pk?: Maybe<Schoolnotes_Notes>;
  /** fetch data from the table: "schoolnotes.read_only_notes" */
  schoolnotes_read_only_notes: Array<Schoolnotes_Read_Only_Notes>;
  /** fetch data from the table: "schoolnotes.read_only_notes" using primary key columns */
  schoolnotes_read_only_notes_by_pk?: Maybe<Schoolnotes_Read_Only_Notes>;
  /** fetch data from the table: "schoolnotes.users" */
  schoolnotes_users: Array<Schoolnotes_Users>;
  /** fetch data from the table: "schoolnotes.users" using primary key columns */
  schoolnotes_users_by_pk?: Maybe<Schoolnotes_Users>;
  /** fetch data from the table: "server_functions.apps" */
  server_functions_apps: Array<Server_Functions_Apps>;
  /** fetch data from the table: "server_functions.apps" using primary key columns */
  server_functions_apps_by_pk?: Maybe<Server_Functions_Apps>;
};


export type Subscription_RootSchoolnotes_NotesArgs = {
  distinct_on?: Maybe<Array<Schoolnotes_Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Schoolnotes_Notes_Order_By>>;
  where?: Maybe<Schoolnotes_Notes_Bool_Exp>;
};


export type Subscription_RootSchoolnotes_Notes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSchoolnotes_Read_Only_NotesArgs = {
  distinct_on?: Maybe<Array<Schoolnotes_Read_Only_Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Schoolnotes_Read_Only_Notes_Order_By>>;
  where?: Maybe<Schoolnotes_Read_Only_Notes_Bool_Exp>;
};


export type Subscription_RootSchoolnotes_Read_Only_Notes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSchoolnotes_UsersArgs = {
  distinct_on?: Maybe<Array<Schoolnotes_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Schoolnotes_Users_Order_By>>;
  where?: Maybe<Schoolnotes_Users_Bool_Exp>;
};


export type Subscription_RootSchoolnotes_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootServer_Functions_AppsArgs = {
  distinct_on?: Maybe<Array<Server_Functions_Apps_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Server_Functions_Apps_Order_By>>;
  where?: Maybe<Server_Functions_Apps_Bool_Exp>;
};


export type Subscription_RootServer_Functions_Apps_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetNotesQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetNotesQuery = { __typename?: 'query_root', schoolnotes_notes: Array<{ __typename?: 'schoolnotes_notes', id: any, title: string, important: boolean, subject: string, date: any, content: string, done: boolean, last_modified: any, public: boolean }>, schoolnotes_read_only_notes: Array<{ __typename?: 'schoolnotes_read_only_notes', note: { __typename?: 'schoolnotes_notes', id: any, title: string, important: boolean, subject: string, date: any, content: string, done: boolean, last_modified: any } }> };

export type GetNoteQueryVariables = Exact<{
  id: Scalars['uuid'];
  user_id: Scalars['uuid'];
}>;


export type GetNoteQuery = { __typename?: 'query_root', schoolnotes_notes: Array<{ __typename?: 'schoolnotes_notes', id: any, title: string, important: boolean, subject: string, date: any, content: string, done: boolean, last_modified: any, public: boolean }>, schoolnotes_read_only_notes: Array<{ __typename?: 'schoolnotes_read_only_notes', note: { __typename?: 'schoolnotes_notes', id: any, title: string, important: boolean, subject: string, date: any, content: string, done: boolean, last_modified: any } }> };

export type GetOwnNotesQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetOwnNotesQuery = { __typename?: 'query_root', schoolnotes_notes: Array<{ __typename?: 'schoolnotes_notes', id: any, title: string, important: boolean, subject: string, date: any, content: string, done: boolean, last_modified: any, public: boolean }> };

export type GetReadOnlyNotesQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetReadOnlyNotesQuery = { __typename?: 'query_root', schoolnotes_read_only_notes: Array<{ __typename?: 'schoolnotes_read_only_notes', note: { __typename?: 'schoolnotes_notes', id: any, title: string, important: boolean, subject: string, date: any, content: string, done: boolean, last_modified: any } }> };

export type GetReadOnlyNoteUserQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetReadOnlyNoteUserQuery = { __typename?: 'query_root', schoolnotes_read_only_notes: Array<{ __typename?: 'schoolnotes_read_only_notes', user_id: any }> };

export type GetLastModifiedQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetLastModifiedQuery = { __typename?: 'query_root', schoolnotes_notes: Array<{ __typename?: 'schoolnotes_notes', last_modified: any }>, schoolnotes_read_only_notes: Array<{ __typename?: 'schoolnotes_read_only_notes', note: { __typename?: 'schoolnotes_notes', last_modified: any } }> };

export type GetPublicNotesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPublicNotesQuery = { __typename?: 'query_root', schoolnotes_notes: Array<{ __typename?: 'schoolnotes_notes', id: any, title: string, important: boolean, subject: string, date: any, content: string, done: boolean, last_modified: any, public: boolean }> };

export type GetPublicNoteQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetPublicNoteQuery = { __typename?: 'query_root', schoolnotes_notes: Array<{ __typename?: 'schoolnotes_notes', id: any, title: string, important: boolean, subject: string, date: any, content: string, done: boolean, last_modified: any, public: boolean }> };

export type CreateNoteMutationVariables = Exact<{
  title: Scalars['String'];
  important: Scalars['Boolean'];
  subject: Scalars['String'];
  date: Scalars['timestamptz'];
  content: Scalars['String'];
  done: Scalars['Boolean'];
  owner: Scalars['uuid'];
}>;


export type CreateNoteMutation = { __typename?: 'mutation_root', insert_schoolnotes_notes_one?: Maybe<{ __typename?: 'schoolnotes_notes', id: any }> };

export type StartShareNoteMutationVariables = Exact<{
  id: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type StartShareNoteMutation = { __typename?: 'mutation_root', update_schoolnotes_notes?: Maybe<{ __typename?: 'schoolnotes_notes_mutation_response', affected_rows: number }> };

export type StopShareNoteMutationVariables = Exact<{
  id: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type StopShareNoteMutation = { __typename?: 'mutation_root', update_schoolnotes_notes?: Maybe<{ __typename?: 'schoolnotes_notes_mutation_response', affected_rows: number }>, delete_schoolnotes_read_only_notes?: Maybe<{ __typename?: 'schoolnotes_read_only_notes_mutation_response', affected_rows: number }> };

export type AddSharedNoteMutationVariables = Exact<{
  id: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type AddSharedNoteMutation = { __typename?: 'mutation_root', insert_schoolnotes_read_only_notes_one?: Maybe<{ __typename?: 'schoolnotes_read_only_notes', id: any }> };

export type RemoveSharedNoteMutationVariables = Exact<{
  id: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type RemoveSharedNoteMutation = { __typename?: 'mutation_root', delete_schoolnotes_read_only_notes?: Maybe<{ __typename?: 'schoolnotes_read_only_notes_mutation_response', affected_rows: number }> };

export type UpdateNoteMutationVariables = Exact<{
  id: Scalars['uuid'];
  userId: Scalars['uuid'];
  set: Schoolnotes_Notes_Set_Input;
}>;


export type UpdateNoteMutation = { __typename?: 'mutation_root', update_schoolnotes_notes?: Maybe<{ __typename?: 'schoolnotes_notes_mutation_response', affected_rows: number }> };

export type DeleteNoteMutationVariables = Exact<{
  id: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type DeleteNoteMutation = { __typename?: 'mutation_root', delete_schoolnotes_notes?: Maybe<{ __typename?: 'schoolnotes_notes_mutation_response', affected_rows: number }>, delete_schoolnotes_read_only_notes?: Maybe<{ __typename?: 'schoolnotes_read_only_notes_mutation_response', affected_rows: number }> };

export type GetUserIdQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetUserIdQuery = { __typename?: 'query_root', schoolnotes_users: Array<{ __typename?: 'schoolnotes_users', id: any }> };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'mutation_root', insert_schoolnotes_users_one?: Maybe<{ __typename?: 'schoolnotes_users', id: any }> };

export type LoginQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type LoginQuery = { __typename?: 'query_root', schoolnotes_users: Array<{ __typename?: 'schoolnotes_users', id: any, password: string }> };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int_comparison_exp: Int_Comparison_Exp;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String_comparison_exp: String_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars['String']>;
  jsonb: ResolverTypeWrapper<Scalars['jsonb']>;
  jsonb_comparison_exp: Jsonb_Comparison_Exp;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  schoolnotes_notes: ResolverTypeWrapper<Schoolnotes_Notes>;
  schoolnotes_notes_aggregate_order_by: Schoolnotes_Notes_Aggregate_Order_By;
  schoolnotes_notes_arr_rel_insert_input: Schoolnotes_Notes_Arr_Rel_Insert_Input;
  schoolnotes_notes_bool_exp: Schoolnotes_Notes_Bool_Exp;
  schoolnotes_notes_constraint: Schoolnotes_Notes_Constraint;
  schoolnotes_notes_insert_input: Schoolnotes_Notes_Insert_Input;
  schoolnotes_notes_max_order_by: Schoolnotes_Notes_Max_Order_By;
  schoolnotes_notes_min_order_by: Schoolnotes_Notes_Min_Order_By;
  schoolnotes_notes_mutation_response: ResolverTypeWrapper<Schoolnotes_Notes_Mutation_Response>;
  schoolnotes_notes_obj_rel_insert_input: Schoolnotes_Notes_Obj_Rel_Insert_Input;
  schoolnotes_notes_on_conflict: Schoolnotes_Notes_On_Conflict;
  schoolnotes_notes_order_by: Schoolnotes_Notes_Order_By;
  schoolnotes_notes_pk_columns_input: Schoolnotes_Notes_Pk_Columns_Input;
  schoolnotes_notes_select_column: Schoolnotes_Notes_Select_Column;
  schoolnotes_notes_set_input: Schoolnotes_Notes_Set_Input;
  schoolnotes_notes_update_column: Schoolnotes_Notes_Update_Column;
  schoolnotes_read_only_notes: ResolverTypeWrapper<Schoolnotes_Read_Only_Notes>;
  schoolnotes_read_only_notes_aggregate_order_by: Schoolnotes_Read_Only_Notes_Aggregate_Order_By;
  schoolnotes_read_only_notes_arr_rel_insert_input: Schoolnotes_Read_Only_Notes_Arr_Rel_Insert_Input;
  schoolnotes_read_only_notes_bool_exp: Schoolnotes_Read_Only_Notes_Bool_Exp;
  schoolnotes_read_only_notes_constraint: Schoolnotes_Read_Only_Notes_Constraint;
  schoolnotes_read_only_notes_insert_input: Schoolnotes_Read_Only_Notes_Insert_Input;
  schoolnotes_read_only_notes_max_order_by: Schoolnotes_Read_Only_Notes_Max_Order_By;
  schoolnotes_read_only_notes_min_order_by: Schoolnotes_Read_Only_Notes_Min_Order_By;
  schoolnotes_read_only_notes_mutation_response: ResolverTypeWrapper<Schoolnotes_Read_Only_Notes_Mutation_Response>;
  schoolnotes_read_only_notes_on_conflict: Schoolnotes_Read_Only_Notes_On_Conflict;
  schoolnotes_read_only_notes_order_by: Schoolnotes_Read_Only_Notes_Order_By;
  schoolnotes_read_only_notes_pk_columns_input: Schoolnotes_Read_Only_Notes_Pk_Columns_Input;
  schoolnotes_read_only_notes_select_column: Schoolnotes_Read_Only_Notes_Select_Column;
  schoolnotes_read_only_notes_set_input: Schoolnotes_Read_Only_Notes_Set_Input;
  schoolnotes_read_only_notes_update_column: Schoolnotes_Read_Only_Notes_Update_Column;
  schoolnotes_users: ResolverTypeWrapper<Schoolnotes_Users>;
  schoolnotes_users_bool_exp: Schoolnotes_Users_Bool_Exp;
  schoolnotes_users_constraint: Schoolnotes_Users_Constraint;
  schoolnotes_users_insert_input: Schoolnotes_Users_Insert_Input;
  schoolnotes_users_mutation_response: ResolverTypeWrapper<Schoolnotes_Users_Mutation_Response>;
  schoolnotes_users_obj_rel_insert_input: Schoolnotes_Users_Obj_Rel_Insert_Input;
  schoolnotes_users_on_conflict: Schoolnotes_Users_On_Conflict;
  schoolnotes_users_order_by: Schoolnotes_Users_Order_By;
  schoolnotes_users_pk_columns_input: Schoolnotes_Users_Pk_Columns_Input;
  schoolnotes_users_select_column: Schoolnotes_Users_Select_Column;
  schoolnotes_users_set_input: Schoolnotes_Users_Set_Input;
  schoolnotes_users_update_column: Schoolnotes_Users_Update_Column;
  server_functions_apps: ResolverTypeWrapper<Server_Functions_Apps>;
  server_functions_apps_append_input: Server_Functions_Apps_Append_Input;
  server_functions_apps_bool_exp: Server_Functions_Apps_Bool_Exp;
  server_functions_apps_constraint: Server_Functions_Apps_Constraint;
  server_functions_apps_delete_at_path_input: Server_Functions_Apps_Delete_At_Path_Input;
  server_functions_apps_delete_elem_input: Server_Functions_Apps_Delete_Elem_Input;
  server_functions_apps_delete_key_input: Server_Functions_Apps_Delete_Key_Input;
  server_functions_apps_inc_input: Server_Functions_Apps_Inc_Input;
  server_functions_apps_insert_input: Server_Functions_Apps_Insert_Input;
  server_functions_apps_mutation_response: ResolverTypeWrapper<Server_Functions_Apps_Mutation_Response>;
  server_functions_apps_on_conflict: Server_Functions_Apps_On_Conflict;
  server_functions_apps_order_by: Server_Functions_Apps_Order_By;
  server_functions_apps_pk_columns_input: Server_Functions_Apps_Pk_Columns_Input;
  server_functions_apps_prepend_input: Server_Functions_Apps_Prepend_Input;
  server_functions_apps_select_column: Server_Functions_Apps_Select_Column;
  server_functions_apps_set_input: Server_Functions_Apps_Set_Input;
  server_functions_apps_update_column: Server_Functions_Apps_Update_Column;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamp: ResolverTypeWrapper<Scalars['timestamp']>;
  timestamp_comparison_exp: Timestamp_Comparison_Exp;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Boolean: Scalars['Boolean'];
  Int_comparison_exp: Int_Comparison_Exp;
  Int: Scalars['Int'];
  String_comparison_exp: String_Comparison_Exp;
  String: Scalars['String'];
  jsonb: Scalars['jsonb'];
  jsonb_comparison_exp: Jsonb_Comparison_Exp;
  mutation_root: {};
  query_root: {};
  schoolnotes_notes: Schoolnotes_Notes;
  schoolnotes_notes_aggregate_order_by: Schoolnotes_Notes_Aggregate_Order_By;
  schoolnotes_notes_arr_rel_insert_input: Schoolnotes_Notes_Arr_Rel_Insert_Input;
  schoolnotes_notes_bool_exp: Schoolnotes_Notes_Bool_Exp;
  schoolnotes_notes_insert_input: Schoolnotes_Notes_Insert_Input;
  schoolnotes_notes_max_order_by: Schoolnotes_Notes_Max_Order_By;
  schoolnotes_notes_min_order_by: Schoolnotes_Notes_Min_Order_By;
  schoolnotes_notes_mutation_response: Schoolnotes_Notes_Mutation_Response;
  schoolnotes_notes_obj_rel_insert_input: Schoolnotes_Notes_Obj_Rel_Insert_Input;
  schoolnotes_notes_on_conflict: Schoolnotes_Notes_On_Conflict;
  schoolnotes_notes_order_by: Schoolnotes_Notes_Order_By;
  schoolnotes_notes_pk_columns_input: Schoolnotes_Notes_Pk_Columns_Input;
  schoolnotes_notes_set_input: Schoolnotes_Notes_Set_Input;
  schoolnotes_read_only_notes: Schoolnotes_Read_Only_Notes;
  schoolnotes_read_only_notes_aggregate_order_by: Schoolnotes_Read_Only_Notes_Aggregate_Order_By;
  schoolnotes_read_only_notes_arr_rel_insert_input: Schoolnotes_Read_Only_Notes_Arr_Rel_Insert_Input;
  schoolnotes_read_only_notes_bool_exp: Schoolnotes_Read_Only_Notes_Bool_Exp;
  schoolnotes_read_only_notes_insert_input: Schoolnotes_Read_Only_Notes_Insert_Input;
  schoolnotes_read_only_notes_max_order_by: Schoolnotes_Read_Only_Notes_Max_Order_By;
  schoolnotes_read_only_notes_min_order_by: Schoolnotes_Read_Only_Notes_Min_Order_By;
  schoolnotes_read_only_notes_mutation_response: Schoolnotes_Read_Only_Notes_Mutation_Response;
  schoolnotes_read_only_notes_on_conflict: Schoolnotes_Read_Only_Notes_On_Conflict;
  schoolnotes_read_only_notes_order_by: Schoolnotes_Read_Only_Notes_Order_By;
  schoolnotes_read_only_notes_pk_columns_input: Schoolnotes_Read_Only_Notes_Pk_Columns_Input;
  schoolnotes_read_only_notes_set_input: Schoolnotes_Read_Only_Notes_Set_Input;
  schoolnotes_users: Schoolnotes_Users;
  schoolnotes_users_bool_exp: Schoolnotes_Users_Bool_Exp;
  schoolnotes_users_insert_input: Schoolnotes_Users_Insert_Input;
  schoolnotes_users_mutation_response: Schoolnotes_Users_Mutation_Response;
  schoolnotes_users_obj_rel_insert_input: Schoolnotes_Users_Obj_Rel_Insert_Input;
  schoolnotes_users_on_conflict: Schoolnotes_Users_On_Conflict;
  schoolnotes_users_order_by: Schoolnotes_Users_Order_By;
  schoolnotes_users_pk_columns_input: Schoolnotes_Users_Pk_Columns_Input;
  schoolnotes_users_set_input: Schoolnotes_Users_Set_Input;
  server_functions_apps: Server_Functions_Apps;
  server_functions_apps_append_input: Server_Functions_Apps_Append_Input;
  server_functions_apps_bool_exp: Server_Functions_Apps_Bool_Exp;
  server_functions_apps_delete_at_path_input: Server_Functions_Apps_Delete_At_Path_Input;
  server_functions_apps_delete_elem_input: Server_Functions_Apps_Delete_Elem_Input;
  server_functions_apps_delete_key_input: Server_Functions_Apps_Delete_Key_Input;
  server_functions_apps_inc_input: Server_Functions_Apps_Inc_Input;
  server_functions_apps_insert_input: Server_Functions_Apps_Insert_Input;
  server_functions_apps_mutation_response: Server_Functions_Apps_Mutation_Response;
  server_functions_apps_on_conflict: Server_Functions_Apps_On_Conflict;
  server_functions_apps_order_by: Server_Functions_Apps_Order_By;
  server_functions_apps_pk_columns_input: Server_Functions_Apps_Pk_Columns_Input;
  server_functions_apps_prepend_input: Server_Functions_Apps_Prepend_Input;
  server_functions_apps_set_input: Server_Functions_Apps_Set_Input;
  subscription_root: {};
  timestamp: Scalars['timestamp'];
  timestamp_comparison_exp: Timestamp_Comparison_Exp;
  timestamptz: Scalars['timestamptz'];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  uuid: Scalars['uuid'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

export type CachedDirectiveArgs = {   ttl?: Scalars['Int'];
  refresh?: Scalars['Boolean']; };

export type CachedDirectiveResolver<Result, Parent, ContextType = any, Args = CachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface JsonbScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['jsonb'], any> {
  name: 'jsonb';
}

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  delete_schoolnotes_notes?: Resolver<Maybe<ResolversTypes['schoolnotes_notes_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Schoolnotes_NotesArgs, 'where'>>;
  delete_schoolnotes_notes_by_pk?: Resolver<Maybe<ResolversTypes['schoolnotes_notes']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Schoolnotes_Notes_By_PkArgs, 'id'>>;
  delete_schoolnotes_read_only_notes?: Resolver<Maybe<ResolversTypes['schoolnotes_read_only_notes_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Schoolnotes_Read_Only_NotesArgs, 'where'>>;
  delete_schoolnotes_read_only_notes_by_pk?: Resolver<Maybe<ResolversTypes['schoolnotes_read_only_notes']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Schoolnotes_Read_Only_Notes_By_PkArgs, 'id'>>;
  delete_schoolnotes_users?: Resolver<Maybe<ResolversTypes['schoolnotes_users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Schoolnotes_UsersArgs, 'where'>>;
  delete_schoolnotes_users_by_pk?: Resolver<Maybe<ResolversTypes['schoolnotes_users']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Schoolnotes_Users_By_PkArgs, 'id'>>;
  delete_server_functions_apps?: Resolver<Maybe<ResolversTypes['server_functions_apps_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Server_Functions_AppsArgs, 'where'>>;
  delete_server_functions_apps_by_pk?: Resolver<Maybe<ResolversTypes['server_functions_apps']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Server_Functions_Apps_By_PkArgs, 'id'>>;
  insert_schoolnotes_notes?: Resolver<Maybe<ResolversTypes['schoolnotes_notes_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Schoolnotes_NotesArgs, 'objects'>>;
  insert_schoolnotes_notes_one?: Resolver<Maybe<ResolversTypes['schoolnotes_notes']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Schoolnotes_Notes_OneArgs, 'object'>>;
  insert_schoolnotes_read_only_notes?: Resolver<Maybe<ResolversTypes['schoolnotes_read_only_notes_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Schoolnotes_Read_Only_NotesArgs, 'objects'>>;
  insert_schoolnotes_read_only_notes_one?: Resolver<Maybe<ResolversTypes['schoolnotes_read_only_notes']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Schoolnotes_Read_Only_Notes_OneArgs, 'object'>>;
  insert_schoolnotes_users?: Resolver<Maybe<ResolversTypes['schoolnotes_users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Schoolnotes_UsersArgs, 'objects'>>;
  insert_schoolnotes_users_one?: Resolver<Maybe<ResolversTypes['schoolnotes_users']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Schoolnotes_Users_OneArgs, 'object'>>;
  insert_server_functions_apps?: Resolver<Maybe<ResolversTypes['server_functions_apps_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Server_Functions_AppsArgs, 'objects'>>;
  insert_server_functions_apps_one?: Resolver<Maybe<ResolversTypes['server_functions_apps']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Server_Functions_Apps_OneArgs, 'object'>>;
  update_schoolnotes_notes?: Resolver<Maybe<ResolversTypes['schoolnotes_notes_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Schoolnotes_NotesArgs, 'where'>>;
  update_schoolnotes_notes_by_pk?: Resolver<Maybe<ResolversTypes['schoolnotes_notes']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Schoolnotes_Notes_By_PkArgs, 'pk_columns'>>;
  update_schoolnotes_read_only_notes?: Resolver<Maybe<ResolversTypes['schoolnotes_read_only_notes_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Schoolnotes_Read_Only_NotesArgs, 'where'>>;
  update_schoolnotes_read_only_notes_by_pk?: Resolver<Maybe<ResolversTypes['schoolnotes_read_only_notes']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Schoolnotes_Read_Only_Notes_By_PkArgs, 'pk_columns'>>;
  update_schoolnotes_users?: Resolver<Maybe<ResolversTypes['schoolnotes_users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Schoolnotes_UsersArgs, 'where'>>;
  update_schoolnotes_users_by_pk?: Resolver<Maybe<ResolversTypes['schoolnotes_users']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Schoolnotes_Users_By_PkArgs, 'pk_columns'>>;
  update_server_functions_apps?: Resolver<Maybe<ResolversTypes['server_functions_apps_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Server_Functions_AppsArgs, 'where'>>;
  update_server_functions_apps_by_pk?: Resolver<Maybe<ResolversTypes['server_functions_apps']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Server_Functions_Apps_By_PkArgs, 'pk_columns'>>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  schoolnotes_notes?: Resolver<Array<ResolversTypes['schoolnotes_notes']>, ParentType, ContextType, RequireFields<Query_RootSchoolnotes_NotesArgs, never>>;
  schoolnotes_notes_by_pk?: Resolver<Maybe<ResolversTypes['schoolnotes_notes']>, ParentType, ContextType, RequireFields<Query_RootSchoolnotes_Notes_By_PkArgs, 'id'>>;
  schoolnotes_read_only_notes?: Resolver<Array<ResolversTypes['schoolnotes_read_only_notes']>, ParentType, ContextType, RequireFields<Query_RootSchoolnotes_Read_Only_NotesArgs, never>>;
  schoolnotes_read_only_notes_by_pk?: Resolver<Maybe<ResolversTypes['schoolnotes_read_only_notes']>, ParentType, ContextType, RequireFields<Query_RootSchoolnotes_Read_Only_Notes_By_PkArgs, 'id'>>;
  schoolnotes_users?: Resolver<Array<ResolversTypes['schoolnotes_users']>, ParentType, ContextType, RequireFields<Query_RootSchoolnotes_UsersArgs, never>>;
  schoolnotes_users_by_pk?: Resolver<Maybe<ResolversTypes['schoolnotes_users']>, ParentType, ContextType, RequireFields<Query_RootSchoolnotes_Users_By_PkArgs, 'id'>>;
  server_functions_apps?: Resolver<Array<ResolversTypes['server_functions_apps']>, ParentType, ContextType, RequireFields<Query_RootServer_Functions_AppsArgs, never>>;
  server_functions_apps_by_pk?: Resolver<Maybe<ResolversTypes['server_functions_apps']>, ParentType, ContextType, RequireFields<Query_RootServer_Functions_Apps_By_PkArgs, 'id'>>;
};

export type Schoolnotes_NotesResolvers<ContextType = any, ParentType extends ResolversParentTypes['schoolnotes_notes'] = ResolversParentTypes['schoolnotes_notes']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  done?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  important?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  last_modified?: Resolver<ResolversTypes['timestamp'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  public?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  read_only_notes?: Resolver<Array<ResolversTypes['schoolnotes_read_only_notes']>, ParentType, ContextType, RequireFields<Schoolnotes_NotesRead_Only_NotesArgs, never>>;
  subject?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['schoolnotes_users'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Schoolnotes_Notes_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['schoolnotes_notes_mutation_response'] = ResolversParentTypes['schoolnotes_notes_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['schoolnotes_notes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Schoolnotes_Read_Only_NotesResolvers<ContextType = any, ParentType extends ResolversParentTypes['schoolnotes_read_only_notes'] = ResolversParentTypes['schoolnotes_read_only_notes']> = {
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  note?: Resolver<ResolversTypes['schoolnotes_notes'], ParentType, ContextType>;
  note_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['schoolnotes_users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Schoolnotes_Read_Only_Notes_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['schoolnotes_read_only_notes_mutation_response'] = ResolversParentTypes['schoolnotes_read_only_notes_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['schoolnotes_read_only_notes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Schoolnotes_UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['schoolnotes_users'] = ResolversParentTypes['schoolnotes_users']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  notes?: Resolver<Array<ResolversTypes['schoolnotes_notes']>, ParentType, ContextType, RequireFields<Schoolnotes_UsersNotesArgs, never>>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  read_only_notes?: Resolver<Array<ResolversTypes['schoolnotes_read_only_notes']>, ParentType, ContextType, RequireFields<Schoolnotes_UsersRead_Only_NotesArgs, never>>;
  registered_at?: Resolver<ResolversTypes['timestamp'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Schoolnotes_Users_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['schoolnotes_users_mutation_response'] = ResolversParentTypes['schoolnotes_users_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['schoolnotes_users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Server_Functions_AppsResolvers<ContextType = any, ParentType extends ResolversParentTypes['server_functions_apps'] = ResolversParentTypes['server_functions_apps']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  definition?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  docker_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  env_vars?: Resolver<ResolversTypes['jsonb'], ParentType, ContextType, RequireFields<Server_Functions_AppsEnv_VarsArgs, never>>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  port?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Server_Functions_Apps_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['server_functions_apps_mutation_response'] = ResolversParentTypes['server_functions_apps_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['server_functions_apps']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  schoolnotes_notes?: SubscriptionResolver<Array<ResolversTypes['schoolnotes_notes']>, "schoolnotes_notes", ParentType, ContextType, RequireFields<Subscription_RootSchoolnotes_NotesArgs, never>>;
  schoolnotes_notes_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['schoolnotes_notes']>, "schoolnotes_notes_by_pk", ParentType, ContextType, RequireFields<Subscription_RootSchoolnotes_Notes_By_PkArgs, 'id'>>;
  schoolnotes_read_only_notes?: SubscriptionResolver<Array<ResolversTypes['schoolnotes_read_only_notes']>, "schoolnotes_read_only_notes", ParentType, ContextType, RequireFields<Subscription_RootSchoolnotes_Read_Only_NotesArgs, never>>;
  schoolnotes_read_only_notes_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['schoolnotes_read_only_notes']>, "schoolnotes_read_only_notes_by_pk", ParentType, ContextType, RequireFields<Subscription_RootSchoolnotes_Read_Only_Notes_By_PkArgs, 'id'>>;
  schoolnotes_users?: SubscriptionResolver<Array<ResolversTypes['schoolnotes_users']>, "schoolnotes_users", ParentType, ContextType, RequireFields<Subscription_RootSchoolnotes_UsersArgs, never>>;
  schoolnotes_users_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['schoolnotes_users']>, "schoolnotes_users_by_pk", ParentType, ContextType, RequireFields<Subscription_RootSchoolnotes_Users_By_PkArgs, 'id'>>;
  server_functions_apps?: SubscriptionResolver<Array<ResolversTypes['server_functions_apps']>, "server_functions_apps", ParentType, ContextType, RequireFields<Subscription_RootServer_Functions_AppsArgs, never>>;
  server_functions_apps_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['server_functions_apps']>, "server_functions_apps_by_pk", ParentType, ContextType, RequireFields<Subscription_RootServer_Functions_Apps_By_PkArgs, 'id'>>;
};

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamp'], any> {
  name: 'timestamp';
}

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Resolvers<ContextType = any> = {
  jsonb?: GraphQLScalarType;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  schoolnotes_notes?: Schoolnotes_NotesResolvers<ContextType>;
  schoolnotes_notes_mutation_response?: Schoolnotes_Notes_Mutation_ResponseResolvers<ContextType>;
  schoolnotes_read_only_notes?: Schoolnotes_Read_Only_NotesResolvers<ContextType>;
  schoolnotes_read_only_notes_mutation_response?: Schoolnotes_Read_Only_Notes_Mutation_ResponseResolvers<ContextType>;
  schoolnotes_users?: Schoolnotes_UsersResolvers<ContextType>;
  schoolnotes_users_mutation_response?: Schoolnotes_Users_Mutation_ResponseResolvers<ContextType>;
  server_functions_apps?: Server_Functions_AppsResolvers<ContextType>;
  server_functions_apps_mutation_response?: Server_Functions_Apps_Mutation_ResponseResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamp?: GraphQLScalarType;
  timestamptz?: GraphQLScalarType;
  uuid?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};


export const GetNotes = gql`
    query GetNotes($id: uuid!) {
  schoolnotes_notes(where: {owner: {_eq: $id}}) {
    id
    title
    important
    subject
    date
    content
    done
    last_modified
    public
  }
  schoolnotes_read_only_notes(
    where: {_and: [{user_id: {_eq: $id}}, {note: {public: {_eq: true}}}]}
  ) {
    note {
      id
      title
      important
      subject
      date
      content
      done
      last_modified
    }
  }
}
    `;
export const GetNote = gql`
    query GetNote($id: uuid!, $user_id: uuid!) {
  schoolnotes_notes(where: {_and: [{owner: {_eq: $user_id}}, {id: {_eq: $id}}]}) {
    id
    title
    important
    subject
    date
    content
    done
    last_modified
    public
  }
  schoolnotes_read_only_notes(
    where: {_and: [{user_id: {_eq: $id}}, {note: {public: {_eq: true}}}]}
  ) {
    note {
      id
      title
      important
      subject
      date
      content
      done
      last_modified
    }
  }
}
    `;
export const GetOwnNotes = gql`
    query GetOwnNotes($id: uuid!) {
  schoolnotes_notes(where: {user: {id: {_eq: $id}}}) {
    id
    title
    important
    subject
    date
    content
    done
    last_modified
    public
  }
}
    `;
export const GetReadOnlyNotes = gql`
    query GetReadOnlyNotes($id: uuid!) {
  schoolnotes_read_only_notes(
    where: {_and: [{user_id: {_eq: $id}}, {note: {public: {_eq: true}}}]}
  ) {
    note {
      id
      title
      important
      subject
      date
      content
      done
      last_modified
    }
  }
}
    `;
export const GetReadOnlyNoteUser = gql`
    query GetReadOnlyNoteUser($id: uuid!) {
  schoolnotes_read_only_notes(where: {id: {_eq: $id}}) {
    user_id
  }
}
    `;
export const GetLastModified = gql`
    query GetLastModified($id: uuid!) {
  schoolnotes_notes(
    where: {user: {id: {_eq: $id}}}
    limit: 1
    order_by: {last_modified: asc}
  ) {
    last_modified
  }
  schoolnotes_read_only_notes(
    where: {_and: [{user_id: {_eq: $id}}, {note: {public: {_eq: true}}}]}
    limit: 1
    order_by: {note: {last_modified: desc}}
  ) {
    note {
      last_modified
    }
  }
}
    `;
export const GetPublicNotes = gql`
    query GetPublicNotes {
  schoolnotes_notes(where: {public: {_eq: true}}) {
    id
    title
    important
    subject
    date
    content
    done
    last_modified
    public
  }
}
    `;
export const GetPublicNote = gql`
    query GetPublicNote($id: uuid!) {
  schoolnotes_notes(where: {_and: [{public: {_eq: true}}, {id: {_eq: $id}}]}) {
    id
    title
    important
    subject
    date
    content
    done
    last_modified
    public
  }
}
    `;
export const CreateNote = gql`
    mutation CreateNote($title: String!, $important: Boolean!, $subject: String!, $date: timestamptz!, $content: String!, $done: Boolean!, $owner: uuid!) {
  insert_schoolnotes_notes_one(
    object: {title: $title, important: $important, subject: $subject, date: $date, content: $content, done: $done, owner: $owner}
  ) {
    id
  }
}
    `;
export const StartShareNote = gql`
    mutation StartShareNote($id: uuid!, $userId: uuid!) {
  update_schoolnotes_notes(
    where: {_and: [{id: {_eq: $id}}, {owner: {_eq: $userId}}]}
    _set: {public: true}
  ) {
    affected_rows
  }
}
    `;
export const StopShareNote = gql`
    mutation StopShareNote($id: uuid!, $userId: uuid!) {
  update_schoolnotes_notes(
    where: {_and: [{id: {_eq: $id}}, {owner: {_eq: $userId}}]}
    _set: {public: false}
  ) {
    affected_rows
  }
  delete_schoolnotes_read_only_notes(where: {note_id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export const AddSharedNote = gql`
    mutation AddSharedNote($id: uuid!, $userId: uuid!) {
  insert_schoolnotes_read_only_notes_one(object: {note_id: $id, user_id: $userId}) {
    id
  }
}
    `;
export const RemoveSharedNote = gql`
    mutation RemoveSharedNote($id: uuid!, $userId: uuid!) {
  delete_schoolnotes_read_only_notes(
    where: {_and: [{user_id: {_eq: $userId}}, {note_id: {_eq: $id}}]}
  ) {
    affected_rows
  }
}
    `;
export const UpdateNote = gql`
    mutation UpdateNote($id: uuid!, $userId: uuid!, $set: schoolnotes_notes_set_input!) {
  update_schoolnotes_notes(
    where: {_and: [{owner: {_eq: $userId}}, {id: {_eq: $id}}]}
    _set: $set
  ) {
    affected_rows
  }
}
    `;
export const DeleteNote = gql`
    mutation DeleteNote($id: uuid!, $userId: uuid!) {
  delete_schoolnotes_notes(
    where: {_and: [{owner: {_eq: $userId}}, {id: {_eq: $id}}]}
  ) {
    affected_rows
  }
  delete_schoolnotes_read_only_notes(where: {note_id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export const GetUserId = gql`
    query GetUserId($username: String!) {
  schoolnotes_users(where: {username: {_eq: $username}}) {
    id
  }
}
    `;
export const Register = gql`
    mutation Register($email: String!, $password: String!, $username: String!) {
  insert_schoolnotes_users_one(
    object: {email: $email, password: $password, username: $username}
  ) {
    id
  }
}
    `;
export const Login = gql`
    query Login($username: String!) {
  schoolnotes_users(
    where: {_or: [{email: {_eq: $username}}, {username: {_eq: $username}}]}
  ) {
    id
    password
  }
}
    `;