import * as CustomScalars from './custom-scalars.d';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  balance_direction: CustomScalars.BalanceDirection;
  bigint: bigint;
  bpchar: string;
  smallint: number;
  timestamptz: string;
  tstzrange: string;
};


export type Auth = {
  __typename?: 'Auth';
  display_name: Scalars['String'];
  roles: Array<Scalars['String']>;
  /** An object relationship */
  session: Session;
  session_id: Scalars['Int'];
  /** An object relationship */
  user: User;
  user_id: Scalars['Int'];
  username: Scalars['String'];
};

export type AuthLogin = {
  __typename?: 'AuthLogin';
  display_name: Scalars['String'];
  roles: Array<Scalars['String']>;
  session_id: Scalars['Int'];
  token: Scalars['String'];
  user_id: Scalars['Int'];
  username: Scalars['String'];
};

export type AuthLogout = {
  __typename?: 'AuthLogout';
  display_name: Scalars['String'];
  roles: Array<Scalars['String']>;
  /** An object relationship */
  user: User;
  user_id: Scalars['Int'];
  username: Scalars['String'];
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

/**
 * Account
 *
 *
 * columns and relationships of "account"
 */
export type Account = {
  __typename?: 'account';
  /** An array relationship */
  account_currencies: Array<Account_Currency>;
  /** An aggregate relationship */
  account_currencies_aggregate: Account_Currency_Aggregate;
  /** Surogate code. Unique */
  code: Scalars['String'];
  /** An object relationship */
  created_by_user?: Maybe<User>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  deleted_by_user?: Maybe<User>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id: Scalars['Int'];
  /** An array relationship */
  journal_entry_lines: Array<Journal_Entry_Line>;
  /** An aggregate relationship */
  journal_entry_lines_aggregate: Journal_Entry_Line_Aggregate;
  /** Account description */
  name: Scalars['String'];
  /** Account Normal Balance. Either debit or credit */
  normal_balance: Scalars['balance_direction'];
  parent_title_account_id: Scalars['Int'];
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** An object relationship */
  title_account: Title_Account;
  /** An object relationship */
  updated_by_user?: Maybe<User>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};


/**
 * Account
 *
 *
 * columns and relationships of "account"
 */
export type AccountAccount_CurrenciesArgs = {
  distinct_on?: Maybe<Array<Account_Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Currency_Order_By>>;
  where?: Maybe<Account_Currency_Bool_Exp>;
};


/**
 * Account
 *
 *
 * columns and relationships of "account"
 */
export type AccountAccount_Currencies_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Currency_Order_By>>;
  where?: Maybe<Account_Currency_Bool_Exp>;
};


/**
 * Account
 *
 *
 * columns and relationships of "account"
 */
export type AccountJournal_Entry_LinesArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_Line_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_Line_Order_By>>;
  where?: Maybe<Journal_Entry_Line_Bool_Exp>;
};


/**
 * Account
 *
 *
 * columns and relationships of "account"
 */
export type AccountJournal_Entry_Lines_AggregateArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_Line_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_Line_Order_By>>;
  where?: Maybe<Journal_Entry_Line_Bool_Exp>;
};

/** aggregated selection of "account" */
export type Account_Aggregate = {
  __typename?: 'account_aggregate';
  aggregate?: Maybe<Account_Aggregate_Fields>;
  nodes: Array<Account>;
};

/** aggregate fields of "account" */
export type Account_Aggregate_Fields = {
  __typename?: 'account_aggregate_fields';
  avg?: Maybe<Account_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Account_Max_Fields>;
  min?: Maybe<Account_Min_Fields>;
  stddev?: Maybe<Account_Stddev_Fields>;
  stddev_pop?: Maybe<Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Account_Stddev_Samp_Fields>;
  sum?: Maybe<Account_Sum_Fields>;
  var_pop?: Maybe<Account_Var_Pop_Fields>;
  var_samp?: Maybe<Account_Var_Samp_Fields>;
  variance?: Maybe<Account_Variance_Fields>;
};


/** aggregate fields of "account" */
export type Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "account" */
export type Account_Aggregate_Order_By = {
  avg?: Maybe<Account_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Account_Max_Order_By>;
  min?: Maybe<Account_Min_Order_By>;
  stddev?: Maybe<Account_Stddev_Order_By>;
  stddev_pop?: Maybe<Account_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Account_Stddev_Samp_Order_By>;
  sum?: Maybe<Account_Sum_Order_By>;
  var_pop?: Maybe<Account_Var_Pop_Order_By>;
  var_samp?: Maybe<Account_Var_Samp_Order_By>;
  variance?: Maybe<Account_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "account" */
export type Account_Arr_Rel_Insert_Input = {
  data: Array<Account_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Account_On_Conflict>;
};

/** aggregate avg on columns */
export type Account_Avg_Fields = {
  __typename?: 'account_avg_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "account" */
export type Account_Avg_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  _and?: Maybe<Array<Account_Bool_Exp>>;
  _not?: Maybe<Account_Bool_Exp>;
  _or?: Maybe<Array<Account_Bool_Exp>>;
  account_currencies?: Maybe<Account_Currency_Bool_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  created_by_user?: Maybe<User_Bool_Exp>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  deleted_by_user?: Maybe<User_Bool_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  journal_entry_lines?: Maybe<Journal_Entry_Line_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  normal_balance?: Maybe<Balance_Direction_Comparison_Exp>;
  parent_title_account_id?: Maybe<Int_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  title_account?: Maybe<Title_Account_Bool_Exp>;
  updated_by_user?: Maybe<User_Bool_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "account" */
export enum Account_Constraint {
  /** unique or primary key constraint */
  AccountCodeKey = 'account_code_key',
  /** unique or primary key constraint */
  AccountNameKey = 'account_name_key',
  /** unique or primary key constraint */
  AccountPkey = 'account_pkey'
}

/**
 * Account and Currency relationship
 *
 *
 * columns and relationships of "account_currency"
 */
export type Account_Currency = {
  __typename?: 'account_currency';
  /** An object relationship */
  account: Account;
  /** Account id. Primary key, Foreign Key */
  account_id: Scalars['Int'];
  /** An object relationship */
  created_by_user?: Maybe<User>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  currency: Currency;
  /** Currency ISO 4217 code, 3 characters long. Primary key, Foreign Key */
  currency_id: Scalars['bpchar'];
  /** An object relationship */
  deleted_by_user?: Maybe<User>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** An object relationship */
  updated_by_user?: Maybe<User>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "account_currency" */
export type Account_Currency_Aggregate = {
  __typename?: 'account_currency_aggregate';
  aggregate?: Maybe<Account_Currency_Aggregate_Fields>;
  nodes: Array<Account_Currency>;
};

/** aggregate fields of "account_currency" */
export type Account_Currency_Aggregate_Fields = {
  __typename?: 'account_currency_aggregate_fields';
  avg?: Maybe<Account_Currency_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Account_Currency_Max_Fields>;
  min?: Maybe<Account_Currency_Min_Fields>;
  stddev?: Maybe<Account_Currency_Stddev_Fields>;
  stddev_pop?: Maybe<Account_Currency_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Account_Currency_Stddev_Samp_Fields>;
  sum?: Maybe<Account_Currency_Sum_Fields>;
  var_pop?: Maybe<Account_Currency_Var_Pop_Fields>;
  var_samp?: Maybe<Account_Currency_Var_Samp_Fields>;
  variance?: Maybe<Account_Currency_Variance_Fields>;
};


/** aggregate fields of "account_currency" */
export type Account_Currency_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Account_Currency_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "account_currency" */
export type Account_Currency_Aggregate_Order_By = {
  avg?: Maybe<Account_Currency_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Account_Currency_Max_Order_By>;
  min?: Maybe<Account_Currency_Min_Order_By>;
  stddev?: Maybe<Account_Currency_Stddev_Order_By>;
  stddev_pop?: Maybe<Account_Currency_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Account_Currency_Stddev_Samp_Order_By>;
  sum?: Maybe<Account_Currency_Sum_Order_By>;
  var_pop?: Maybe<Account_Currency_Var_Pop_Order_By>;
  var_samp?: Maybe<Account_Currency_Var_Samp_Order_By>;
  variance?: Maybe<Account_Currency_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "account_currency" */
export type Account_Currency_Arr_Rel_Insert_Input = {
  data: Array<Account_Currency_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Account_Currency_On_Conflict>;
};

/** aggregate avg on columns */
export type Account_Currency_Avg_Fields = {
  __typename?: 'account_currency_avg_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "account_currency" */
export type Account_Currency_Avg_Order_By = {
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "account_currency". All fields are combined with a logical 'AND'. */
export type Account_Currency_Bool_Exp = {
  _and?: Maybe<Array<Account_Currency_Bool_Exp>>;
  _not?: Maybe<Account_Currency_Bool_Exp>;
  _or?: Maybe<Array<Account_Currency_Bool_Exp>>;
  account?: Maybe<Account_Bool_Exp>;
  account_id?: Maybe<Int_Comparison_Exp>;
  created_by_user?: Maybe<User_Bool_Exp>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  currency?: Maybe<Currency_Bool_Exp>;
  currency_id?: Maybe<Bpchar_Comparison_Exp>;
  deleted_by_user?: Maybe<User_Bool_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  updated_by_user?: Maybe<User_Bool_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "account_currency" */
export enum Account_Currency_Constraint {
  /** unique or primary key constraint */
  AccountCurrencyPkey = 'account_currency_pkey'
}

/**
 * Account and Currency relationship History
 *
 *
 * columns and relationships of "account_currency_history"
 */
export type Account_Currency_History = {
  __typename?: 'account_currency_history';
  /** Account id. Primary key, Foreign Key */
  account_id: Scalars['Int'];
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Currency ISO 4217 code, 3 characters long. Primary key, Foreign Key */
  currency_id: Scalars['bpchar'];
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "account_currency_history" */
export type Account_Currency_History_Aggregate = {
  __typename?: 'account_currency_history_aggregate';
  aggregate?: Maybe<Account_Currency_History_Aggregate_Fields>;
  nodes: Array<Account_Currency_History>;
};

/** aggregate fields of "account_currency_history" */
export type Account_Currency_History_Aggregate_Fields = {
  __typename?: 'account_currency_history_aggregate_fields';
  avg?: Maybe<Account_Currency_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Account_Currency_History_Max_Fields>;
  min?: Maybe<Account_Currency_History_Min_Fields>;
  stddev?: Maybe<Account_Currency_History_Stddev_Fields>;
  stddev_pop?: Maybe<Account_Currency_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Account_Currency_History_Stddev_Samp_Fields>;
  sum?: Maybe<Account_Currency_History_Sum_Fields>;
  var_pop?: Maybe<Account_Currency_History_Var_Pop_Fields>;
  var_samp?: Maybe<Account_Currency_History_Var_Samp_Fields>;
  variance?: Maybe<Account_Currency_History_Variance_Fields>;
};


/** aggregate fields of "account_currency_history" */
export type Account_Currency_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Account_Currency_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Account_Currency_History_Avg_Fields = {
  __typename?: 'account_currency_history_avg_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "account_currency_history". All fields are combined with a logical 'AND'. */
export type Account_Currency_History_Bool_Exp = {
  _and?: Maybe<Array<Account_Currency_History_Bool_Exp>>;
  _not?: Maybe<Account_Currency_History_Bool_Exp>;
  _or?: Maybe<Array<Account_Currency_History_Bool_Exp>>;
  account_id?: Maybe<Int_Comparison_Exp>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  currency_id?: Maybe<Bpchar_Comparison_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "account_currency_history" */
export type Account_Currency_History_Inc_Input = {
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "account_currency_history" */
export type Account_Currency_History_Insert_Input = {
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Currency ISO 4217 code, 3 characters long. Primary key, Foreign Key */
  currency_id?: Maybe<Scalars['bpchar']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Account_Currency_History_Max_Fields = {
  __typename?: 'account_currency_history_max_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Currency ISO 4217 code, 3 characters long. Primary key, Foreign Key */
  currency_id?: Maybe<Scalars['bpchar']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Account_Currency_History_Min_Fields = {
  __typename?: 'account_currency_history_min_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Currency ISO 4217 code, 3 characters long. Primary key, Foreign Key */
  currency_id?: Maybe<Scalars['bpchar']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "account_currency_history" */
export type Account_Currency_History_Mutation_Response = {
  __typename?: 'account_currency_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Account_Currency_History>;
};

/** Ordering options when selecting data from "account_currency_history". */
export type Account_Currency_History_Order_By = {
  account_id?: Maybe<Order_By>;
  created_by_user_id?: Maybe<Order_By>;
  currency_id?: Maybe<Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
};

/** select columns of table "account_currency_history" */
export enum Account_Currency_History_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** input type for updating data in table "account_currency_history" */
export type Account_Currency_History_Set_Input = {
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Currency ISO 4217 code, 3 characters long. Primary key, Foreign Key */
  currency_id?: Maybe<Scalars['bpchar']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Account_Currency_History_Stddev_Fields = {
  __typename?: 'account_currency_history_stddev_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Account_Currency_History_Stddev_Pop_Fields = {
  __typename?: 'account_currency_history_stddev_pop_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Account_Currency_History_Stddev_Samp_Fields = {
  __typename?: 'account_currency_history_stddev_samp_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Account_Currency_History_Sum_Fields = {
  __typename?: 'account_currency_history_sum_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Account_Currency_History_Var_Pop_Fields = {
  __typename?: 'account_currency_history_var_pop_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Account_Currency_History_Var_Samp_Fields = {
  __typename?: 'account_currency_history_var_samp_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Account_Currency_History_Variance_Fields = {
  __typename?: 'account_currency_history_variance_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "account_currency" */
export type Account_Currency_Inc_Input = {
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "account_currency" */
export type Account_Currency_Insert_Input = {
  account?: Maybe<Account_Obj_Rel_Insert_Input>;
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Int']>;
  created_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  currency?: Maybe<Currency_Obj_Rel_Insert_Input>;
  /** Currency ISO 4217 code, 3 characters long. Primary key, Foreign Key */
  currency_id?: Maybe<Scalars['bpchar']>;
  deleted_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  updated_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Account_Currency_Max_Fields = {
  __typename?: 'account_currency_max_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Currency ISO 4217 code, 3 characters long. Primary key, Foreign Key */
  currency_id?: Maybe<Scalars['bpchar']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "account_currency" */
export type Account_Currency_Max_Order_By = {
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** Currency ISO 4217 code, 3 characters long. Primary key, Foreign Key */
  currency_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Account_Currency_Min_Fields = {
  __typename?: 'account_currency_min_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Currency ISO 4217 code, 3 characters long. Primary key, Foreign Key */
  currency_id?: Maybe<Scalars['bpchar']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "account_currency" */
export type Account_Currency_Min_Order_By = {
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** Currency ISO 4217 code, 3 characters long. Primary key, Foreign Key */
  currency_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "account_currency" */
export type Account_Currency_Mutation_Response = {
  __typename?: 'account_currency_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Account_Currency>;
};

/** input type for inserting object relation for remote table "account_currency" */
export type Account_Currency_Obj_Rel_Insert_Input = {
  data: Account_Currency_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Account_Currency_On_Conflict>;
};

/** on conflict condition type for table "account_currency" */
export type Account_Currency_On_Conflict = {
  constraint: Account_Currency_Constraint;
  update_columns?: Array<Account_Currency_Update_Column>;
  where?: Maybe<Account_Currency_Bool_Exp>;
};

/** Ordering options when selecting data from "account_currency". */
export type Account_Currency_Order_By = {
  account?: Maybe<Account_Order_By>;
  account_id?: Maybe<Order_By>;
  created_by_user?: Maybe<User_Order_By>;
  created_by_user_id?: Maybe<Order_By>;
  currency?: Maybe<Currency_Order_By>;
  currency_id?: Maybe<Order_By>;
  deleted_by_user?: Maybe<User_Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  updated_by_user?: Maybe<User_Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: account_currency */
export type Account_Currency_Pk_Columns_Input = {
  /** Account id. Primary key, Foreign Key */
  account_id: Scalars['Int'];
  /** Currency ISO 4217 code, 3 characters long. Primary key, Foreign Key */
  currency_id: Scalars['bpchar'];
};

/** select columns of table "account_currency" */
export enum Account_Currency_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** input type for updating data in table "account_currency" */
export type Account_Currency_Set_Input = {
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Currency ISO 4217 code, 3 characters long. Primary key, Foreign Key */
  currency_id?: Maybe<Scalars['bpchar']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Account_Currency_Stddev_Fields = {
  __typename?: 'account_currency_stddev_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "account_currency" */
export type Account_Currency_Stddev_Order_By = {
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Account_Currency_Stddev_Pop_Fields = {
  __typename?: 'account_currency_stddev_pop_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "account_currency" */
export type Account_Currency_Stddev_Pop_Order_By = {
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Account_Currency_Stddev_Samp_Fields = {
  __typename?: 'account_currency_stddev_samp_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "account_currency" */
export type Account_Currency_Stddev_Samp_Order_By = {
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Account_Currency_Sum_Fields = {
  __typename?: 'account_currency_sum_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "account_currency" */
export type Account_Currency_Sum_Order_By = {
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** update columns of table "account_currency" */
export enum Account_Currency_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** aggregate var_pop on columns */
export type Account_Currency_Var_Pop_Fields = {
  __typename?: 'account_currency_var_pop_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "account_currency" */
export type Account_Currency_Var_Pop_Order_By = {
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Account_Currency_Var_Samp_Fields = {
  __typename?: 'account_currency_var_samp_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "account_currency" */
export type Account_Currency_Var_Samp_Order_By = {
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Account_Currency_Variance_Fields = {
  __typename?: 'account_currency_variance_fields';
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "account_currency" */
export type Account_Currency_Variance_Order_By = {
  /** Account id. Primary key, Foreign Key */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/**
 * Account History
 *
 *
 * columns and relationships of "account_history"
 */
export type Account_History = {
  __typename?: 'account_history';
  /** Surogate code. Unique */
  code: Scalars['String'];
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id: Scalars['Int'];
  /** Account description */
  name: Scalars['String'];
  /** Account Normal Balance. Either debit or credit */
  normal_balance: Scalars['balance_direction'];
  parent_title_account_id: Scalars['Int'];
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "account_history" */
export type Account_History_Aggregate = {
  __typename?: 'account_history_aggregate';
  aggregate?: Maybe<Account_History_Aggregate_Fields>;
  nodes: Array<Account_History>;
};

/** aggregate fields of "account_history" */
export type Account_History_Aggregate_Fields = {
  __typename?: 'account_history_aggregate_fields';
  avg?: Maybe<Account_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Account_History_Max_Fields>;
  min?: Maybe<Account_History_Min_Fields>;
  stddev?: Maybe<Account_History_Stddev_Fields>;
  stddev_pop?: Maybe<Account_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Account_History_Stddev_Samp_Fields>;
  sum?: Maybe<Account_History_Sum_Fields>;
  var_pop?: Maybe<Account_History_Var_Pop_Fields>;
  var_samp?: Maybe<Account_History_Var_Samp_Fields>;
  variance?: Maybe<Account_History_Variance_Fields>;
};


/** aggregate fields of "account_history" */
export type Account_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Account_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Account_History_Avg_Fields = {
  __typename?: 'account_history_avg_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "account_history". All fields are combined with a logical 'AND'. */
export type Account_History_Bool_Exp = {
  _and?: Maybe<Array<Account_History_Bool_Exp>>;
  _not?: Maybe<Account_History_Bool_Exp>;
  _or?: Maybe<Array<Account_History_Bool_Exp>>;
  code?: Maybe<String_Comparison_Exp>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  normal_balance?: Maybe<Balance_Direction_Comparison_Exp>;
  parent_title_account_id?: Maybe<Int_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "account_history" */
export type Account_History_Inc_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "account_history" */
export type Account_History_Insert_Input = {
  /** Surogate code. Unique */
  code?: Maybe<Scalars['String']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Account description */
  name?: Maybe<Scalars['String']>;
  /** Account Normal Balance. Either debit or credit */
  normal_balance?: Maybe<Scalars['balance_direction']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Account_History_Max_Fields = {
  __typename?: 'account_history_max_fields';
  /** Surogate code. Unique */
  code?: Maybe<Scalars['String']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Account description */
  name?: Maybe<Scalars['String']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Account_History_Min_Fields = {
  __typename?: 'account_history_min_fields';
  /** Surogate code. Unique */
  code?: Maybe<Scalars['String']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Account description */
  name?: Maybe<Scalars['String']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "account_history" */
export type Account_History_Mutation_Response = {
  __typename?: 'account_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Account_History>;
};

/** Ordering options when selecting data from "account_history". */
export type Account_History_Order_By = {
  code?: Maybe<Order_By>;
  created_by_user_id?: Maybe<Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  normal_balance?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
};

/** select columns of table "account_history" */
export enum Account_History_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NormalBalance = 'normal_balance',
  /** column name */
  ParentTitleAccountId = 'parent_title_account_id',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** input type for updating data in table "account_history" */
export type Account_History_Set_Input = {
  /** Surogate code. Unique */
  code?: Maybe<Scalars['String']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Account description */
  name?: Maybe<Scalars['String']>;
  /** Account Normal Balance. Either debit or credit */
  normal_balance?: Maybe<Scalars['balance_direction']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Account_History_Stddev_Fields = {
  __typename?: 'account_history_stddev_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Account_History_Stddev_Pop_Fields = {
  __typename?: 'account_history_stddev_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Account_History_Stddev_Samp_Fields = {
  __typename?: 'account_history_stddev_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Account_History_Sum_Fields = {
  __typename?: 'account_history_sum_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Account_History_Var_Pop_Fields = {
  __typename?: 'account_history_var_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Account_History_Var_Samp_Fields = {
  __typename?: 'account_history_var_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Account_History_Variance_Fields = {
  __typename?: 'account_history_variance_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "account" */
export type Account_Inc_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "account" */
export type Account_Insert_Input = {
  account_currencies?: Maybe<Account_Currency_Arr_Rel_Insert_Input>;
  /** Surogate code. Unique */
  code?: Maybe<Scalars['String']>;
  created_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  deleted_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  journal_entry_lines?: Maybe<Journal_Entry_Line_Arr_Rel_Insert_Input>;
  /** Account description */
  name?: Maybe<Scalars['String']>;
  /** Account Normal Balance. Either debit or credit */
  normal_balance?: Maybe<Scalars['balance_direction']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  title_account?: Maybe<Title_Account_Obj_Rel_Insert_Input>;
  updated_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Account_Max_Fields = {
  __typename?: 'account_max_fields';
  /** Surogate code. Unique */
  code?: Maybe<Scalars['String']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Account description */
  name?: Maybe<Scalars['String']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "account" */
export type Account_Max_Order_By = {
  /** Surogate code. Unique */
  code?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  /** Account description */
  name?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Account_Min_Fields = {
  __typename?: 'account_min_fields';
  /** Surogate code. Unique */
  code?: Maybe<Scalars['String']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Account description */
  name?: Maybe<Scalars['String']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "account" */
export type Account_Min_Order_By = {
  /** Surogate code. Unique */
  code?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  /** Account description */
  name?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "account" */
export type Account_Mutation_Response = {
  __typename?: 'account_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Account>;
};

/** input type for inserting object relation for remote table "account" */
export type Account_Obj_Rel_Insert_Input = {
  data: Account_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Account_On_Conflict>;
};

/** on conflict condition type for table "account" */
export type Account_On_Conflict = {
  constraint: Account_Constraint;
  update_columns?: Array<Account_Update_Column>;
  where?: Maybe<Account_Bool_Exp>;
};

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
  account_currencies_aggregate?: Maybe<Account_Currency_Aggregate_Order_By>;
  code?: Maybe<Order_By>;
  created_by_user?: Maybe<User_Order_By>;
  created_by_user_id?: Maybe<Order_By>;
  deleted_by_user?: Maybe<User_Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  journal_entry_lines_aggregate?: Maybe<Journal_Entry_Line_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  normal_balance?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  title_account?: Maybe<Title_Account_Order_By>;
  updated_by_user?: Maybe<User_Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: account */
export type Account_Pk_Columns_Input = {
  /** Primary Key */
  id: Scalars['Int'];
};

/** select columns of table "account" */
export enum Account_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NormalBalance = 'normal_balance',
  /** column name */
  ParentTitleAccountId = 'parent_title_account_id',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** input type for updating data in table "account" */
export type Account_Set_Input = {
  /** Surogate code. Unique */
  code?: Maybe<Scalars['String']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Account description */
  name?: Maybe<Scalars['String']>;
  /** Account Normal Balance. Either debit or credit */
  normal_balance?: Maybe<Scalars['balance_direction']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Account_Stddev_Fields = {
  __typename?: 'account_stddev_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "account" */
export type Account_Stddev_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Account_Stddev_Pop_Fields = {
  __typename?: 'account_stddev_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "account" */
export type Account_Stddev_Pop_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Account_Stddev_Samp_Fields = {
  __typename?: 'account_stddev_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "account" */
export type Account_Stddev_Samp_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Account_Sum_Fields = {
  __typename?: 'account_sum_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "account" */
export type Account_Sum_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** update columns of table "account" */
export enum Account_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NormalBalance = 'normal_balance',
  /** column name */
  ParentTitleAccountId = 'parent_title_account_id',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** aggregate var_pop on columns */
export type Account_Var_Pop_Fields = {
  __typename?: 'account_var_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "account" */
export type Account_Var_Pop_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Account_Var_Samp_Fields = {
  __typename?: 'account_var_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "account" */
export type Account_Var_Samp_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Account_Variance_Fields = {
  __typename?: 'account_variance_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "account" */
export type Account_Variance_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};


/** Boolean expression to compare columns of type "balance_direction". All fields are combined with logical 'AND'. */
export type Balance_Direction_Comparison_Exp = {
  _eq?: Maybe<Scalars['balance_direction']>;
  _gt?: Maybe<Scalars['balance_direction']>;
  _gte?: Maybe<Scalars['balance_direction']>;
  _in?: Maybe<Array<Scalars['balance_direction']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['balance_direction']>;
  _lte?: Maybe<Scalars['balance_direction']>;
  _neq?: Maybe<Scalars['balance_direction']>;
  _nin?: Maybe<Array<Scalars['balance_direction']>>;
};


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};


/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: Maybe<Scalars['bpchar']>;
  _gt?: Maybe<Scalars['bpchar']>;
  _gte?: Maybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['bpchar']>;
  _in?: Maybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['bpchar']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['bpchar']>;
  _lt?: Maybe<Scalars['bpchar']>;
  _lte?: Maybe<Scalars['bpchar']>;
  _neq?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['bpchar']>;
  _nin?: Maybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['bpchar']>;
};

/**
 * Currency
 *
 *
 * columns and relationships of "currency"
 */
export type Currency = {
  __typename?: 'currency';
  /** An array relationship */
  account_currencies: Array<Account_Currency>;
  /** An aggregate relationship */
  account_currencies_aggregate: Account_Currency_Aggregate;
  /** An object relationship */
  created_by_user?: Maybe<User>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  currencyExchangeRatesByTargetCurrencyId: Array<Exchange_Rate>;
  /** An aggregate relationship */
  currencyExchangeRatesByTargetCurrencyId_aggregate: Exchange_Rate_Aggregate;
  /** Separator used to separate fractional units from full units. Default: "." */
  decimal_separator?: Maybe<Scalars['bpchar']>;
  /** An object relationship */
  deleted_by_user?: Maybe<User>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  exchange_rates: Array<Exchange_Rate>;
  /** An aggregate relationship */
  exchange_rates_aggregate: Exchange_Rate_Aggregate;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units: Scalars['smallint'];
  /** Group delimiter, used to display large sums. Also knows as thousands separator. Default: "," */
  group_delimiter?: Maybe<Scalars['bpchar']>;
  /** Currency ISO 4217 code, 3 characters long. Primary key */
  id: Scalars['bpchar'];
  /** An array relationship */
  journal_entry_lines: Array<Journal_Entry_Line>;
  /** An aggregate relationship */
  journal_entry_lines_aggregate: Journal_Entry_Line_Aggregate;
  /** Full currency name */
  name: Scalars['String'];
  /** Currency symbol, prefixed when displayed. Eg: $ for US Dollar */
  symbol?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** An object relationship */
  updated_by_user?: Maybe<User>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};


/**
 * Currency
 *
 *
 * columns and relationships of "currency"
 */
export type CurrencyAccount_CurrenciesArgs = {
  distinct_on?: Maybe<Array<Account_Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Currency_Order_By>>;
  where?: Maybe<Account_Currency_Bool_Exp>;
};


/**
 * Currency
 *
 *
 * columns and relationships of "currency"
 */
export type CurrencyAccount_Currencies_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Currency_Order_By>>;
  where?: Maybe<Account_Currency_Bool_Exp>;
};


/**
 * Currency
 *
 *
 * columns and relationships of "currency"
 */
export type CurrencyCurrencyExchangeRatesByTargetCurrencyIdArgs = {
  distinct_on?: Maybe<Array<Exchange_Rate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Exchange_Rate_Order_By>>;
  where?: Maybe<Exchange_Rate_Bool_Exp>;
};


/**
 * Currency
 *
 *
 * columns and relationships of "currency"
 */
export type CurrencyCurrencyExchangeRatesByTargetCurrencyId_AggregateArgs = {
  distinct_on?: Maybe<Array<Exchange_Rate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Exchange_Rate_Order_By>>;
  where?: Maybe<Exchange_Rate_Bool_Exp>;
};


/**
 * Currency
 *
 *
 * columns and relationships of "currency"
 */
export type CurrencyExchange_RatesArgs = {
  distinct_on?: Maybe<Array<Exchange_Rate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Exchange_Rate_Order_By>>;
  where?: Maybe<Exchange_Rate_Bool_Exp>;
};


/**
 * Currency
 *
 *
 * columns and relationships of "currency"
 */
export type CurrencyExchange_Rates_AggregateArgs = {
  distinct_on?: Maybe<Array<Exchange_Rate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Exchange_Rate_Order_By>>;
  where?: Maybe<Exchange_Rate_Bool_Exp>;
};


/**
 * Currency
 *
 *
 * columns and relationships of "currency"
 */
export type CurrencyJournal_Entry_LinesArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_Line_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_Line_Order_By>>;
  where?: Maybe<Journal_Entry_Line_Bool_Exp>;
};


/**
 * Currency
 *
 *
 * columns and relationships of "currency"
 */
export type CurrencyJournal_Entry_Lines_AggregateArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_Line_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_Line_Order_By>>;
  where?: Maybe<Journal_Entry_Line_Bool_Exp>;
};

/** aggregated selection of "currency" */
export type Currency_Aggregate = {
  __typename?: 'currency_aggregate';
  aggregate?: Maybe<Currency_Aggregate_Fields>;
  nodes: Array<Currency>;
};

/** aggregate fields of "currency" */
export type Currency_Aggregate_Fields = {
  __typename?: 'currency_aggregate_fields';
  avg?: Maybe<Currency_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Currency_Max_Fields>;
  min?: Maybe<Currency_Min_Fields>;
  stddev?: Maybe<Currency_Stddev_Fields>;
  stddev_pop?: Maybe<Currency_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Currency_Stddev_Samp_Fields>;
  sum?: Maybe<Currency_Sum_Fields>;
  var_pop?: Maybe<Currency_Var_Pop_Fields>;
  var_samp?: Maybe<Currency_Var_Samp_Fields>;
  variance?: Maybe<Currency_Variance_Fields>;
};


/** aggregate fields of "currency" */
export type Currency_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Currency_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Currency_Avg_Fields = {
  __typename?: 'currency_avg_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "currency". All fields are combined with a logical 'AND'. */
export type Currency_Bool_Exp = {
  _and?: Maybe<Array<Currency_Bool_Exp>>;
  _not?: Maybe<Currency_Bool_Exp>;
  _or?: Maybe<Array<Currency_Bool_Exp>>;
  account_currencies?: Maybe<Account_Currency_Bool_Exp>;
  created_by_user?: Maybe<User_Bool_Exp>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  currencyExchangeRatesByTargetCurrencyId?: Maybe<Exchange_Rate_Bool_Exp>;
  decimal_separator?: Maybe<Bpchar_Comparison_Exp>;
  deleted_by_user?: Maybe<User_Bool_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  exchange_rates?: Maybe<Exchange_Rate_Bool_Exp>;
  fractional_units?: Maybe<Smallint_Comparison_Exp>;
  group_delimiter?: Maybe<Bpchar_Comparison_Exp>;
  id?: Maybe<Bpchar_Comparison_Exp>;
  journal_entry_lines?: Maybe<Journal_Entry_Line_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  symbol?: Maybe<String_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  updated_by_user?: Maybe<User_Bool_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "currency" */
export enum Currency_Constraint {
  /** unique or primary key constraint */
  CurrencyPkey = 'currency_pkey'
}

/**
 * Currency History
 *
 *
 * columns and relationships of "currency_history"
 */
export type Currency_History = {
  __typename?: 'currency_history';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Separator used to separate fractional units from full units. Default: "." */
  decimal_separator?: Maybe<Scalars['bpchar']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units: Scalars['smallint'];
  /** Group delimiter, used to display large sums. Also knows as thousands separator. Default: "," */
  group_delimiter?: Maybe<Scalars['bpchar']>;
  /** Currency ISO 4217 code, 3 characters long. Primary key */
  id: Scalars['bpchar'];
  /** Full currency name */
  name: Scalars['String'];
  /** Currency symbol, prefixed when displayed. Eg: $ for US Dollar */
  symbol?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "currency_history" */
export type Currency_History_Aggregate = {
  __typename?: 'currency_history_aggregate';
  aggregate?: Maybe<Currency_History_Aggregate_Fields>;
  nodes: Array<Currency_History>;
};

/** aggregate fields of "currency_history" */
export type Currency_History_Aggregate_Fields = {
  __typename?: 'currency_history_aggregate_fields';
  avg?: Maybe<Currency_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Currency_History_Max_Fields>;
  min?: Maybe<Currency_History_Min_Fields>;
  stddev?: Maybe<Currency_History_Stddev_Fields>;
  stddev_pop?: Maybe<Currency_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Currency_History_Stddev_Samp_Fields>;
  sum?: Maybe<Currency_History_Sum_Fields>;
  var_pop?: Maybe<Currency_History_Var_Pop_Fields>;
  var_samp?: Maybe<Currency_History_Var_Samp_Fields>;
  variance?: Maybe<Currency_History_Variance_Fields>;
};


/** aggregate fields of "currency_history" */
export type Currency_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Currency_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Currency_History_Avg_Fields = {
  __typename?: 'currency_history_avg_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "currency_history". All fields are combined with a logical 'AND'. */
export type Currency_History_Bool_Exp = {
  _and?: Maybe<Array<Currency_History_Bool_Exp>>;
  _not?: Maybe<Currency_History_Bool_Exp>;
  _or?: Maybe<Array<Currency_History_Bool_Exp>>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  decimal_separator?: Maybe<Bpchar_Comparison_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  fractional_units?: Maybe<Smallint_Comparison_Exp>;
  group_delimiter?: Maybe<Bpchar_Comparison_Exp>;
  id?: Maybe<Bpchar_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  symbol?: Maybe<String_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "currency_history" */
export type Currency_History_Inc_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['smallint']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "currency_history" */
export type Currency_History_Insert_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Separator used to separate fractional units from full units. Default: "." */
  decimal_separator?: Maybe<Scalars['bpchar']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['smallint']>;
  /** Group delimiter, used to display large sums. Also knows as thousands separator. Default: "," */
  group_delimiter?: Maybe<Scalars['bpchar']>;
  /** Currency ISO 4217 code, 3 characters long. Primary key */
  id?: Maybe<Scalars['bpchar']>;
  /** Full currency name */
  name?: Maybe<Scalars['String']>;
  /** Currency symbol, prefixed when displayed. Eg: $ for US Dollar */
  symbol?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Currency_History_Max_Fields = {
  __typename?: 'currency_history_max_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Separator used to separate fractional units from full units. Default: "." */
  decimal_separator?: Maybe<Scalars['bpchar']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['smallint']>;
  /** Group delimiter, used to display large sums. Also knows as thousands separator. Default: "," */
  group_delimiter?: Maybe<Scalars['bpchar']>;
  /** Currency ISO 4217 code, 3 characters long. Primary key */
  id?: Maybe<Scalars['bpchar']>;
  /** Full currency name */
  name?: Maybe<Scalars['String']>;
  /** Currency symbol, prefixed when displayed. Eg: $ for US Dollar */
  symbol?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Currency_History_Min_Fields = {
  __typename?: 'currency_history_min_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Separator used to separate fractional units from full units. Default: "." */
  decimal_separator?: Maybe<Scalars['bpchar']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['smallint']>;
  /** Group delimiter, used to display large sums. Also knows as thousands separator. Default: "," */
  group_delimiter?: Maybe<Scalars['bpchar']>;
  /** Currency ISO 4217 code, 3 characters long. Primary key */
  id?: Maybe<Scalars['bpchar']>;
  /** Full currency name */
  name?: Maybe<Scalars['String']>;
  /** Currency symbol, prefixed when displayed. Eg: $ for US Dollar */
  symbol?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "currency_history" */
export type Currency_History_Mutation_Response = {
  __typename?: 'currency_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Currency_History>;
};

/** Ordering options when selecting data from "currency_history". */
export type Currency_History_Order_By = {
  created_by_user_id?: Maybe<Order_By>;
  decimal_separator?: Maybe<Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  fractional_units?: Maybe<Order_By>;
  group_delimiter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  symbol?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
};

/** select columns of table "currency_history" */
export enum Currency_History_Select_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DecimalSeparator = 'decimal_separator',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  FractionalUnits = 'fractional_units',
  /** column name */
  GroupDelimiter = 'group_delimiter',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** input type for updating data in table "currency_history" */
export type Currency_History_Set_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Separator used to separate fractional units from full units. Default: "." */
  decimal_separator?: Maybe<Scalars['bpchar']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['smallint']>;
  /** Group delimiter, used to display large sums. Also knows as thousands separator. Default: "," */
  group_delimiter?: Maybe<Scalars['bpchar']>;
  /** Currency ISO 4217 code, 3 characters long. Primary key */
  id?: Maybe<Scalars['bpchar']>;
  /** Full currency name */
  name?: Maybe<Scalars['String']>;
  /** Currency symbol, prefixed when displayed. Eg: $ for US Dollar */
  symbol?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Currency_History_Stddev_Fields = {
  __typename?: 'currency_history_stddev_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Currency_History_Stddev_Pop_Fields = {
  __typename?: 'currency_history_stddev_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Currency_History_Stddev_Samp_Fields = {
  __typename?: 'currency_history_stddev_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Currency_History_Sum_Fields = {
  __typename?: 'currency_history_sum_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['smallint']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Currency_History_Var_Pop_Fields = {
  __typename?: 'currency_history_var_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Currency_History_Var_Samp_Fields = {
  __typename?: 'currency_history_var_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Currency_History_Variance_Fields = {
  __typename?: 'currency_history_variance_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "currency" */
export type Currency_Inc_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['smallint']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "currency" */
export type Currency_Insert_Input = {
  account_currencies?: Maybe<Account_Currency_Arr_Rel_Insert_Input>;
  created_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  currencyExchangeRatesByTargetCurrencyId?: Maybe<Exchange_Rate_Arr_Rel_Insert_Input>;
  /** Separator used to separate fractional units from full units. Default: "." */
  decimal_separator?: Maybe<Scalars['bpchar']>;
  deleted_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  exchange_rates?: Maybe<Exchange_Rate_Arr_Rel_Insert_Input>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['smallint']>;
  /** Group delimiter, used to display large sums. Also knows as thousands separator. Default: "," */
  group_delimiter?: Maybe<Scalars['bpchar']>;
  /** Currency ISO 4217 code, 3 characters long. Primary key */
  id?: Maybe<Scalars['bpchar']>;
  journal_entry_lines?: Maybe<Journal_Entry_Line_Arr_Rel_Insert_Input>;
  /** Full currency name */
  name?: Maybe<Scalars['String']>;
  /** Currency symbol, prefixed when displayed. Eg: $ for US Dollar */
  symbol?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  updated_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Currency_Max_Fields = {
  __typename?: 'currency_max_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Separator used to separate fractional units from full units. Default: "." */
  decimal_separator?: Maybe<Scalars['bpchar']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['smallint']>;
  /** Group delimiter, used to display large sums. Also knows as thousands separator. Default: "," */
  group_delimiter?: Maybe<Scalars['bpchar']>;
  /** Currency ISO 4217 code, 3 characters long. Primary key */
  id?: Maybe<Scalars['bpchar']>;
  /** Full currency name */
  name?: Maybe<Scalars['String']>;
  /** Currency symbol, prefixed when displayed. Eg: $ for US Dollar */
  symbol?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Currency_Min_Fields = {
  __typename?: 'currency_min_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Separator used to separate fractional units from full units. Default: "." */
  decimal_separator?: Maybe<Scalars['bpchar']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['smallint']>;
  /** Group delimiter, used to display large sums. Also knows as thousands separator. Default: "," */
  group_delimiter?: Maybe<Scalars['bpchar']>;
  /** Currency ISO 4217 code, 3 characters long. Primary key */
  id?: Maybe<Scalars['bpchar']>;
  /** Full currency name */
  name?: Maybe<Scalars['String']>;
  /** Currency symbol, prefixed when displayed. Eg: $ for US Dollar */
  symbol?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "currency" */
export type Currency_Mutation_Response = {
  __typename?: 'currency_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Currency>;
};

/** input type for inserting object relation for remote table "currency" */
export type Currency_Obj_Rel_Insert_Input = {
  data: Currency_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Currency_On_Conflict>;
};

/** on conflict condition type for table "currency" */
export type Currency_On_Conflict = {
  constraint: Currency_Constraint;
  update_columns?: Array<Currency_Update_Column>;
  where?: Maybe<Currency_Bool_Exp>;
};

/** Ordering options when selecting data from "currency". */
export type Currency_Order_By = {
  account_currencies_aggregate?: Maybe<Account_Currency_Aggregate_Order_By>;
  created_by_user?: Maybe<User_Order_By>;
  created_by_user_id?: Maybe<Order_By>;
  currencyExchangeRatesByTargetCurrencyId_aggregate?: Maybe<Exchange_Rate_Aggregate_Order_By>;
  decimal_separator?: Maybe<Order_By>;
  deleted_by_user?: Maybe<User_Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  exchange_rates_aggregate?: Maybe<Exchange_Rate_Aggregate_Order_By>;
  fractional_units?: Maybe<Order_By>;
  group_delimiter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  journal_entry_lines_aggregate?: Maybe<Journal_Entry_Line_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  symbol?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  updated_by_user?: Maybe<User_Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: currency */
export type Currency_Pk_Columns_Input = {
  /** Currency ISO 4217 code, 3 characters long. Primary key */
  id: Scalars['bpchar'];
};

/** select columns of table "currency" */
export enum Currency_Select_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DecimalSeparator = 'decimal_separator',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  FractionalUnits = 'fractional_units',
  /** column name */
  GroupDelimiter = 'group_delimiter',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** input type for updating data in table "currency" */
export type Currency_Set_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Separator used to separate fractional units from full units. Default: "." */
  decimal_separator?: Maybe<Scalars['bpchar']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['smallint']>;
  /** Group delimiter, used to display large sums. Also knows as thousands separator. Default: "," */
  group_delimiter?: Maybe<Scalars['bpchar']>;
  /** Currency ISO 4217 code, 3 characters long. Primary key */
  id?: Maybe<Scalars['bpchar']>;
  /** Full currency name */
  name?: Maybe<Scalars['String']>;
  /** Currency symbol, prefixed when displayed. Eg: $ for US Dollar */
  symbol?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Currency_Stddev_Fields = {
  __typename?: 'currency_stddev_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Currency_Stddev_Pop_Fields = {
  __typename?: 'currency_stddev_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Currency_Stddev_Samp_Fields = {
  __typename?: 'currency_stddev_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Currency_Sum_Fields = {
  __typename?: 'currency_sum_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['smallint']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "currency" */
export enum Currency_Update_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DecimalSeparator = 'decimal_separator',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  FractionalUnits = 'fractional_units',
  /** column name */
  GroupDelimiter = 'group_delimiter',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** aggregate var_pop on columns */
export type Currency_Var_Pop_Fields = {
  __typename?: 'currency_var_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Currency_Var_Samp_Fields = {
  __typename?: 'currency_var_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Currency_Variance_Fields = {
  __typename?: 'currency_variance_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1 */
  fractional_units?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/**
 * Exchange Rate
 *
 *
 * columns and relationships of "exchange_rate"
 */
export type Exchange_Rate = {
  __typename?: 'exchange_rate';
  /** An object relationship */
  created_by_user?: Maybe<User>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  deleted_by_user?: Maybe<User>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Period during which this exchange rate will be valid. Multiple exchange rates can exist at the same time, but they may not overlap. */
  effective_period: Scalars['tstzrange'];
  /** Primary key */
  id: Scalars['Int'];
  /** An object relationship */
  source_currency: Currency;
  /** Currency we are converting from. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  source_currency_id: Scalars['bpchar'];
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate: Scalars['Int'];
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** An object relationship */
  target_currency: Currency;
  /** Currency we are converting to. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  target_currency_id: Scalars['bpchar'];
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate: Scalars['Int'];
  /** An object relationship */
  updated_by_user?: Maybe<User>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "exchange_rate" */
export type Exchange_Rate_Aggregate = {
  __typename?: 'exchange_rate_aggregate';
  aggregate?: Maybe<Exchange_Rate_Aggregate_Fields>;
  nodes: Array<Exchange_Rate>;
};

/** aggregate fields of "exchange_rate" */
export type Exchange_Rate_Aggregate_Fields = {
  __typename?: 'exchange_rate_aggregate_fields';
  avg?: Maybe<Exchange_Rate_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Exchange_Rate_Max_Fields>;
  min?: Maybe<Exchange_Rate_Min_Fields>;
  stddev?: Maybe<Exchange_Rate_Stddev_Fields>;
  stddev_pop?: Maybe<Exchange_Rate_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Exchange_Rate_Stddev_Samp_Fields>;
  sum?: Maybe<Exchange_Rate_Sum_Fields>;
  var_pop?: Maybe<Exchange_Rate_Var_Pop_Fields>;
  var_samp?: Maybe<Exchange_Rate_Var_Samp_Fields>;
  variance?: Maybe<Exchange_Rate_Variance_Fields>;
};


/** aggregate fields of "exchange_rate" */
export type Exchange_Rate_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Exchange_Rate_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "exchange_rate" */
export type Exchange_Rate_Aggregate_Order_By = {
  avg?: Maybe<Exchange_Rate_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Exchange_Rate_Max_Order_By>;
  min?: Maybe<Exchange_Rate_Min_Order_By>;
  stddev?: Maybe<Exchange_Rate_Stddev_Order_By>;
  stddev_pop?: Maybe<Exchange_Rate_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Exchange_Rate_Stddev_Samp_Order_By>;
  sum?: Maybe<Exchange_Rate_Sum_Order_By>;
  var_pop?: Maybe<Exchange_Rate_Var_Pop_Order_By>;
  var_samp?: Maybe<Exchange_Rate_Var_Samp_Order_By>;
  variance?: Maybe<Exchange_Rate_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "exchange_rate" */
export type Exchange_Rate_Arr_Rel_Insert_Input = {
  data: Array<Exchange_Rate_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Exchange_Rate_On_Conflict>;
};

/** aggregate avg on columns */
export type Exchange_Rate_Avg_Fields = {
  __typename?: 'exchange_rate_avg_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Float']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "exchange_rate" */
export type Exchange_Rate_Avg_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Order_By>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "exchange_rate". All fields are combined with a logical 'AND'. */
export type Exchange_Rate_Bool_Exp = {
  _and?: Maybe<Array<Exchange_Rate_Bool_Exp>>;
  _not?: Maybe<Exchange_Rate_Bool_Exp>;
  _or?: Maybe<Array<Exchange_Rate_Bool_Exp>>;
  created_by_user?: Maybe<User_Bool_Exp>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  deleted_by_user?: Maybe<User_Bool_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  effective_period?: Maybe<Tstzrange_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  source_currency?: Maybe<Currency_Bool_Exp>;
  source_currency_id?: Maybe<Bpchar_Comparison_Exp>;
  source_currency_rate?: Maybe<Int_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  target_currency?: Maybe<Currency_Bool_Exp>;
  target_currency_id?: Maybe<Bpchar_Comparison_Exp>;
  target_currency_rate?: Maybe<Int_Comparison_Exp>;
  updated_by_user?: Maybe<User_Bool_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "exchange_rate" */
export enum Exchange_Rate_Constraint {
  /** unique or primary key constraint */
  ExchangeRatePkey = 'exchange_rate_pkey'
}

/**
 * Exchange Rate History
 *
 *
 * columns and relationships of "exchange_rate_history"
 */
export type Exchange_Rate_History = {
  __typename?: 'exchange_rate_history';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Period during which this exchange rate will be valid. Multiple exchange rates can exist at the same time, but they may not overlap. */
  effective_period: Scalars['tstzrange'];
  /** Primary key */
  id: Scalars['Int'];
  /** Currency we are converting from. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  source_currency_id: Scalars['bpchar'];
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate: Scalars['Int'];
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** Currency we are converting to. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  target_currency_id: Scalars['bpchar'];
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate: Scalars['Int'];
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "exchange_rate_history" */
export type Exchange_Rate_History_Aggregate = {
  __typename?: 'exchange_rate_history_aggregate';
  aggregate?: Maybe<Exchange_Rate_History_Aggregate_Fields>;
  nodes: Array<Exchange_Rate_History>;
};

/** aggregate fields of "exchange_rate_history" */
export type Exchange_Rate_History_Aggregate_Fields = {
  __typename?: 'exchange_rate_history_aggregate_fields';
  avg?: Maybe<Exchange_Rate_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Exchange_Rate_History_Max_Fields>;
  min?: Maybe<Exchange_Rate_History_Min_Fields>;
  stddev?: Maybe<Exchange_Rate_History_Stddev_Fields>;
  stddev_pop?: Maybe<Exchange_Rate_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Exchange_Rate_History_Stddev_Samp_Fields>;
  sum?: Maybe<Exchange_Rate_History_Sum_Fields>;
  var_pop?: Maybe<Exchange_Rate_History_Var_Pop_Fields>;
  var_samp?: Maybe<Exchange_Rate_History_Var_Samp_Fields>;
  variance?: Maybe<Exchange_Rate_History_Variance_Fields>;
};


/** aggregate fields of "exchange_rate_history" */
export type Exchange_Rate_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Exchange_Rate_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Exchange_Rate_History_Avg_Fields = {
  __typename?: 'exchange_rate_history_avg_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Float']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "exchange_rate_history". All fields are combined with a logical 'AND'. */
export type Exchange_Rate_History_Bool_Exp = {
  _and?: Maybe<Array<Exchange_Rate_History_Bool_Exp>>;
  _not?: Maybe<Exchange_Rate_History_Bool_Exp>;
  _or?: Maybe<Array<Exchange_Rate_History_Bool_Exp>>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  effective_period?: Maybe<Tstzrange_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  source_currency_id?: Maybe<Bpchar_Comparison_Exp>;
  source_currency_rate?: Maybe<Int_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  target_currency_id?: Maybe<Bpchar_Comparison_Exp>;
  target_currency_rate?: Maybe<Int_Comparison_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "exchange_rate_history" */
export type Exchange_Rate_History_Inc_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Int']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "exchange_rate_history" */
export type Exchange_Rate_History_Insert_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Period during which this exchange rate will be valid. Multiple exchange rates can exist at the same time, but they may not overlap. */
  effective_period?: Maybe<Scalars['tstzrange']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Currency we are converting from. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  source_currency_id?: Maybe<Scalars['bpchar']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** Currency we are converting to. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  target_currency_id?: Maybe<Scalars['bpchar']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Exchange_Rate_History_Max_Fields = {
  __typename?: 'exchange_rate_history_max_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Currency we are converting from. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  source_currency_id?: Maybe<Scalars['bpchar']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Int']>;
  /** Currency we are converting to. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  target_currency_id?: Maybe<Scalars['bpchar']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Exchange_Rate_History_Min_Fields = {
  __typename?: 'exchange_rate_history_min_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Currency we are converting from. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  source_currency_id?: Maybe<Scalars['bpchar']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Int']>;
  /** Currency we are converting to. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  target_currency_id?: Maybe<Scalars['bpchar']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "exchange_rate_history" */
export type Exchange_Rate_History_Mutation_Response = {
  __typename?: 'exchange_rate_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Exchange_Rate_History>;
};

/** Ordering options when selecting data from "exchange_rate_history". */
export type Exchange_Rate_History_Order_By = {
  created_by_user_id?: Maybe<Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  effective_period?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  source_currency_id?: Maybe<Order_By>;
  source_currency_rate?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  target_currency_id?: Maybe<Order_By>;
  target_currency_rate?: Maybe<Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
};

/** select columns of table "exchange_rate_history" */
export enum Exchange_Rate_History_Select_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  EffectivePeriod = 'effective_period',
  /** column name */
  Id = 'id',
  /** column name */
  SourceCurrencyId = 'source_currency_id',
  /** column name */
  SourceCurrencyRate = 'source_currency_rate',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  TargetCurrencyId = 'target_currency_id',
  /** column name */
  TargetCurrencyRate = 'target_currency_rate',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** input type for updating data in table "exchange_rate_history" */
export type Exchange_Rate_History_Set_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Period during which this exchange rate will be valid. Multiple exchange rates can exist at the same time, but they may not overlap. */
  effective_period?: Maybe<Scalars['tstzrange']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Currency we are converting from. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  source_currency_id?: Maybe<Scalars['bpchar']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** Currency we are converting to. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  target_currency_id?: Maybe<Scalars['bpchar']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Exchange_Rate_History_Stddev_Fields = {
  __typename?: 'exchange_rate_history_stddev_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Float']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Exchange_Rate_History_Stddev_Pop_Fields = {
  __typename?: 'exchange_rate_history_stddev_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Float']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Exchange_Rate_History_Stddev_Samp_Fields = {
  __typename?: 'exchange_rate_history_stddev_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Float']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Exchange_Rate_History_Sum_Fields = {
  __typename?: 'exchange_rate_history_sum_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Int']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Exchange_Rate_History_Var_Pop_Fields = {
  __typename?: 'exchange_rate_history_var_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Float']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Exchange_Rate_History_Var_Samp_Fields = {
  __typename?: 'exchange_rate_history_var_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Float']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Exchange_Rate_History_Variance_Fields = {
  __typename?: 'exchange_rate_history_variance_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Float']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "exchange_rate" */
export type Exchange_Rate_Inc_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Int']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "exchange_rate" */
export type Exchange_Rate_Insert_Input = {
  created_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  deleted_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Period during which this exchange rate will be valid. Multiple exchange rates can exist at the same time, but they may not overlap. */
  effective_period?: Maybe<Scalars['tstzrange']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  source_currency?: Maybe<Currency_Obj_Rel_Insert_Input>;
  /** Currency we are converting from. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  source_currency_id?: Maybe<Scalars['bpchar']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  target_currency?: Maybe<Currency_Obj_Rel_Insert_Input>;
  /** Currency we are converting to. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  target_currency_id?: Maybe<Scalars['bpchar']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Int']>;
  updated_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Exchange_Rate_Max_Fields = {
  __typename?: 'exchange_rate_max_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Currency we are converting from. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  source_currency_id?: Maybe<Scalars['bpchar']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Int']>;
  /** Currency we are converting to. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  target_currency_id?: Maybe<Scalars['bpchar']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "exchange_rate" */
export type Exchange_Rate_Max_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Currency we are converting from. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  source_currency_id?: Maybe<Order_By>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Order_By>;
  /** Currency we are converting to. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  target_currency_id?: Maybe<Order_By>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Exchange_Rate_Min_Fields = {
  __typename?: 'exchange_rate_min_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Currency we are converting from. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  source_currency_id?: Maybe<Scalars['bpchar']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Int']>;
  /** Currency we are converting to. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  target_currency_id?: Maybe<Scalars['bpchar']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "exchange_rate" */
export type Exchange_Rate_Min_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Currency we are converting from. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  source_currency_id?: Maybe<Order_By>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Order_By>;
  /** Currency we are converting to. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  target_currency_id?: Maybe<Order_By>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "exchange_rate" */
export type Exchange_Rate_Mutation_Response = {
  __typename?: 'exchange_rate_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Exchange_Rate>;
};

/** on conflict condition type for table "exchange_rate" */
export type Exchange_Rate_On_Conflict = {
  constraint: Exchange_Rate_Constraint;
  update_columns?: Array<Exchange_Rate_Update_Column>;
  where?: Maybe<Exchange_Rate_Bool_Exp>;
};

/** Ordering options when selecting data from "exchange_rate". */
export type Exchange_Rate_Order_By = {
  created_by_user?: Maybe<User_Order_By>;
  created_by_user_id?: Maybe<Order_By>;
  deleted_by_user?: Maybe<User_Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  effective_period?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  source_currency?: Maybe<Currency_Order_By>;
  source_currency_id?: Maybe<Order_By>;
  source_currency_rate?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  target_currency?: Maybe<Currency_Order_By>;
  target_currency_id?: Maybe<Order_By>;
  target_currency_rate?: Maybe<Order_By>;
  updated_by_user?: Maybe<User_Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: exchange_rate */
export type Exchange_Rate_Pk_Columns_Input = {
  /** Primary key */
  id: Scalars['Int'];
};

/** select columns of table "exchange_rate" */
export enum Exchange_Rate_Select_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  EffectivePeriod = 'effective_period',
  /** column name */
  Id = 'id',
  /** column name */
  SourceCurrencyId = 'source_currency_id',
  /** column name */
  SourceCurrencyRate = 'source_currency_rate',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  TargetCurrencyId = 'target_currency_id',
  /** column name */
  TargetCurrencyRate = 'target_currency_rate',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** input type for updating data in table "exchange_rate" */
export type Exchange_Rate_Set_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Period during which this exchange rate will be valid. Multiple exchange rates can exist at the same time, but they may not overlap. */
  effective_period?: Maybe<Scalars['tstzrange']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Currency we are converting from. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  source_currency_id?: Maybe<Scalars['bpchar']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** Currency we are converting to. Foreign Key to currency table, Currency ISO 4217 code, 3 characters long. */
  target_currency_id?: Maybe<Scalars['bpchar']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Exchange_Rate_Stddev_Fields = {
  __typename?: 'exchange_rate_stddev_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Float']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "exchange_rate" */
export type Exchange_Rate_Stddev_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Order_By>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Exchange_Rate_Stddev_Pop_Fields = {
  __typename?: 'exchange_rate_stddev_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Float']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "exchange_rate" */
export type Exchange_Rate_Stddev_Pop_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Order_By>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Exchange_Rate_Stddev_Samp_Fields = {
  __typename?: 'exchange_rate_stddev_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Float']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "exchange_rate" */
export type Exchange_Rate_Stddev_Samp_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Order_By>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Exchange_Rate_Sum_Fields = {
  __typename?: 'exchange_rate_sum_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Int']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "exchange_rate" */
export type Exchange_Rate_Sum_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Order_By>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** update columns of table "exchange_rate" */
export enum Exchange_Rate_Update_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  EffectivePeriod = 'effective_period',
  /** column name */
  Id = 'id',
  /** column name */
  SourceCurrencyId = 'source_currency_id',
  /** column name */
  SourceCurrencyRate = 'source_currency_rate',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  TargetCurrencyId = 'target_currency_id',
  /** column name */
  TargetCurrencyRate = 'target_currency_rate',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** aggregate var_pop on columns */
export type Exchange_Rate_Var_Pop_Fields = {
  __typename?: 'exchange_rate_var_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Float']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "exchange_rate" */
export type Exchange_Rate_Var_Pop_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Order_By>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Exchange_Rate_Var_Samp_Fields = {
  __typename?: 'exchange_rate_var_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Float']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "exchange_rate" */
export type Exchange_Rate_Var_Samp_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Order_By>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Exchange_Rate_Variance_Fields = {
  __typename?: 'exchange_rate_variance_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Scalars['Float']>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "exchange_rate" */
export type Exchange_Rate_Variance_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Fractional units of the source currency equal to fractiona units of the target currency in target_currency_rate. Must be greater than 0. */
  source_currency_rate?: Maybe<Order_By>;
  /** Fractional units of the target currency equal to fractiona units of the source currency in source_currency_rate. Must be greater than 0. */
  target_currency_rate?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/**
 * Journal Entry
 *
 *
 * columns and relationships of "journal_entry"
 */
export type Journal_Entry = {
  __typename?: 'journal_entry';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Description for the entry */
  description?: Maybe<Scalars['String']>;
  /** Primary key */
  id: Scalars['Int'];
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** When the transaction happened. Not necesarily the same as when the transaction was registered to the system. */
  transaction_timestamp: Scalars['timestamptz'];
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  user?: Maybe<User>;
  /** An object relationship */
  userByDeletedByUserId?: Maybe<User>;
  /** An object relationship */
  userByUpdatedByUserId?: Maybe<User>;
};

/** aggregated selection of "journal_entry" */
export type Journal_Entry_Aggregate = {
  __typename?: 'journal_entry_aggregate';
  aggregate?: Maybe<Journal_Entry_Aggregate_Fields>;
  nodes: Array<Journal_Entry>;
};

/** aggregate fields of "journal_entry" */
export type Journal_Entry_Aggregate_Fields = {
  __typename?: 'journal_entry_aggregate_fields';
  avg?: Maybe<Journal_Entry_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Journal_Entry_Max_Fields>;
  min?: Maybe<Journal_Entry_Min_Fields>;
  stddev?: Maybe<Journal_Entry_Stddev_Fields>;
  stddev_pop?: Maybe<Journal_Entry_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Journal_Entry_Stddev_Samp_Fields>;
  sum?: Maybe<Journal_Entry_Sum_Fields>;
  var_pop?: Maybe<Journal_Entry_Var_Pop_Fields>;
  var_samp?: Maybe<Journal_Entry_Var_Samp_Fields>;
  variance?: Maybe<Journal_Entry_Variance_Fields>;
};


/** aggregate fields of "journal_entry" */
export type Journal_Entry_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Journal_Entry_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Journal_Entry_Avg_Fields = {
  __typename?: 'journal_entry_avg_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "journal_entry". All fields are combined with a logical 'AND'. */
export type Journal_Entry_Bool_Exp = {
  _and?: Maybe<Array<Journal_Entry_Bool_Exp>>;
  _not?: Maybe<Journal_Entry_Bool_Exp>;
  _or?: Maybe<Array<Journal_Entry_Bool_Exp>>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  transaction_timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userByDeletedByUserId?: Maybe<User_Bool_Exp>;
  userByUpdatedByUserId?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "journal_entry" */
export enum Journal_Entry_Constraint {
  /** unique or primary key constraint */
  JournalEntryPkey = 'journal_entry_pkey'
}

/**
 * Journal Entry History
 *
 *
 * columns and relationships of "journal_entry_history"
 */
export type Journal_Entry_History = {
  __typename?: 'journal_entry_history';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Description for the entry */
  description?: Maybe<Scalars['String']>;
  /** Primary key */
  id: Scalars['Int'];
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** When the transaction happened. Not necesarily the same as when the transaction was registered to the system. */
  transaction_timestamp: Scalars['timestamptz'];
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "journal_entry_history" */
export type Journal_Entry_History_Aggregate = {
  __typename?: 'journal_entry_history_aggregate';
  aggregate?: Maybe<Journal_Entry_History_Aggregate_Fields>;
  nodes: Array<Journal_Entry_History>;
};

/** aggregate fields of "journal_entry_history" */
export type Journal_Entry_History_Aggregate_Fields = {
  __typename?: 'journal_entry_history_aggregate_fields';
  avg?: Maybe<Journal_Entry_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Journal_Entry_History_Max_Fields>;
  min?: Maybe<Journal_Entry_History_Min_Fields>;
  stddev?: Maybe<Journal_Entry_History_Stddev_Fields>;
  stddev_pop?: Maybe<Journal_Entry_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Journal_Entry_History_Stddev_Samp_Fields>;
  sum?: Maybe<Journal_Entry_History_Sum_Fields>;
  var_pop?: Maybe<Journal_Entry_History_Var_Pop_Fields>;
  var_samp?: Maybe<Journal_Entry_History_Var_Samp_Fields>;
  variance?: Maybe<Journal_Entry_History_Variance_Fields>;
};


/** aggregate fields of "journal_entry_history" */
export type Journal_Entry_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Journal_Entry_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Journal_Entry_History_Avg_Fields = {
  __typename?: 'journal_entry_history_avg_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "journal_entry_history". All fields are combined with a logical 'AND'. */
export type Journal_Entry_History_Bool_Exp = {
  _and?: Maybe<Array<Journal_Entry_History_Bool_Exp>>;
  _not?: Maybe<Journal_Entry_History_Bool_Exp>;
  _or?: Maybe<Array<Journal_Entry_History_Bool_Exp>>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  transaction_timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "journal_entry_history" */
export type Journal_Entry_History_Inc_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "journal_entry_history" */
export type Journal_Entry_History_Insert_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Description for the entry */
  description?: Maybe<Scalars['String']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** When the transaction happened. Not necesarily the same as when the transaction was registered to the system. */
  transaction_timestamp?: Maybe<Scalars['timestamptz']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Journal_Entry_History_Max_Fields = {
  __typename?: 'journal_entry_history_max_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Description for the entry */
  description?: Maybe<Scalars['String']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** When the transaction happened. Not necesarily the same as when the transaction was registered to the system. */
  transaction_timestamp?: Maybe<Scalars['timestamptz']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Journal_Entry_History_Min_Fields = {
  __typename?: 'journal_entry_history_min_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Description for the entry */
  description?: Maybe<Scalars['String']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** When the transaction happened. Not necesarily the same as when the transaction was registered to the system. */
  transaction_timestamp?: Maybe<Scalars['timestamptz']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "journal_entry_history" */
export type Journal_Entry_History_Mutation_Response = {
  __typename?: 'journal_entry_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Journal_Entry_History>;
};

/** Ordering options when selecting data from "journal_entry_history". */
export type Journal_Entry_History_Order_By = {
  created_by_user_id?: Maybe<Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  transaction_timestamp?: Maybe<Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
};

/** select columns of table "journal_entry_history" */
export enum Journal_Entry_History_Select_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  TransactionTimestamp = 'transaction_timestamp',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** input type for updating data in table "journal_entry_history" */
export type Journal_Entry_History_Set_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Description for the entry */
  description?: Maybe<Scalars['String']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** When the transaction happened. Not necesarily the same as when the transaction was registered to the system. */
  transaction_timestamp?: Maybe<Scalars['timestamptz']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Journal_Entry_History_Stddev_Fields = {
  __typename?: 'journal_entry_history_stddev_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Journal_Entry_History_Stddev_Pop_Fields = {
  __typename?: 'journal_entry_history_stddev_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Journal_Entry_History_Stddev_Samp_Fields = {
  __typename?: 'journal_entry_history_stddev_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Journal_Entry_History_Sum_Fields = {
  __typename?: 'journal_entry_history_sum_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Journal_Entry_History_Var_Pop_Fields = {
  __typename?: 'journal_entry_history_var_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Journal_Entry_History_Var_Samp_Fields = {
  __typename?: 'journal_entry_history_var_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Journal_Entry_History_Variance_Fields = {
  __typename?: 'journal_entry_history_variance_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "journal_entry" */
export type Journal_Entry_Inc_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "journal_entry" */
export type Journal_Entry_Insert_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Description for the entry */
  description?: Maybe<Scalars['String']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** When the transaction happened. Not necesarily the same as when the transaction was registered to the system. */
  transaction_timestamp?: Maybe<Scalars['timestamptz']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  userByDeletedByUserId?: Maybe<User_Obj_Rel_Insert_Input>;
  userByUpdatedByUserId?: Maybe<User_Obj_Rel_Insert_Input>;
};

/**
 * Journal Entry
 *
 *
 * columns and relationships of "journal_entry_line"
 */
export type Journal_Entry_Line = {
  __typename?: 'journal_entry_line';
  /** An object relationship */
  account: Account;
  /** An object relationship */
  account_currency?: Maybe<Account_Currency>;
  /** Account affected by this line. Foreign key. */
  account_id: Scalars['Int'];
  /** An object relationship */
  created_by_user?: Maybe<User>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['bigint']>;
  /** An object relationship */
  currency: Currency;
  /** Currency affected by this line. Foreign key. */
  currency_id: Scalars['bpchar'];
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['bigint']>;
  /** An object relationship */
  deleted_by_user?: Maybe<User>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id: Scalars['Int'];
  /** Index of line within parent journal entry. */
  index: Scalars['Int'];
  /** Parent journal entry id. Foreign Key */
  journal_entry_id: Scalars['Int'];
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** An object relationship */
  updated_by_user?: Maybe<User>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "journal_entry_line" */
export type Journal_Entry_Line_Aggregate = {
  __typename?: 'journal_entry_line_aggregate';
  aggregate?: Maybe<Journal_Entry_Line_Aggregate_Fields>;
  nodes: Array<Journal_Entry_Line>;
};

/** aggregate fields of "journal_entry_line" */
export type Journal_Entry_Line_Aggregate_Fields = {
  __typename?: 'journal_entry_line_aggregate_fields';
  avg?: Maybe<Journal_Entry_Line_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Journal_Entry_Line_Max_Fields>;
  min?: Maybe<Journal_Entry_Line_Min_Fields>;
  stddev?: Maybe<Journal_Entry_Line_Stddev_Fields>;
  stddev_pop?: Maybe<Journal_Entry_Line_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Journal_Entry_Line_Stddev_Samp_Fields>;
  sum?: Maybe<Journal_Entry_Line_Sum_Fields>;
  var_pop?: Maybe<Journal_Entry_Line_Var_Pop_Fields>;
  var_samp?: Maybe<Journal_Entry_Line_Var_Samp_Fields>;
  variance?: Maybe<Journal_Entry_Line_Variance_Fields>;
};


/** aggregate fields of "journal_entry_line" */
export type Journal_Entry_Line_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Journal_Entry_Line_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "journal_entry_line" */
export type Journal_Entry_Line_Aggregate_Order_By = {
  avg?: Maybe<Journal_Entry_Line_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Journal_Entry_Line_Max_Order_By>;
  min?: Maybe<Journal_Entry_Line_Min_Order_By>;
  stddev?: Maybe<Journal_Entry_Line_Stddev_Order_By>;
  stddev_pop?: Maybe<Journal_Entry_Line_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Journal_Entry_Line_Stddev_Samp_Order_By>;
  sum?: Maybe<Journal_Entry_Line_Sum_Order_By>;
  var_pop?: Maybe<Journal_Entry_Line_Var_Pop_Order_By>;
  var_samp?: Maybe<Journal_Entry_Line_Var_Samp_Order_By>;
  variance?: Maybe<Journal_Entry_Line_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "journal_entry_line" */
export type Journal_Entry_Line_Arr_Rel_Insert_Input = {
  data: Array<Journal_Entry_Line_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Journal_Entry_Line_On_Conflict>;
};

/** aggregate avg on columns */
export type Journal_Entry_Line_Avg_Fields = {
  __typename?: 'journal_entry_line_avg_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['Float']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Float']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "journal_entry_line" */
export type Journal_Entry_Line_Avg_Order_By = {
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Order_By>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Order_By>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "journal_entry_line". All fields are combined with a logical 'AND'. */
export type Journal_Entry_Line_Bool_Exp = {
  _and?: Maybe<Array<Journal_Entry_Line_Bool_Exp>>;
  _not?: Maybe<Journal_Entry_Line_Bool_Exp>;
  _or?: Maybe<Array<Journal_Entry_Line_Bool_Exp>>;
  account?: Maybe<Account_Bool_Exp>;
  account_currency?: Maybe<Account_Currency_Bool_Exp>;
  account_id?: Maybe<Int_Comparison_Exp>;
  created_by_user?: Maybe<User_Bool_Exp>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  credit?: Maybe<Bigint_Comparison_Exp>;
  currency?: Maybe<Currency_Bool_Exp>;
  currency_id?: Maybe<Bpchar_Comparison_Exp>;
  debit?: Maybe<Bigint_Comparison_Exp>;
  deleted_by_user?: Maybe<User_Bool_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  index?: Maybe<Int_Comparison_Exp>;
  journal_entry_id?: Maybe<Int_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  updated_by_user?: Maybe<User_Bool_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "journal_entry_line" */
export enum Journal_Entry_Line_Constraint {
  /** unique or primary key constraint */
  JournalEntryLineIdIndexKey = 'journal_entry_line_id_index_key',
  /** unique or primary key constraint */
  JournalEntryLinePkey = 'journal_entry_line_pkey'
}

/**
 * Journal Entry History
 *
 *
 * columns and relationships of "journal_entry_line_history"
 */
export type Journal_Entry_Line_History = {
  __typename?: 'journal_entry_line_history';
  /** Account affected by this line. Foreign key. */
  account_id: Scalars['Int'];
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['bigint']>;
  /** Currency affected by this line. Foreign key. */
  currency_id: Scalars['bpchar'];
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['bigint']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id: Scalars['Int'];
  /** Index of line within parent journal entry. */
  index: Scalars['Int'];
  /** Parent journal entry id. Foreign Key */
  journal_entry_id: Scalars['Int'];
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "journal_entry_line_history" */
export type Journal_Entry_Line_History_Aggregate = {
  __typename?: 'journal_entry_line_history_aggregate';
  aggregate?: Maybe<Journal_Entry_Line_History_Aggregate_Fields>;
  nodes: Array<Journal_Entry_Line_History>;
};

/** aggregate fields of "journal_entry_line_history" */
export type Journal_Entry_Line_History_Aggregate_Fields = {
  __typename?: 'journal_entry_line_history_aggregate_fields';
  avg?: Maybe<Journal_Entry_Line_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Journal_Entry_Line_History_Max_Fields>;
  min?: Maybe<Journal_Entry_Line_History_Min_Fields>;
  stddev?: Maybe<Journal_Entry_Line_History_Stddev_Fields>;
  stddev_pop?: Maybe<Journal_Entry_Line_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Journal_Entry_Line_History_Stddev_Samp_Fields>;
  sum?: Maybe<Journal_Entry_Line_History_Sum_Fields>;
  var_pop?: Maybe<Journal_Entry_Line_History_Var_Pop_Fields>;
  var_samp?: Maybe<Journal_Entry_Line_History_Var_Samp_Fields>;
  variance?: Maybe<Journal_Entry_Line_History_Variance_Fields>;
};


/** aggregate fields of "journal_entry_line_history" */
export type Journal_Entry_Line_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Journal_Entry_Line_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Journal_Entry_Line_History_Avg_Fields = {
  __typename?: 'journal_entry_line_history_avg_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['Float']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Float']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "journal_entry_line_history". All fields are combined with a logical 'AND'. */
export type Journal_Entry_Line_History_Bool_Exp = {
  _and?: Maybe<Array<Journal_Entry_Line_History_Bool_Exp>>;
  _not?: Maybe<Journal_Entry_Line_History_Bool_Exp>;
  _or?: Maybe<Array<Journal_Entry_Line_History_Bool_Exp>>;
  account_id?: Maybe<Int_Comparison_Exp>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  credit?: Maybe<Bigint_Comparison_Exp>;
  currency_id?: Maybe<Bpchar_Comparison_Exp>;
  debit?: Maybe<Bigint_Comparison_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  index?: Maybe<Int_Comparison_Exp>;
  journal_entry_id?: Maybe<Int_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "journal_entry_line_history" */
export type Journal_Entry_Line_History_Inc_Input = {
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['bigint']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['bigint']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Int']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "journal_entry_line_history" */
export type Journal_Entry_Line_History_Insert_Input = {
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['bigint']>;
  /** Currency affected by this line. Foreign key. */
  currency_id?: Maybe<Scalars['bpchar']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['bigint']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Int']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Journal_Entry_Line_History_Max_Fields = {
  __typename?: 'journal_entry_line_history_max_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['bigint']>;
  /** Currency affected by this line. Foreign key. */
  currency_id?: Maybe<Scalars['bpchar']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['bigint']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Int']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Journal_Entry_Line_History_Min_Fields = {
  __typename?: 'journal_entry_line_history_min_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['bigint']>;
  /** Currency affected by this line. Foreign key. */
  currency_id?: Maybe<Scalars['bpchar']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['bigint']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Int']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "journal_entry_line_history" */
export type Journal_Entry_Line_History_Mutation_Response = {
  __typename?: 'journal_entry_line_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Journal_Entry_Line_History>;
};

/** Ordering options when selecting data from "journal_entry_line_history". */
export type Journal_Entry_Line_History_Order_By = {
  account_id?: Maybe<Order_By>;
  created_by_user_id?: Maybe<Order_By>;
  credit?: Maybe<Order_By>;
  currency_id?: Maybe<Order_By>;
  debit?: Maybe<Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  journal_entry_id?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
};

/** select columns of table "journal_entry_line_history" */
export enum Journal_Entry_Line_History_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  Credit = 'credit',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Debit = 'debit',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  JournalEntryId = 'journal_entry_id',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** input type for updating data in table "journal_entry_line_history" */
export type Journal_Entry_Line_History_Set_Input = {
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['bigint']>;
  /** Currency affected by this line. Foreign key. */
  currency_id?: Maybe<Scalars['bpchar']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['bigint']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Int']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Journal_Entry_Line_History_Stddev_Fields = {
  __typename?: 'journal_entry_line_history_stddev_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['Float']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Float']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Journal_Entry_Line_History_Stddev_Pop_Fields = {
  __typename?: 'journal_entry_line_history_stddev_pop_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['Float']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Float']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Journal_Entry_Line_History_Stddev_Samp_Fields = {
  __typename?: 'journal_entry_line_history_stddev_samp_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['Float']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Float']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Journal_Entry_Line_History_Sum_Fields = {
  __typename?: 'journal_entry_line_history_sum_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['bigint']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['bigint']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Int']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Journal_Entry_Line_History_Var_Pop_Fields = {
  __typename?: 'journal_entry_line_history_var_pop_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['Float']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Float']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Journal_Entry_Line_History_Var_Samp_Fields = {
  __typename?: 'journal_entry_line_history_var_samp_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['Float']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Float']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Journal_Entry_Line_History_Variance_Fields = {
  __typename?: 'journal_entry_line_history_variance_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['Float']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Float']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "journal_entry_line" */
export type Journal_Entry_Line_Inc_Input = {
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['bigint']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['bigint']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Int']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "journal_entry_line" */
export type Journal_Entry_Line_Insert_Input = {
  account?: Maybe<Account_Obj_Rel_Insert_Input>;
  account_currency?: Maybe<Account_Currency_Obj_Rel_Insert_Input>;
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Int']>;
  created_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['bigint']>;
  currency?: Maybe<Currency_Obj_Rel_Insert_Input>;
  /** Currency affected by this line. Foreign key. */
  currency_id?: Maybe<Scalars['bpchar']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['bigint']>;
  deleted_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Int']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  updated_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Journal_Entry_Line_Max_Fields = {
  __typename?: 'journal_entry_line_max_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['bigint']>;
  /** Currency affected by this line. Foreign key. */
  currency_id?: Maybe<Scalars['bpchar']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['bigint']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Int']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "journal_entry_line" */
export type Journal_Entry_Line_Max_Order_By = {
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Order_By>;
  /** Currency affected by this line. Foreign key. */
  currency_id?: Maybe<Order_By>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Order_By>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Journal_Entry_Line_Min_Fields = {
  __typename?: 'journal_entry_line_min_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['bigint']>;
  /** Currency affected by this line. Foreign key. */
  currency_id?: Maybe<Scalars['bpchar']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['bigint']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Int']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "journal_entry_line" */
export type Journal_Entry_Line_Min_Order_By = {
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Order_By>;
  /** Currency affected by this line. Foreign key. */
  currency_id?: Maybe<Order_By>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Order_By>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "journal_entry_line" */
export type Journal_Entry_Line_Mutation_Response = {
  __typename?: 'journal_entry_line_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Journal_Entry_Line>;
};

/** on conflict condition type for table "journal_entry_line" */
export type Journal_Entry_Line_On_Conflict = {
  constraint: Journal_Entry_Line_Constraint;
  update_columns?: Array<Journal_Entry_Line_Update_Column>;
  where?: Maybe<Journal_Entry_Line_Bool_Exp>;
};

/** Ordering options when selecting data from "journal_entry_line". */
export type Journal_Entry_Line_Order_By = {
  account?: Maybe<Account_Order_By>;
  account_currency?: Maybe<Account_Currency_Order_By>;
  account_id?: Maybe<Order_By>;
  created_by_user?: Maybe<User_Order_By>;
  created_by_user_id?: Maybe<Order_By>;
  credit?: Maybe<Order_By>;
  currency?: Maybe<Currency_Order_By>;
  currency_id?: Maybe<Order_By>;
  debit?: Maybe<Order_By>;
  deleted_by_user?: Maybe<User_Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  journal_entry_id?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  updated_by_user?: Maybe<User_Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: journal_entry_line */
export type Journal_Entry_Line_Pk_Columns_Input = {
  /** Primary key */
  id: Scalars['Int'];
};

/** select columns of table "journal_entry_line" */
export enum Journal_Entry_Line_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  Credit = 'credit',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Debit = 'debit',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  JournalEntryId = 'journal_entry_id',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** input type for updating data in table "journal_entry_line" */
export type Journal_Entry_Line_Set_Input = {
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['bigint']>;
  /** Currency affected by this line. Foreign key. */
  currency_id?: Maybe<Scalars['bpchar']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['bigint']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Int']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Journal_Entry_Line_Stddev_Fields = {
  __typename?: 'journal_entry_line_stddev_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['Float']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Float']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "journal_entry_line" */
export type Journal_Entry_Line_Stddev_Order_By = {
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Order_By>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Order_By>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Journal_Entry_Line_Stddev_Pop_Fields = {
  __typename?: 'journal_entry_line_stddev_pop_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['Float']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Float']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "journal_entry_line" */
export type Journal_Entry_Line_Stddev_Pop_Order_By = {
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Order_By>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Order_By>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Journal_Entry_Line_Stddev_Samp_Fields = {
  __typename?: 'journal_entry_line_stddev_samp_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['Float']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Float']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "journal_entry_line" */
export type Journal_Entry_Line_Stddev_Samp_Order_By = {
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Order_By>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Order_By>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Journal_Entry_Line_Sum_Fields = {
  __typename?: 'journal_entry_line_sum_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Int']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['bigint']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['bigint']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Int']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "journal_entry_line" */
export type Journal_Entry_Line_Sum_Order_By = {
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Order_By>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Order_By>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** update columns of table "journal_entry_line" */
export enum Journal_Entry_Line_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  Credit = 'credit',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Debit = 'debit',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  JournalEntryId = 'journal_entry_id',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** aggregate var_pop on columns */
export type Journal_Entry_Line_Var_Pop_Fields = {
  __typename?: 'journal_entry_line_var_pop_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['Float']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Float']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "journal_entry_line" */
export type Journal_Entry_Line_Var_Pop_Order_By = {
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Order_By>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Order_By>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Journal_Entry_Line_Var_Samp_Fields = {
  __typename?: 'journal_entry_line_var_samp_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['Float']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Float']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "journal_entry_line" */
export type Journal_Entry_Line_Var_Samp_Order_By = {
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Order_By>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Order_By>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Journal_Entry_Line_Variance_Fields = {
  __typename?: 'journal_entry_line_variance_fields';
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Scalars['Float']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Scalars['Float']>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Scalars['Float']>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "journal_entry_line" */
export type Journal_Entry_Line_Variance_Order_By = {
  /** Account affected by this line. Foreign key. */
  account_id?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** Credited ammount. Either debit or credit must be non null, and they cannot be equal. */
  credit?: Maybe<Order_By>;
  /** Debited ammount. Either debit or credit must be non null, and they cannot be equal. */
  debit?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary key */
  id?: Maybe<Order_By>;
  /** Index of line within parent journal entry. */
  index?: Maybe<Order_By>;
  /** Parent journal entry id. Foreign Key */
  journal_entry_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate max on columns */
export type Journal_Entry_Max_Fields = {
  __typename?: 'journal_entry_max_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Description for the entry */
  description?: Maybe<Scalars['String']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** When the transaction happened. Not necesarily the same as when the transaction was registered to the system. */
  transaction_timestamp?: Maybe<Scalars['timestamptz']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Journal_Entry_Min_Fields = {
  __typename?: 'journal_entry_min_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Description for the entry */
  description?: Maybe<Scalars['String']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** When the transaction happened. Not necesarily the same as when the transaction was registered to the system. */
  transaction_timestamp?: Maybe<Scalars['timestamptz']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "journal_entry" */
export type Journal_Entry_Mutation_Response = {
  __typename?: 'journal_entry_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Journal_Entry>;
};

/** on conflict condition type for table "journal_entry" */
export type Journal_Entry_On_Conflict = {
  constraint: Journal_Entry_Constraint;
  update_columns?: Array<Journal_Entry_Update_Column>;
  where?: Maybe<Journal_Entry_Bool_Exp>;
};

/** Ordering options when selecting data from "journal_entry". */
export type Journal_Entry_Order_By = {
  created_by_user_id?: Maybe<Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  transaction_timestamp?: Maybe<Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userByDeletedByUserId?: Maybe<User_Order_By>;
  userByUpdatedByUserId?: Maybe<User_Order_By>;
};

/** primary key columns input for table: journal_entry */
export type Journal_Entry_Pk_Columns_Input = {
  /** Primary key */
  id: Scalars['Int'];
};

/** select columns of table "journal_entry" */
export enum Journal_Entry_Select_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  TransactionTimestamp = 'transaction_timestamp',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** input type for updating data in table "journal_entry" */
export type Journal_Entry_Set_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Description for the entry */
  description?: Maybe<Scalars['String']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** When the transaction happened. Not necesarily the same as when the transaction was registered to the system. */
  transaction_timestamp?: Maybe<Scalars['timestamptz']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Journal_Entry_Stddev_Fields = {
  __typename?: 'journal_entry_stddev_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Journal_Entry_Stddev_Pop_Fields = {
  __typename?: 'journal_entry_stddev_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Journal_Entry_Stddev_Samp_Fields = {
  __typename?: 'journal_entry_stddev_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Journal_Entry_Sum_Fields = {
  __typename?: 'journal_entry_sum_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "journal_entry" */
export enum Journal_Entry_Update_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  TransactionTimestamp = 'transaction_timestamp',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** aggregate var_pop on columns */
export type Journal_Entry_Var_Pop_Fields = {
  __typename?: 'journal_entry_var_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Journal_Entry_Var_Samp_Fields = {
  __typename?: 'journal_entry_var_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Journal_Entry_Variance_Fields = {
  __typename?: 'journal_entry_variance_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  auth_login: AuthLogin;
  auth_logout: AuthLogout;
  /** delete data from the table: "account" */
  delete_account?: Maybe<Account_Mutation_Response>;
  /** delete single row from the table: "account" */
  delete_account_by_pk?: Maybe<Account>;
  /** delete data from the table: "account_currency" */
  delete_account_currency?: Maybe<Account_Currency_Mutation_Response>;
  /** delete single row from the table: "account_currency" */
  delete_account_currency_by_pk?: Maybe<Account_Currency>;
  /** delete data from the table: "account_currency_history" */
  delete_account_currency_history?: Maybe<Account_Currency_History_Mutation_Response>;
  /** delete data from the table: "account_history" */
  delete_account_history?: Maybe<Account_History_Mutation_Response>;
  /** delete data from the table: "currency" */
  delete_currency?: Maybe<Currency_Mutation_Response>;
  /** delete single row from the table: "currency" */
  delete_currency_by_pk?: Maybe<Currency>;
  /** delete data from the table: "currency_history" */
  delete_currency_history?: Maybe<Currency_History_Mutation_Response>;
  /** delete data from the table: "exchange_rate" */
  delete_exchange_rate?: Maybe<Exchange_Rate_Mutation_Response>;
  /** delete single row from the table: "exchange_rate" */
  delete_exchange_rate_by_pk?: Maybe<Exchange_Rate>;
  /** delete data from the table: "exchange_rate_history" */
  delete_exchange_rate_history?: Maybe<Exchange_Rate_History_Mutation_Response>;
  /** delete data from the table: "journal_entry" */
  delete_journal_entry?: Maybe<Journal_Entry_Mutation_Response>;
  /** delete single row from the table: "journal_entry" */
  delete_journal_entry_by_pk?: Maybe<Journal_Entry>;
  /** delete data from the table: "journal_entry_history" */
  delete_journal_entry_history?: Maybe<Journal_Entry_History_Mutation_Response>;
  /** delete data from the table: "journal_entry_line" */
  delete_journal_entry_line?: Maybe<Journal_Entry_Line_Mutation_Response>;
  /** delete single row from the table: "journal_entry_line" */
  delete_journal_entry_line_by_pk?: Maybe<Journal_Entry_Line>;
  /** delete data from the table: "journal_entry_line_history" */
  delete_journal_entry_line_history?: Maybe<Journal_Entry_Line_History_Mutation_Response>;
  /** delete data from the table: "role" */
  delete_role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "role" */
  delete_role_by_pk?: Maybe<Role>;
  /** delete data from the table: "role_history" */
  delete_role_history?: Maybe<Role_History_Mutation_Response>;
  /** delete data from the table: "session" */
  delete_session?: Maybe<Session_Mutation_Response>;
  /** delete single row from the table: "session" */
  delete_session_by_pk?: Maybe<Session>;
  /** delete data from the table: "session_history" */
  delete_session_history?: Maybe<Session_History_Mutation_Response>;
  /** delete data from the table: "title_account" */
  delete_title_account?: Maybe<Title_Account_Mutation_Response>;
  /** delete single row from the table: "title_account" */
  delete_title_account_by_pk?: Maybe<Title_Account>;
  /** delete data from the table: "title_account_history" */
  delete_title_account_history?: Maybe<Title_Account_History_Mutation_Response>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_history" */
  delete_user_history?: Maybe<User_History_Mutation_Response>;
  /** delete data from the table: "user_role" */
  delete_user_role?: Maybe<User_Role_Mutation_Response>;
  /** delete single row from the table: "user_role" */
  delete_user_role_by_pk?: Maybe<User_Role>;
  /** delete data from the table: "user_role_history" */
  delete_user_role_history?: Maybe<User_Role_History_Mutation_Response>;
  /** insert data into the table: "account" */
  insert_account?: Maybe<Account_Mutation_Response>;
  /** insert data into the table: "account_currency" */
  insert_account_currency?: Maybe<Account_Currency_Mutation_Response>;
  /** insert data into the table: "account_currency_history" */
  insert_account_currency_history?: Maybe<Account_Currency_History_Mutation_Response>;
  /** insert a single row into the table: "account_currency_history" */
  insert_account_currency_history_one?: Maybe<Account_Currency_History>;
  /** insert a single row into the table: "account_currency" */
  insert_account_currency_one?: Maybe<Account_Currency>;
  /** insert data into the table: "account_history" */
  insert_account_history?: Maybe<Account_History_Mutation_Response>;
  /** insert a single row into the table: "account_history" */
  insert_account_history_one?: Maybe<Account_History>;
  /** insert a single row into the table: "account" */
  insert_account_one?: Maybe<Account>;
  /** insert data into the table: "currency" */
  insert_currency?: Maybe<Currency_Mutation_Response>;
  /** insert data into the table: "currency_history" */
  insert_currency_history?: Maybe<Currency_History_Mutation_Response>;
  /** insert a single row into the table: "currency_history" */
  insert_currency_history_one?: Maybe<Currency_History>;
  /** insert a single row into the table: "currency" */
  insert_currency_one?: Maybe<Currency>;
  /** insert data into the table: "exchange_rate" */
  insert_exchange_rate?: Maybe<Exchange_Rate_Mutation_Response>;
  /** insert data into the table: "exchange_rate_history" */
  insert_exchange_rate_history?: Maybe<Exchange_Rate_History_Mutation_Response>;
  /** insert a single row into the table: "exchange_rate_history" */
  insert_exchange_rate_history_one?: Maybe<Exchange_Rate_History>;
  /** insert a single row into the table: "exchange_rate" */
  insert_exchange_rate_one?: Maybe<Exchange_Rate>;
  /** insert data into the table: "journal_entry" */
  insert_journal_entry?: Maybe<Journal_Entry_Mutation_Response>;
  /** insert data into the table: "journal_entry_history" */
  insert_journal_entry_history?: Maybe<Journal_Entry_History_Mutation_Response>;
  /** insert a single row into the table: "journal_entry_history" */
  insert_journal_entry_history_one?: Maybe<Journal_Entry_History>;
  /** insert data into the table: "journal_entry_line" */
  insert_journal_entry_line?: Maybe<Journal_Entry_Line_Mutation_Response>;
  /** insert data into the table: "journal_entry_line_history" */
  insert_journal_entry_line_history?: Maybe<Journal_Entry_Line_History_Mutation_Response>;
  /** insert a single row into the table: "journal_entry_line_history" */
  insert_journal_entry_line_history_one?: Maybe<Journal_Entry_Line_History>;
  /** insert a single row into the table: "journal_entry_line" */
  insert_journal_entry_line_one?: Maybe<Journal_Entry_Line>;
  /** insert a single row into the table: "journal_entry" */
  insert_journal_entry_one?: Maybe<Journal_Entry>;
  /** insert data into the table: "role" */
  insert_role?: Maybe<Role_Mutation_Response>;
  /** insert data into the table: "role_history" */
  insert_role_history?: Maybe<Role_History_Mutation_Response>;
  /** insert a single row into the table: "role_history" */
  insert_role_history_one?: Maybe<Role_History>;
  /** insert a single row into the table: "role" */
  insert_role_one?: Maybe<Role>;
  /** insert data into the table: "session" */
  insert_session?: Maybe<Session_Mutation_Response>;
  /** insert data into the table: "session_history" */
  insert_session_history?: Maybe<Session_History_Mutation_Response>;
  /** insert a single row into the table: "session_history" */
  insert_session_history_one?: Maybe<Session_History>;
  /** insert a single row into the table: "session" */
  insert_session_one?: Maybe<Session>;
  /** insert data into the table: "title_account" */
  insert_title_account?: Maybe<Title_Account_Mutation_Response>;
  /** insert data into the table: "title_account_history" */
  insert_title_account_history?: Maybe<Title_Account_History_Mutation_Response>;
  /** insert a single row into the table: "title_account_history" */
  insert_title_account_history_one?: Maybe<Title_Account_History>;
  /** insert a single row into the table: "title_account" */
  insert_title_account_one?: Maybe<Title_Account>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "user_history" */
  insert_user_history?: Maybe<User_History_Mutation_Response>;
  /** insert a single row into the table: "user_history" */
  insert_user_history_one?: Maybe<User_History>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_role" */
  insert_user_role?: Maybe<User_Role_Mutation_Response>;
  /** insert data into the table: "user_role_history" */
  insert_user_role_history?: Maybe<User_Role_History_Mutation_Response>;
  /** insert a single row into the table: "user_role_history" */
  insert_user_role_history_one?: Maybe<User_Role_History>;
  /** insert a single row into the table: "user_role" */
  insert_user_role_one?: Maybe<User_Role>;
  /** update data of the table: "account" */
  update_account?: Maybe<Account_Mutation_Response>;
  /** update single row of the table: "account" */
  update_account_by_pk?: Maybe<Account>;
  /** update data of the table: "account_currency" */
  update_account_currency?: Maybe<Account_Currency_Mutation_Response>;
  /** update single row of the table: "account_currency" */
  update_account_currency_by_pk?: Maybe<Account_Currency>;
  /** update data of the table: "account_currency_history" */
  update_account_currency_history?: Maybe<Account_Currency_History_Mutation_Response>;
  /** update data of the table: "account_history" */
  update_account_history?: Maybe<Account_History_Mutation_Response>;
  /** update data of the table: "currency" */
  update_currency?: Maybe<Currency_Mutation_Response>;
  /** update single row of the table: "currency" */
  update_currency_by_pk?: Maybe<Currency>;
  /** update data of the table: "currency_history" */
  update_currency_history?: Maybe<Currency_History_Mutation_Response>;
  /** update data of the table: "exchange_rate" */
  update_exchange_rate?: Maybe<Exchange_Rate_Mutation_Response>;
  /** update single row of the table: "exchange_rate" */
  update_exchange_rate_by_pk?: Maybe<Exchange_Rate>;
  /** update data of the table: "exchange_rate_history" */
  update_exchange_rate_history?: Maybe<Exchange_Rate_History_Mutation_Response>;
  /** update data of the table: "journal_entry" */
  update_journal_entry?: Maybe<Journal_Entry_Mutation_Response>;
  /** update single row of the table: "journal_entry" */
  update_journal_entry_by_pk?: Maybe<Journal_Entry>;
  /** update data of the table: "journal_entry_history" */
  update_journal_entry_history?: Maybe<Journal_Entry_History_Mutation_Response>;
  /** update data of the table: "journal_entry_line" */
  update_journal_entry_line?: Maybe<Journal_Entry_Line_Mutation_Response>;
  /** update single row of the table: "journal_entry_line" */
  update_journal_entry_line_by_pk?: Maybe<Journal_Entry_Line>;
  /** update data of the table: "journal_entry_line_history" */
  update_journal_entry_line_history?: Maybe<Journal_Entry_Line_History_Mutation_Response>;
  /** update data of the table: "role" */
  update_role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "role" */
  update_role_by_pk?: Maybe<Role>;
  /** update data of the table: "role_history" */
  update_role_history?: Maybe<Role_History_Mutation_Response>;
  /** update data of the table: "session" */
  update_session?: Maybe<Session_Mutation_Response>;
  /** update single row of the table: "session" */
  update_session_by_pk?: Maybe<Session>;
  /** update data of the table: "session_history" */
  update_session_history?: Maybe<Session_History_Mutation_Response>;
  /** update data of the table: "title_account" */
  update_title_account?: Maybe<Title_Account_Mutation_Response>;
  /** update single row of the table: "title_account" */
  update_title_account_by_pk?: Maybe<Title_Account>;
  /** update data of the table: "title_account_history" */
  update_title_account_history?: Maybe<Title_Account_History_Mutation_Response>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "user_history" */
  update_user_history?: Maybe<User_History_Mutation_Response>;
  /** update data of the table: "user_role" */
  update_user_role?: Maybe<User_Role_Mutation_Response>;
  /** update single row of the table: "user_role" */
  update_user_role_by_pk?: Maybe<User_Role>;
  /** update data of the table: "user_role_history" */
  update_user_role_history?: Maybe<User_Role_History_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootAuth_LoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_AccountArgs = {
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Account_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Account_CurrencyArgs = {
  where: Account_Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Account_Currency_By_PkArgs = {
  account_id: Scalars['Int'];
  currency_id: Scalars['bpchar'];
};


/** mutation root */
export type Mutation_RootDelete_Account_Currency_HistoryArgs = {
  where: Account_Currency_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Account_HistoryArgs = {
  where: Account_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CurrencyArgs = {
  where: Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Currency_By_PkArgs = {
  id: Scalars['bpchar'];
};


/** mutation root */
export type Mutation_RootDelete_Currency_HistoryArgs = {
  where: Currency_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exchange_RateArgs = {
  where: Exchange_Rate_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exchange_Rate_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Exchange_Rate_HistoryArgs = {
  where: Exchange_Rate_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Journal_EntryArgs = {
  where: Journal_Entry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Journal_Entry_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Journal_Entry_HistoryArgs = {
  where: Journal_Entry_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Journal_Entry_LineArgs = {
  where: Journal_Entry_Line_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Journal_Entry_Line_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Journal_Entry_Line_HistoryArgs = {
  where: Journal_Entry_Line_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Role_HistoryArgs = {
  where: Role_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_SessionArgs = {
  where: Session_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Session_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Session_HistoryArgs = {
  where: Session_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Title_AccountArgs = {
  where: Title_Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Title_Account_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Title_Account_HistoryArgs = {
  where: Title_Account_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_HistoryArgs = {
  where: User_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_RoleArgs = {
  where: User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Role_By_PkArgs = {
  role_id: Scalars['String'];
  user_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_Role_HistoryArgs = {
  where: User_Role_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_AccountArgs = {
  objects: Array<Account_Insert_Input>;
  on_conflict?: Maybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Account_CurrencyArgs = {
  objects: Array<Account_Currency_Insert_Input>;
  on_conflict?: Maybe<Account_Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Account_Currency_HistoryArgs = {
  objects: Array<Account_Currency_History_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Account_Currency_History_OneArgs = {
  object: Account_Currency_History_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Account_Currency_OneArgs = {
  object: Account_Currency_Insert_Input;
  on_conflict?: Maybe<Account_Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Account_HistoryArgs = {
  objects: Array<Account_History_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Account_History_OneArgs = {
  object: Account_History_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Account_OneArgs = {
  object: Account_Insert_Input;
  on_conflict?: Maybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CurrencyArgs = {
  objects: Array<Currency_Insert_Input>;
  on_conflict?: Maybe<Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Currency_HistoryArgs = {
  objects: Array<Currency_History_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Currency_History_OneArgs = {
  object: Currency_History_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Currency_OneArgs = {
  object: Currency_Insert_Input;
  on_conflict?: Maybe<Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exchange_RateArgs = {
  objects: Array<Exchange_Rate_Insert_Input>;
  on_conflict?: Maybe<Exchange_Rate_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exchange_Rate_HistoryArgs = {
  objects: Array<Exchange_Rate_History_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Exchange_Rate_History_OneArgs = {
  object: Exchange_Rate_History_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Exchange_Rate_OneArgs = {
  object: Exchange_Rate_Insert_Input;
  on_conflict?: Maybe<Exchange_Rate_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Journal_EntryArgs = {
  objects: Array<Journal_Entry_Insert_Input>;
  on_conflict?: Maybe<Journal_Entry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Journal_Entry_HistoryArgs = {
  objects: Array<Journal_Entry_History_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Journal_Entry_History_OneArgs = {
  object: Journal_Entry_History_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Journal_Entry_LineArgs = {
  objects: Array<Journal_Entry_Line_Insert_Input>;
  on_conflict?: Maybe<Journal_Entry_Line_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Journal_Entry_Line_HistoryArgs = {
  objects: Array<Journal_Entry_Line_History_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Journal_Entry_Line_History_OneArgs = {
  object: Journal_Entry_Line_History_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Journal_Entry_Line_OneArgs = {
  object: Journal_Entry_Line_Insert_Input;
  on_conflict?: Maybe<Journal_Entry_Line_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Journal_Entry_OneArgs = {
  object: Journal_Entry_Insert_Input;
  on_conflict?: Maybe<Journal_Entry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: Maybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_HistoryArgs = {
  objects: Array<Role_History_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Role_History_OneArgs = {
  object: Role_History_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: Maybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SessionArgs = {
  objects: Array<Session_Insert_Input>;
  on_conflict?: Maybe<Session_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Session_HistoryArgs = {
  objects: Array<Session_History_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Session_History_OneArgs = {
  object: Session_History_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Session_OneArgs = {
  object: Session_Insert_Input;
  on_conflict?: Maybe<Session_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Title_AccountArgs = {
  objects: Array<Title_Account_Insert_Input>;
  on_conflict?: Maybe<Title_Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Title_Account_HistoryArgs = {
  objects: Array<Title_Account_History_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Title_Account_History_OneArgs = {
  object: Title_Account_History_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Title_Account_OneArgs = {
  object: Title_Account_Insert_Input;
  on_conflict?: Maybe<Title_Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_HistoryArgs = {
  objects: Array<User_History_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_History_OneArgs = {
  object: User_History_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RoleArgs = {
  objects: Array<User_Role_Insert_Input>;
  on_conflict?: Maybe<User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Role_HistoryArgs = {
  objects: Array<User_Role_History_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_Role_History_OneArgs = {
  object: User_Role_History_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_User_Role_OneArgs = {
  object: User_Role_Insert_Input;
  on_conflict?: Maybe<User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountArgs = {
  _inc?: Maybe<Account_Inc_Input>;
  _set?: Maybe<Account_Set_Input>;
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Account_By_PkArgs = {
  _inc?: Maybe<Account_Inc_Input>;
  _set?: Maybe<Account_Set_Input>;
  pk_columns: Account_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Account_CurrencyArgs = {
  _inc?: Maybe<Account_Currency_Inc_Input>;
  _set?: Maybe<Account_Currency_Set_Input>;
  where: Account_Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Account_Currency_By_PkArgs = {
  _inc?: Maybe<Account_Currency_Inc_Input>;
  _set?: Maybe<Account_Currency_Set_Input>;
  pk_columns: Account_Currency_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Account_Currency_HistoryArgs = {
  _inc?: Maybe<Account_Currency_History_Inc_Input>;
  _set?: Maybe<Account_Currency_History_Set_Input>;
  where: Account_Currency_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Account_HistoryArgs = {
  _inc?: Maybe<Account_History_Inc_Input>;
  _set?: Maybe<Account_History_Set_Input>;
  where: Account_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CurrencyArgs = {
  _inc?: Maybe<Currency_Inc_Input>;
  _set?: Maybe<Currency_Set_Input>;
  where: Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Currency_By_PkArgs = {
  _inc?: Maybe<Currency_Inc_Input>;
  _set?: Maybe<Currency_Set_Input>;
  pk_columns: Currency_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Currency_HistoryArgs = {
  _inc?: Maybe<Currency_History_Inc_Input>;
  _set?: Maybe<Currency_History_Set_Input>;
  where: Currency_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exchange_RateArgs = {
  _inc?: Maybe<Exchange_Rate_Inc_Input>;
  _set?: Maybe<Exchange_Rate_Set_Input>;
  where: Exchange_Rate_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exchange_Rate_By_PkArgs = {
  _inc?: Maybe<Exchange_Rate_Inc_Input>;
  _set?: Maybe<Exchange_Rate_Set_Input>;
  pk_columns: Exchange_Rate_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exchange_Rate_HistoryArgs = {
  _inc?: Maybe<Exchange_Rate_History_Inc_Input>;
  _set?: Maybe<Exchange_Rate_History_Set_Input>;
  where: Exchange_Rate_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Journal_EntryArgs = {
  _inc?: Maybe<Journal_Entry_Inc_Input>;
  _set?: Maybe<Journal_Entry_Set_Input>;
  where: Journal_Entry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Journal_Entry_By_PkArgs = {
  _inc?: Maybe<Journal_Entry_Inc_Input>;
  _set?: Maybe<Journal_Entry_Set_Input>;
  pk_columns: Journal_Entry_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Journal_Entry_HistoryArgs = {
  _inc?: Maybe<Journal_Entry_History_Inc_Input>;
  _set?: Maybe<Journal_Entry_History_Set_Input>;
  where: Journal_Entry_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Journal_Entry_LineArgs = {
  _inc?: Maybe<Journal_Entry_Line_Inc_Input>;
  _set?: Maybe<Journal_Entry_Line_Set_Input>;
  where: Journal_Entry_Line_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Journal_Entry_Line_By_PkArgs = {
  _inc?: Maybe<Journal_Entry_Line_Inc_Input>;
  _set?: Maybe<Journal_Entry_Line_Set_Input>;
  pk_columns: Journal_Entry_Line_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Journal_Entry_Line_HistoryArgs = {
  _inc?: Maybe<Journal_Entry_Line_History_Inc_Input>;
  _set?: Maybe<Journal_Entry_Line_History_Set_Input>;
  where: Journal_Entry_Line_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _inc?: Maybe<Role_Inc_Input>;
  _set?: Maybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _inc?: Maybe<Role_Inc_Input>;
  _set?: Maybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_HistoryArgs = {
  _inc?: Maybe<Role_History_Inc_Input>;
  _set?: Maybe<Role_History_Set_Input>;
  where: Role_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_SessionArgs = {
  _inc?: Maybe<Session_Inc_Input>;
  _set?: Maybe<Session_Set_Input>;
  where: Session_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Session_By_PkArgs = {
  _inc?: Maybe<Session_Inc_Input>;
  _set?: Maybe<Session_Set_Input>;
  pk_columns: Session_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Session_HistoryArgs = {
  _inc?: Maybe<Session_History_Inc_Input>;
  _set?: Maybe<Session_History_Set_Input>;
  where: Session_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Title_AccountArgs = {
  _inc?: Maybe<Title_Account_Inc_Input>;
  _set?: Maybe<Title_Account_Set_Input>;
  where: Title_Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Title_Account_By_PkArgs = {
  _inc?: Maybe<Title_Account_Inc_Input>;
  _set?: Maybe<Title_Account_Set_Input>;
  pk_columns: Title_Account_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Title_Account_HistoryArgs = {
  _inc?: Maybe<Title_Account_History_Inc_Input>;
  _set?: Maybe<Title_Account_History_Set_Input>;
  where: Title_Account_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_HistoryArgs = {
  _inc?: Maybe<User_History_Inc_Input>;
  _set?: Maybe<User_History_Set_Input>;
  where: User_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_RoleArgs = {
  _inc?: Maybe<User_Role_Inc_Input>;
  _set?: Maybe<User_Role_Set_Input>;
  where: User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Role_By_PkArgs = {
  _inc?: Maybe<User_Role_Inc_Input>;
  _set?: Maybe<User_Role_Set_Input>;
  pk_columns: User_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Role_HistoryArgs = {
  _inc?: Maybe<User_Role_History_Inc_Input>;
  _set?: Maybe<User_Role_History_Set_Input>;
  where: User_Role_History_Bool_Exp;
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
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table: "account_currency" */
  account_currency: Array<Account_Currency>;
  /** fetch aggregated fields from the table: "account_currency" */
  account_currency_aggregate: Account_Currency_Aggregate;
  /** fetch data from the table: "account_currency" using primary key columns */
  account_currency_by_pk?: Maybe<Account_Currency>;
  /** fetch data from the table: "account_currency_history" */
  account_currency_history: Array<Account_Currency_History>;
  /** fetch aggregated fields from the table: "account_currency_history" */
  account_currency_history_aggregate: Account_Currency_History_Aggregate;
  /** fetch data from the table: "account_history" */
  account_history: Array<Account_History>;
  /** fetch aggregated fields from the table: "account_history" */
  account_history_aggregate: Account_History_Aggregate;
  auth: Auth;
  /** fetch data from the table: "currency" */
  currency: Array<Currency>;
  /** fetch aggregated fields from the table: "currency" */
  currency_aggregate: Currency_Aggregate;
  /** fetch data from the table: "currency" using primary key columns */
  currency_by_pk?: Maybe<Currency>;
  /** fetch data from the table: "currency_history" */
  currency_history: Array<Currency_History>;
  /** fetch aggregated fields from the table: "currency_history" */
  currency_history_aggregate: Currency_History_Aggregate;
  /** fetch data from the table: "exchange_rate" */
  exchange_rate: Array<Exchange_Rate>;
  /** fetch aggregated fields from the table: "exchange_rate" */
  exchange_rate_aggregate: Exchange_Rate_Aggregate;
  /** fetch data from the table: "exchange_rate" using primary key columns */
  exchange_rate_by_pk?: Maybe<Exchange_Rate>;
  /** fetch data from the table: "exchange_rate_history" */
  exchange_rate_history: Array<Exchange_Rate_History>;
  /** fetch aggregated fields from the table: "exchange_rate_history" */
  exchange_rate_history_aggregate: Exchange_Rate_History_Aggregate;
  /** fetch data from the table: "journal_entry" */
  journal_entry: Array<Journal_Entry>;
  /** fetch aggregated fields from the table: "journal_entry" */
  journal_entry_aggregate: Journal_Entry_Aggregate;
  /** fetch data from the table: "journal_entry" using primary key columns */
  journal_entry_by_pk?: Maybe<Journal_Entry>;
  /** fetch data from the table: "journal_entry_history" */
  journal_entry_history: Array<Journal_Entry_History>;
  /** fetch aggregated fields from the table: "journal_entry_history" */
  journal_entry_history_aggregate: Journal_Entry_History_Aggregate;
  /** fetch data from the table: "journal_entry_line" */
  journal_entry_line: Array<Journal_Entry_Line>;
  /** fetch aggregated fields from the table: "journal_entry_line" */
  journal_entry_line_aggregate: Journal_Entry_Line_Aggregate;
  /** fetch data from the table: "journal_entry_line" using primary key columns */
  journal_entry_line_by_pk?: Maybe<Journal_Entry_Line>;
  /** fetch data from the table: "journal_entry_line_history" */
  journal_entry_line_history: Array<Journal_Entry_Line_History>;
  /** fetch aggregated fields from the table: "journal_entry_line_history" */
  journal_entry_line_history_aggregate: Journal_Entry_Line_History_Aggregate;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "role_history" */
  role_history: Array<Role_History>;
  /** fetch aggregated fields from the table: "role_history" */
  role_history_aggregate: Role_History_Aggregate;
  /** fetch data from the table: "session" */
  session: Array<Session>;
  /** fetch aggregated fields from the table: "session" */
  session_aggregate: Session_Aggregate;
  /** fetch data from the table: "session" using primary key columns */
  session_by_pk?: Maybe<Session>;
  /** fetch data from the table: "session_history" */
  session_history: Array<Session_History>;
  /** fetch aggregated fields from the table: "session_history" */
  session_history_aggregate: Session_History_Aggregate;
  /** fetch data from the table: "title_account" */
  title_account: Array<Title_Account>;
  /** fetch aggregated fields from the table: "title_account" */
  title_account_aggregate: Title_Account_Aggregate;
  /** fetch data from the table: "title_account" using primary key columns */
  title_account_by_pk?: Maybe<Title_Account>;
  /** fetch data from the table: "title_account_history" */
  title_account_history: Array<Title_Account_History>;
  /** fetch aggregated fields from the table: "title_account_history" */
  title_account_history_aggregate: Title_Account_History_Aggregate;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_history" */
  user_history: Array<User_History>;
  /** fetch aggregated fields from the table: "user_history" */
  user_history_aggregate: User_History_Aggregate;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
  /** fetch data from the table: "user_role_history" */
  user_role_history: Array<User_Role_History>;
  /** fetch aggregated fields from the table: "user_role_history" */
  user_role_history_aggregate: User_Role_History_Aggregate;
};


export type Query_RootAccountArgs = {
  distinct_on?: Maybe<Array<Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Order_By>>;
  where?: Maybe<Account_Bool_Exp>;
};


export type Query_RootAccount_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Order_By>>;
  where?: Maybe<Account_Bool_Exp>;
};


export type Query_RootAccount_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAccount_CurrencyArgs = {
  distinct_on?: Maybe<Array<Account_Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Currency_Order_By>>;
  where?: Maybe<Account_Currency_Bool_Exp>;
};


export type Query_RootAccount_Currency_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Currency_Order_By>>;
  where?: Maybe<Account_Currency_Bool_Exp>;
};


export type Query_RootAccount_Currency_By_PkArgs = {
  account_id: Scalars['Int'];
  currency_id: Scalars['bpchar'];
};


export type Query_RootAccount_Currency_HistoryArgs = {
  distinct_on?: Maybe<Array<Account_Currency_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Currency_History_Order_By>>;
  where?: Maybe<Account_Currency_History_Bool_Exp>;
};


export type Query_RootAccount_Currency_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Currency_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Currency_History_Order_By>>;
  where?: Maybe<Account_Currency_History_Bool_Exp>;
};


export type Query_RootAccount_HistoryArgs = {
  distinct_on?: Maybe<Array<Account_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_History_Order_By>>;
  where?: Maybe<Account_History_Bool_Exp>;
};


export type Query_RootAccount_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_History_Order_By>>;
  where?: Maybe<Account_History_Bool_Exp>;
};


export type Query_RootCurrencyArgs = {
  distinct_on?: Maybe<Array<Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Currency_Order_By>>;
  where?: Maybe<Currency_Bool_Exp>;
};


export type Query_RootCurrency_AggregateArgs = {
  distinct_on?: Maybe<Array<Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Currency_Order_By>>;
  where?: Maybe<Currency_Bool_Exp>;
};


export type Query_RootCurrency_By_PkArgs = {
  id: Scalars['bpchar'];
};


export type Query_RootCurrency_HistoryArgs = {
  distinct_on?: Maybe<Array<Currency_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Currency_History_Order_By>>;
  where?: Maybe<Currency_History_Bool_Exp>;
};


export type Query_RootCurrency_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Currency_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Currency_History_Order_By>>;
  where?: Maybe<Currency_History_Bool_Exp>;
};


export type Query_RootExchange_RateArgs = {
  distinct_on?: Maybe<Array<Exchange_Rate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Exchange_Rate_Order_By>>;
  where?: Maybe<Exchange_Rate_Bool_Exp>;
};


export type Query_RootExchange_Rate_AggregateArgs = {
  distinct_on?: Maybe<Array<Exchange_Rate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Exchange_Rate_Order_By>>;
  where?: Maybe<Exchange_Rate_Bool_Exp>;
};


export type Query_RootExchange_Rate_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootExchange_Rate_HistoryArgs = {
  distinct_on?: Maybe<Array<Exchange_Rate_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Exchange_Rate_History_Order_By>>;
  where?: Maybe<Exchange_Rate_History_Bool_Exp>;
};


export type Query_RootExchange_Rate_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Exchange_Rate_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Exchange_Rate_History_Order_By>>;
  where?: Maybe<Exchange_Rate_History_Bool_Exp>;
};


export type Query_RootJournal_EntryArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_Order_By>>;
  where?: Maybe<Journal_Entry_Bool_Exp>;
};


export type Query_RootJournal_Entry_AggregateArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_Order_By>>;
  where?: Maybe<Journal_Entry_Bool_Exp>;
};


export type Query_RootJournal_Entry_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootJournal_Entry_HistoryArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_History_Order_By>>;
  where?: Maybe<Journal_Entry_History_Bool_Exp>;
};


export type Query_RootJournal_Entry_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_History_Order_By>>;
  where?: Maybe<Journal_Entry_History_Bool_Exp>;
};


export type Query_RootJournal_Entry_LineArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_Line_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_Line_Order_By>>;
  where?: Maybe<Journal_Entry_Line_Bool_Exp>;
};


export type Query_RootJournal_Entry_Line_AggregateArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_Line_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_Line_Order_By>>;
  where?: Maybe<Journal_Entry_Line_Bool_Exp>;
};


export type Query_RootJournal_Entry_Line_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootJournal_Entry_Line_HistoryArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_Line_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_Line_History_Order_By>>;
  where?: Maybe<Journal_Entry_Line_History_Bool_Exp>;
};


export type Query_RootJournal_Entry_Line_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_Line_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_Line_History_Order_By>>;
  where?: Maybe<Journal_Entry_Line_History_Bool_Exp>;
};


export type Query_RootRoleArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


export type Query_RootRole_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


export type Query_RootRole_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRole_HistoryArgs = {
  distinct_on?: Maybe<Array<Role_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_History_Order_By>>;
  where?: Maybe<Role_History_Bool_Exp>;
};


export type Query_RootRole_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_History_Order_By>>;
  where?: Maybe<Role_History_Bool_Exp>;
};


export type Query_RootSessionArgs = {
  distinct_on?: Maybe<Array<Session_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Session_Order_By>>;
  where?: Maybe<Session_Bool_Exp>;
};


export type Query_RootSession_AggregateArgs = {
  distinct_on?: Maybe<Array<Session_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Session_Order_By>>;
  where?: Maybe<Session_Bool_Exp>;
};


export type Query_RootSession_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSession_HistoryArgs = {
  distinct_on?: Maybe<Array<Session_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Session_History_Order_By>>;
  where?: Maybe<Session_History_Bool_Exp>;
};


export type Query_RootSession_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Session_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Session_History_Order_By>>;
  where?: Maybe<Session_History_Bool_Exp>;
};


export type Query_RootTitle_AccountArgs = {
  distinct_on?: Maybe<Array<Title_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Title_Account_Order_By>>;
  where?: Maybe<Title_Account_Bool_Exp>;
};


export type Query_RootTitle_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Title_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Title_Account_Order_By>>;
  where?: Maybe<Title_Account_Bool_Exp>;
};


export type Query_RootTitle_Account_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTitle_Account_HistoryArgs = {
  distinct_on?: Maybe<Array<Title_Account_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Title_Account_History_Order_By>>;
  where?: Maybe<Title_Account_History_Bool_Exp>;
};


export type Query_RootTitle_Account_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Title_Account_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Title_Account_History_Order_By>>;
  where?: Maybe<Title_Account_History_Bool_Exp>;
};


export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUser_HistoryArgs = {
  distinct_on?: Maybe<Array<User_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_History_Order_By>>;
  where?: Maybe<User_History_Bool_Exp>;
};


export type Query_RootUser_History_AggregateArgs = {
  distinct_on?: Maybe<Array<User_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_History_Order_By>>;
  where?: Maybe<User_History_Bool_Exp>;
};


export type Query_RootUser_RoleArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


export type Query_RootUser_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


export type Query_RootUser_Role_By_PkArgs = {
  role_id: Scalars['String'];
  user_id: Scalars['Int'];
};


export type Query_RootUser_Role_HistoryArgs = {
  distinct_on?: Maybe<Array<User_Role_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_History_Order_By>>;
  where?: Maybe<User_Role_History_Bool_Exp>;
};


export type Query_RootUser_Role_History_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_History_Order_By>>;
  where?: Maybe<User_Role_History_Bool_Exp>;
};

/**
 * Role
 *
 *
 * columns and relationships of "role"
 */
export type Role = {
  __typename?: 'role';
  /** An object relationship */
  created_by_user?: Maybe<User>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  deleted_by_user?: Maybe<User>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** User friendly description of the role */
  description: Scalars['String'];
  /** Internal name, Primary key */
  id: Scalars['String'];
  /** User friendly role name */
  name: Scalars['String'];
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** An object relationship */
  updated_by_user?: Maybe<User>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  user_roles: Array<User_Role>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Role_Aggregate;
};


/**
 * Role
 *
 *
 * columns and relationships of "role"
 */
export type RoleUser_RolesArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


/**
 * Role
 *
 *
 * columns and relationships of "role"
 */
export type RoleUser_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};

/** aggregated selection of "role" */
export type Role_Aggregate = {
  __typename?: 'role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "role" */
export type Role_Aggregate_Fields = {
  __typename?: 'role_aggregate_fields';
  avg?: Maybe<Role_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
  stddev?: Maybe<Role_Stddev_Fields>;
  stddev_pop?: Maybe<Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Role_Stddev_Samp_Fields>;
  sum?: Maybe<Role_Sum_Fields>;
  var_pop?: Maybe<Role_Var_Pop_Fields>;
  var_samp?: Maybe<Role_Var_Samp_Fields>;
  variance?: Maybe<Role_Variance_Fields>;
};


/** aggregate fields of "role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Role_Avg_Fields = {
  __typename?: 'role_avg_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  _and?: Maybe<Array<Role_Bool_Exp>>;
  _not?: Maybe<Role_Bool_Exp>;
  _or?: Maybe<Array<Role_Bool_Exp>>;
  created_by_user?: Maybe<User_Bool_Exp>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  deleted_by_user?: Maybe<User_Bool_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  updated_by_user?: Maybe<User_Bool_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
  user_roles?: Maybe<User_Role_Bool_Exp>;
};

/** unique or primary key constraints on table "role" */
export enum Role_Constraint {
  /** unique or primary key constraint */
  RolePkey = 'role_pkey'
}

/**
 * Role History
 *
 *
 * columns and relationships of "role_history"
 */
export type Role_History = {
  __typename?: 'role_history';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** User friendly description of the role */
  description: Scalars['String'];
  /** Internal name, Primary key */
  id: Scalars['String'];
  /** User friendly role name */
  name: Scalars['String'];
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "role_history" */
export type Role_History_Aggregate = {
  __typename?: 'role_history_aggregate';
  aggregate?: Maybe<Role_History_Aggregate_Fields>;
  nodes: Array<Role_History>;
};

/** aggregate fields of "role_history" */
export type Role_History_Aggregate_Fields = {
  __typename?: 'role_history_aggregate_fields';
  avg?: Maybe<Role_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Role_History_Max_Fields>;
  min?: Maybe<Role_History_Min_Fields>;
  stddev?: Maybe<Role_History_Stddev_Fields>;
  stddev_pop?: Maybe<Role_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Role_History_Stddev_Samp_Fields>;
  sum?: Maybe<Role_History_Sum_Fields>;
  var_pop?: Maybe<Role_History_Var_Pop_Fields>;
  var_samp?: Maybe<Role_History_Var_Samp_Fields>;
  variance?: Maybe<Role_History_Variance_Fields>;
};


/** aggregate fields of "role_history" */
export type Role_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Role_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Role_History_Avg_Fields = {
  __typename?: 'role_history_avg_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "role_history". All fields are combined with a logical 'AND'. */
export type Role_History_Bool_Exp = {
  _and?: Maybe<Array<Role_History_Bool_Exp>>;
  _not?: Maybe<Role_History_Bool_Exp>;
  _or?: Maybe<Array<Role_History_Bool_Exp>>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "role_history" */
export type Role_History_Inc_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "role_history" */
export type Role_History_Insert_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** User friendly description of the role */
  description?: Maybe<Scalars['String']>;
  /** Internal name, Primary key */
  id?: Maybe<Scalars['String']>;
  /** User friendly role name */
  name?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Role_History_Max_Fields = {
  __typename?: 'role_history_max_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** User friendly description of the role */
  description?: Maybe<Scalars['String']>;
  /** Internal name, Primary key */
  id?: Maybe<Scalars['String']>;
  /** User friendly role name */
  name?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Role_History_Min_Fields = {
  __typename?: 'role_history_min_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** User friendly description of the role */
  description?: Maybe<Scalars['String']>;
  /** Internal name, Primary key */
  id?: Maybe<Scalars['String']>;
  /** User friendly role name */
  name?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "role_history" */
export type Role_History_Mutation_Response = {
  __typename?: 'role_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Role_History>;
};

/** Ordering options when selecting data from "role_history". */
export type Role_History_Order_By = {
  created_by_user_id?: Maybe<Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
};

/** select columns of table "role_history" */
export enum Role_History_Select_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** input type for updating data in table "role_history" */
export type Role_History_Set_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** User friendly description of the role */
  description?: Maybe<Scalars['String']>;
  /** Internal name, Primary key */
  id?: Maybe<Scalars['String']>;
  /** User friendly role name */
  name?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Role_History_Stddev_Fields = {
  __typename?: 'role_history_stddev_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Role_History_Stddev_Pop_Fields = {
  __typename?: 'role_history_stddev_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Role_History_Stddev_Samp_Fields = {
  __typename?: 'role_history_stddev_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Role_History_Sum_Fields = {
  __typename?: 'role_history_sum_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Role_History_Var_Pop_Fields = {
  __typename?: 'role_history_var_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Role_History_Var_Samp_Fields = {
  __typename?: 'role_history_var_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Role_History_Variance_Fields = {
  __typename?: 'role_history_variance_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "role" */
export type Role_Inc_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "role" */
export type Role_Insert_Input = {
  created_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  deleted_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** User friendly description of the role */
  description?: Maybe<Scalars['String']>;
  /** Internal name, Primary key */
  id?: Maybe<Scalars['String']>;
  /** User friendly role name */
  name?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  updated_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  user_roles?: Maybe<User_Role_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'role_max_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** User friendly description of the role */
  description?: Maybe<Scalars['String']>;
  /** Internal name, Primary key */
  id?: Maybe<Scalars['String']>;
  /** User friendly role name */
  name?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'role_min_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** User friendly description of the role */
  description?: Maybe<Scalars['String']>;
  /** Internal name, Primary key */
  id?: Maybe<Scalars['String']>;
  /** User friendly role name */
  name?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "role" */
export type Role_Mutation_Response = {
  __typename?: 'role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** input type for inserting object relation for remote table "role" */
export type Role_Obj_Rel_Insert_Input = {
  data: Role_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Role_On_Conflict>;
};

/** on conflict condition type for table "role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns?: Array<Role_Update_Column>;
  where?: Maybe<Role_Bool_Exp>;
};

/** Ordering options when selecting data from "role". */
export type Role_Order_By = {
  created_by_user?: Maybe<User_Order_By>;
  created_by_user_id?: Maybe<Order_By>;
  deleted_by_user?: Maybe<User_Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  updated_by_user?: Maybe<User_Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
  user_roles_aggregate?: Maybe<User_Role_Aggregate_Order_By>;
};

/** primary key columns input for table: role */
export type Role_Pk_Columns_Input = {
  /** Internal name, Primary key */
  id: Scalars['String'];
};

/** select columns of table "role" */
export enum Role_Select_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** input type for updating data in table "role" */
export type Role_Set_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** User friendly description of the role */
  description?: Maybe<Scalars['String']>;
  /** Internal name, Primary key */
  id?: Maybe<Scalars['String']>;
  /** User friendly role name */
  name?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Role_Stddev_Fields = {
  __typename?: 'role_stddev_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Role_Stddev_Pop_Fields = {
  __typename?: 'role_stddev_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Role_Stddev_Samp_Fields = {
  __typename?: 'role_stddev_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Role_Sum_Fields = {
  __typename?: 'role_sum_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "role" */
export enum Role_Update_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** aggregate var_pop on columns */
export type Role_Var_Pop_Fields = {
  __typename?: 'role_var_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Role_Var_Samp_Fields = {
  __typename?: 'role_var_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Role_Variance_Fields = {
  __typename?: 'role_variance_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/**
 * Session
 *
 *
 * columns and relationships of "session"
 */
export type Session = {
  __typename?: 'session';
  /** An object relationship */
  created_by_user?: Maybe<User>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  deleted_by_user?: Maybe<User>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** When the session expires. Null on deleted sessions */
  expiry: Scalars['timestamptz'];
  /** Primary Key */
  id: Scalars['Int'];
  /** Session Id. Client-safe session identifier string. Unique. */
  sid: Scalars['String'];
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** An object relationship */
  updated_by_user?: Maybe<User>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  user: User;
  /** User id. Foreign key */
  user_id: Scalars['Int'];
};

/** aggregated selection of "session" */
export type Session_Aggregate = {
  __typename?: 'session_aggregate';
  aggregate?: Maybe<Session_Aggregate_Fields>;
  nodes: Array<Session>;
};

/** aggregate fields of "session" */
export type Session_Aggregate_Fields = {
  __typename?: 'session_aggregate_fields';
  avg?: Maybe<Session_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Session_Max_Fields>;
  min?: Maybe<Session_Min_Fields>;
  stddev?: Maybe<Session_Stddev_Fields>;
  stddev_pop?: Maybe<Session_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Session_Stddev_Samp_Fields>;
  sum?: Maybe<Session_Sum_Fields>;
  var_pop?: Maybe<Session_Var_Pop_Fields>;
  var_samp?: Maybe<Session_Var_Samp_Fields>;
  variance?: Maybe<Session_Variance_Fields>;
};


/** aggregate fields of "session" */
export type Session_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Session_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Session_Avg_Fields = {
  __typename?: 'session_avg_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "session". All fields are combined with a logical 'AND'. */
export type Session_Bool_Exp = {
  _and?: Maybe<Array<Session_Bool_Exp>>;
  _not?: Maybe<Session_Bool_Exp>;
  _or?: Maybe<Array<Session_Bool_Exp>>;
  created_by_user?: Maybe<User_Bool_Exp>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  deleted_by_user?: Maybe<User_Bool_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  expiry?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  sid?: Maybe<String_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  updated_by_user?: Maybe<User_Bool_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "session" */
export enum Session_Constraint {
  /** unique or primary key constraint */
  SessionPkey = 'session_pkey',
  /** unique or primary key constraint */
  SessionSidKey = 'session_sid_key'
}

/**
 * Session History
 *
 *
 * columns and relationships of "session_history"
 */
export type Session_History = {
  __typename?: 'session_history';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** When the session expires. Null on deleted sessions */
  expiry?: Maybe<Scalars['timestamptz']>;
  /** Primary Key */
  id: Scalars['Int'];
  /** Session Id. Client-safe session identifier string. Unique. */
  sid: Scalars['String'];
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id. Foreign key */
  user_id: Scalars['Int'];
};

/** aggregated selection of "session_history" */
export type Session_History_Aggregate = {
  __typename?: 'session_history_aggregate';
  aggregate?: Maybe<Session_History_Aggregate_Fields>;
  nodes: Array<Session_History>;
};

/** aggregate fields of "session_history" */
export type Session_History_Aggregate_Fields = {
  __typename?: 'session_history_aggregate_fields';
  avg?: Maybe<Session_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Session_History_Max_Fields>;
  min?: Maybe<Session_History_Min_Fields>;
  stddev?: Maybe<Session_History_Stddev_Fields>;
  stddev_pop?: Maybe<Session_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Session_History_Stddev_Samp_Fields>;
  sum?: Maybe<Session_History_Sum_Fields>;
  var_pop?: Maybe<Session_History_Var_Pop_Fields>;
  var_samp?: Maybe<Session_History_Var_Samp_Fields>;
  variance?: Maybe<Session_History_Variance_Fields>;
};


/** aggregate fields of "session_history" */
export type Session_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Session_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Session_History_Avg_Fields = {
  __typename?: 'session_history_avg_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "session_history". All fields are combined with a logical 'AND'. */
export type Session_History_Bool_Exp = {
  _and?: Maybe<Array<Session_History_Bool_Exp>>;
  _not?: Maybe<Session_History_Bool_Exp>;
  _or?: Maybe<Array<Session_History_Bool_Exp>>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  expiry?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  sid?: Maybe<String_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "session_history" */
export type Session_History_Inc_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "session_history" */
export type Session_History_Insert_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** When the session expires. Null on deleted sessions */
  expiry?: Maybe<Scalars['timestamptz']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Session Id. Client-safe session identifier string. Unique. */
  sid?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Session_History_Max_Fields = {
  __typename?: 'session_history_max_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** When the session expires. Null on deleted sessions */
  expiry?: Maybe<Scalars['timestamptz']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Session Id. Client-safe session identifier string. Unique. */
  sid?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Session_History_Min_Fields = {
  __typename?: 'session_history_min_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** When the session expires. Null on deleted sessions */
  expiry?: Maybe<Scalars['timestamptz']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Session Id. Client-safe session identifier string. Unique. */
  sid?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "session_history" */
export type Session_History_Mutation_Response = {
  __typename?: 'session_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Session_History>;
};

/** Ordering options when selecting data from "session_history". */
export type Session_History_Order_By = {
  created_by_user_id?: Maybe<Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  expiry?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sid?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "session_history" */
export enum Session_History_Select_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  Expiry = 'expiry',
  /** column name */
  Id = 'id',
  /** column name */
  Sid = 'sid',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "session_history" */
export type Session_History_Set_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** When the session expires. Null on deleted sessions */
  expiry?: Maybe<Scalars['timestamptz']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Session Id. Client-safe session identifier string. Unique. */
  sid?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Session_History_Stddev_Fields = {
  __typename?: 'session_history_stddev_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Session_History_Stddev_Pop_Fields = {
  __typename?: 'session_history_stddev_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Session_History_Stddev_Samp_Fields = {
  __typename?: 'session_history_stddev_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Session_History_Sum_Fields = {
  __typename?: 'session_history_sum_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Session_History_Var_Pop_Fields = {
  __typename?: 'session_history_var_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Session_History_Var_Samp_Fields = {
  __typename?: 'session_history_var_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Session_History_Variance_Fields = {
  __typename?: 'session_history_variance_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "session" */
export type Session_Inc_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "session" */
export type Session_Insert_Input = {
  created_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  deleted_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** When the session expires. Null on deleted sessions */
  expiry?: Maybe<Scalars['timestamptz']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Session Id. Client-safe session identifier string. Unique. */
  sid?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  updated_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Session_Max_Fields = {
  __typename?: 'session_max_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** When the session expires. Null on deleted sessions */
  expiry?: Maybe<Scalars['timestamptz']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Session Id. Client-safe session identifier string. Unique. */
  sid?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Session_Min_Fields = {
  __typename?: 'session_min_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** When the session expires. Null on deleted sessions */
  expiry?: Maybe<Scalars['timestamptz']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Session Id. Client-safe session identifier string. Unique. */
  sid?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "session" */
export type Session_Mutation_Response = {
  __typename?: 'session_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Session>;
};

/** on conflict condition type for table "session" */
export type Session_On_Conflict = {
  constraint: Session_Constraint;
  update_columns?: Array<Session_Update_Column>;
  where?: Maybe<Session_Bool_Exp>;
};

/** Ordering options when selecting data from "session". */
export type Session_Order_By = {
  created_by_user?: Maybe<User_Order_By>;
  created_by_user_id?: Maybe<Order_By>;
  deleted_by_user?: Maybe<User_Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  expiry?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sid?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  updated_by_user?: Maybe<User_Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: session */
export type Session_Pk_Columns_Input = {
  /** Primary Key */
  id: Scalars['Int'];
};

/** select columns of table "session" */
export enum Session_Select_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  Expiry = 'expiry',
  /** column name */
  Id = 'id',
  /** column name */
  Sid = 'sid',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "session" */
export type Session_Set_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** When the session expires. Null on deleted sessions */
  expiry?: Maybe<Scalars['timestamptz']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Session Id. Client-safe session identifier string. Unique. */
  sid?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Session_Stddev_Fields = {
  __typename?: 'session_stddev_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Session_Stddev_Pop_Fields = {
  __typename?: 'session_stddev_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Session_Stddev_Samp_Fields = {
  __typename?: 'session_stddev_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Session_Sum_Fields = {
  __typename?: 'session_sum_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "session" */
export enum Session_Update_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  Expiry = 'expiry',
  /** column name */
  Id = 'id',
  /** column name */
  Sid = 'sid',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Session_Var_Pop_Fields = {
  __typename?: 'session_var_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Session_Var_Samp_Fields = {
  __typename?: 'session_var_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Session_Variance_Fields = {
  __typename?: 'session_variance_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id. Foreign key */
  user_id?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: Maybe<Scalars['smallint']>;
  _gt?: Maybe<Scalars['smallint']>;
  _gte?: Maybe<Scalars['smallint']>;
  _in?: Maybe<Array<Scalars['smallint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['smallint']>;
  _lte?: Maybe<Scalars['smallint']>;
  _neq?: Maybe<Scalars['smallint']>;
  _nin?: Maybe<Array<Scalars['smallint']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table: "account_currency" */
  account_currency: Array<Account_Currency>;
  /** fetch aggregated fields from the table: "account_currency" */
  account_currency_aggregate: Account_Currency_Aggregate;
  /** fetch data from the table: "account_currency" using primary key columns */
  account_currency_by_pk?: Maybe<Account_Currency>;
  /** fetch data from the table: "account_currency_history" */
  account_currency_history: Array<Account_Currency_History>;
  /** fetch aggregated fields from the table: "account_currency_history" */
  account_currency_history_aggregate: Account_Currency_History_Aggregate;
  /** fetch data from the table: "account_history" */
  account_history: Array<Account_History>;
  /** fetch aggregated fields from the table: "account_history" */
  account_history_aggregate: Account_History_Aggregate;
  /** fetch data from the table: "currency" */
  currency: Array<Currency>;
  /** fetch aggregated fields from the table: "currency" */
  currency_aggregate: Currency_Aggregate;
  /** fetch data from the table: "currency" using primary key columns */
  currency_by_pk?: Maybe<Currency>;
  /** fetch data from the table: "currency_history" */
  currency_history: Array<Currency_History>;
  /** fetch aggregated fields from the table: "currency_history" */
  currency_history_aggregate: Currency_History_Aggregate;
  /** fetch data from the table: "exchange_rate" */
  exchange_rate: Array<Exchange_Rate>;
  /** fetch aggregated fields from the table: "exchange_rate" */
  exchange_rate_aggregate: Exchange_Rate_Aggregate;
  /** fetch data from the table: "exchange_rate" using primary key columns */
  exchange_rate_by_pk?: Maybe<Exchange_Rate>;
  /** fetch data from the table: "exchange_rate_history" */
  exchange_rate_history: Array<Exchange_Rate_History>;
  /** fetch aggregated fields from the table: "exchange_rate_history" */
  exchange_rate_history_aggregate: Exchange_Rate_History_Aggregate;
  /** fetch data from the table: "journal_entry" */
  journal_entry: Array<Journal_Entry>;
  /** fetch aggregated fields from the table: "journal_entry" */
  journal_entry_aggregate: Journal_Entry_Aggregate;
  /** fetch data from the table: "journal_entry" using primary key columns */
  journal_entry_by_pk?: Maybe<Journal_Entry>;
  /** fetch data from the table: "journal_entry_history" */
  journal_entry_history: Array<Journal_Entry_History>;
  /** fetch aggregated fields from the table: "journal_entry_history" */
  journal_entry_history_aggregate: Journal_Entry_History_Aggregate;
  /** fetch data from the table: "journal_entry_line" */
  journal_entry_line: Array<Journal_Entry_Line>;
  /** fetch aggregated fields from the table: "journal_entry_line" */
  journal_entry_line_aggregate: Journal_Entry_Line_Aggregate;
  /** fetch data from the table: "journal_entry_line" using primary key columns */
  journal_entry_line_by_pk?: Maybe<Journal_Entry_Line>;
  /** fetch data from the table: "journal_entry_line_history" */
  journal_entry_line_history: Array<Journal_Entry_Line_History>;
  /** fetch aggregated fields from the table: "journal_entry_line_history" */
  journal_entry_line_history_aggregate: Journal_Entry_Line_History_Aggregate;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "role_history" */
  role_history: Array<Role_History>;
  /** fetch aggregated fields from the table: "role_history" */
  role_history_aggregate: Role_History_Aggregate;
  /** fetch data from the table: "session" */
  session: Array<Session>;
  /** fetch aggregated fields from the table: "session" */
  session_aggregate: Session_Aggregate;
  /** fetch data from the table: "session" using primary key columns */
  session_by_pk?: Maybe<Session>;
  /** fetch data from the table: "session_history" */
  session_history: Array<Session_History>;
  /** fetch aggregated fields from the table: "session_history" */
  session_history_aggregate: Session_History_Aggregate;
  /** fetch data from the table: "title_account" */
  title_account: Array<Title_Account>;
  /** fetch aggregated fields from the table: "title_account" */
  title_account_aggregate: Title_Account_Aggregate;
  /** fetch data from the table: "title_account" using primary key columns */
  title_account_by_pk?: Maybe<Title_Account>;
  /** fetch data from the table: "title_account_history" */
  title_account_history: Array<Title_Account_History>;
  /** fetch aggregated fields from the table: "title_account_history" */
  title_account_history_aggregate: Title_Account_History_Aggregate;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_history" */
  user_history: Array<User_History>;
  /** fetch aggregated fields from the table: "user_history" */
  user_history_aggregate: User_History_Aggregate;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
  /** fetch data from the table: "user_role_history" */
  user_role_history: Array<User_Role_History>;
  /** fetch aggregated fields from the table: "user_role_history" */
  user_role_history_aggregate: User_Role_History_Aggregate;
};


export type Subscription_RootAccountArgs = {
  distinct_on?: Maybe<Array<Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Order_By>>;
  where?: Maybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Order_By>>;
  where?: Maybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAccount_CurrencyArgs = {
  distinct_on?: Maybe<Array<Account_Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Currency_Order_By>>;
  where?: Maybe<Account_Currency_Bool_Exp>;
};


export type Subscription_RootAccount_Currency_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Currency_Order_By>>;
  where?: Maybe<Account_Currency_Bool_Exp>;
};


export type Subscription_RootAccount_Currency_By_PkArgs = {
  account_id: Scalars['Int'];
  currency_id: Scalars['bpchar'];
};


export type Subscription_RootAccount_Currency_HistoryArgs = {
  distinct_on?: Maybe<Array<Account_Currency_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Currency_History_Order_By>>;
  where?: Maybe<Account_Currency_History_Bool_Exp>;
};


export type Subscription_RootAccount_Currency_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Currency_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Currency_History_Order_By>>;
  where?: Maybe<Account_Currency_History_Bool_Exp>;
};


export type Subscription_RootAccount_HistoryArgs = {
  distinct_on?: Maybe<Array<Account_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_History_Order_By>>;
  where?: Maybe<Account_History_Bool_Exp>;
};


export type Subscription_RootAccount_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_History_Order_By>>;
  where?: Maybe<Account_History_Bool_Exp>;
};


export type Subscription_RootCurrencyArgs = {
  distinct_on?: Maybe<Array<Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Currency_Order_By>>;
  where?: Maybe<Currency_Bool_Exp>;
};


export type Subscription_RootCurrency_AggregateArgs = {
  distinct_on?: Maybe<Array<Currency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Currency_Order_By>>;
  where?: Maybe<Currency_Bool_Exp>;
};


export type Subscription_RootCurrency_By_PkArgs = {
  id: Scalars['bpchar'];
};


export type Subscription_RootCurrency_HistoryArgs = {
  distinct_on?: Maybe<Array<Currency_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Currency_History_Order_By>>;
  where?: Maybe<Currency_History_Bool_Exp>;
};


export type Subscription_RootCurrency_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Currency_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Currency_History_Order_By>>;
  where?: Maybe<Currency_History_Bool_Exp>;
};


export type Subscription_RootExchange_RateArgs = {
  distinct_on?: Maybe<Array<Exchange_Rate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Exchange_Rate_Order_By>>;
  where?: Maybe<Exchange_Rate_Bool_Exp>;
};


export type Subscription_RootExchange_Rate_AggregateArgs = {
  distinct_on?: Maybe<Array<Exchange_Rate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Exchange_Rate_Order_By>>;
  where?: Maybe<Exchange_Rate_Bool_Exp>;
};


export type Subscription_RootExchange_Rate_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootExchange_Rate_HistoryArgs = {
  distinct_on?: Maybe<Array<Exchange_Rate_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Exchange_Rate_History_Order_By>>;
  where?: Maybe<Exchange_Rate_History_Bool_Exp>;
};


export type Subscription_RootExchange_Rate_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Exchange_Rate_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Exchange_Rate_History_Order_By>>;
  where?: Maybe<Exchange_Rate_History_Bool_Exp>;
};


export type Subscription_RootJournal_EntryArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_Order_By>>;
  where?: Maybe<Journal_Entry_Bool_Exp>;
};


export type Subscription_RootJournal_Entry_AggregateArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_Order_By>>;
  where?: Maybe<Journal_Entry_Bool_Exp>;
};


export type Subscription_RootJournal_Entry_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootJournal_Entry_HistoryArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_History_Order_By>>;
  where?: Maybe<Journal_Entry_History_Bool_Exp>;
};


export type Subscription_RootJournal_Entry_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_History_Order_By>>;
  where?: Maybe<Journal_Entry_History_Bool_Exp>;
};


export type Subscription_RootJournal_Entry_LineArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_Line_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_Line_Order_By>>;
  where?: Maybe<Journal_Entry_Line_Bool_Exp>;
};


export type Subscription_RootJournal_Entry_Line_AggregateArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_Line_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_Line_Order_By>>;
  where?: Maybe<Journal_Entry_Line_Bool_Exp>;
};


export type Subscription_RootJournal_Entry_Line_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootJournal_Entry_Line_HistoryArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_Line_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_Line_History_Order_By>>;
  where?: Maybe<Journal_Entry_Line_History_Bool_Exp>;
};


export type Subscription_RootJournal_Entry_Line_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Journal_Entry_Line_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Journal_Entry_Line_History_Order_By>>;
  where?: Maybe<Journal_Entry_Line_History_Bool_Exp>;
};


export type Subscription_RootRoleArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRole_HistoryArgs = {
  distinct_on?: Maybe<Array<Role_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_History_Order_By>>;
  where?: Maybe<Role_History_Bool_Exp>;
};


export type Subscription_RootRole_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_History_Order_By>>;
  where?: Maybe<Role_History_Bool_Exp>;
};


export type Subscription_RootSessionArgs = {
  distinct_on?: Maybe<Array<Session_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Session_Order_By>>;
  where?: Maybe<Session_Bool_Exp>;
};


export type Subscription_RootSession_AggregateArgs = {
  distinct_on?: Maybe<Array<Session_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Session_Order_By>>;
  where?: Maybe<Session_Bool_Exp>;
};


export type Subscription_RootSession_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSession_HistoryArgs = {
  distinct_on?: Maybe<Array<Session_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Session_History_Order_By>>;
  where?: Maybe<Session_History_Bool_Exp>;
};


export type Subscription_RootSession_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Session_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Session_History_Order_By>>;
  where?: Maybe<Session_History_Bool_Exp>;
};


export type Subscription_RootTitle_AccountArgs = {
  distinct_on?: Maybe<Array<Title_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Title_Account_Order_By>>;
  where?: Maybe<Title_Account_Bool_Exp>;
};


export type Subscription_RootTitle_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Title_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Title_Account_Order_By>>;
  where?: Maybe<Title_Account_Bool_Exp>;
};


export type Subscription_RootTitle_Account_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTitle_Account_HistoryArgs = {
  distinct_on?: Maybe<Array<Title_Account_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Title_Account_History_Order_By>>;
  where?: Maybe<Title_Account_History_Bool_Exp>;
};


export type Subscription_RootTitle_Account_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Title_Account_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Title_Account_History_Order_By>>;
  where?: Maybe<Title_Account_History_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_HistoryArgs = {
  distinct_on?: Maybe<Array<User_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_History_Order_By>>;
  where?: Maybe<User_History_Bool_Exp>;
};


export type Subscription_RootUser_History_AggregateArgs = {
  distinct_on?: Maybe<Array<User_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_History_Order_By>>;
  where?: Maybe<User_History_Bool_Exp>;
};


export type Subscription_RootUser_RoleArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Role_By_PkArgs = {
  role_id: Scalars['String'];
  user_id: Scalars['Int'];
};


export type Subscription_RootUser_Role_HistoryArgs = {
  distinct_on?: Maybe<Array<User_Role_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_History_Order_By>>;
  where?: Maybe<User_Role_History_Bool_Exp>;
};


export type Subscription_RootUser_Role_History_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_History_Order_By>>;
  where?: Maybe<User_Role_History_Bool_Exp>;
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

/**
 * Title Account
 *
 *
 * columns and relationships of "title_account"
 */
export type Title_Account = {
  __typename?: 'title_account';
  /** An array relationship */
  accounts: Array<Account>;
  /** An aggregate relationship */
  accounts_aggregate: Account_Aggregate;
  /** Surogate code. Unique */
  code: Scalars['String'];
  /** An object relationship */
  created_by_user?: Maybe<User>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  deleted_by_user?: Maybe<User>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id: Scalars['Int'];
  /** Account description */
  name: Scalars['String'];
  /** Account Normal Balance. Either debit or credit */
  normal_balance: Scalars['balance_direction'];
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** An object relationship */
  title_account?: Maybe<Title_Account>;
  /** An array relationship */
  title_accounts: Array<Title_Account>;
  /** An aggregate relationship */
  title_accounts_aggregate: Title_Account_Aggregate;
  /** An object relationship */
  updated_by_user?: Maybe<User>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};


/**
 * Title Account
 *
 *
 * columns and relationships of "title_account"
 */
export type Title_AccountAccountsArgs = {
  distinct_on?: Maybe<Array<Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Order_By>>;
  where?: Maybe<Account_Bool_Exp>;
};


/**
 * Title Account
 *
 *
 * columns and relationships of "title_account"
 */
export type Title_AccountAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Order_By>>;
  where?: Maybe<Account_Bool_Exp>;
};


/**
 * Title Account
 *
 *
 * columns and relationships of "title_account"
 */
export type Title_AccountTitle_AccountsArgs = {
  distinct_on?: Maybe<Array<Title_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Title_Account_Order_By>>;
  where?: Maybe<Title_Account_Bool_Exp>;
};


/**
 * Title Account
 *
 *
 * columns and relationships of "title_account"
 */
export type Title_AccountTitle_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Title_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Title_Account_Order_By>>;
  where?: Maybe<Title_Account_Bool_Exp>;
};

/** aggregated selection of "title_account" */
export type Title_Account_Aggregate = {
  __typename?: 'title_account_aggregate';
  aggregate?: Maybe<Title_Account_Aggregate_Fields>;
  nodes: Array<Title_Account>;
};

/** aggregate fields of "title_account" */
export type Title_Account_Aggregate_Fields = {
  __typename?: 'title_account_aggregate_fields';
  avg?: Maybe<Title_Account_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Title_Account_Max_Fields>;
  min?: Maybe<Title_Account_Min_Fields>;
  stddev?: Maybe<Title_Account_Stddev_Fields>;
  stddev_pop?: Maybe<Title_Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Title_Account_Stddev_Samp_Fields>;
  sum?: Maybe<Title_Account_Sum_Fields>;
  var_pop?: Maybe<Title_Account_Var_Pop_Fields>;
  var_samp?: Maybe<Title_Account_Var_Samp_Fields>;
  variance?: Maybe<Title_Account_Variance_Fields>;
};


/** aggregate fields of "title_account" */
export type Title_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Title_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "title_account" */
export type Title_Account_Aggregate_Order_By = {
  avg?: Maybe<Title_Account_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Title_Account_Max_Order_By>;
  min?: Maybe<Title_Account_Min_Order_By>;
  stddev?: Maybe<Title_Account_Stddev_Order_By>;
  stddev_pop?: Maybe<Title_Account_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Title_Account_Stddev_Samp_Order_By>;
  sum?: Maybe<Title_Account_Sum_Order_By>;
  var_pop?: Maybe<Title_Account_Var_Pop_Order_By>;
  var_samp?: Maybe<Title_Account_Var_Samp_Order_By>;
  variance?: Maybe<Title_Account_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "title_account" */
export type Title_Account_Arr_Rel_Insert_Input = {
  data: Array<Title_Account_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Title_Account_On_Conflict>;
};

/** aggregate avg on columns */
export type Title_Account_Avg_Fields = {
  __typename?: 'title_account_avg_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "title_account" */
export type Title_Account_Avg_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "title_account". All fields are combined with a logical 'AND'. */
export type Title_Account_Bool_Exp = {
  _and?: Maybe<Array<Title_Account_Bool_Exp>>;
  _not?: Maybe<Title_Account_Bool_Exp>;
  _or?: Maybe<Array<Title_Account_Bool_Exp>>;
  accounts?: Maybe<Account_Bool_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  created_by_user?: Maybe<User_Bool_Exp>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  deleted_by_user?: Maybe<User_Bool_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  normal_balance?: Maybe<Balance_Direction_Comparison_Exp>;
  parent_title_account_id?: Maybe<Int_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  title_account?: Maybe<Title_Account_Bool_Exp>;
  title_accounts?: Maybe<Title_Account_Bool_Exp>;
  updated_by_user?: Maybe<User_Bool_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "title_account" */
export enum Title_Account_Constraint {
  /** unique or primary key constraint */
  TitleAccountCodeKey = 'title_account_code_key',
  /** unique or primary key constraint */
  TitleAccountNameKey = 'title_account_name_key',
  /** unique or primary key constraint */
  TitleAccountPkey = 'title_account_pkey'
}

/**
 * Account History
 *
 *
 * columns and relationships of "title_account_history"
 */
export type Title_Account_History = {
  __typename?: 'title_account_history';
  /** Surogate code. Unique */
  code: Scalars['String'];
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id: Scalars['Int'];
  /** Account description */
  name: Scalars['String'];
  /** Account Normal Balance. Either debit or credit */
  normal_balance: Scalars['balance_direction'];
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "title_account_history" */
export type Title_Account_History_Aggregate = {
  __typename?: 'title_account_history_aggregate';
  aggregate?: Maybe<Title_Account_History_Aggregate_Fields>;
  nodes: Array<Title_Account_History>;
};

/** aggregate fields of "title_account_history" */
export type Title_Account_History_Aggregate_Fields = {
  __typename?: 'title_account_history_aggregate_fields';
  avg?: Maybe<Title_Account_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Title_Account_History_Max_Fields>;
  min?: Maybe<Title_Account_History_Min_Fields>;
  stddev?: Maybe<Title_Account_History_Stddev_Fields>;
  stddev_pop?: Maybe<Title_Account_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Title_Account_History_Stddev_Samp_Fields>;
  sum?: Maybe<Title_Account_History_Sum_Fields>;
  var_pop?: Maybe<Title_Account_History_Var_Pop_Fields>;
  var_samp?: Maybe<Title_Account_History_Var_Samp_Fields>;
  variance?: Maybe<Title_Account_History_Variance_Fields>;
};


/** aggregate fields of "title_account_history" */
export type Title_Account_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Title_Account_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Title_Account_History_Avg_Fields = {
  __typename?: 'title_account_history_avg_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "title_account_history". All fields are combined with a logical 'AND'. */
export type Title_Account_History_Bool_Exp = {
  _and?: Maybe<Array<Title_Account_History_Bool_Exp>>;
  _not?: Maybe<Title_Account_History_Bool_Exp>;
  _or?: Maybe<Array<Title_Account_History_Bool_Exp>>;
  code?: Maybe<String_Comparison_Exp>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  normal_balance?: Maybe<Balance_Direction_Comparison_Exp>;
  parent_title_account_id?: Maybe<Int_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "title_account_history" */
export type Title_Account_History_Inc_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "title_account_history" */
export type Title_Account_History_Insert_Input = {
  /** Surogate code. Unique */
  code?: Maybe<Scalars['String']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Account description */
  name?: Maybe<Scalars['String']>;
  /** Account Normal Balance. Either debit or credit */
  normal_balance?: Maybe<Scalars['balance_direction']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Title_Account_History_Max_Fields = {
  __typename?: 'title_account_history_max_fields';
  /** Surogate code. Unique */
  code?: Maybe<Scalars['String']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Account description */
  name?: Maybe<Scalars['String']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Title_Account_History_Min_Fields = {
  __typename?: 'title_account_history_min_fields';
  /** Surogate code. Unique */
  code?: Maybe<Scalars['String']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Account description */
  name?: Maybe<Scalars['String']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "title_account_history" */
export type Title_Account_History_Mutation_Response = {
  __typename?: 'title_account_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Title_Account_History>;
};

/** Ordering options when selecting data from "title_account_history". */
export type Title_Account_History_Order_By = {
  code?: Maybe<Order_By>;
  created_by_user_id?: Maybe<Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  normal_balance?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
};

/** select columns of table "title_account_history" */
export enum Title_Account_History_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NormalBalance = 'normal_balance',
  /** column name */
  ParentTitleAccountId = 'parent_title_account_id',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** input type for updating data in table "title_account_history" */
export type Title_Account_History_Set_Input = {
  /** Surogate code. Unique */
  code?: Maybe<Scalars['String']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Account description */
  name?: Maybe<Scalars['String']>;
  /** Account Normal Balance. Either debit or credit */
  normal_balance?: Maybe<Scalars['balance_direction']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Title_Account_History_Stddev_Fields = {
  __typename?: 'title_account_history_stddev_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Title_Account_History_Stddev_Pop_Fields = {
  __typename?: 'title_account_history_stddev_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Title_Account_History_Stddev_Samp_Fields = {
  __typename?: 'title_account_history_stddev_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Title_Account_History_Sum_Fields = {
  __typename?: 'title_account_history_sum_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Title_Account_History_Var_Pop_Fields = {
  __typename?: 'title_account_history_var_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Title_Account_History_Var_Samp_Fields = {
  __typename?: 'title_account_history_var_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Title_Account_History_Variance_Fields = {
  __typename?: 'title_account_history_variance_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "title_account" */
export type Title_Account_Inc_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "title_account" */
export type Title_Account_Insert_Input = {
  accounts?: Maybe<Account_Arr_Rel_Insert_Input>;
  /** Surogate code. Unique */
  code?: Maybe<Scalars['String']>;
  created_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  deleted_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Account description */
  name?: Maybe<Scalars['String']>;
  /** Account Normal Balance. Either debit or credit */
  normal_balance?: Maybe<Scalars['balance_direction']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  title_account?: Maybe<Title_Account_Obj_Rel_Insert_Input>;
  title_accounts?: Maybe<Title_Account_Arr_Rel_Insert_Input>;
  updated_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Title_Account_Max_Fields = {
  __typename?: 'title_account_max_fields';
  /** Surogate code. Unique */
  code?: Maybe<Scalars['String']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Account description */
  name?: Maybe<Scalars['String']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "title_account" */
export type Title_Account_Max_Order_By = {
  /** Surogate code. Unique */
  code?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  /** Account description */
  name?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Title_Account_Min_Fields = {
  __typename?: 'title_account_min_fields';
  /** Surogate code. Unique */
  code?: Maybe<Scalars['String']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Account description */
  name?: Maybe<Scalars['String']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "title_account" */
export type Title_Account_Min_Order_By = {
  /** Surogate code. Unique */
  code?: Maybe<Order_By>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  /** Account description */
  name?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "title_account" */
export type Title_Account_Mutation_Response = {
  __typename?: 'title_account_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Title_Account>;
};

/** input type for inserting object relation for remote table "title_account" */
export type Title_Account_Obj_Rel_Insert_Input = {
  data: Title_Account_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Title_Account_On_Conflict>;
};

/** on conflict condition type for table "title_account" */
export type Title_Account_On_Conflict = {
  constraint: Title_Account_Constraint;
  update_columns?: Array<Title_Account_Update_Column>;
  where?: Maybe<Title_Account_Bool_Exp>;
};

/** Ordering options when selecting data from "title_account". */
export type Title_Account_Order_By = {
  accounts_aggregate?: Maybe<Account_Aggregate_Order_By>;
  code?: Maybe<Order_By>;
  created_by_user?: Maybe<User_Order_By>;
  created_by_user_id?: Maybe<Order_By>;
  deleted_by_user?: Maybe<User_Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  normal_balance?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  title_account?: Maybe<Title_Account_Order_By>;
  title_accounts_aggregate?: Maybe<Title_Account_Aggregate_Order_By>;
  updated_by_user?: Maybe<User_Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: title_account */
export type Title_Account_Pk_Columns_Input = {
  /** Primary Key */
  id: Scalars['Int'];
};

/** select columns of table "title_account" */
export enum Title_Account_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NormalBalance = 'normal_balance',
  /** column name */
  ParentTitleAccountId = 'parent_title_account_id',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** input type for updating data in table "title_account" */
export type Title_Account_Set_Input = {
  /** Surogate code. Unique */
  code?: Maybe<Scalars['String']>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  /** Account description */
  name?: Maybe<Scalars['String']>;
  /** Account Normal Balance. Either debit or credit */
  normal_balance?: Maybe<Scalars['balance_direction']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Title_Account_Stddev_Fields = {
  __typename?: 'title_account_stddev_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "title_account" */
export type Title_Account_Stddev_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Title_Account_Stddev_Pop_Fields = {
  __typename?: 'title_account_stddev_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "title_account" */
export type Title_Account_Stddev_Pop_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Title_Account_Stddev_Samp_Fields = {
  __typename?: 'title_account_stddev_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "title_account" */
export type Title_Account_Stddev_Samp_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Title_Account_Sum_Fields = {
  __typename?: 'title_account_sum_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary Key */
  id?: Maybe<Scalars['Int']>;
  parent_title_account_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "title_account" */
export type Title_Account_Sum_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** update columns of table "title_account" */
export enum Title_Account_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NormalBalance = 'normal_balance',
  /** column name */
  ParentTitleAccountId = 'parent_title_account_id',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id'
}

/** aggregate var_pop on columns */
export type Title_Account_Var_Pop_Fields = {
  __typename?: 'title_account_var_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "title_account" */
export type Title_Account_Var_Pop_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Title_Account_Var_Samp_Fields = {
  __typename?: 'title_account_var_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "title_account" */
export type Title_Account_Var_Samp_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Title_Account_Variance_Fields = {
  __typename?: 'title_account_variance_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary Key */
  id?: Maybe<Scalars['Float']>;
  parent_title_account_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "title_account" */
export type Title_Account_Variance_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Primary Key */
  id?: Maybe<Order_By>;
  parent_title_account_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
};


/** Boolean expression to compare columns of type "tstzrange". All fields are combined with logical 'AND'. */
export type Tstzrange_Comparison_Exp = {
  _eq?: Maybe<Scalars['tstzrange']>;
  _gt?: Maybe<Scalars['tstzrange']>;
  _gte?: Maybe<Scalars['tstzrange']>;
  _in?: Maybe<Array<Scalars['tstzrange']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['tstzrange']>;
  _lte?: Maybe<Scalars['tstzrange']>;
  _neq?: Maybe<Scalars['tstzrange']>;
  _nin?: Maybe<Array<Scalars['tstzrange']>>;
};

/**
 * User
 *
 *
 * columns and relationships of "user"
 */
export type User = {
  __typename?: 'user';
  /** An object relationship */
  created_by_user?: Maybe<User>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  deleted_by_user?: Maybe<User>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Display name, typically the real name of the user */
  display_name: Scalars['String'];
  /** Primary key */
  id: Scalars['Int'];
  /** Password is automatically hashed on insert */
  password: Scalars['String'];
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** An object relationship */
  updated_by_user?: Maybe<User>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  user_roles: Array<User_Role>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Role_Aggregate;
  /** Username user for authentication, must be unique */
  username: Scalars['String'];
};


/**
 * User
 *
 *
 * columns and relationships of "user"
 */
export type UserUser_RolesArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


/**
 * User
 *
 *
 * columns and relationships of "user"
 */
export type UserUser_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<User_Bool_Exp>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<User_Bool_Exp>>;
  created_by_user?: Maybe<User_Bool_Exp>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  deleted_by_user?: Maybe<User_Bool_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  updated_by_user?: Maybe<User_Bool_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
  user_roles?: Maybe<User_Role_Bool_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint */
  UserUsernameKey = 'user_username_key'
}

/**
 * User History
 *
 *
 * columns and relationships of "user_history"
 */
export type User_History = {
  __typename?: 'user_history';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Display name, typically the real name of the user */
  display_name: Scalars['String'];
  /** Primary key */
  id: Scalars['Int'];
  /** Password is automatically hashed on insert */
  password: Scalars['String'];
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** Username must be unique */
  username: Scalars['String'];
};

/** aggregated selection of "user_history" */
export type User_History_Aggregate = {
  __typename?: 'user_history_aggregate';
  aggregate?: Maybe<User_History_Aggregate_Fields>;
  nodes: Array<User_History>;
};

/** aggregate fields of "user_history" */
export type User_History_Aggregate_Fields = {
  __typename?: 'user_history_aggregate_fields';
  avg?: Maybe<User_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_History_Max_Fields>;
  min?: Maybe<User_History_Min_Fields>;
  stddev?: Maybe<User_History_Stddev_Fields>;
  stddev_pop?: Maybe<User_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_History_Stddev_Samp_Fields>;
  sum?: Maybe<User_History_Sum_Fields>;
  var_pop?: Maybe<User_History_Var_Pop_Fields>;
  var_samp?: Maybe<User_History_Var_Samp_Fields>;
  variance?: Maybe<User_History_Variance_Fields>;
};


/** aggregate fields of "user_history" */
export type User_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_History_Avg_Fields = {
  __typename?: 'user_history_avg_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user_history". All fields are combined with a logical 'AND'. */
export type User_History_Bool_Exp = {
  _and?: Maybe<Array<User_History_Bool_Exp>>;
  _not?: Maybe<User_History_Bool_Exp>;
  _or?: Maybe<Array<User_History_Bool_Exp>>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "user_history" */
export type User_History_Inc_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_history" */
export type User_History_Insert_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Display name, typically the real name of the user */
  display_name?: Maybe<Scalars['String']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Password is automatically hashed on insert */
  password?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** Username must be unique */
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_History_Max_Fields = {
  __typename?: 'user_history_max_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Display name, typically the real name of the user */
  display_name?: Maybe<Scalars['String']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Password is automatically hashed on insert */
  password?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** Username must be unique */
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_History_Min_Fields = {
  __typename?: 'user_history_min_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Display name, typically the real name of the user */
  display_name?: Maybe<Scalars['String']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Password is automatically hashed on insert */
  password?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** Username must be unique */
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_history" */
export type User_History_Mutation_Response = {
  __typename?: 'user_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_History>;
};

/** Ordering options when selecting data from "user_history". */
export type User_History_Order_By = {
  created_by_user_id?: Maybe<Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** select columns of table "user_history" */
export enum User_History_Select_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "user_history" */
export type User_History_Set_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Display name, typically the real name of the user */
  display_name?: Maybe<Scalars['String']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Password is automatically hashed on insert */
  password?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** Username must be unique */
  username?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_History_Stddev_Fields = {
  __typename?: 'user_history_stddev_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_History_Stddev_Pop_Fields = {
  __typename?: 'user_history_stddev_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_History_Stddev_Samp_Fields = {
  __typename?: 'user_history_stddev_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_History_Sum_Fields = {
  __typename?: 'user_history_sum_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type User_History_Var_Pop_Fields = {
  __typename?: 'user_history_var_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_History_Var_Samp_Fields = {
  __typename?: 'user_history_var_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_History_Variance_Fields = {
  __typename?: 'user_history_variance_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  created_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  deleted_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Display name, typically the real name of the user */
  display_name?: Maybe<Scalars['String']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Password is automatically hashed on insert */
  password?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  updated_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  user_roles?: Maybe<User_Role_Arr_Rel_Insert_Input>;
  /** Username user for authentication, must be unique */
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Display name, typically the real name of the user */
  display_name?: Maybe<Scalars['String']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Password is automatically hashed on insert */
  password?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** Username user for authentication, must be unique */
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Display name, typically the real name of the user */
  display_name?: Maybe<Scalars['String']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Password is automatically hashed on insert */
  password?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** Username user for authentication, must be unique */
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  created_by_user?: Maybe<User_Order_By>;
  created_by_user_id?: Maybe<Order_By>;
  deleted_by_user?: Maybe<User_Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  updated_by_user?: Maybe<User_Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
  user_roles_aggregate?: Maybe<User_Role_Aggregate_Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  /** Primary key */
  id: Scalars['Int'];
};

/**
 * User and Role relationship
 *
 *
 * columns and relationships of "user_role"
 */
export type User_Role = {
  __typename?: 'user_role';
  /** An object relationship */
  created_by_user?: Maybe<User>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  deleted_by_user?: Maybe<User>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  role: Role;
  /** Role id, Primary key */
  role_id: Scalars['String'];
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** An object relationship */
  updated_by_user?: Maybe<User>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  user: User;
  /** User id, Primary key */
  user_id: Scalars['Int'];
};

/** aggregated selection of "user_role" */
export type User_Role_Aggregate = {
  __typename?: 'user_role_aggregate';
  aggregate?: Maybe<User_Role_Aggregate_Fields>;
  nodes: Array<User_Role>;
};

/** aggregate fields of "user_role" */
export type User_Role_Aggregate_Fields = {
  __typename?: 'user_role_aggregate_fields';
  avg?: Maybe<User_Role_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Role_Max_Fields>;
  min?: Maybe<User_Role_Min_Fields>;
  stddev?: Maybe<User_Role_Stddev_Fields>;
  stddev_pop?: Maybe<User_Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Role_Stddev_Samp_Fields>;
  sum?: Maybe<User_Role_Sum_Fields>;
  var_pop?: Maybe<User_Role_Var_Pop_Fields>;
  var_samp?: Maybe<User_Role_Var_Samp_Fields>;
  variance?: Maybe<User_Role_Variance_Fields>;
};


/** aggregate fields of "user_role" */
export type User_Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_role" */
export type User_Role_Aggregate_Order_By = {
  avg?: Maybe<User_Role_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Role_Max_Order_By>;
  min?: Maybe<User_Role_Min_Order_By>;
  stddev?: Maybe<User_Role_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Role_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Role_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Role_Sum_Order_By>;
  var_pop?: Maybe<User_Role_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Role_Var_Samp_Order_By>;
  variance?: Maybe<User_Role_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_role" */
export type User_Role_Arr_Rel_Insert_Input = {
  data: Array<User_Role_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<User_Role_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Role_Avg_Fields = {
  __typename?: 'user_role_avg_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_role" */
export type User_Role_Avg_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
  /** User id, Primary key */
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_role". All fields are combined with a logical 'AND'. */
export type User_Role_Bool_Exp = {
  _and?: Maybe<Array<User_Role_Bool_Exp>>;
  _not?: Maybe<User_Role_Bool_Exp>;
  _or?: Maybe<Array<User_Role_Bool_Exp>>;
  created_by_user?: Maybe<User_Bool_Exp>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  deleted_by_user?: Maybe<User_Bool_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  role?: Maybe<Role_Bool_Exp>;
  role_id?: Maybe<String_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  updated_by_user?: Maybe<User_Bool_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_role" */
export enum User_Role_Constraint {
  /** unique or primary key constraint */
  UserRolePkey = 'user_role_pkey'
}

/**
 * User and Role relationship History
 *
 *
 * columns and relationships of "user_role_history"
 */
export type User_Role_History = {
  __typename?: 'user_role_history';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Role id, Primary key */
  role_id: Scalars['String'];
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period: Scalars['tstzrange'];
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id, Primary key */
  user_id: Scalars['Int'];
};

/** aggregated selection of "user_role_history" */
export type User_Role_History_Aggregate = {
  __typename?: 'user_role_history_aggregate';
  aggregate?: Maybe<User_Role_History_Aggregate_Fields>;
  nodes: Array<User_Role_History>;
};

/** aggregate fields of "user_role_history" */
export type User_Role_History_Aggregate_Fields = {
  __typename?: 'user_role_history_aggregate_fields';
  avg?: Maybe<User_Role_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Role_History_Max_Fields>;
  min?: Maybe<User_Role_History_Min_Fields>;
  stddev?: Maybe<User_Role_History_Stddev_Fields>;
  stddev_pop?: Maybe<User_Role_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Role_History_Stddev_Samp_Fields>;
  sum?: Maybe<User_Role_History_Sum_Fields>;
  var_pop?: Maybe<User_Role_History_Var_Pop_Fields>;
  var_samp?: Maybe<User_Role_History_Var_Samp_Fields>;
  variance?: Maybe<User_Role_History_Variance_Fields>;
};


/** aggregate fields of "user_role_history" */
export type User_Role_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Role_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Role_History_Avg_Fields = {
  __typename?: 'user_role_history_avg_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user_role_history". All fields are combined with a logical 'AND'. */
export type User_Role_History_Bool_Exp = {
  _and?: Maybe<Array<User_Role_History_Bool_Exp>>;
  _not?: Maybe<User_Role_History_Bool_Exp>;
  _or?: Maybe<Array<User_Role_History_Bool_Exp>>;
  created_by_user_id?: Maybe<Int_Comparison_Exp>;
  deleted_by_user_id?: Maybe<Int_Comparison_Exp>;
  role_id?: Maybe<String_Comparison_Exp>;
  sys_period?: Maybe<Tstzrange_Comparison_Exp>;
  updated_by_user_id?: Maybe<Int_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "user_role_history" */
export type User_Role_History_Inc_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_role_history" */
export type User_Role_History_Insert_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Role id, Primary key */
  role_id?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Role_History_Max_Fields = {
  __typename?: 'user_role_history_max_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Role id, Primary key */
  role_id?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type User_Role_History_Min_Fields = {
  __typename?: 'user_role_history_min_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Role id, Primary key */
  role_id?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "user_role_history" */
export type User_Role_History_Mutation_Response = {
  __typename?: 'user_role_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Role_History>;
};

/** Ordering options when selecting data from "user_role_history". */
export type User_Role_History_Order_By = {
  created_by_user_id?: Maybe<Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "user_role_history" */
export enum User_Role_History_Select_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_role_history" */
export type User_Role_History_Set_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Role id, Primary key */
  role_id?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Role_History_Stddev_Fields = {
  __typename?: 'user_role_history_stddev_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Role_History_Stddev_Pop_Fields = {
  __typename?: 'user_role_history_stddev_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Role_History_Stddev_Samp_Fields = {
  __typename?: 'user_role_history_stddev_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Role_History_Sum_Fields = {
  __typename?: 'user_role_history_sum_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type User_Role_History_Var_Pop_Fields = {
  __typename?: 'user_role_history_var_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Role_History_Var_Samp_Fields = {
  __typename?: 'user_role_history_var_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Role_History_Variance_Fields = {
  __typename?: 'user_role_history_variance_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "user_role" */
export type User_Role_Inc_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_role" */
export type User_Role_Insert_Input = {
  created_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  deleted_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  role?: Maybe<Role_Obj_Rel_Insert_Input>;
  /** Role id, Primary key */
  role_id?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  updated_by_user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Role_Max_Fields = {
  __typename?: 'user_role_max_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Role id, Primary key */
  role_id?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "user_role" */
export type User_Role_Max_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Role id, Primary key */
  role_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
  /** User id, Primary key */
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Role_Min_Fields = {
  __typename?: 'user_role_min_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Role id, Primary key */
  role_id?: Maybe<Scalars['String']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "user_role" */
export type User_Role_Min_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** Role id, Primary key */
  role_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
  /** User id, Primary key */
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_role" */
export type User_Role_Mutation_Response = {
  __typename?: 'user_role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Role>;
};

/** on conflict condition type for table "user_role" */
export type User_Role_On_Conflict = {
  constraint: User_Role_Constraint;
  update_columns?: Array<User_Role_Update_Column>;
  where?: Maybe<User_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "user_role". */
export type User_Role_Order_By = {
  created_by_user?: Maybe<User_Order_By>;
  created_by_user_id?: Maybe<Order_By>;
  deleted_by_user?: Maybe<User_Order_By>;
  deleted_by_user_id?: Maybe<Order_By>;
  role?: Maybe<Role_Order_By>;
  role_id?: Maybe<Order_By>;
  sys_period?: Maybe<Order_By>;
  updated_by_user?: Maybe<User_Order_By>;
  updated_by_user_id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: user_role */
export type User_Role_Pk_Columns_Input = {
  /** Role id, Primary key */
  role_id: Scalars['String'];
  /** User id, Primary key */
  user_id: Scalars['Int'];
};

/** select columns of table "user_role" */
export enum User_Role_Select_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_role" */
export type User_Role_Set_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Role id, Primary key */
  role_id?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Role_Stddev_Fields = {
  __typename?: 'user_role_stddev_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_role" */
export type User_Role_Stddev_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
  /** User id, Primary key */
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Role_Stddev_Pop_Fields = {
  __typename?: 'user_role_stddev_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_role" */
export type User_Role_Stddev_Pop_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
  /** User id, Primary key */
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Role_Stddev_Samp_Fields = {
  __typename?: 'user_role_stddev_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_role" */
export type User_Role_Stddev_Samp_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
  /** User id, Primary key */
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Role_Sum_Fields = {
  __typename?: 'user_role_sum_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_role" */
export type User_Role_Sum_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
  /** User id, Primary key */
  user_id?: Maybe<Order_By>;
};

/** update columns of table "user_role" */
export enum User_Role_Update_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type User_Role_Var_Pop_Fields = {
  __typename?: 'user_role_var_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_role" */
export type User_Role_Var_Pop_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
  /** User id, Primary key */
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Role_Var_Samp_Fields = {
  __typename?: 'user_role_var_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_role" */
export type User_Role_Var_Samp_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
  /** User id, Primary key */
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Role_Variance_Fields = {
  __typename?: 'user_role_variance_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
  /** User id, Primary key */
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_role" */
export type User_Role_Variance_Order_By = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Order_By>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Order_By>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Order_By>;
  /** User id, Primary key */
  user_id?: Maybe<Order_By>;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Display name, typically the real name of the user */
  display_name?: Maybe<Scalars['String']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** Password is automatically hashed on insert */
  password?: Maybe<Scalars['String']>;
  /** Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table */
  sys_period?: Maybe<Scalars['tstzrange']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
  /** Username user for authentication, must be unique */
  username?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Int']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Int']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DeletedByUserId = 'deleted_by_user_id',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  SysPeriod = 'sys_period',
  /** column name */
  UpdatedByUserId = 'updated_by_user_id',
  /** column name */
  Username = 'username'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  /** id of user who created this record */
  created_by_user_id?: Maybe<Scalars['Float']>;
  /** id of user who deleted this record */
  deleted_by_user_id?: Maybe<Scalars['Float']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']>;
  /** id of user who updated this record */
  updated_by_user_id?: Maybe<Scalars['Float']>;
};

export type AuthLoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthLoginMutation = (
  { __typename?: 'mutation_root' }
  & { auth: (
    { __typename?: 'AuthLogin' }
    & Pick<AuthLogin, 'token' | 'session_id' | 'user_id' | 'username' | 'display_name' | 'roles'>
  ) }
);

export type AuthLogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type AuthLogoutMutation = (
  { __typename?: 'mutation_root' }
  & { auth: (
    { __typename?: 'AuthLogout' }
    & Pick<AuthLogout, 'user_id' | 'username' | 'display_name' | 'roles'>
  ) }
);

export type AuthStateQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthStateQuery = (
  { __typename?: 'query_root' }
  & { auth: (
    { __typename?: 'Auth' }
    & Pick<Auth, 'session_id' | 'display_name' | 'roles'>
  ) }
);

export type UpdateUserByIdMutationVariables = Exact<{
  id: Scalars['Int'];
  update: User_Set_Input;
}>;


export type UpdateUserByIdMutation = (
  { __typename?: 'mutation_root' }
  & { update?: Maybe<(
    { __typename?: 'user' }
    & Pick<User, 'id' | 'username' | 'display_name'>
  )> }
);

export type UpdateUserPasswordMutationVariables = Exact<{
  user_id: Scalars['Int'];
  session_id: Scalars['Int'];
  password: Scalars['String'];
}>;


export type UpdateUserPasswordMutation = (
  { __typename?: 'mutation_root' }
  & { update?: Maybe<(
    { __typename?: 'user' }
    & Pick<User, 'id' | 'username' | 'display_name'>
  )>, delete_session?: Maybe<(
    { __typename?: 'session_mutation_response' }
    & Pick<Session_Mutation_Response, 'affected_rows'>
  )> }
);
