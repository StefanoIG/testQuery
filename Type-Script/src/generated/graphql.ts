import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Carrera = {
  __typename?: 'Carrera';
  estudiantes?: Maybe<Array<Maybe<Estudiante>>>;
  id: Scalars['ID']['output'];
  nombre_carrera: Scalars['String']['output'];
  num_semestres: Scalars['Int']['output'];
};

export type CreateCarreraInput = {
  nombre_carrera: Scalars['String']['input'];
  num_semestres: Scalars['Int']['input'];
};

export type CreateEmpresaInput = {
  area_practicas?: InputMaybe<Scalars['String']['input']>;
  direccion_empresa?: InputMaybe<Scalars['String']['input']>;
  email_tutor_empresa: Scalars['String']['input'];
  nombre_empresa: Scalars['String']['input'];
  nombre_tutor_empresa: Scalars['String']['input'];
  num_practicantes?: InputMaybe<Scalars['Int']['input']>;
  telefono_empresa?: InputMaybe<Scalars['String']['input']>;
};

export type CreateEstadoInput = {
  descripcion_estado?: InputMaybe<Scalars['String']['input']>;
  nombre_estado: Scalars['String']['input'];
};

export type CreateEstudianteInput = {
  apellido_estudiante: Scalars['String']['input'];
  carrera_id: Scalars['ID']['input'];
  correo_estudiante: Scalars['String']['input'];
  fecha_nacimiento: Scalars['String']['input'];
  nombre_estudiante: Scalars['String']['input'];
};

export type CreateEstudiantePorRequisitoInput = {
  es_cumplido: Scalars['Boolean']['input'];
  estudiante_id: Scalars['ID']['input'];
  requisito_id: Scalars['ID']['input'];
};

export type CreatePracticaInput = {
  empresa_id: Scalars['ID']['input'];
  estado_id: Scalars['ID']['input'];
  estudiante_id: Scalars['ID']['input'];
  fecha_fin?: InputMaybe<Scalars['String']['input']>;
  fecha_inicio?: InputMaybe<Scalars['String']['input']>;
  horas_por_cumplir?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateRequisitoInput = {
  nombre_requisito: Scalars['String']['input'];
};

export type Empresa = {
  __typename?: 'Empresa';
  area_practicas?: Maybe<Scalars['String']['output']>;
  direccion_empresa?: Maybe<Scalars['String']['output']>;
  email_tutor_empresa: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  nombre_empresa: Scalars['String']['output'];
  nombre_tutor_empresa: Scalars['String']['output'];
  num_practicantes?: Maybe<Scalars['Int']['output']>;
  practicas?: Maybe<Array<Maybe<Practica>>>;
  telefono_empresa?: Maybe<Scalars['String']['output']>;
};

export type Estado = {
  __typename?: 'Estado';
  descripcion_estado?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  nombre_estado: Scalars['String']['output'];
  practicas?: Maybe<Array<Maybe<Practica>>>;
};

export type Estudiante = {
  __typename?: 'Estudiante';
  apellido_estudiante: Scalars['String']['output'];
  carrera?: Maybe<Carrera>;
  correo_estudiante: Scalars['String']['output'];
  fecha_nacimiento: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  nombre_estudiante: Scalars['String']['output'];
  requisitos?: Maybe<Array<Maybe<EstudiantePorRequisito>>>;
};

export type EstudiantePorRequisito = {
  __typename?: 'EstudiantePorRequisito';
  es_cumplido: Scalars['Boolean']['output'];
  estudiante?: Maybe<Estudiante>;
  id: Scalars['ID']['output'];
  requisito?: Maybe<Requisito>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCarrera?: Maybe<Carrera>;
  createEmpresa?: Maybe<Empresa>;
  createEstado?: Maybe<Estado>;
  createEstudiante?: Maybe<Estudiante>;
  createEstudiantePorRequisito?: Maybe<EstudiantePorRequisito>;
  createPractica?: Maybe<Practica>;
  createRequisito?: Maybe<Requisito>;
  deleteCarrera?: Maybe<Scalars['Boolean']['output']>;
  deleteEmpresa?: Maybe<Scalars['Boolean']['output']>;
  deleteEstado?: Maybe<Scalars['Boolean']['output']>;
  deleteEstudiante?: Maybe<Scalars['Boolean']['output']>;
  deleteEstudiantePorRequisito?: Maybe<Scalars['Boolean']['output']>;
  deletePractica?: Maybe<Scalars['Boolean']['output']>;
  deleteRequisito?: Maybe<Scalars['Boolean']['output']>;
  updateCarrera?: Maybe<Carrera>;
  updateEmpresa?: Maybe<Empresa>;
  updateEstado?: Maybe<Estado>;
  updateEstudiante?: Maybe<Estudiante>;
  updateEstudiantePorRequisito?: Maybe<EstudiantePorRequisito>;
  updatePractica?: Maybe<Practica>;
  updateRequisito?: Maybe<Requisito>;
};


export type MutationCreateCarreraArgs = {
  input: CreateCarreraInput;
};


export type MutationCreateEmpresaArgs = {
  input: CreateEmpresaInput;
};


export type MutationCreateEstadoArgs = {
  input: CreateEstadoInput;
};


export type MutationCreateEstudianteArgs = {
  input: CreateEstudianteInput;
};


export type MutationCreateEstudiantePorRequisitoArgs = {
  input: CreateEstudiantePorRequisitoInput;
};


export type MutationCreatePracticaArgs = {
  input: CreatePracticaInput;
};


export type MutationCreateRequisitoArgs = {
  input: CreateRequisitoInput;
};


export type MutationDeleteCarreraArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEmpresaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEstadoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEstudianteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEstudiantePorRequisitoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePracticaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRequisitoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateCarreraArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCarreraInput;
};


export type MutationUpdateEmpresaArgs = {
  id: Scalars['ID']['input'];
  input: UpdateEmpresaInput;
};


export type MutationUpdateEstadoArgs = {
  id: Scalars['ID']['input'];
  input: UpdateEstadoInput;
};


export type MutationUpdateEstudianteArgs = {
  id: Scalars['ID']['input'];
  input: UpdateEstudianteInput;
};


export type MutationUpdateEstudiantePorRequisitoArgs = {
  id: Scalars['ID']['input'];
  input: UpdateEstudiantePorRequisitoInput;
};


export type MutationUpdatePracticaArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePracticaInput;
};


export type MutationUpdateRequisitoArgs = {
  id: Scalars['ID']['input'];
  input: UpdateRequisitoInput;
};

export type Practica = {
  __typename?: 'Practica';
  empresa?: Maybe<Empresa>;
  estado?: Maybe<Estado>;
  estudiante?: Maybe<Estudiante>;
  fecha_fin?: Maybe<Scalars['String']['output']>;
  fecha_inicio?: Maybe<Scalars['String']['output']>;
  horas_por_cumplir?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  carrera?: Maybe<Carrera>;
  carreras?: Maybe<Array<Maybe<Carrera>>>;
  empresa?: Maybe<Empresa>;
  empresas?: Maybe<Array<Maybe<Empresa>>>;
  estado?: Maybe<Estado>;
  estados?: Maybe<Array<Maybe<Estado>>>;
  estudiante?: Maybe<Estudiante>;
  estudiantePorRequisito?: Maybe<EstudiantePorRequisito>;
  estudiantePorRequisitos?: Maybe<Array<Maybe<EstudiantePorRequisito>>>;
  estudiantes?: Maybe<Array<Maybe<Estudiante>>>;
  practica?: Maybe<Practica>;
  practicas?: Maybe<Array<Maybe<Practica>>>;
  requisito?: Maybe<Requisito>;
  requisitos?: Maybe<Array<Maybe<Requisito>>>;
};


export type QueryCarreraArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEmpresaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEstadoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEstudianteArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEstudiantePorRequisitoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPracticaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRequisitoArgs = {
  id: Scalars['ID']['input'];
};

export type Requisito = {
  __typename?: 'Requisito';
  estudiantes?: Maybe<Array<Maybe<EstudiantePorRequisito>>>;
  id: Scalars['ID']['output'];
  nombre_requisito: Scalars['String']['output'];
};

export type UpdateCarreraInput = {
  nombre_carrera?: InputMaybe<Scalars['String']['input']>;
  num_semestres?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateEmpresaInput = {
  area_practicas?: InputMaybe<Scalars['String']['input']>;
  direccion_empresa?: InputMaybe<Scalars['String']['input']>;
  email_tutor_empresa?: InputMaybe<Scalars['String']['input']>;
  nombre_empresa?: InputMaybe<Scalars['String']['input']>;
  nombre_tutor_empresa?: InputMaybe<Scalars['String']['input']>;
  num_practicantes?: InputMaybe<Scalars['Int']['input']>;
  telefono_empresa?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEstadoInput = {
  descripcion_estado?: InputMaybe<Scalars['String']['input']>;
  nombre_estado?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEstudianteInput = {
  apellido_estudiante?: InputMaybe<Scalars['String']['input']>;
  carrera_id?: InputMaybe<Scalars['ID']['input']>;
  correo_estudiante?: InputMaybe<Scalars['String']['input']>;
  fecha_nacimiento?: InputMaybe<Scalars['String']['input']>;
  nombre_estudiante?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEstudiantePorRequisitoInput = {
  es_cumplido?: InputMaybe<Scalars['Boolean']['input']>;
  estudiante_id?: InputMaybe<Scalars['ID']['input']>;
  requisito_id?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdatePracticaInput = {
  empresa_id?: InputMaybe<Scalars['ID']['input']>;
  estado_id?: InputMaybe<Scalars['ID']['input']>;
  estudiante_id?: InputMaybe<Scalars['ID']['input']>;
  fecha_fin?: InputMaybe<Scalars['String']['input']>;
  fecha_inicio?: InputMaybe<Scalars['String']['input']>;
  horas_por_cumplir?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateRequisitoInput = {
  nombre_requisito?: InputMaybe<Scalars['String']['input']>;
};



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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Carrera: ResolverTypeWrapper<Carrera>;
  CreateCarreraInput: CreateCarreraInput;
  CreateEmpresaInput: CreateEmpresaInput;
  CreateEstadoInput: CreateEstadoInput;
  CreateEstudianteInput: CreateEstudianteInput;
  CreateEstudiantePorRequisitoInput: CreateEstudiantePorRequisitoInput;
  CreatePracticaInput: CreatePracticaInput;
  CreateRequisitoInput: CreateRequisitoInput;
  Empresa: ResolverTypeWrapper<Empresa>;
  Estado: ResolverTypeWrapper<Estado>;
  Estudiante: ResolverTypeWrapper<Estudiante>;
  EstudiantePorRequisito: ResolverTypeWrapper<EstudiantePorRequisito>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Practica: ResolverTypeWrapper<Practica>;
  Query: ResolverTypeWrapper<{}>;
  Requisito: ResolverTypeWrapper<Requisito>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateCarreraInput: UpdateCarreraInput;
  UpdateEmpresaInput: UpdateEmpresaInput;
  UpdateEstadoInput: UpdateEstadoInput;
  UpdateEstudianteInput: UpdateEstudianteInput;
  UpdateEstudiantePorRequisitoInput: UpdateEstudiantePorRequisitoInput;
  UpdatePracticaInput: UpdatePracticaInput;
  UpdateRequisitoInput: UpdateRequisitoInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Carrera: Carrera;
  CreateCarreraInput: CreateCarreraInput;
  CreateEmpresaInput: CreateEmpresaInput;
  CreateEstadoInput: CreateEstadoInput;
  CreateEstudianteInput: CreateEstudianteInput;
  CreateEstudiantePorRequisitoInput: CreateEstudiantePorRequisitoInput;
  CreatePracticaInput: CreatePracticaInput;
  CreateRequisitoInput: CreateRequisitoInput;
  Empresa: Empresa;
  Estado: Estado;
  Estudiante: Estudiante;
  EstudiantePorRequisito: EstudiantePorRequisito;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Practica: Practica;
  Query: {};
  Requisito: Requisito;
  String: Scalars['String']['output'];
  UpdateCarreraInput: UpdateCarreraInput;
  UpdateEmpresaInput: UpdateEmpresaInput;
  UpdateEstadoInput: UpdateEstadoInput;
  UpdateEstudianteInput: UpdateEstudianteInput;
  UpdateEstudiantePorRequisitoInput: UpdateEstudiantePorRequisitoInput;
  UpdatePracticaInput: UpdatePracticaInput;
  UpdateRequisitoInput: UpdateRequisitoInput;
};

export type CarreraResolvers<ContextType = any, ParentType extends ResolversParentTypes['Carrera'] = ResolversParentTypes['Carrera']> = {
  estudiantes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Estudiante']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nombre_carrera?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  num_semestres?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmpresaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Empresa'] = ResolversParentTypes['Empresa']> = {
  area_practicas?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  direccion_empresa?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email_tutor_empresa?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nombre_empresa?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nombre_tutor_empresa?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  num_practicantes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  practicas?: Resolver<Maybe<Array<Maybe<ResolversTypes['Practica']>>>, ParentType, ContextType>;
  telefono_empresa?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EstadoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Estado'] = ResolversParentTypes['Estado']> = {
  descripcion_estado?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nombre_estado?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  practicas?: Resolver<Maybe<Array<Maybe<ResolversTypes['Practica']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EstudianteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Estudiante'] = ResolversParentTypes['Estudiante']> = {
  apellido_estudiante?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  carrera?: Resolver<Maybe<ResolversTypes['Carrera']>, ParentType, ContextType>;
  correo_estudiante?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fecha_nacimiento?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nombre_estudiante?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requisitos?: Resolver<Maybe<Array<Maybe<ResolversTypes['EstudiantePorRequisito']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EstudiantePorRequisitoResolvers<ContextType = any, ParentType extends ResolversParentTypes['EstudiantePorRequisito'] = ResolversParentTypes['EstudiantePorRequisito']> = {
  es_cumplido?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  estudiante?: Resolver<Maybe<ResolversTypes['Estudiante']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  requisito?: Resolver<Maybe<ResolversTypes['Requisito']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCarrera?: Resolver<Maybe<ResolversTypes['Carrera']>, ParentType, ContextType, RequireFields<MutationCreateCarreraArgs, 'input'>>;
  createEmpresa?: Resolver<Maybe<ResolversTypes['Empresa']>, ParentType, ContextType, RequireFields<MutationCreateEmpresaArgs, 'input'>>;
  createEstado?: Resolver<Maybe<ResolversTypes['Estado']>, ParentType, ContextType, RequireFields<MutationCreateEstadoArgs, 'input'>>;
  createEstudiante?: Resolver<Maybe<ResolversTypes['Estudiante']>, ParentType, ContextType, RequireFields<MutationCreateEstudianteArgs, 'input'>>;
  createEstudiantePorRequisito?: Resolver<Maybe<ResolversTypes['EstudiantePorRequisito']>, ParentType, ContextType, RequireFields<MutationCreateEstudiantePorRequisitoArgs, 'input'>>;
  createPractica?: Resolver<Maybe<ResolversTypes['Practica']>, ParentType, ContextType, RequireFields<MutationCreatePracticaArgs, 'input'>>;
  createRequisito?: Resolver<Maybe<ResolversTypes['Requisito']>, ParentType, ContextType, RequireFields<MutationCreateRequisitoArgs, 'input'>>;
  deleteCarrera?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteCarreraArgs, 'id'>>;
  deleteEmpresa?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteEmpresaArgs, 'id'>>;
  deleteEstado?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteEstadoArgs, 'id'>>;
  deleteEstudiante?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteEstudianteArgs, 'id'>>;
  deleteEstudiantePorRequisito?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteEstudiantePorRequisitoArgs, 'id'>>;
  deletePractica?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeletePracticaArgs, 'id'>>;
  deleteRequisito?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteRequisitoArgs, 'id'>>;
  updateCarrera?: Resolver<Maybe<ResolversTypes['Carrera']>, ParentType, ContextType, RequireFields<MutationUpdateCarreraArgs, 'id' | 'input'>>;
  updateEmpresa?: Resolver<Maybe<ResolversTypes['Empresa']>, ParentType, ContextType, RequireFields<MutationUpdateEmpresaArgs, 'id' | 'input'>>;
  updateEstado?: Resolver<Maybe<ResolversTypes['Estado']>, ParentType, ContextType, RequireFields<MutationUpdateEstadoArgs, 'id' | 'input'>>;
  updateEstudiante?: Resolver<Maybe<ResolversTypes['Estudiante']>, ParentType, ContextType, RequireFields<MutationUpdateEstudianteArgs, 'id' | 'input'>>;
  updateEstudiantePorRequisito?: Resolver<Maybe<ResolversTypes['EstudiantePorRequisito']>, ParentType, ContextType, RequireFields<MutationUpdateEstudiantePorRequisitoArgs, 'id' | 'input'>>;
  updatePractica?: Resolver<Maybe<ResolversTypes['Practica']>, ParentType, ContextType, RequireFields<MutationUpdatePracticaArgs, 'id' | 'input'>>;
  updateRequisito?: Resolver<Maybe<ResolversTypes['Requisito']>, ParentType, ContextType, RequireFields<MutationUpdateRequisitoArgs, 'id' | 'input'>>;
};

export type PracticaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Practica'] = ResolversParentTypes['Practica']> = {
  empresa?: Resolver<Maybe<ResolversTypes['Empresa']>, ParentType, ContextType>;
  estado?: Resolver<Maybe<ResolversTypes['Estado']>, ParentType, ContextType>;
  estudiante?: Resolver<Maybe<ResolversTypes['Estudiante']>, ParentType, ContextType>;
  fecha_fin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fecha_inicio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  horas_por_cumplir?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  carrera?: Resolver<Maybe<ResolversTypes['Carrera']>, ParentType, ContextType, RequireFields<QueryCarreraArgs, 'id'>>;
  carreras?: Resolver<Maybe<Array<Maybe<ResolversTypes['Carrera']>>>, ParentType, ContextType>;
  empresa?: Resolver<Maybe<ResolversTypes['Empresa']>, ParentType, ContextType, RequireFields<QueryEmpresaArgs, 'id'>>;
  empresas?: Resolver<Maybe<Array<Maybe<ResolversTypes['Empresa']>>>, ParentType, ContextType>;
  estado?: Resolver<Maybe<ResolversTypes['Estado']>, ParentType, ContextType, RequireFields<QueryEstadoArgs, 'id'>>;
  estados?: Resolver<Maybe<Array<Maybe<ResolversTypes['Estado']>>>, ParentType, ContextType>;
  estudiante?: Resolver<Maybe<ResolversTypes['Estudiante']>, ParentType, ContextType, RequireFields<QueryEstudianteArgs, 'id'>>;
  estudiantePorRequisito?: Resolver<Maybe<ResolversTypes['EstudiantePorRequisito']>, ParentType, ContextType, RequireFields<QueryEstudiantePorRequisitoArgs, 'id'>>;
  estudiantePorRequisitos?: Resolver<Maybe<Array<Maybe<ResolversTypes['EstudiantePorRequisito']>>>, ParentType, ContextType>;
  estudiantes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Estudiante']>>>, ParentType, ContextType>;
  practica?: Resolver<Maybe<ResolversTypes['Practica']>, ParentType, ContextType, RequireFields<QueryPracticaArgs, 'id'>>;
  practicas?: Resolver<Maybe<Array<Maybe<ResolversTypes['Practica']>>>, ParentType, ContextType>;
  requisito?: Resolver<Maybe<ResolversTypes['Requisito']>, ParentType, ContextType, RequireFields<QueryRequisitoArgs, 'id'>>;
  requisitos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Requisito']>>>, ParentType, ContextType>;
};

export type RequisitoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Requisito'] = ResolversParentTypes['Requisito']> = {
  estudiantes?: Resolver<Maybe<Array<Maybe<ResolversTypes['EstudiantePorRequisito']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nombre_requisito?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Carrera?: CarreraResolvers<ContextType>;
  Empresa?: EmpresaResolvers<ContextType>;
  Estado?: EstadoResolvers<ContextType>;
  Estudiante?: EstudianteResolvers<ContextType>;
  EstudiantePorRequisito?: EstudiantePorRequisitoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Practica?: PracticaResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Requisito?: RequisitoResolvers<ContextType>;
};

