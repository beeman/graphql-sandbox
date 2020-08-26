import { gql } from 'apollo-angular'
import { Injectable } from '@angular/core'
import * as Apollo from 'apollo-angular'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
}

export type IntercomMessage = {
  __typename?: 'IntercomMessage'
  type?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['JSON']>
}

export type CorePagingCounter = {
  __typename?: 'CorePagingCounter'
  total?: Maybe<Scalars['Float']>
  limit?: Maybe<Scalars['Float']>
  skip?: Maybe<Scalars['Float']>
}

export type UserEmail = {
  __typename?: 'UserEmail'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  verified?: Maybe<Scalars['Boolean']>
  public?: Maybe<Scalars['Boolean']>
  primary?: Maybe<Scalars['Boolean']>
}

export type User = {
  __typename?: 'User'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  username?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  languages?: Maybe<Array<Scalars['String']>>
  dob?: Maybe<Scalars['DateTime']>
  role?: Maybe<Role>
  emails?: Maybe<Array<UserEmail>>
  developer?: Maybe<Scalars['Boolean']>
  email?: Maybe<Scalars['String']>
  memberships?: Maybe<Array<Membership>>
}

export enum Role {
  Admin = 'Admin',
  Member = 'Member',
  User = 'User',
}

export type UserToken = {
  __typename?: 'UserToken'
  /** JWT Bearer token */
  token: Scalars['String']
  user: User
}

export type Identity = {
  __typename?: 'Identity'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  refreshed?: Maybe<Scalars['DateTime']>
  type?: Maybe<IdentityType>
  providerType?: Maybe<ProviderType>
  remoteId?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  refreshToken?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  profile?: Maybe<Scalars['JSON']>
  data?: Maybe<Scalars['JSON']>
  config?: Maybe<Scalars['JSON']>
  integrationType?: Maybe<IntegrationType>
}

export enum IdentityType {
  Custom = 'Custom',
  Link = 'Link',
  Login = 'Login',
}

export enum ProviderType {
  Facebook = 'Facebook',
  GitHub = 'GitHub',
  Google = 'Google',
  Heroku = 'Heroku',
  Infusionsoft = 'Infusionsoft',
}

export enum IntegrationType {
  DevTo = 'DevTo',
  GitHub = 'GitHub',
  Google = 'Google',
  Heroku = 'Heroku',
  Infusionsoft = 'Infusionsoft',
  Minio = 'Minio',
  Postgres = 'Postgres',
  Sftp = 'Sftp',
  Twitter = 'Twitter',
}

export type Provider = {
  __typename?: 'Provider'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  type?: Maybe<ProviderType>
  identityType?: Maybe<IdentityType>
  clientId?: Maybe<Scalars['String']>
  clientSecret?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['String']>
  redirectUrl?: Maybe<Scalars['String']>
  authUrl?: Maybe<Scalars['String']>
  tokenUrl?: Maybe<Scalars['String']>
  strategy?: Maybe<Scalars['String']>
  ownerId?: Maybe<Scalars['String']>
}

export type ProjectAccess = {
  __typename?: 'ProjectAccess'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  user?: Maybe<User>
  level?: Maybe<ProjectAccessLevel>
}

export enum ProjectAccessLevel {
  Admin = 'Admin',
  User = 'User',
}

export type ProjectAvatar = {
  __typename?: 'ProjectAvatar'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  color?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
}

export type Project = {
  __typename?: 'Project'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  private?: Maybe<Scalars['Boolean']>
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  avatar?: Maybe<ProjectAvatar>
  status?: Maybe<ProjectStatus>
  config?: Maybe<Scalars['JSON']>
  owner?: Maybe<User>
  access?: Maybe<Array<ProjectAccess>>
  integrations?: Maybe<Array<ProviderType>>
  accessLevel?: Maybe<ProjectAccessLevel>
  identities?: Maybe<Array<Identity>>
  editUrl?: Maybe<Scalars['String']>
}

export enum ProjectStatus {
  Created = 'Created',
  Initializing = 'Initializing',
  Active = 'Active',
  Removing = 'Removing',
  Archived = 'Archived',
}

export type ProjectIntercom = {
  __typename?: 'ProjectIntercom'
  projectId: Scalars['String']
  type: ProjectIntercomType
  timestamp: Scalars['DateTime']
  payload?: Maybe<Scalars['JSON']>
}

export enum ProjectIntercomType {
  ProjectFilesSync = 'ProjectFilesSync',
  ContainerList = 'ContainerList',
  Changed = 'Changed',
  Connected = 'Connected',
  Deleted = 'Deleted',
  Error = 'Error',
  Ping = 'Ping',
  Status = 'Status',
  Updated = 'Updated',
}

export type ProjectTemplate = {
  __typename?: 'ProjectTemplate'
  id: Scalars['String']
  name: Scalars['String']
  templateUrl: Scalars['String']
  imageUrl?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  featured?: Maybe<Scalars['Boolean']>
  config?: Maybe<Scalars['JSON']>
}

export type ProjectRecord = {
  __typename?: 'ProjectRecord'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  data?: Maybe<Scalars['JSON']>
  raw?: Maybe<Scalars['JSON']>
  collection?: Maybe<Scalars['String']>
  remoteId?: Maybe<Scalars['String']>
  remoteType?: Maybe<Scalars['String']>
  owner?: Maybe<User>
  project?: Maybe<Project>
  schema?: Maybe<ProjectSchema>
  label?: Maybe<Scalars['String']>
}

export type ProjectSchema = {
  __typename?: 'ProjectSchema'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  app?: Maybe<Scalars['Boolean']>
  type?: Maybe<ProjectSchemaType>
  schema?: Maybe<Scalars['String']>
  owner?: Maybe<User>
  project?: Maybe<Project>
  records?: Maybe<Array<ProjectRecord>>
}

export enum ProjectSchemaType {
  JsonSchema = 'JsonSchema',
}

export type ProjectSchemaValidation = {
  __typename?: 'ProjectSchemaValidation'
  valid?: Maybe<Scalars['Boolean']>
  errors?: Maybe<Scalars['JSON']>
}

export type ProjectFile = {
  __typename?: 'ProjectFile'
  path: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  name: Scalars['String']
  type: Scalars['String']
  ext?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  binary: Scalars['Boolean']
  parents?: Maybe<Array<ProjectFile>>
  children?: Maybe<Array<ProjectFile>>
}

export type ProjectHook = {
  __typename?: 'ProjectHook'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  active?: Maybe<Scalars['Boolean']>
  apiKey?: Maybe<Scalars['String']>
  referenceId?: Maybe<Scalars['String']>
  referenceKey?: Maybe<Scalars['String']>
  owner?: Maybe<User>
  project?: Maybe<Project>
  actions?: Maybe<Array<ProjectHookAction>>
  url?: Maybe<Scalars['String']>
}

export type ProjectHookActionInput = {
  __typename?: 'ProjectHookActionInput'
  key: Scalars['String']
  label: Scalars['String']
  description: Scalars['String']
  required: Scalars['Boolean']
}

export type ProjectHookAction = {
  __typename?: 'ProjectHookAction'
  id: Scalars['String']
  description: Scalars['String']
  input: Array<ProjectHookActionInput>
}

export type ProjectSync = {
  __typename?: 'ProjectSync'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  type: ProjectSyncType
  config?: Maybe<Scalars['JSON']>
  name?: Maybe<Scalars['String']>
  status?: Maybe<ProjectSyncStatus>
}

export enum ProjectSyncType {
  Git = 'Git',
  Sftp = 'Sftp',
}

export enum ProjectSyncStatus {
  Idle = 'Idle',
  Running = 'Running',
}

export type ProjectRecordCollection = {
  __typename?: 'ProjectRecordCollection'
  name?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Float']>
}

export type IntegrationActionParam = {
  __typename?: 'IntegrationActionParam'
  name: Scalars['String']
  type: Scalars['String']
  label?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  required?: Maybe<Scalars['Boolean']>
  defaultValue?: Maybe<Scalars['String']>
  options?: Maybe<Array<Scalars['String']>>
}

export type IntegrationAction = {
  __typename?: 'IntegrationAction'
  id: Scalars['String']
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  params?: Maybe<Array<IntegrationActionParam>>
  provides?: Maybe<Scalars['JSON']>
}

export type Integration = {
  __typename?: 'Integration'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  type?: Maybe<IntegrationType>
  config?: Maybe<Scalars['JSON']>
  identity?: Maybe<Identity>
  project?: Maybe<Project>
  owner?: Maybe<User>
  actions?: Maybe<Array<IntegrationAction>>
  identities?: Maybe<Array<Identity>>
  editUrl?: Maybe<Scalars['String']>
  details?: Maybe<IntegrationTypeDetail>
}

export type IntegrationTypeDetail = {
  __typename?: 'IntegrationTypeDetail'
  type?: Maybe<IntegrationType>
  identityTypes?: Maybe<Array<IdentityType>>
  params?: Maybe<Array<IntegrationActionParam>>
  config?: Maybe<Array<IntegrationActionParam>>
  icon?: Maybe<Scalars['String']>
}

export type ContentBlock = {
  __typename?: 'ContentBlock'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  content?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Float']>
  type: ContentBlockType
  config?: Maybe<Scalars['JSON']>
  layout?: Maybe<Scalars['JSON']>
  children?: Maybe<Array<ContentBlock>>
  parent?: Maybe<ContentBlock>
}

export enum ContentBlockType {
  Audio = 'Audio',
  App = 'App',
  Feature = 'Feature',
  Data = 'Data',
  Downloads = 'Downloads',
  Form = 'Form',
  FooterLinks = 'FooterLinks',
  Html = 'Html',
  Image = 'Image',
  ImageGallery = 'ImageGallery',
  Links = 'Links',
  Markdown = 'Markdown',
  PageHeader = 'PageHeader',
  Portfolio = 'Portfolio',
  Row = 'Row',
  Section = 'Section',
  Social = 'Social',
  Video = 'Video',
}

export type ContentData = {
  __typename?: 'ContentData'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  type?: Maybe<ContentDataType>
  config?: Maybe<Scalars['JSON']>
  endpoint?: Maybe<Scalars['String']>
  operation?: Maybe<Scalars['String']>
  query?: Maybe<Scalars['String']>
  headers?: Maybe<Scalars['JSON']>
  variables?: Maybe<Scalars['JSON']>
}

export enum ContentDataType {
  GraphQl = 'GraphQL',
}

export type ContentImage = {
  __typename?: 'ContentImage'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  provider?: Maybe<ImageProvider>
  thumbUrl: Scalars['String']
  providerId?: Maybe<Scalars['String']>
  providerLink?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  color?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  authorName?: Maybe<Scalars['String']>
  authorLink?: Maybe<Scalars['String']>
}

export enum ImageProvider {
  Project = 'Project',
  Unsplash = 'Unsplash',
  Url = 'Url',
}

export type ContentLayout = {
  __typename?: 'ContentLayout'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  themeUrl?: Maybe<Scalars['String']>
  scripts?: Maybe<Array<Scalars['String']>>
  styles?: Maybe<Array<Scalars['String']>>
  footer?: Maybe<ContentBlock>
  header?: Maybe<ContentBlock>
}

export type ContentPage = {
  __typename?: 'ContentPage'
  published?: Maybe<Scalars['Boolean']>
  public?: Maybe<Scalars['Boolean']>
  navigation?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Float']>
  scripts?: Maybe<Array<Scalars['String']>>
  styles?: Maybe<Array<Scalars['String']>>
  blocks?: Maybe<Array<ContentBlock>>
  images?: Maybe<Array<ContentImage>>
  layout?: Maybe<ContentLayout>
}

export type MembershipLevel = {
  __typename?: 'MembershipLevel'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  salesUrl?: Maybe<Scalars['String']>
  project?: Maybe<Project>
  owner?: Maybe<User>
  addMemberUrl?: Maybe<Scalars['String']>
  addMemberBody?: Maybe<Scalars['JSON']>
  removeMemberUrl?: Maybe<Scalars['String']>
  removeMemberBody?: Maybe<Scalars['JSON']>
}

export type Membership = {
  __typename?: 'Membership'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  level?: Maybe<MembershipLevel>
  project?: Maybe<Project>
  member?: Maybe<User>
}

export type ContentDomain = {
  __typename?: 'ContentDomain'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  domain?: Maybe<Scalars['String']>
}

export type ContentSite = {
  __typename?: 'ContentSite'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  featured?: Maybe<Scalars['Boolean']>
  maintenance?: Maybe<Scalars['Boolean']>
  public?: Maybe<Scalars['Boolean']>
  published?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  coverUrl?: Maybe<Scalars['String']>
  logoUrl?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  scripts?: Maybe<Array<Scalars['String']>>
  styles?: Maybe<Array<Scalars['String']>>
  data?: Maybe<Array<ContentData>>
  domains?: Maybe<Array<ContentDomain>>
  pages?: Maybe<Array<ContentPage>>
  levels?: Maybe<Array<MembershipLevel>>
  home?: Maybe<ContentPage>
  project?: Maybe<Project>
  owner?: Maybe<User>
  layout?: Maybe<ContentLayout>
  editUrl?: Maybe<Scalars['String']>
  liveUrl?: Maybe<Scalars['String']>
  previewUrl?: Maybe<Scalars['String']>
}

export type ContentSiteValidation = {
  __typename?: 'ContentSiteValidation'
  slug?: Maybe<Scalars['String']>
  valid?: Maybe<Scalars['Boolean']>
}

export type Course = {
  __typename?: 'Course'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  slug: Scalars['String']
  title: Scalars['String']
  difficulty?: Maybe<CourseDifficulty>
  description?: Maybe<Scalars['String']>
  overview?: Maybe<Scalars['String']>
  objectives?: Maybe<Array<Scalars['String']>>
  featured?: Maybe<Scalars['Boolean']>
  maintenance?: Maybe<Scalars['Boolean']>
  public?: Maybe<Scalars['Boolean']>
  published?: Maybe<Scalars['Boolean']>
  locked?: Maybe<Scalars['Boolean']>
  unlockDate?: Maybe<Scalars['DateTime']>
  image?: Maybe<ContentImage>
  author?: Maybe<User>
  owner?: Maybe<User>
  project?: Maybe<Project>
  modules?: Maybe<Array<CourseModule>>
  access?: Maybe<Array<CourseAccess>>
  enrollments?: Maybe<Array<CourseEnrollment>>
  pages?: Maybe<Array<ContentPage>>
  publicUrl?: Maybe<Scalars['String']>
  editUrl?: Maybe<Scalars['String']>
}

export enum CourseDifficulty {
  Advanced = 'Advanced',
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
}

export type CourseAccess = {
  __typename?: 'CourseAccess'
  id: Scalars['String']
  level: CourseAccessLevel
  user?: Maybe<User>
  course?: Maybe<Course>
}

export enum CourseAccessLevel {
  Admin = 'Admin',
  Editor = 'Editor',
  Instructor = 'Instructor',
  Student = 'Student',
}

export type CourseEnrollment = {
  __typename?: 'CourseEnrollment'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  status?: Maybe<CourseEnrollmentStatus>
  course?: Maybe<Course>
  owner?: Maybe<User>
  student?: Maybe<User>
  instructor?: Maybe<User>
  project?: Maybe<Project>
}

export enum CourseEnrollmentStatus {
  Enrolled = 'Enrolled',
  Active = 'Active',
  Finished = 'Finished',
}

export type CourseModule = {
  __typename?: 'CourseModule'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  slug: Scalars['String']
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Float']>
  draft?: Maybe<Scalars['Boolean']>
  current?: Maybe<Scalars['Boolean']>
  completed?: Maybe<Scalars['Boolean']>
  started?: Maybe<Scalars['Boolean']>
  pending?: Maybe<Scalars['Boolean']>
  locked?: Maybe<Scalars['Boolean']>
  unlockDate?: Maybe<Scalars['DateTime']>
  course?: Maybe<Course>
  lessons?: Maybe<Array<Lesson>>
}

export type CourseEnrollmentProgress = {
  __typename?: 'CourseEnrollmentProgress'
  enrollment?: Maybe<CourseEnrollment>
  course?: Maybe<Course>
  nextLesson?: Maybe<Scalars['JSON']>
  currentLesson?: Maybe<Scalars['JSON']>
  currentContent?: Maybe<Scalars['JSON']>
  courseStarted?: Maybe<Scalars['Boolean']>
  courseCompleted?: Maybe<Scalars['Boolean']>
  lessonCounter?: Maybe<Scalars['Int']>
  lessonTotal?: Maybe<Scalars['Int']>
  lessonPercentage?: Maybe<Scalars['Int']>
  sectionStatus?: Maybe<Scalars['JSON']>
  lessonStatus?: Maybe<Scalars['JSON']>
  modules?: Maybe<Scalars['JSON']>
  lessons?: Maybe<Scalars['JSON']>
  lessonSection?: Maybe<Scalars['JSON']>
}

export type LessonProgress = {
  __typename?: 'LessonProgress'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  status?: Maybe<LessonProgressStatus>
  enrollment?: Maybe<CourseEnrollment>
  lesson?: Maybe<Lesson>
  records?: Maybe<Array<ProjectRecord>>
  section?: Maybe<LessonSection>
}

export enum LessonProgressStatus {
  Completed = 'Completed',
  Started = 'Started',
}

export type Lesson = {
  __typename?: 'Lesson'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  slug: Scalars['String']
  title: Scalars['String']
  objective?: Maybe<Scalars['String']>
  draft?: Maybe<Scalars['Boolean']>
  started?: Maybe<Scalars['Boolean']>
  completed?: Maybe<Scalars['Boolean']>
  pending?: Maybe<Scalars['Boolean']>
  order?: Maybe<Scalars['Float']>
  duration?: Maybe<Scalars['Float']>
  locked?: Maybe<Scalars['Boolean']>
  unlockDate?: Maybe<Scalars['DateTime']>
  module?: Maybe<CourseModule>
  author?: Maybe<User>
  sections?: Maybe<Array<LessonSection>>
  link?: Maybe<Scalars['String']>
}

export type LessonSection = {
  __typename?: 'LessonSection'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  type: LessonSectionType
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  config?: Maybe<Scalars['JSON']>
  started?: Maybe<Scalars['Boolean']>
  completed?: Maybe<Scalars['Boolean']>
  pending?: Maybe<Scalars['Boolean']>
  order?: Maybe<Scalars['Float']>
}

export enum LessonSectionType {
  App = 'App',
  Assignment = 'Assignment',
  Downloads = 'Downloads',
  Exercise = 'Exercise',
  Markdown = 'Markdown',
  Video = 'Video',
}

export type Profile = {
  __typename?: 'Profile'
  id?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  avatarUrl?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  developer?: Maybe<Scalars['Boolean']>
  role?: Maybe<Role>
  followersCount?: Maybe<Scalars['Int']>
  followingCount?: Maybe<Scalars['Int']>
}

export type Activity = {
  __typename?: 'Activity'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  type?: Maybe<ActivityType>
  title?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  referenceType?: Maybe<Scalars['String']>
  referenceId?: Maybe<Scalars['String']>
  referenceLink?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['JSON']>
  actor?: Maybe<Profile>
  user?: Maybe<Profile>
}

/** Activity type */
export enum ActivityType {
  UserCreated = 'UserCreated',
  ProfileFollowed = 'ProfileFollowed',
}

export type ProfileRelation = {
  __typename?: 'ProfileRelation'
  isYou: Scalars['Boolean']
  isFollowingYou: Scalars['Boolean']
  isFollowedByYou: Scalars['Boolean']
}

export type Chat = {
  __typename?: 'Chat'
  id?: Maybe<Scalars['String']>
  key?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  owner?: Maybe<Profile>
  profile?: Maybe<Profile>
  messages?: Maybe<Array<Message>>
  lastMessage?: Maybe<Message>
  unread?: Maybe<Scalars['Int']>
}

export type Message = {
  __typename?: 'Message'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  read?: Maybe<Scalars['Boolean']>
  text?: Maybe<Scalars['String']>
  type?: Maybe<MessageType>
  author?: Maybe<Profile>
  chat: Chat
}

export enum MessageType {
  Incoming = 'Incoming',
  Outgoing = 'Outgoing',
  Notification = 'Notification',
}

export type Category = {
  __typename?: 'Category'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type Product = {
  __typename?: 'Product'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  status?: Maybe<ProductStatus>
  featured?: Maybe<Scalars['Boolean']>
  published?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  currency?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Float']>
  image?: Maybe<ContentImage>
  images?: Maybe<Array<ContentImage>>
  owner?: Maybe<User>
  category?: Maybe<Category>
  isOwner: Scalars['Boolean']
}

/** Product Status */
export enum ProductStatus {
  Archived = 'Archived',
  Available = 'Available',
  Unavailable = 'Unavailable',
}

export type Checkout = {
  __typename?: 'Checkout'
  id: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  type: CheckoutType
  data: Scalars['JSON']
  referenceId?: Maybe<Scalars['String']>
  owner: User
  licenses: ProductLicense
  order: Order
}

/** Checkout Type */
export enum CheckoutType {
  PayPal = 'PayPal',
  Stripe = 'Stripe',
}

export type OrderItem = {
  __typename?: 'OrderItem'
  id: Scalars['String']
  owner: User
  product: Product
  amount: Scalars['Int']
  price: Scalars['Int']
}

export type Order = {
  __typename?: 'Order'
  id: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  owner: User
  items: Array<OrderItem>
  checkout?: Maybe<Checkout>
  status: OrderStatus
}

/** Order Status */
export enum OrderStatus {
  Archived = 'Archived',
  Closed = 'Closed',
  Complete = 'Complete',
  Open = 'Open',
}

export type ProductLicense = {
  __typename?: 'ProductLicense'
  id: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  owner: User
  product: Product
  order: Order
  type: ProductLicenseType
  price: Scalars['Float']
  currency: Scalars['String']
  key: Scalars['String']
}

/** Product License Type */
export enum ProductLicenseType {
  Regular = 'Regular',
  Extended = 'Extended',
}

export type ProductRelease = {
  __typename?: 'ProductRelease'
  id: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  owner: User
  product: Product
  text: Scalars['String']
  name: Scalars['String']
  tag: Scalars['String']
  data: Scalars['JSON']
}

export type BackupRecord = {
  __typename?: 'BackupRecord'
  hash?: Maybe<Scalars['Float']>
  data?: Maybe<Scalars['JSON']>
  recordId?: Maybe<Scalars['String']>
  recordType?: Maybe<Scalars['String']>
}

export type Backup = {
  __typename?: 'Backup'
  id?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  itemId?: Maybe<Scalars['String']>
  type?: Maybe<BackupType>
  records?: Maybe<Array<BackupRecord>>
  date?: Maybe<Scalars['Float']>
}

export enum BackupType {
  Course = 'Course',
  Database = 'Database',
  Site = 'Site',
}

export type InfusionsoftCustomFieldOptions = {
  __typename?: 'InfusionsoftCustomFieldOptions'
  id?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
}

export type InfusionsoftCustomField = {
  __typename?: 'InfusionsoftCustomField'
  id?: Maybe<Scalars['String']>
  key?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
  options?: Maybe<Array<InfusionsoftCustomFieldOptions>>
  type?: Maybe<Scalars['String']>
  required?: Maybe<Scalars['Boolean']>
  hidden?: Maybe<Scalars['Boolean']>
  _raw?: Maybe<Scalars['JSON']>
}

export type InfusionsoftCustomFieldGroup = {
  __typename?: 'InfusionsoftCustomFieldGroup'
  label?: Maybe<Scalars['String']>
  fields?: Maybe<Array<InfusionsoftCustomField>>
}

export type InfusionsoftModelFieldGroup = {
  __typename?: 'InfusionsoftModelFieldGroup'
  customFieldGroups?: Maybe<Array<InfusionsoftCustomFieldGroup>>
  customFields?: Maybe<Array<InfusionsoftCustomField>>
  defaultFields?: Maybe<Array<InfusionsoftCustomField>>
}

export type InfusionsoftCompany = {
  __typename?: 'InfusionsoftCompany'
  id?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['String']>
  line1?: Maybe<Scalars['String']>
  line2?: Maybe<Scalars['String']>
  locality?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
  countryCode?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  emailAddress?: Maybe<Scalars['String']>
  emailOptedIn?: Maybe<Scalars['String']>
  emailStatus?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  phoneExtension?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['String']>
  phoneType?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  customFields?: Maybe<Array<InfusionsoftCustomField>>
  customFieldMap?: Maybe<Scalars['JSON']>
  _raw?: Maybe<Scalars['JSON']>
}

export type InfusionsoftEmail = {
  __typename?: 'InfusionsoftEmail'
  email?: Maybe<Scalars['String']>
  field?: Maybe<Scalars['String']>
}

export type InfusionsoftPhone = {
  __typename?: 'InfusionsoftPhone'
  number?: Maybe<Scalars['String']>
  extension?: Maybe<Scalars['String']>
  field?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  _raw?: Maybe<Scalars['JSON']>
}

export type InfusionsoftContact = {
  __typename?: 'InfusionsoftContact'
  id?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['String']>
  ownerId?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  emailStatus?: Maybe<Scalars['String']>
  line1?: Maybe<Scalars['String']>
  line2?: Maybe<Scalars['String']>
  locality?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
  countryCode?: Maybe<Scalars['String']>
  company?: Maybe<InfusionsoftCompany>
  companyName?: Maybe<Scalars['String']>
  companyId?: Maybe<Scalars['String']>
  emailOptedIn?: Maybe<Scalars['Boolean']>
  emailAddresses?: Maybe<Array<InfusionsoftEmail>>
  email?: Maybe<Scalars['String']>
  contactType?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  tagIds?: Maybe<Array<Scalars['Int']>>
  phoneNumbers?: Maybe<Array<InfusionsoftPhone>>
  customFields?: Maybe<Array<InfusionsoftCustomField>>
  customFieldMap?: Maybe<Scalars['JSON']>
  _raw?: Maybe<Scalars['JSON']>
}

export type InfusionsoftNote = {
  __typename?: 'InfusionsoftNote'
  id?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  _raw?: Maybe<Scalars['JSON']>
}

export type InfusionsoftUser = {
  __typename?: 'InfusionsoftUser'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  infusionsoftId?: Maybe<Scalars['String']>
  _raw?: Maybe<Scalars['JSON']>
}

export type InfusionsoftOpportunity = {
  __typename?: 'InfusionsoftOpportunity'
  id?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['String']>
  affiliateId?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  estimatedCloseDate?: Maybe<Scalars['String']>
  nextActionNotes?: Maybe<Scalars['String']>
  nextActionDate?: Maybe<Scalars['String']>
  includeInForecast?: Maybe<Scalars['String']>
  projectedRevenueLow?: Maybe<Scalars['String']>
  projectedRevenueHigh?: Maybe<Scalars['String']>
  stage?: Maybe<Scalars['JSON']>
  contact?: Maybe<InfusionsoftContact>
  user?: Maybe<InfusionsoftUser>
  customFields?: Maybe<Array<InfusionsoftCustomField>>
  customFieldMap?: Maybe<Scalars['JSON']>
  _raw?: Maybe<Scalars['JSON']>
}

export type InfusionsoftOpportunityStage = {
  __typename?: 'InfusionsoftOpportunityStage'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  endStage?: Maybe<Scalars['Boolean']>
  isDefault?: Maybe<Scalars['Boolean']>
  stageCount?: Maybe<Scalars['Float']>
  stageOrder?: Maybe<Scalars['Float']>
  _raw?: Maybe<Scalars['JSON']>
}

export type Setting = {
  __typename?: 'Setting'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  type?: Maybe<SettingType>
  description?: Maybe<Scalars['String']>
  key?: Maybe<Scalars['String']>
  defaultValue?: Maybe<Scalars['JSON']>
  value?: Maybe<Scalars['JSON']>
}

/** SettingType */
export enum SettingType {
  Array = 'Array',
  Boolean = 'Boolean',
  String = 'String',
  Int = 'Int',
  Object = 'Object',
}

export type Query = {
  __typename?: 'Query'
  uptime: Scalars['Float']
  me: User
  authProviders: Array<Provider>
  projects?: Maybe<Array<Project>>
  projectTemplates?: Maybe<Array<ProjectTemplate>>
  projectByName?: Maybe<Project>
  projectRecords?: Maybe<Array<ProjectRecord>>
  projectAppRecords?: Maybe<Array<ProjectRecord>>
  projectRecord?: Maybe<ProjectRecord>
  projectAppRecord?: Maybe<ProjectRecord>
  projectSchemas: Array<ProjectSchema>
  projectSchema: ProjectSchema
  projectFiles: Array<ProjectFile>
  projectFileTree: Array<ProjectFile>
  projectFile: ProjectFile
  projectFileContent: Scalars['String']
  projectHooks: Array<ProjectHook>
  projectHook: ProjectHook
  projectSyncs: Array<ProjectSync>
  projectSync: ProjectSync
  accountEmails?: Maybe<Array<UserEmail>>
  accountIdentities?: Maybe<Array<Identity>>
  accountIdentity?: Maybe<Identity>
  accountProfile?: Maybe<User>
  accountUsernameAvailable?: Maybe<Scalars['Boolean']>
  contentBlocks?: Maybe<Array<ContentBlock>>
  contentBlock?: Maybe<ContentBlock>
  contentDataSources?: Maybe<Array<ContentData>>
  contentData?: Maybe<ContentData>
  contentImages?: Maybe<Array<ContentImage>>
  contentImage?: Maybe<ContentImage>
  unsplashSearch: Array<ContentImage>
  contentLayout?: Maybe<ContentLayout>
  contentPages?: Maybe<Array<ContentPage>>
  contentPage?: Maybe<ContentPage>
  membershipLevels?: Maybe<Array<MembershipLevel>>
  memberships?: Maybe<Array<Membership>>
  membership?: Maybe<Membership>
  membershipLevel?: Maybe<MembershipLevel>
  contentSites?: Maybe<Array<ContentSite>>
  contentSite?: Maybe<ContentSite>
  contentSitePublic?: Maybe<ContentSite>
  validateContentSiteSlug?: Maybe<ContentSiteValidation>
  courseAccess?: Maybe<Array<CourseAccess>>
  courses?: Maybe<Array<Course>>
  course?: Maybe<Course>
  courseEnrollments?: Maybe<Array<CourseEnrollment>>
  courseEnrollment?: Maybe<CourseEnrollment>
  courseEnrollmentProgress?: Maybe<CourseEnrollmentProgress>
  enrollments?: Maybe<Array<CourseEnrollment>>
  enrollment?: Maybe<CourseEnrollment>
  enrollmentProgress?: Maybe<CourseEnrollmentProgress>
  courseHooks?: Maybe<Array<ProjectHook>>
  courseHookActions?: Maybe<Array<ProjectHookAction>>
  courseHook?: Maybe<ProjectHook>
  publicCourses?: Maybe<Array<Course>>
  publicCourse?: Maybe<Course>
  publicContentSites?: Maybe<Array<ContentSite>>
  publicContentSite?: Maybe<ContentSite>
  publicContentSiteByName?: Maybe<ContentSite>
  publicContentPage?: Maybe<ContentPage>
  myActivities: Array<Activity>
  myActivityFeed: Array<Activity>
  userActivities: Array<Activity>
  profiles: Array<Profile>
  profile?: Maybe<Profile>
  profileFollowers: Array<Profile>
  profileFollowing: Array<Profile>
  profileRelation: ProfileRelation
  myProfile: Profile
  chats: Array<Chat>
  chat: Chat
  messages?: Maybe<Array<Message>>
  checkouts: Array<Checkout>
  checkoutReference: Checkout
  checkoutVerify: Checkout
  openOrder: Order
  orders: Array<Order>
  order: Order
  productLicenses: Array<ProductLicense>
  verifyProductLicenses: Array<ProductLicense>
  productReleases: Array<ProductRelease>
  productRelease: ProductRelease
  products: Array<Product>
  featuredProducts: Array<Product>
  productById: Product
  productBySlug: Product
  categoryBySlug?: Maybe<Category>
  backupList?: Maybe<Array<Backup>>
  backupItem?: Maybe<Backup>
  infusionsoftCompanies?: Maybe<Array<InfusionsoftCompany>>
  infusionsoftCompany?: Maybe<InfusionsoftCompany>
  infusionsoftCompanyFields?: Maybe<InfusionsoftModelFieldGroup>
  infusionsoftContacts?: Maybe<Array<InfusionsoftContact>>
  infusionsoftContact?: Maybe<InfusionsoftContact>
  infusionsoftContactFields?: Maybe<InfusionsoftModelFieldGroup>
  infusionsoftNotes?: Maybe<Array<InfusionsoftNote>>
  infusionsoftNote?: Maybe<InfusionsoftNote>
  infusionsoftNoteTemplates?: Maybe<Array<Scalars['String']>>
  infusionsoftOpportunities?: Maybe<Array<InfusionsoftOpportunity>>
  infusionsoftOpportunity?: Maybe<InfusionsoftOpportunity>
  infusionsoftOpportunityFields?: Maybe<InfusionsoftModelFieldGroup>
  infusionsoftOpportunityStages?: Maybe<Array<InfusionsoftOpportunityStage>>
  infusionsoftUser?: Maybe<User>
  integrations?: Maybe<Array<Integration>>
  integration?: Maybe<Integration>
  integrationTypes?: Maybe<Array<IntegrationTypeDetail>>
  integrationRecord?: Maybe<ProjectRecord>
  integrationRecords?: Maybe<Array<ProjectRecord>>
  integrationRecordsCount?: Maybe<CorePagingCounter>
  integrationCollections?: Maybe<Array<ProjectRecordCollection>>
  systemContentSites?: Maybe<Array<ContentSite>>
  systemContentSitesCount?: Maybe<CorePagingCounter>
  systemContentSite?: Maybe<ContentSite>
  systemCourses?: Maybe<Array<Course>>
  systemCoursesCount?: Maybe<CorePagingCounter>
  systemCourse?: Maybe<Course>
  systemProjects?: Maybe<Array<Project>>
  systemProjectsCount?: Maybe<CorePagingCounter>
  systemProject?: Maybe<Project>
  systemSettings?: Maybe<Array<Setting>>
  systemUsers?: Maybe<Array<User>>
  systemUsersCount?: Maybe<CorePagingCounter>
  systemUser?: Maybe<User>
}

export type QueryProjectsArgs = {
  input?: Maybe<ListProjectInput>
}

export type QueryProjectByNameArgs = {
  name: Scalars['String']
}

export type QueryProjectRecordsArgs = {
  schemaName: Scalars['String']
  projectName: Scalars['String']
}

export type QueryProjectAppRecordsArgs = {
  collection: Scalars['String']
  projectName: Scalars['String']
}

export type QueryProjectRecordArgs = {
  recordId: Scalars['String']
  schemaName: Scalars['String']
  projectName: Scalars['String']
}

export type QueryProjectAppRecordArgs = {
  recordId: Scalars['String']
  collection: Scalars['String']
  projectName: Scalars['String']
}

export type QueryProjectSchemasArgs = {
  projectName: Scalars['String']
}

export type QueryProjectSchemaArgs = {
  schemaName: Scalars['String']
  projectName: Scalars['String']
}

export type QueryProjectFilesArgs = {
  path: Scalars['String']
  projectName: Scalars['String']
}

export type QueryProjectFileTreeArgs = {
  path: Scalars['String']
  projectName: Scalars['String']
}

export type QueryProjectFileArgs = {
  path: Scalars['String']
  projectName: Scalars['String']
}

export type QueryProjectFileContentArgs = {
  path: Scalars['String']
  projectName: Scalars['String']
}

export type QueryProjectHooksArgs = {
  projectId: Scalars['String']
}

export type QueryProjectHookArgs = {
  id: Scalars['String']
  projectId: Scalars['String']
}

export type QueryProjectSyncsArgs = {
  projectName: Scalars['String']
}

export type QueryProjectSyncArgs = {
  syncId: Scalars['String']
}

export type QueryAccountIdentityArgs = {
  identityId: Scalars['String']
}

export type QueryAccountUsernameAvailableArgs = {
  username: Scalars['String']
}

export type QueryContentBlocksArgs = {
  pageId: Scalars['String']
}

export type QueryContentBlockArgs = {
  blockId: Scalars['String']
}

export type QueryContentDataSourcesArgs = {
  slug: Scalars['String']
}

export type QueryContentDataArgs = {
  dataId: Scalars['String']
}

export type QueryContentImagesArgs = {
  projectName: Scalars['String']
}

export type QueryContentImageArgs = {
  imageId: Scalars['String']
}

export type QueryUnsplashSearchArgs = {
  orientation?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  keyword: Scalars['String']
}

export type QueryContentLayoutArgs = {
  layoutId: Scalars['String']
}

export type QueryContentPagesArgs = {
  slug: Scalars['String']
}

export type QueryContentPageArgs = {
  pageId: Scalars['String']
}

export type QueryMembershipLevelsArgs = {
  projectName: Scalars['String']
}

export type QueryMembershipsArgs = {
  levelId?: Maybe<Scalars['String']>
  projectName: Scalars['String']
}

export type QueryMembershipArgs = {
  membershipId?: Maybe<Scalars['String']>
}

export type QueryMembershipLevelArgs = {
  levelId: Scalars['String']
}

export type QueryContentSitesArgs = {
  projectName: Scalars['String']
}

export type QueryContentSiteArgs = {
  slug: Scalars['String']
}

export type QueryContentSitePublicArgs = {
  slug: Scalars['String']
}

export type QueryValidateContentSiteSlugArgs = {
  slug: Scalars['String']
}

export type QueryCourseAccessArgs = {
  courseSlugOrId: Scalars['String']
}

export type QueryCoursesArgs = {
  projectName: Scalars['String']
}

export type QueryCourseArgs = {
  courseSlugOrId: Scalars['String']
}

export type QueryCourseEnrollmentsArgs = {
  paging?: Maybe<CorePagingInput>
  courseId: Scalars['String']
}

export type QueryCourseEnrollmentArgs = {
  enrollmentId: Scalars['String']
  courseId: Scalars['String']
}

export type QueryCourseEnrollmentProgressArgs = {
  enrollmentId: Scalars['String']
  courseId: Scalars['String']
}

export type QueryEnrollmentArgs = {
  enrollmentId: Scalars['String']
  courseId: Scalars['String']
}

export type QueryEnrollmentProgressArgs = {
  enrollmentId: Scalars['String']
  courseId: Scalars['String']
}

export type QueryCourseHooksArgs = {
  courseId: Scalars['String']
}

export type QueryCourseHookActionsArgs = {
  courseId: Scalars['String']
}

export type QueryCourseHookArgs = {
  hookId: Scalars['String']
  courseId: Scalars['String']
}

export type QueryPublicCoursesArgs = {
  featured?: Maybe<Scalars['Boolean']>
}

export type QueryPublicCourseArgs = {
  slug: Scalars['String']
}

export type QueryPublicContentSitesArgs = {
  featured?: Maybe<Scalars['Boolean']>
}

export type QueryPublicContentSiteArgs = {
  slug: Scalars['String']
}

export type QueryPublicContentSiteByNameArgs = {
  slug: Scalars['String']
}

export type QueryPublicContentPageArgs = {
  pageSlug: Scalars['String']
  slug: Scalars['String']
}

export type QueryMyActivityFeedArgs = {
  input?: Maybe<CorePagingInput>
}

export type QueryUserActivitiesArgs = {
  username: Scalars['String']
}

export type QueryProfilesArgs = {
  input?: Maybe<CorePagingInput>
}

export type QueryProfileArgs = {
  username: Scalars['String']
}

export type QueryProfileFollowersArgs = {
  username: Scalars['String']
}

export type QueryProfileFollowingArgs = {
  username: Scalars['String']
}

export type QueryProfileRelationArgs = {
  username: Scalars['String']
}

export type QueryChatArgs = {
  id: Scalars['String']
}

export type QueryMessagesArgs = {
  chatId: Scalars['String']
}

export type QueryCheckoutReferenceArgs = {
  referenceId: Scalars['String']
}

export type QueryCheckoutVerifyArgs = {
  referenceId: Scalars['String']
}

export type QueryOrderArgs = {
  id: Scalars['String']
}

export type QueryProductReleasesArgs = {
  productSlug: Scalars['String']
}

export type QueryProductReleaseArgs = {
  id: Scalars['String']
}

export type QueryProductsArgs = {
  input?: Maybe<ListProductsInput>
}

export type QueryProductByIdArgs = {
  id: Scalars['String']
}

export type QueryProductBySlugArgs = {
  slug: Scalars['String']
}

export type QueryCategoryBySlugArgs = {
  slug?: Maybe<Scalars['String']>
}

export type QueryBackupListArgs = {
  projectName: Scalars['String']
}

export type QueryBackupItemArgs = {
  backupId: Scalars['String']
  type: BackupType
  projectName: Scalars['String']
}

export type QueryInfusionsoftCompaniesArgs = {
  integrationId: Scalars['String']
}

export type QueryInfusionsoftCompanyArgs = {
  companyId: Scalars['String']
  integrationId: Scalars['String']
}

export type QueryInfusionsoftCompanyFieldsArgs = {
  integrationId: Scalars['String']
}

export type QueryInfusionsoftContactsArgs = {
  integrationId: Scalars['String']
}

export type QueryInfusionsoftContactArgs = {
  contactId: Scalars['String']
  integrationId: Scalars['String']
}

export type QueryInfusionsoftContactFieldsArgs = {
  integrationId: Scalars['String']
}

export type QueryInfusionsoftNotesArgs = {
  contactId: Scalars['String']
  integrationId: Scalars['String']
}

export type QueryInfusionsoftNoteArgs = {
  noteId: Scalars['String']
  integrationId: Scalars['String']
}

export type QueryInfusionsoftNoteTemplatesArgs = {
  integrationId: Scalars['String']
}

export type QueryInfusionsoftOpportunitiesArgs = {
  integrationId: Scalars['String']
}

export type QueryInfusionsoftOpportunityArgs = {
  opportunityId: Scalars['String']
  integrationId: Scalars['String']
}

export type QueryInfusionsoftOpportunityFieldsArgs = {
  integrationId: Scalars['String']
}

export type QueryInfusionsoftOpportunityStagesArgs = {
  integrationId: Scalars['String']
}

export type QueryInfusionsoftUserArgs = {
  integrationId: Scalars['String']
}

export type QueryIntegrationsArgs = {
  type?: Maybe<IntegrationType>
  projectName: Scalars['String']
}

export type QueryIntegrationArgs = {
  integrationId: Scalars['String']
}

export type QueryIntegrationRecordArgs = {
  recordId: Scalars['String']
}

export type QueryIntegrationRecordsArgs = {
  paging: CorePagingInput
  collection: Scalars['String']
  integrationId: Scalars['String']
}

export type QueryIntegrationRecordsCountArgs = {
  paging: CorePagingInput
  collection: Scalars['String']
  integrationId: Scalars['String']
}

export type QueryIntegrationCollectionsArgs = {
  integrationId: Scalars['String']
}

export type QuerySystemContentSitesArgs = {
  input?: Maybe<CorePagingInput>
}

export type QuerySystemContentSitesCountArgs = {
  input?: Maybe<CorePagingInput>
}

export type QuerySystemContentSiteArgs = {
  siteId: Scalars['String']
}

export type QuerySystemCoursesArgs = {
  input?: Maybe<CorePagingInput>
}

export type QuerySystemCoursesCountArgs = {
  input?: Maybe<CorePagingInput>
}

export type QuerySystemCourseArgs = {
  courseId: Scalars['String']
}

export type QuerySystemProjectsArgs = {
  input?: Maybe<CorePagingInput>
}

export type QuerySystemProjectsCountArgs = {
  input?: Maybe<CorePagingInput>
}

export type QuerySystemProjectArgs = {
  projectId: Scalars['String']
}

export type QuerySystemUsersArgs = {
  input?: Maybe<CorePagingInput>
}

export type QuerySystemUsersCountArgs = {
  input?: Maybe<CorePagingInput>
}

export type QuerySystemUserArgs = {
  userId: Scalars['String']
}

export type ListProjectInput = {
  q?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Float']>
  skip?: Maybe<Scalars['Float']>
  username?: Maybe<Scalars['String']>
  private?: Maybe<Scalars['Boolean']>
}

export type CorePagingInput = {
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  query?: Maybe<Scalars['String']>
}

export type ListProductsInput = {
  category?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  intercomPub?: Maybe<IntercomMessage>
  register: UserToken
  login: UserToken
  forgotPassword?: Maybe<Scalars['Boolean']>
  resetPassword?: Maybe<User>
  sendValidationEmail?: Maybe<Scalars['Boolean']>
  validateEmail?: Maybe<Scalars['Boolean']>
  createProject?: Maybe<Project>
  generateProject?: Maybe<Scalars['JSON']>
  updateProject?: Maybe<Project>
  deleteProject?: Maybe<Project>
  createProjectRecord?: Maybe<ProjectRecord>
  createProjectAppRecord?: Maybe<ProjectRecord>
  updateProjectRecord?: Maybe<ProjectRecord>
  updateProjectAppRecord?: Maybe<ProjectRecord>
  deleteProjectRecord?: Maybe<ProjectRecord>
  deleteProjectAppRecord?: Maybe<ProjectRecord>
  validateProjectRecord?: Maybe<ProjectSchemaValidation>
  createProjectSchema: ProjectSchema
  updateProjectSchema: ProjectSchema
  deleteProjectSchema: ProjectSchema
  validateProjectSchema: ProjectSchemaValidation
  createProjectFile: ProjectFile
  updateProjectFile: ProjectFile
  deleteProjectFile: Scalars['Boolean']
  createProjectHook: ProjectHook
  updateProjectHook: ProjectHook
  deleteProjectHook: ProjectHook
  createProjectSync: ProjectSync
  updateProjectSync: ProjectSync
  cloneProjectSync: ProjectSync
  deleteProjectSync: ProjectSync
  runProjectSync: ProjectSync
  accountCreateEmail?: Maybe<UserEmail>
  accountRequestSupport?: Maybe<Scalars['Boolean']>
  accountDeleteEmail?: Maybe<UserEmail>
  accountDeleteIdentity?: Maybe<Identity>
  accountMarkEmailPrimary?: Maybe<UserEmail>
  accountMarkEmailPrivate?: Maybe<UserEmail>
  accountMarkEmailPublic?: Maybe<UserEmail>
  accountLinkIdentity?: Maybe<Identity>
  accountCustomIdentity?: Maybe<Identity>
  accountUpdateProfile?: Maybe<User>
  accountUpdateUsername?: Maybe<User>
  accountResetPassword?: Maybe<Scalars['Boolean']>
  accountUpdateIdentity?: Maybe<Identity>
  createContentBlock?: Maybe<ContentBlock>
  updateContentBlock?: Maybe<ContentBlock>
  duplicateContentBlock?: Maybe<ContentBlock>
  deleteContentBlock?: Maybe<ContentBlock>
  createContentData?: Maybe<ContentData>
  updateContentData?: Maybe<ContentData>
  deleteContentData?: Maybe<ContentData>
  createContentImage?: Maybe<ContentImage>
  deleteContentImage?: Maybe<ContentImage>
  createContentLayout?: Maybe<ContentLayout>
  updateContentLayout?: Maybe<ContentLayout>
  deleteContentLayout?: Maybe<ContentLayout>
  addContentLayoutScript?: Maybe<ContentLayout>
  removeContentLayoutScript?: Maybe<ContentLayout>
  addContentLayoutStyle?: Maybe<ContentLayout>
  removeContentLayoutStyle?: Maybe<ContentLayout>
  createContentPage?: Maybe<ContentPage>
  updateContentPage?: Maybe<ContentPage>
  duplicateContentPage?: Maybe<ContentPage>
  deleteContentPage?: Maybe<ContentPage>
  createMembershipLevel?: Maybe<MembershipLevel>
  updateMembershipLevel?: Maybe<MembershipLevel>
  createContentSite?: Maybe<ContentSite>
  updateContentSite?: Maybe<ContentSite>
  updateContentSiteSlug?: Maybe<ContentSite>
  deleteContentSite?: Maybe<ContentSite>
  validateContentSite?: Maybe<Scalars['Boolean']>
  addContentSiteDomain?: Maybe<ContentSite>
  removeContentSiteDomain?: Maybe<ContentSite>
  setContentSiteHome?: Maybe<ContentSite>
  addContentSiteLevel?: Maybe<ContentSite>
  removeContentSiteLevel?: Maybe<ContentSite>
  setCourseAccess?: Maybe<CourseAccess>
  removeCourseAccess?: Maybe<Scalars['Boolean']>
  createCourse?: Maybe<Course>
  updateCourse?: Maybe<Course>
  deleteCourse?: Maybe<Scalars['Boolean']>
  startLessonSection?: Maybe<LessonProgress>
  finishLessonSection?: Maybe<LessonProgress>
  finishContentLesson?: Maybe<LessonProgress>
  startEnrollment?: Maybe<CourseEnrollment>
  finishEnrollment?: Maybe<CourseEnrollment>
  createCourseHook?: Maybe<ProjectHook>
  updateCourseHook?: Maybe<ProjectHook>
  deleteCourseHook?: Maybe<ProjectHook>
  addCourseImage?: Maybe<Course>
  updateCourseImage?: Maybe<Course>
  deleteCourseImage?: Maybe<Course>
  createCourseModule?: Maybe<CourseModule>
  updateCourseModule?: Maybe<CourseModule>
  deleteCourseModule?: Maybe<Scalars['Boolean']>
  createLesson?: Maybe<Lesson>
  updateLesson?: Maybe<Lesson>
  deleteLesson?: Maybe<Scalars['Boolean']>
  createLessonSection?: Maybe<LessonSection>
  updateLessonSection?: Maybe<LessonSection>
  deleteLessonSection?: Maybe<Scalars['Boolean']>
  followProfile: Profile
  unfollowProfile: Profile
  createChat: Chat
  sendMessage: Message
  markAllMessageRead: Scalars['Int']
  markMessageRead: Scalars['Int']
  markMessageUnread: Scalars['Int']
  generateProductLicenses: Array<ProductLicense>
  deleteProductRelease: ProductRelease
  updateProduct: Product
  createOrder: Order
  backupCreate?: Maybe<Backup>
  backupDelete?: Maybe<Scalars['Boolean']>
  createInfusionsoftCompany?: Maybe<InfusionsoftCompany>
  updateInfusionsoftCompany?: Maybe<InfusionsoftCompany>
  createInfusionsoftContact?: Maybe<InfusionsoftContact>
  updateInfusionsoftContact?: Maybe<InfusionsoftContact>
  createInfusionsoftNote?: Maybe<InfusionsoftNote>
  createInfusionsoftOpportunity?: Maybe<InfusionsoftOpportunity>
  updateInfusionsoftOpportunity?: Maybe<InfusionsoftOpportunity>
  updateIntegration?: Maybe<Integration>
  enableIntegration?: Maybe<Integration>
  disableIntegration?: Maybe<Project>
  executeIntegrationAction?: Maybe<Scalars['JSON']>
  initializeIntegration?: Maybe<Integration>
  systemCreateContentSite?: Maybe<ContentSite>
  systemUpdateContentSite?: Maybe<ContentSite>
  systemDeleteContentSite?: Maybe<ContentSite>
  systemCreateCourse?: Maybe<Course>
  systemUpdateCourse?: Maybe<Course>
  systemDeleteCourse?: Maybe<Course>
  systemCreateProject?: Maybe<Project>
  systemUpdateProject?: Maybe<Project>
  systemDeleteProject?: Maybe<Project>
  systemUpdateSetting?: Maybe<Setting>
  systemCreateUser?: Maybe<User>
  systemUpdateUser?: Maybe<User>
  systemSendPasswordReset?: Maybe<Scalars['Boolean']>
  systemDeleteUser?: Maybe<User>
}

export type MutationIntercomPubArgs = {
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type MutationRegisterArgs = {
  input: AuthRegisterInput
}

export type MutationLoginArgs = {
  input: AuthLoginInput
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationResetPasswordArgs = {
  token: Scalars['String']
  password: Scalars['String']
}

export type MutationSendValidationEmailArgs = {
  emailId: Scalars['String']
}

export type MutationValidateEmailArgs = {
  token: Scalars['String']
}

export type MutationCreateProjectArgs = {
  input: CreateProjectInput
}

export type MutationGenerateProjectArgs = {
  input?: Maybe<GenerateProjectInput>
}

export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput
  projectName: Scalars['String']
}

export type MutationDeleteProjectArgs = {
  projectName: Scalars['String']
}

export type MutationCreateProjectRecordArgs = {
  input: CreateProjectRecordInput
  schemaName: Scalars['String']
  projectName: Scalars['String']
}

export type MutationCreateProjectAppRecordArgs = {
  input: CreateProjectRecordInput
  collection: Scalars['String']
  projectName: Scalars['String']
}

export type MutationUpdateProjectRecordArgs = {
  input: UpdateProjectRecordInput
  recordId: Scalars['String']
  schemaName: Scalars['String']
  projectName: Scalars['String']
}

export type MutationUpdateProjectAppRecordArgs = {
  input: UpdateProjectRecordInput
  recordId: Scalars['String']
  collection: Scalars['String']
  projectName: Scalars['String']
}

export type MutationDeleteProjectRecordArgs = {
  recordId: Scalars['String']
  schemaName: Scalars['String']
  projectName: Scalars['String']
}

export type MutationDeleteProjectAppRecordArgs = {
  recordId: Scalars['String']
  collection: Scalars['String']
  projectName: Scalars['String']
}

export type MutationValidateProjectRecordArgs = {
  input: ValidateProjectRecordInput
  schemaName: Scalars['String']
  projectName: Scalars['String']
}

export type MutationCreateProjectSchemaArgs = {
  input: CreateProjectSchemaInput
  projectName: Scalars['String']
}

export type MutationUpdateProjectSchemaArgs = {
  input: UpdateProjectSchemaInput
  schemaName: Scalars['String']
  projectName: Scalars['String']
}

export type MutationDeleteProjectSchemaArgs = {
  schemaName: Scalars['String']
  projectName: Scalars['String']
}

export type MutationValidateProjectSchemaArgs = {
  input: ValidateProjectSchemaInput
}

export type MutationCreateProjectFileArgs = {
  content?: Maybe<Scalars['String']>
  path: Scalars['String']
  projectName: Scalars['String']
}

export type MutationUpdateProjectFileArgs = {
  content?: Maybe<Scalars['String']>
  path: Scalars['String']
  projectName: Scalars['String']
}

export type MutationDeleteProjectFileArgs = {
  recursive?: Maybe<Scalars['Boolean']>
  path: Scalars['String']
  projectName: Scalars['String']
}

export type MutationCreateProjectHookArgs = {
  input: CreateProjectHookInput
  projectId: Scalars['String']
}

export type MutationUpdateProjectHookArgs = {
  input: UpdateProjectHookInput
  projectHookId: Scalars['String']
  projectId: Scalars['String']
}

export type MutationDeleteProjectHookArgs = {
  projectHookId: Scalars['String']
  projectId: Scalars['String']
}

export type MutationCreateProjectSyncArgs = {
  input: CreateProjectSyncInput
  projectName: Scalars['String']
}

export type MutationUpdateProjectSyncArgs = {
  input: UpdateProjectSyncInput
  syncId: Scalars['String']
}

export type MutationCloneProjectSyncArgs = {
  syncId: Scalars['String']
}

export type MutationDeleteProjectSyncArgs = {
  syncId: Scalars['String']
}

export type MutationRunProjectSyncArgs = {
  syncId: Scalars['String']
}

export type MutationAccountCreateEmailArgs = {
  input: AccountCreateEmailInput
}

export type MutationAccountRequestSupportArgs = {
  input: AccountRequestSupportInput
}

export type MutationAccountDeleteEmailArgs = {
  emailId: Scalars['String']
}

export type MutationAccountDeleteIdentityArgs = {
  identityId: Scalars['String']
}

export type MutationAccountMarkEmailPrimaryArgs = {
  emailId: Scalars['String']
}

export type MutationAccountMarkEmailPrivateArgs = {
  emailId: Scalars['String']
}

export type MutationAccountMarkEmailPublicArgs = {
  emailId: Scalars['String']
}

export type MutationAccountLinkIdentityArgs = {
  input: AccountLinkIdentityInput
}

export type MutationAccountCustomIdentityArgs = {
  input: AccountCustomIdentityInput
}

export type MutationAccountUpdateProfileArgs = {
  input: AccountUpdateProfileInput
}

export type MutationAccountUpdateUsernameArgs = {
  username: Scalars['String']
}

export type MutationAccountUpdateIdentityArgs = {
  input: AccountUpdateIdentityInput
  identityId: Scalars['String']
}

export type MutationCreateContentBlockArgs = {
  input: CreateContentBlockInput
  pageId: Scalars['String']
}

export type MutationUpdateContentBlockArgs = {
  input: UpdateContentBlockInput
  blockId: Scalars['String']
}

export type MutationDuplicateContentBlockArgs = {
  blockId: Scalars['String']
}

export type MutationDeleteContentBlockArgs = {
  blockId: Scalars['String']
}

export type MutationCreateContentDataArgs = {
  input: CreateContentDataInput
  slug: Scalars['String']
}

export type MutationUpdateContentDataArgs = {
  input: UpdateContentDataInput
  dataId: Scalars['String']
}

export type MutationDeleteContentDataArgs = {
  dataId: Scalars['String']
}

export type MutationCreateContentImageArgs = {
  input: CreateContentImageInput
  projectName: Scalars['String']
}

export type MutationDeleteContentImageArgs = {
  imageId: Scalars['String']
}

export type MutationCreateContentLayoutArgs = {
  input: CreateContentLayoutInput
  slug: Scalars['String']
}

export type MutationUpdateContentLayoutArgs = {
  input: UpdateContentLayoutInput
  layoutId: Scalars['String']
}

export type MutationDeleteContentLayoutArgs = {
  layoutId: Scalars['String']
}

export type MutationAddContentLayoutScriptArgs = {
  script: Scalars['String']
  layoutId: Scalars['String']
}

export type MutationRemoveContentLayoutScriptArgs = {
  script: Scalars['String']
  layoutId: Scalars['String']
}

export type MutationAddContentLayoutStyleArgs = {
  style: Scalars['String']
  layoutId: Scalars['String']
}

export type MutationRemoveContentLayoutStyleArgs = {
  style: Scalars['String']
  layoutId: Scalars['String']
}

export type MutationCreateContentPageArgs = {
  input: CreateContentPageInput
  slug: Scalars['String']
}

export type MutationUpdateContentPageArgs = {
  input: UpdateContentPageInput
  pageId: Scalars['String']
}

export type MutationDuplicateContentPageArgs = {
  pageId: Scalars['String']
}

export type MutationDeleteContentPageArgs = {
  pageId: Scalars['String']
}

export type MutationCreateMembershipLevelArgs = {
  input: CreateMembershipLevelInput
  projectName: Scalars['String']
}

export type MutationUpdateMembershipLevelArgs = {
  input: UpdateMembershipLevelInput
  levelId: Scalars['String']
}

export type MutationCreateContentSiteArgs = {
  input: CreateContentSiteInput
  projectName: Scalars['String']
}

export type MutationUpdateContentSiteArgs = {
  input: UpdateContentSiteInput
  slug: Scalars['String']
}

export type MutationUpdateContentSiteSlugArgs = {
  slug: Scalars['String']
  siteId: Scalars['String']
}

export type MutationDeleteContentSiteArgs = {
  slug: Scalars['String']
}

export type MutationValidateContentSiteArgs = {
  slug: Scalars['String']
}

export type MutationAddContentSiteDomainArgs = {
  domain: Scalars['String']
  slug: Scalars['String']
}

export type MutationRemoveContentSiteDomainArgs = {
  domain: Scalars['String']
  slug: Scalars['String']
}

export type MutationSetContentSiteHomeArgs = {
  pageId: Scalars['String']
  slug: Scalars['String']
}

export type MutationAddContentSiteLevelArgs = {
  levelId: Scalars['String']
  slug: Scalars['String']
}

export type MutationRemoveContentSiteLevelArgs = {
  levelId: Scalars['String']
  slug: Scalars['String']
}

export type MutationSetCourseAccessArgs = {
  input: SetCourseAccessInput
}

export type MutationRemoveCourseAccessArgs = {
  input: RemoveCourseAccessInput
}

export type MutationCreateCourseArgs = {
  projectName: Scalars['String']
  input: CreateCourseInput
}

export type MutationUpdateCourseArgs = {
  input: UpdateCourseInput
  courseId: Scalars['String']
}

export type MutationDeleteCourseArgs = {
  courseId: Scalars['String']
}

export type MutationStartLessonSectionArgs = {
  lessonSectionId: Scalars['String']
  lessonId: Scalars['String']
  enrollmentId: Scalars['String']
}

export type MutationFinishLessonSectionArgs = {
  lessonSectionId: Scalars['String']
  lessonId: Scalars['String']
  enrollmentId: Scalars['String']
}

export type MutationFinishContentLessonArgs = {
  lessonSectionId: Scalars['String']
  lessonId: Scalars['String']
  enrollmentId: Scalars['String']
}

export type MutationStartEnrollmentArgs = {
  courseId: Scalars['String']
}

export type MutationFinishEnrollmentArgs = {
  enrollmentId: Scalars['String']
  courseId: Scalars['String']
}

export type MutationCreateCourseHookArgs = {
  input: CreateCourseHookInput
  courseId: Scalars['String']
}

export type MutationUpdateCourseHookArgs = {
  input: UpdateCourseHookInput
  hookId: Scalars['String']
  courseId: Scalars['String']
}

export type MutationDeleteCourseHookArgs = {
  hookId: Scalars['String']
  courseId: Scalars['String']
}

export type MutationAddCourseImageArgs = {
  image: CreateContentImageInput
  courseId: Scalars['String']
}

export type MutationUpdateCourseImageArgs = {
  image: CreateContentImageInput
  courseId: Scalars['String']
}

export type MutationDeleteCourseImageArgs = {
  courseId: Scalars['String']
}

export type MutationCreateCourseModuleArgs = {
  input: CreateCourseModuleInput
  courseId: Scalars['String']
}

export type MutationUpdateCourseModuleArgs = {
  input: UpdateCourseModuleInput
  courseModuleId: Scalars['String']
}

export type MutationDeleteCourseModuleArgs = {
  moduleId: Scalars['String']
}

export type MutationCreateLessonArgs = {
  input: CreateLessonInput
  moduleId: Scalars['String']
}

export type MutationUpdateLessonArgs = {
  input: UpdateLessonInput
  lessonId: Scalars['String']
}

export type MutationDeleteLessonArgs = {
  lessonId: Scalars['String']
}

export type MutationCreateLessonSectionArgs = {
  input: CreateLessonSectionInput
  lessonId: Scalars['String']
}

export type MutationUpdateLessonSectionArgs = {
  input: UpdateLessonSectionInput
  lessonSectionId: Scalars['String']
}

export type MutationDeleteLessonSectionArgs = {
  lessonSectionId: Scalars['String']
}

export type MutationFollowProfileArgs = {
  username: Scalars['String']
}

export type MutationUnfollowProfileArgs = {
  username: Scalars['String']
}

export type MutationCreateChatArgs = {
  profileId: Scalars['String']
}

export type MutationSendMessageArgs = {
  data: SendMessageInput
}

export type MutationMarkAllMessageReadArgs = {
  chatId: Scalars['String']
}

export type MutationMarkMessageReadArgs = {
  id: Scalars['String']
}

export type MutationMarkMessageUnreadArgs = {
  id: Scalars['String']
}

export type MutationDeleteProductReleaseArgs = {
  id: Scalars['String']
}

export type MutationUpdateProductArgs = {
  input: UpdateProductInput
  id: Scalars['String']
}

export type MutationCreateOrderArgs = {
  data: CreateOrderInput
}

export type MutationBackupCreateArgs = {
  input: CreateBackupInput
  projectName: Scalars['String']
}

export type MutationBackupDeleteArgs = {
  type: BackupType
  backupId: Scalars['String']
  projectName: Scalars['String']
}

export type MutationCreateInfusionsoftCompanyArgs = {
  input: InfusionsoftCompanyInput
  integrationId: Scalars['String']
}

export type MutationUpdateInfusionsoftCompanyArgs = {
  input: InfusionsoftCompanyInput
  companyId: Scalars['String']
  integrationId: Scalars['String']
}

export type MutationCreateInfusionsoftContactArgs = {
  input: InfusionsoftContactInput
  integrationId: Scalars['String']
}

export type MutationUpdateInfusionsoftContactArgs = {
  input: InfusionsoftContactInput
  contactId: Scalars['String']
  integrationId: Scalars['String']
}

export type MutationCreateInfusionsoftNoteArgs = {
  input: InfusionsoftNoteInput
  integrationId: Scalars['String']
}

export type MutationCreateInfusionsoftOpportunityArgs = {
  input: InfusionsoftOpportunityInput
  integrationId: Scalars['String']
}

export type MutationUpdateInfusionsoftOpportunityArgs = {
  input: InfusionsoftOpportunityInput
  opportunityId: Scalars['String']
  integrationId: Scalars['String']
}

export type MutationUpdateIntegrationArgs = {
  input: UpdateIntegrationInput
  integrationId: Scalars['String']
}

export type MutationEnableIntegrationArgs = {
  identityId?: Maybe<Scalars['String']>
  type: IntegrationType
  projectName: Scalars['String']
}

export type MutationDisableIntegrationArgs = {
  integrationId: Scalars['String']
  projectName: Scalars['String']
}

export type MutationExecuteIntegrationActionArgs = {
  params?: Maybe<Scalars['JSON']>
  action: Scalars['String']
  integrationId: Scalars['String']
}

export type MutationInitializeIntegrationArgs = {
  integrationId: Scalars['String']
}

export type MutationSystemCreateContentSiteArgs = {
  input: CreateContentSiteInput
  projectName: Scalars['String']
  ownerId: Scalars['String']
}

export type MutationSystemUpdateContentSiteArgs = {
  input: UpdateContentSiteInput
  siteId: Scalars['String']
}

export type MutationSystemDeleteContentSiteArgs = {
  siteId: Scalars['String']
}

export type MutationSystemCreateCourseArgs = {
  input: CreateCourseInput
  projectName: Scalars['String']
  ownerId: Scalars['String']
}

export type MutationSystemUpdateCourseArgs = {
  input: UpdateCourseInput
  courseId: Scalars['String']
}

export type MutationSystemDeleteCourseArgs = {
  courseId: Scalars['String']
}

export type MutationSystemCreateProjectArgs = {
  input: SystemCreateProjectInput
}

export type MutationSystemUpdateProjectArgs = {
  input: SystemUpdateProjectInput
  projectId: Scalars['String']
}

export type MutationSystemDeleteProjectArgs = {
  projectId: Scalars['String']
}

export type MutationSystemUpdateSettingArgs = {
  value: Scalars['JSON']
  key: Scalars['String']
}

export type MutationSystemCreateUserArgs = {
  input: SystemCreateUserInput
}

export type MutationSystemUpdateUserArgs = {
  input: SystemUpdateUserInput
  userId: Scalars['String']
}

export type MutationSystemSendPasswordResetArgs = {
  userId: Scalars['String']
}

export type MutationSystemDeleteUserArgs = {
  userId: Scalars['String']
}

export type AuthRegisterInput = {
  email: Scalars['String']
  password: Scalars['String']
  username?: Maybe<Scalars['String']>
}

export type AuthLoginInput = {
  username: Scalars['String']
  password: Scalars['String']
}

export type CreateProjectInput = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  avatarUrl?: Maybe<Scalars['String']>
  avatarIcon?: Maybe<Scalars['String']>
  avatarColor?: Maybe<Scalars['String']>
  private?: Maybe<Scalars['Boolean']>
  initProject?: Maybe<Scalars['Boolean']>
  initReadme?: Maybe<Scalars['Boolean']>
  resource?: Maybe<CreateProjectResourceInput>
}

export type CreateProjectResourceInput = {
  action: Scalars['String']
  identityId?: Maybe<Scalars['String']>
  providerId?: Maybe<Scalars['String']>
  templateUrl?: Maybe<Scalars['String']>
}

export type GenerateProjectInput = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  avatarUrl?: Maybe<Scalars['String']>
  avatarIcon?: Maybe<Scalars['String']>
  avatarColor?: Maybe<Scalars['String']>
  private?: Maybe<Scalars['Boolean']>
}

export type UpdateProjectInput = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  private?: Maybe<Scalars['Boolean']>
}

export type CreateProjectRecordInput = {
  data: Scalars['JSON']
}

export type UpdateProjectRecordInput = {
  data: Scalars['JSON']
}

export type ValidateProjectRecordInput = {
  data: Scalars['String']
}

export type CreateProjectSchemaInput = {
  name: Scalars['String']
  schema: Scalars['String']
  type: ProjectSchemaType
}

export type UpdateProjectSchemaInput = {
  schema: Scalars['String']
}

export type ValidateProjectSchemaInput = {
  schema: Scalars['String']
  type: ProjectSchemaType
}

export type CreateProjectHookInput = {
  resourceId: Scalars['String']
  resourceType: Scalars['String']
  actions: Array<Scalars['String']>
}

export type UpdateProjectHookInput = {
  resourceId?: Maybe<Scalars['String']>
  resourceType?: Maybe<Scalars['String']>
  active?: Maybe<Scalars['Boolean']>
  actions?: Maybe<Array<Scalars['String']>>
}

export type CreateProjectSyncInput = {
  identityId?: Maybe<Scalars['String']>
  type: ProjectSyncType
  name: Scalars['String']
  config?: Maybe<Scalars['JSON']>
}

export type UpdateProjectSyncInput = {
  name?: Maybe<Scalars['String']>
  config?: Maybe<Scalars['JSON']>
}

export type AccountCreateEmailInput = {
  email: Scalars['String']
}

export type AccountRequestSupportInput = {
  subject: Scalars['String']
  message: Scalars['String']
}

export type AccountLinkIdentityInput = {
  providerType: ProviderType
  providerId: Scalars['String']
  remoteId?: Maybe<Scalars['String']>
  accessToken: Scalars['String']
  refreshToken?: Maybe<Scalars['String']>
  profile?: Maybe<Scalars['JSON']>
}

export type AccountCustomIdentityInput = {
  integrationType: IntegrationType
  config?: Maybe<Scalars['JSON']>
}

export type AccountUpdateProfileInput = {
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  languages?: Maybe<Array<Scalars['String']>>
  dob?: Maybe<Scalars['DateTime']>
}

export type AccountUpdateIdentityInput = {
  label?: Maybe<Scalars['String']>
}

export type CreateContentBlockInput = {
  content: Scalars['String']
  type: ContentBlockType
  parentId?: Maybe<Scalars['String']>
  config?: Maybe<Scalars['JSON']>
  layout?: Maybe<Scalars['JSON']>
  order?: Maybe<Scalars['Float']>
}

export type UpdateContentBlockInput = {
  content?: Maybe<Scalars['String']>
  config?: Maybe<Scalars['JSON']>
  layout?: Maybe<Scalars['JSON']>
  order?: Maybe<Scalars['Float']>
}

export type CreateContentDataInput = {
  name: Scalars['String']
  type: ContentDataType
  config?: Maybe<Scalars['JSON']>
  endpoint?: Maybe<Scalars['String']>
  operation?: Maybe<Scalars['String']>
  query?: Maybe<Scalars['String']>
  headers?: Maybe<Scalars['JSON']>
  variables?: Maybe<Scalars['JSON']>
}

export type UpdateContentDataInput = {
  name?: Maybe<Scalars['String']>
  config?: Maybe<Scalars['JSON']>
  endpoint?: Maybe<Scalars['String']>
  operation?: Maybe<Scalars['String']>
  query?: Maybe<Scalars['String']>
  headers?: Maybe<Scalars['JSON']>
  variables?: Maybe<Scalars['JSON']>
}

export type CreateContentImageInput = {
  url: Scalars['String']
  thumbUrl?: Maybe<Scalars['String']>
  provider: ImageProvider
  providerId: Scalars['String']
  providerLink?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  color?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  authorName?: Maybe<Scalars['String']>
  authorLink?: Maybe<Scalars['String']>
}

export type CreateContentLayoutInput = {
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  themeUrl?: Maybe<Scalars['String']>
  scripts?: Maybe<Array<Scalars['String']>>
  styles?: Maybe<Array<Scalars['String']>>
  footer?: Maybe<CreateContentBlockInput>
  header?: Maybe<CreateContentBlockInput>
}

export type UpdateContentLayoutInput = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  themeUrl?: Maybe<Scalars['String']>
}

export type CreateContentPageInput = {
  published?: Maybe<Scalars['Boolean']>
  public?: Maybe<Scalars['Boolean']>
  navigation?: Maybe<Scalars['Boolean']>
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Float']>
  imageIds?: Maybe<Array<Scalars['String']>>
}

export type UpdateContentPageInput = {
  published?: Maybe<Scalars['Boolean']>
  public?: Maybe<Scalars['Boolean']>
  navigation?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Float']>
  imageIds?: Maybe<Array<Scalars['String']>>
}

export type CreateMembershipLevelInput = {
  name: Scalars['String']
  salesUrl?: Maybe<Scalars['String']>
}

export type UpdateMembershipLevelInput = {
  logoUrl?: Maybe<Scalars['String']>
  featured?: Maybe<Scalars['Boolean']>
  maintenance?: Maybe<Scalars['Boolean']>
  public?: Maybe<Scalars['Boolean']>
  published?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
}

export type CreateContentSiteInput = {
  name: Scalars['String']
  logoUrl?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
}

export type UpdateContentSiteInput = {
  coverUrl?: Maybe<Scalars['String']>
  logoUrl?: Maybe<Scalars['String']>
  featured?: Maybe<Scalars['Boolean']>
  maintenance?: Maybe<Scalars['Boolean']>
  public?: Maybe<Scalars['Boolean']>
  published?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
}

export type SetCourseAccessInput = {
  userId: Scalars['String']
  courseId: Scalars['String']
  level: CourseAccessLevel
}

export type RemoveCourseAccessInput = {
  userId: Scalars['String']
  courseId: Scalars['String']
}

export type CreateCourseInput = {
  slug?: Maybe<Scalars['String']>
  difficulty?: Maybe<CourseDifficulty>
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  overview?: Maybe<Scalars['String']>
  objectives?: Maybe<Array<Scalars['String']>>
  published?: Maybe<Scalars['Boolean']>
  locked?: Maybe<Scalars['Boolean']>
  unlockDate?: Maybe<Scalars['String']>
}

export type UpdateCourseInput = {
  slug?: Maybe<Scalars['String']>
  difficulty?: Maybe<CourseDifficulty>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  overview?: Maybe<Scalars['String']>
  objectives?: Maybe<Array<Scalars['String']>>
  featured?: Maybe<Scalars['Boolean']>
  public?: Maybe<Scalars['Boolean']>
  published?: Maybe<Scalars['Boolean']>
  locked?: Maybe<Scalars['Boolean']>
  unlockDate?: Maybe<Scalars['String']>
}

export type CreateCourseHookInput = {
  actions: Array<Scalars['String']>
}

export type UpdateCourseHookInput = {
  actions: Array<Scalars['String']>
}

export type CreateCourseModuleInput = {
  slug?: Maybe<Scalars['String']>
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Float']>
  draft?: Maybe<Scalars['Boolean']>
  locked?: Maybe<Scalars['Boolean']>
}

export type UpdateCourseModuleInput = {
  slug?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Float']>
  draft?: Maybe<Scalars['Boolean']>
  locked?: Maybe<Scalars['Boolean']>
  unlockDate?: Maybe<Scalars['String']>
}

export type CreateLessonInput = {
  slug?: Maybe<Scalars['String']>
  title: Scalars['String']
  objective?: Maybe<Scalars['String']>
  draft?: Maybe<Scalars['Boolean']>
  duration?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

export type UpdateLessonInput = {
  slug?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  objective?: Maybe<Scalars['String']>
  draft?: Maybe<Scalars['Boolean']>
  duration?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  locked?: Maybe<Scalars['Boolean']>
  unlockDate?: Maybe<Scalars['String']>
}

export type CreateLessonSectionInput = {
  type: LessonSectionType
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Float']>
  config?: Maybe<Scalars['JSON']>
}

export type UpdateLessonSectionInput = {
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Float']>
  config?: Maybe<Scalars['JSON']>
}

export type SendMessageInput = {
  text: Scalars['String']
  profileId: Scalars['String']
}

export type UpdateProductInput = {
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  featured?: Maybe<Scalars['Boolean']>
  published?: Maybe<Scalars['Boolean']>
  status?: Maybe<ProductStatus>
}

export type CreateOrderInput = {
  products: Array<CreateOrderItemInput>
  checkoutType: CheckoutType
}

export type CreateOrderItemInput = {
  productId: Scalars['String']
  amount: Scalars['Float']
}

export type CreateBackupInput = {
  type: BackupType
}

export type InfusionsoftCompanyInput = {
  countryCode?: Maybe<Scalars['String']>
  line1?: Maybe<Scalars['String']>
  line2?: Maybe<Scalars['String']>
  locality?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
  zipFour?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  emailAddress?: Maybe<Scalars['String']>
  emailOptedIn?: Maybe<Scalars['Boolean']>
  emailStatus?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  customFields?: Maybe<Array<InfusionsoftCustomFieldInput>>
}

export type InfusionsoftCustomFieldInput = {
  id?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
}

export type InfusionsoftContactInput = {
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  companyId?: Maybe<Scalars['String']>
  line1?: Maybe<Scalars['String']>
  line2?: Maybe<Scalars['String']>
  countryCode?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
  locality?: Maybe<Scalars['String']>
  customFields?: Maybe<Array<InfusionsoftCustomFieldInput>>
}

export type InfusionsoftNoteInput = {
  title?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  contactId?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type InfusionsoftOpportunityInput = {
  dateCreated?: Maybe<Scalars['String']>
  estimatedCloseDate?: Maybe<Scalars['String']>
  includeInForecast?: Maybe<Scalars['String']>
  lastUpdated?: Maybe<Scalars['String']>
  nextActionDate?: Maybe<Scalars['String']>
  nextActionNotes?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  projectedRevenueHigh?: Maybe<Scalars['String']>
  projectedRevenueLow?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  stageId?: Maybe<Scalars['String']>
  reasons?: Maybe<Array<Scalars['String']>>
  contactId?: Maybe<Scalars['String']>
  customFields?: Maybe<Array<InfusionsoftCustomFieldInput>>
}

export type UpdateIntegrationInput = {
  name?: Maybe<Scalars['String']>
  config?: Maybe<Scalars['JSON']>
}

export type SystemCreateProjectInput = {
  name?: Maybe<Scalars['String']>
  private?: Maybe<Scalars['Boolean']>
  status: ProjectStatus
  ownerId: Scalars['String']
}

export type SystemUpdateProjectInput = {
  name?: Maybe<Scalars['String']>
  private?: Maybe<Scalars['Boolean']>
  status?: Maybe<ProjectStatus>
}

export type SystemCreateUserInput = {
  email: Scalars['String']
  password: Scalars['String']
  username?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role: Role
  developer?: Maybe<Scalars['Boolean']>
}

export type SystemUpdateUserInput = {
  username?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  avatarUrl?: Maybe<Scalars['String']>
  role?: Maybe<Role>
  developer?: Maybe<Scalars['Boolean']>
}

export type Subscription = {
  __typename?: 'Subscription'
  intercomSub?: Maybe<IntercomMessage>
  meSub: User
  projectIntercom?: Maybe<ProjectIntercom>
  projectChanged?: Maybe<Project>
  courseEnrollmentProgressSub?: Maybe<CourseEnrollmentProgress>
  subscribeMessages?: Maybe<Message>
}

export type SubscriptionIntercomSubArgs = {
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type SubscriptionProjectIntercomArgs = {
  projectId: Scalars['String']
}

export type SubscriptionProjectChangedArgs = {
  projectId: Scalars['String']
}

export type SubscriptionCourseEnrollmentProgressSubArgs = {
  enrollmentId: Scalars['String']
  courseId: Scalars['String']
}

export type AccountEmailsQueryVariables = Exact<{ [key: string]: never }>

export type AccountEmailsQuery = { __typename?: 'Query' } & {
  accountEmails?: Maybe<Array<{ __typename?: 'UserEmail' } & EmailDetailsFragment>>
}

export type AccountIdentitiesQueryVariables = Exact<{ [key: string]: never }>

export type AccountIdentitiesQuery = { __typename?: 'Query' } & {
  accountIdentities?: Maybe<Array<{ __typename?: 'Identity' } & IdentityDetailsFragment>>
}

export type AccountIdentityQueryVariables = Exact<{
  identityId: Scalars['String']
}>

export type AccountIdentityQuery = { __typename?: 'Query' } & {
  accountIdentity?: Maybe<{ __typename?: 'Identity' } & IdentityDetailsFragment>
}

export type AccountProfileQueryVariables = Exact<{ [key: string]: never }>

export type AccountProfileQuery = { __typename?: 'Query' } & {
  accountProfile?: Maybe<
    { __typename?: 'User' } & {
      emails?: Maybe<Array<{ __typename?: 'UserEmail' } & EmailDetailsFragment>>
    } & UserDetailsFragment
  >
}

export type AccountUsernameAvailableQueryVariables = Exact<{
  username: Scalars['String']
}>

export type AccountUsernameAvailableQuery = { __typename?: 'Query' } & Pick<Query, 'accountUsernameAvailable'>

export type AccountCreateEmailMutationVariables = Exact<{
  input: AccountCreateEmailInput
}>

export type AccountCreateEmailMutation = { __typename?: 'Mutation' } & {
  accountCreateEmail?: Maybe<{ __typename?: 'UserEmail' } & EmailDetailsFragment>
}

export type AccountLinkIdentityMutationVariables = Exact<{
  input: AccountLinkIdentityInput
}>

export type AccountLinkIdentityMutation = { __typename?: 'Mutation' } & {
  accountLinkIdentity?: Maybe<{ __typename?: 'Identity' } & IdentityDetailsFragment>
}

export type AccountCustomIdentityMutationVariables = Exact<{
  input: AccountCustomIdentityInput
}>

export type AccountCustomIdentityMutation = { __typename?: 'Mutation' } & {
  accountCustomIdentity?: Maybe<{ __typename?: 'Identity' } & IdentityDetailsFragment>
}

export type AccountDeleteEmailMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountDeleteEmailMutation = { __typename?: 'Mutation' } & {
  accountDeleteEmail?: Maybe<{ __typename?: 'UserEmail' } & EmailDetailsFragment>
}

export type AccountDeleteIdentityMutationVariables = Exact<{
  identityId: Scalars['String']
}>

export type AccountDeleteIdentityMutation = { __typename?: 'Mutation' } & {
  accountDeleteIdentity?: Maybe<{ __typename?: 'Identity' } & IdentityDetailsFragment>
}

export type AccountMarkEmailPrimaryMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountMarkEmailPrimaryMutation = { __typename?: 'Mutation' } & {
  accountMarkEmailPrimary?: Maybe<{ __typename?: 'UserEmail' } & EmailDetailsFragment>
}

export type AccountMarkEmailPrivateMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountMarkEmailPrivateMutation = { __typename?: 'Mutation' } & {
  accountMarkEmailPrivate?: Maybe<{ __typename?: 'UserEmail' } & EmailDetailsFragment>
}

export type AccountMarkEmailPublicMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountMarkEmailPublicMutation = { __typename?: 'Mutation' } & {
  accountMarkEmailPublic?: Maybe<{ __typename?: 'UserEmail' } & EmailDetailsFragment>
}

export type AccountUpdateIdentityMutationVariables = Exact<{
  identityId: Scalars['String']
  input: AccountUpdateIdentityInput
}>

export type AccountUpdateIdentityMutation = { __typename?: 'Mutation' } & {
  accountUpdateIdentity?: Maybe<{ __typename?: 'Identity' } & IdentityDetailsFragment>
}

export type AccountUpdateProfileMutationVariables = Exact<{
  input: AccountUpdateProfileInput
}>

export type AccountUpdateProfileMutation = { __typename?: 'Mutation' } & {
  accountUpdateProfile?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AccountRequestSupportMutationVariables = Exact<{
  input: AccountRequestSupportInput
}>

export type AccountRequestSupportMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'accountRequestSupport'>

export type AccountUpdateUsernameMutationVariables = Exact<{
  username: Scalars['String']
}>

export type AccountUpdateUsernameMutation = { __typename?: 'Mutation' } & {
  accountUpdateUsername?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AccountResetPasswordMutationVariables = Exact<{ [key: string]: never }>

export type AccountResetPasswordMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'accountResetPassword'>

export type IdentityDetailsFragment = { __typename?: 'Identity' } & Pick<
  Identity,
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'type'
  | 'providerType'
  | 'integrationType'
  | 'profile'
  | 'label'
  | 'remoteId'
  | 'data'
  | 'config'
  | 'accessToken'
  | 'refreshToken'
>

export type UserDetailsFragment = { __typename?: 'User' } & Pick<
  User,
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'email'
  | 'firstName'
  | 'lastName'
  | 'name'
  | 'username'
  | 'avatarUrl'
  | 'bio'
  | 'location'
  | 'phone'
  | 'languages'
  | 'dob'
  | 'role'
  | 'developer'
>

export type EmailDetailsFragment = { __typename?: 'UserEmail' } & Pick<
  UserEmail,
  'id' | 'email' | 'primary' | 'public' | 'verified'
>

export type UptimeQueryVariables = Exact<{ [key: string]: never }>

export type UptimeQuery = { __typename?: 'Query' } & Pick<Query, 'uptime'>

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { __typename?: 'Query' } & { me: { __typename?: 'User' } & UserDetailsFragment }

export type LoginMutationVariables = Exact<{
  input: AuthLoginInput
}>

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'UserToken' } & Pick<UserToken, 'token'> & {
      user: { __typename?: 'User' } & UserDetailsFragment
    }
}

export type RegisterMutationVariables = Exact<{
  input: AuthRegisterInput
}>

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register: { __typename?: 'UserToken' } & Pick<UserToken, 'token'> & {
      user: { __typename?: 'User' } & UserDetailsFragment
    }
}

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']
}>

export type ForgotPasswordMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'forgotPassword'>

export type ResetPasswordMutationVariables = Exact<{
  password: Scalars['String']
  token: Scalars['String']
}>

export type ResetPasswordMutation = { __typename?: 'Mutation' } & {
  resetPassword?: Maybe<{ __typename?: 'User' } & Pick<User, 'username' | 'email'>>
}

export type ValidateEmailMutationVariables = Exact<{
  token: Scalars['String']
}>

export type ValidateEmailMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'validateEmail'>

export type SendValidationEmailMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type SendValidationEmailMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'sendValidationEmail'>

export type MeSubSubscriptionVariables = Exact<{ [key: string]: never }>

export type MeSubSubscription = { __typename?: 'Subscription' } & {
  meSub: { __typename?: 'User' } & UserDetailsFragment
}

export type AuthProvidersQueryVariables = Exact<{ [key: string]: never }>

export type AuthProvidersQuery = { __typename?: 'Query' } & {
  authProviders: Array<{ __typename?: 'Provider' } & Pick<Provider, 'id' | 'identityType' | 'type'>>
}

export type ActivityDetailsFragment = { __typename?: 'Activity' } & Pick<
  Activity,
  'id' | 'type' | 'title' | 'message' | 'referenceType' | 'referenceId' | 'referenceLink' | 'data' | 'createdAt'
> & {
    user?: Maybe<{ __typename?: 'Profile' } & ProfileDetailsFragment>
    actor?: Maybe<{ __typename?: 'Profile' } & ProfileDetailsFragment>
  }

export type UserActivitiesQueryVariables = Exact<{
  username: Scalars['String']
}>

export type UserActivitiesQuery = { __typename?: 'Query' } & {
  userActivities: Array<{ __typename?: 'Activity' } & ActivityDetailsFragment>
}

export type MyActivitiesQueryVariables = Exact<{ [key: string]: never }>

export type MyActivitiesQuery = { __typename?: 'Query' } & {
  myActivities: Array<{ __typename?: 'Activity' } & ActivityDetailsFragment>
}

export type MyActivityFeedQueryVariables = Exact<{
  input?: Maybe<CorePagingInput>
}>

export type MyActivityFeedQuery = { __typename?: 'Query' } & {
  myActivityFeed: Array<{ __typename?: 'Activity' } & ActivityDetailsFragment>
}

export type ChatDetailsFragment = { __typename?: 'Chat' } & Pick<Chat, 'id' | 'createdAt' | 'updatedAt' | 'key'> & {
    profile?: Maybe<{ __typename?: 'Profile' } & ProfileDetailsFragment>
    lastMessage?: Maybe<{ __typename?: 'Message' } & MessageDetailsFragment>
  }

export type MessageDetailsFragment = { __typename?: 'Message' } & Pick<
  Message,
  'id' | 'text' | 'createdAt' | 'type'
> & { author?: Maybe<{ __typename?: 'Profile' } & ProfileDetailsFragment> }

export type SubscribeMessagesSubscriptionVariables = Exact<{ [key: string]: never }>

export type SubscribeMessagesSubscription = { __typename?: 'Subscription' } & {
  subscribeMessages?: Maybe<{ __typename?: 'Message' } & MessageDetailsFragment>
}

export type SendMessageMutationVariables = Exact<{
  text: Scalars['String']
  profileId: Scalars['String']
}>

export type SendMessageMutation = { __typename?: 'Mutation' } & {
  sendMessage: { __typename?: 'Message' } & Pick<Message, 'id' | 'createdAt' | 'updatedAt'>
}

export type CreateChatMutationVariables = Exact<{
  profileId: Scalars['String']
}>

export type CreateChatMutation = { __typename?: 'Mutation' } & {
  createChat: { __typename?: 'Chat' } & ChatDetailsFragment
}

export type ChatsQueryVariables = Exact<{ [key: string]: never }>

export type ChatsQuery = { __typename?: 'Query' } & { chats: Array<{ __typename?: 'Chat' } & ChatDetailsFragment> }

export type ChatQueryVariables = Exact<{
  id: Scalars['String']
}>

export type ChatQuery = { __typename?: 'Query' } & {
  chat: { __typename?: 'Chat' } & Pick<Chat, 'id' | 'key'> & {
      profile?: Maybe<{ __typename?: 'Profile' } & ProfileDetailsFragment>
      messages?: Maybe<Array<{ __typename?: 'Message' } & MessageDetailsFragment>>
    }
}

export type MessagesQueryVariables = Exact<{
  id: Scalars['String']
}>

export type MessagesQuery = { __typename?: 'Query' } & {
  messages?: Maybe<Array<{ __typename?: 'Message' } & MessageDetailsFragment>>
}

export type ProfileDetailsFragment = { __typename?: 'Profile' } & Pick<
  Profile,
  'id' | 'name' | 'role' | 'developer' | 'username' | 'avatarUrl'
>

export type ProfileRelationDetailsFragment = { __typename?: 'ProfileRelation' } & Pick<
  ProfileRelation,
  'isFollowedByYou' | 'isFollowingYou' | 'isYou'
>

export type ProfilesQueryVariables = Exact<{
  input?: Maybe<CorePagingInput>
}>

export type ProfilesQuery = { __typename?: 'Query' } & {
  profiles: Array<{ __typename?: 'Profile' } & ProfileDetailsFragment>
}

export type ProfileQueryVariables = Exact<{
  username: Scalars['String']
}>

export type ProfileQuery = { __typename?: 'Query' } & {
  profile?: Maybe<{ __typename?: 'Profile' } & ProfileDetailsFragment>
}

export type MyProfileQueryVariables = Exact<{ [key: string]: never }>

export type MyProfileQuery = { __typename?: 'Query' } & {
  myProfile: { __typename?: 'Profile' } & ProfileDetailsFragment
}

export type ProfileFollowersQueryVariables = Exact<{
  username: Scalars['String']
}>

export type ProfileFollowersQuery = { __typename?: 'Query' } & {
  profileFollowers: Array<{ __typename?: 'Profile' } & ProfileDetailsFragment>
}

export type ProfileFollowingQueryVariables = Exact<{
  username: Scalars['String']
}>

export type ProfileFollowingQuery = { __typename?: 'Query' } & {
  profileFollowing: Array<{ __typename?: 'Profile' } & ProfileDetailsFragment>
}

export type ProfileRelationQueryVariables = Exact<{
  username: Scalars['String']
}>

export type ProfileRelationQuery = { __typename?: 'Query' } & {
  profileRelation: { __typename?: 'ProfileRelation' } & ProfileRelationDetailsFragment
}

export type FollowProfileMutationVariables = Exact<{
  username: Scalars['String']
}>

export type FollowProfileMutation = { __typename?: 'Mutation' } & {
  followProfile: { __typename?: 'Profile' } & Pick<Profile, 'username'>
}

export type UnfollowProfileMutationVariables = Exact<{
  username: Scalars['String']
}>

export type UnfollowProfileMutation = { __typename?: 'Mutation' } & {
  unfollowProfile: { __typename?: 'Profile' } & Pick<Profile, 'username'>
}

export const IdentityDetailsFragmentDoc = gql`
  fragment IdentityDetails on Identity {
    id
    createdAt
    updatedAt
    type
    providerType
    integrationType
    profile
    label
    remoteId
    data
    config
    accessToken
    refreshToken
  }
`
export const UserDetailsFragmentDoc = gql`
  fragment UserDetails on User {
    id
    createdAt
    updatedAt
    email
    firstName
    lastName
    name
    username
    avatarUrl
    bio
    location
    phone
    languages
    dob
    role
    developer
  }
`
export const EmailDetailsFragmentDoc = gql`
  fragment EmailDetails on UserEmail {
    id
    email
    primary
    public
    verified
  }
`
export const ProfileDetailsFragmentDoc = gql`
  fragment ProfileDetails on Profile {
    id
    name
    role
    developer
    username
    avatarUrl
  }
`
export const ActivityDetailsFragmentDoc = gql`
  fragment ActivityDetails on Activity {
    id
    type
    title
    message
    referenceType
    referenceId
    referenceLink
    data
    createdAt
    user {
      ...ProfileDetails
    }
    actor {
      ...ProfileDetails
    }
  }
  ${ProfileDetailsFragmentDoc}
`
export const MessageDetailsFragmentDoc = gql`
  fragment MessageDetails on Message {
    id
    text
    createdAt
    type
    author {
      ...ProfileDetails
    }
  }
  ${ProfileDetailsFragmentDoc}
`
export const ChatDetailsFragmentDoc = gql`
  fragment ChatDetails on Chat {
    id
    createdAt
    updatedAt
    key
    profile {
      ...ProfileDetails
    }
    lastMessage {
      ...MessageDetails
    }
  }
  ${ProfileDetailsFragmentDoc}
  ${MessageDetailsFragmentDoc}
`
export const ProfileRelationDetailsFragmentDoc = gql`
  fragment ProfileRelationDetails on ProfileRelation {
    isFollowedByYou
    isFollowingYou
    isYou
  }
`
export const AccountEmailsDocument = gql`
  query AccountEmails {
    accountEmails {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountEmailsGQL extends Apollo.Query<AccountEmailsQuery, AccountEmailsQueryVariables> {
  document = AccountEmailsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountIdentitiesDocument = gql`
  query AccountIdentities {
    accountIdentities {
      ...IdentityDetails
    }
  }
  ${IdentityDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountIdentitiesGQL extends Apollo.Query<AccountIdentitiesQuery, AccountIdentitiesQueryVariables> {
  document = AccountIdentitiesDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountIdentityDocument = gql`
  query AccountIdentity($identityId: String!) {
    accountIdentity(identityId: $identityId) {
      ...IdentityDetails
    }
  }
  ${IdentityDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountIdentityGQL extends Apollo.Query<AccountIdentityQuery, AccountIdentityQueryVariables> {
  document = AccountIdentityDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountProfileDocument = gql`
  query AccountProfile {
    accountProfile {
      ...UserDetails
      emails {
        ...EmailDetails
      }
    }
  }
  ${UserDetailsFragmentDoc}
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountProfileGQL extends Apollo.Query<AccountProfileQuery, AccountProfileQueryVariables> {
  document = AccountProfileDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUsernameAvailableDocument = gql`
  query AccountUsernameAvailable($username: String!) {
    accountUsernameAvailable(username: $username)
  }
`

@Injectable({
  providedIn: 'root',
})
export class AccountUsernameAvailableGQL extends Apollo.Query<
  AccountUsernameAvailableQuery,
  AccountUsernameAvailableQueryVariables
> {
  document = AccountUsernameAvailableDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountCreateEmailDocument = gql`
  mutation AccountCreateEmail($input: AccountCreateEmailInput!) {
    accountCreateEmail(input: $input) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountCreateEmailGQL extends Apollo.Mutation<
  AccountCreateEmailMutation,
  AccountCreateEmailMutationVariables
> {
  document = AccountCreateEmailDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountLinkIdentityDocument = gql`
  mutation AccountLinkIdentity($input: AccountLinkIdentityInput!) {
    accountLinkIdentity(input: $input) {
      ...IdentityDetails
    }
  }
  ${IdentityDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountLinkIdentityGQL extends Apollo.Mutation<
  AccountLinkIdentityMutation,
  AccountLinkIdentityMutationVariables
> {
  document = AccountLinkIdentityDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountCustomIdentityDocument = gql`
  mutation AccountCustomIdentity($input: AccountCustomIdentityInput!) {
    accountCustomIdentity(input: $input) {
      ...IdentityDetails
    }
  }
  ${IdentityDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountCustomIdentityGQL extends Apollo.Mutation<
  AccountCustomIdentityMutation,
  AccountCustomIdentityMutationVariables
> {
  document = AccountCustomIdentityDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountDeleteEmailDocument = gql`
  mutation AccountDeleteEmail($emailId: String!) {
    accountDeleteEmail(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountDeleteEmailGQL extends Apollo.Mutation<
  AccountDeleteEmailMutation,
  AccountDeleteEmailMutationVariables
> {
  document = AccountDeleteEmailDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountDeleteIdentityDocument = gql`
  mutation AccountDeleteIdentity($identityId: String!) {
    accountDeleteIdentity(identityId: $identityId) {
      ...IdentityDetails
    }
  }
  ${IdentityDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountDeleteIdentityGQL extends Apollo.Mutation<
  AccountDeleteIdentityMutation,
  AccountDeleteIdentityMutationVariables
> {
  document = AccountDeleteIdentityDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountMarkEmailPrimaryDocument = gql`
  mutation AccountMarkEmailPrimary($emailId: String!) {
    accountMarkEmailPrimary(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountMarkEmailPrimaryGQL extends Apollo.Mutation<
  AccountMarkEmailPrimaryMutation,
  AccountMarkEmailPrimaryMutationVariables
> {
  document = AccountMarkEmailPrimaryDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountMarkEmailPrivateDocument = gql`
  mutation AccountMarkEmailPrivate($emailId: String!) {
    accountMarkEmailPrivate(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountMarkEmailPrivateGQL extends Apollo.Mutation<
  AccountMarkEmailPrivateMutation,
  AccountMarkEmailPrivateMutationVariables
> {
  document = AccountMarkEmailPrivateDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountMarkEmailPublicDocument = gql`
  mutation AccountMarkEmailPublic($emailId: String!) {
    accountMarkEmailPublic(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountMarkEmailPublicGQL extends Apollo.Mutation<
  AccountMarkEmailPublicMutation,
  AccountMarkEmailPublicMutationVariables
> {
  document = AccountMarkEmailPublicDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUpdateIdentityDocument = gql`
  mutation AccountUpdateIdentity($identityId: String!, $input: AccountUpdateIdentityInput!) {
    accountUpdateIdentity(identityId: $identityId, input: $input) {
      ...IdentityDetails
    }
  }
  ${IdentityDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountUpdateIdentityGQL extends Apollo.Mutation<
  AccountUpdateIdentityMutation,
  AccountUpdateIdentityMutationVariables
> {
  document = AccountUpdateIdentityDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUpdateProfileDocument = gql`
  mutation AccountUpdateProfile($input: AccountUpdateProfileInput!) {
    accountUpdateProfile(input: $input) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountUpdateProfileGQL extends Apollo.Mutation<
  AccountUpdateProfileMutation,
  AccountUpdateProfileMutationVariables
> {
  document = AccountUpdateProfileDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountRequestSupportDocument = gql`
  mutation AccountRequestSupport($input: AccountRequestSupportInput!) {
    accountRequestSupport(input: $input)
  }
`

@Injectable({
  providedIn: 'root',
})
export class AccountRequestSupportGQL extends Apollo.Mutation<
  AccountRequestSupportMutation,
  AccountRequestSupportMutationVariables
> {
  document = AccountRequestSupportDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUpdateUsernameDocument = gql`
  mutation AccountUpdateUsername($username: String!) {
    accountUpdateUsername(username: $username) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountUpdateUsernameGQL extends Apollo.Mutation<
  AccountUpdateUsernameMutation,
  AccountUpdateUsernameMutationVariables
> {
  document = AccountUpdateUsernameDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountResetPasswordDocument = gql`
  mutation AccountResetPassword {
    accountResetPassword
  }
`

@Injectable({
  providedIn: 'root',
})
export class AccountResetPasswordGQL extends Apollo.Mutation<
  AccountResetPasswordMutation,
  AccountResetPasswordMutationVariables
> {
  document = AccountResetPasswordDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UptimeDocument = gql`
  query Uptime {
    uptime
  }
`

@Injectable({
  providedIn: 'root',
})
export class UptimeGQL extends Apollo.Query<UptimeQuery, UptimeQueryVariables> {
  document = UptimeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const MeDocument = gql`
  query Me {
    me {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
  document = MeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const LoginDocument = gql`
  mutation Login($input: AuthLoginInput!) {
    login(input: $input) {
      token
      user {
        ...UserDetails
      }
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
  document = LoginDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const RegisterDocument = gql`
  mutation Register($input: AuthRegisterInput!) {
    register(input: $input) {
      token
      user {
        ...UserDetails
      }
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
  document = RegisterDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordGQL extends Apollo.Mutation<ForgotPasswordMutation, ForgotPasswordMutationVariables> {
  document = ForgotPasswordDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const ResetPasswordDocument = gql`
  mutation ResetPassword($password: String!, $token: String!) {
    resetPassword(password: $password, token: $token) {
      username
      email
    }
  }
`

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordGQL extends Apollo.Mutation<ResetPasswordMutation, ResetPasswordMutationVariables> {
  document = ResetPasswordDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const ValidateEmailDocument = gql`
  mutation ValidateEmail($token: String!) {
    validateEmail(token: $token)
  }
`

@Injectable({
  providedIn: 'root',
})
export class ValidateEmailGQL extends Apollo.Mutation<ValidateEmailMutation, ValidateEmailMutationVariables> {
  document = ValidateEmailDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const SendValidationEmailDocument = gql`
  mutation SendValidationEmail($emailId: String!) {
    sendValidationEmail(emailId: $emailId)
  }
`

@Injectable({
  providedIn: 'root',
})
export class SendValidationEmailGQL extends Apollo.Mutation<
  SendValidationEmailMutation,
  SendValidationEmailMutationVariables
> {
  document = SendValidationEmailDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const MeSubDocument = gql`
  subscription meSub {
    meSub {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class MeSubGQL extends Apollo.Subscription<MeSubSubscription, MeSubSubscriptionVariables> {
  document = MeSubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AuthProvidersDocument = gql`
  query AuthProviders {
    authProviders {
      id
      identityType
      type
    }
  }
`

@Injectable({
  providedIn: 'root',
})
export class AuthProvidersGQL extends Apollo.Query<AuthProvidersQuery, AuthProvidersQueryVariables> {
  document = AuthProvidersDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserActivitiesDocument = gql`
  query userActivities($username: String!) {
    userActivities(username: $username) {
      ...ActivityDetails
    }
  }
  ${ActivityDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserActivitiesGQL extends Apollo.Query<UserActivitiesQuery, UserActivitiesQueryVariables> {
  document = UserActivitiesDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const MyActivitiesDocument = gql`
  query myActivities {
    myActivities {
      ...ActivityDetails
    }
  }
  ${ActivityDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class MyActivitiesGQL extends Apollo.Query<MyActivitiesQuery, MyActivitiesQueryVariables> {
  document = MyActivitiesDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const MyActivityFeedDocument = gql`
  query myActivityFeed($input: CorePagingInput) {
    myActivityFeed(input: $input) {
      ...ActivityDetails
    }
  }
  ${ActivityDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class MyActivityFeedGQL extends Apollo.Query<MyActivityFeedQuery, MyActivityFeedQueryVariables> {
  document = MyActivityFeedDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const SubscribeMessagesDocument = gql`
  subscription subscribeMessages {
    subscribeMessages {
      ...MessageDetails
    }
  }
  ${MessageDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class SubscribeMessagesGQL extends Apollo.Subscription<
  SubscribeMessagesSubscription,
  SubscribeMessagesSubscriptionVariables
> {
  document = SubscribeMessagesDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const SendMessageDocument = gql`
  mutation sendMessage($text: String!, $profileId: String!) {
    sendMessage(data: { text: $text, profileId: $profileId }) {
      id
      createdAt
      updatedAt
    }
  }
`

@Injectable({
  providedIn: 'root',
})
export class SendMessageGQL extends Apollo.Mutation<SendMessageMutation, SendMessageMutationVariables> {
  document = SendMessageDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const CreateChatDocument = gql`
  mutation createChat($profileId: String!) {
    createChat(profileId: $profileId) {
      ...ChatDetails
    }
  }
  ${ChatDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class CreateChatGQL extends Apollo.Mutation<CreateChatMutation, CreateChatMutationVariables> {
  document = CreateChatDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const ChatsDocument = gql`
  query chats {
    chats {
      ...ChatDetails
    }
  }
  ${ChatDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class ChatsGQL extends Apollo.Query<ChatsQuery, ChatsQueryVariables> {
  document = ChatsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const ChatDocument = gql`
  query chat($id: String!) {
    chat(id: $id) {
      id
      key
      profile {
        ...ProfileDetails
      }
      messages {
        ...MessageDetails
      }
    }
  }
  ${ProfileDetailsFragmentDoc}
  ${MessageDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class ChatGQL extends Apollo.Query<ChatQuery, ChatQueryVariables> {
  document = ChatDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const MessagesDocument = gql`
  query messages($id: String!) {
    messages(chatId: $id) {
      ...MessageDetails
    }
  }
  ${MessageDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class MessagesGQL extends Apollo.Query<MessagesQuery, MessagesQueryVariables> {
  document = MessagesDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const ProfilesDocument = gql`
  query Profiles($input: CorePagingInput) {
    profiles(input: $input) {
      ...ProfileDetails
    }
  }
  ${ProfileDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class ProfilesGQL extends Apollo.Query<ProfilesQuery, ProfilesQueryVariables> {
  document = ProfilesDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const ProfileDocument = gql`
  query profile($username: String!) {
    profile(username: $username) {
      ...ProfileDetails
    }
  }
  ${ProfileDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class ProfileGQL extends Apollo.Query<ProfileQuery, ProfileQueryVariables> {
  document = ProfileDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const MyProfileDocument = gql`
  query myProfile {
    myProfile {
      ...ProfileDetails
    }
  }
  ${ProfileDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class MyProfileGQL extends Apollo.Query<MyProfileQuery, MyProfileQueryVariables> {
  document = MyProfileDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const ProfileFollowersDocument = gql`
  query profileFollowers($username: String!) {
    profileFollowers(username: $username) {
      ...ProfileDetails
    }
  }
  ${ProfileDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class ProfileFollowersGQL extends Apollo.Query<ProfileFollowersQuery, ProfileFollowersQueryVariables> {
  document = ProfileFollowersDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const ProfileFollowingDocument = gql`
  query profileFollowing($username: String!) {
    profileFollowing(username: $username) {
      ...ProfileDetails
    }
  }
  ${ProfileDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class ProfileFollowingGQL extends Apollo.Query<ProfileFollowingQuery, ProfileFollowingQueryVariables> {
  document = ProfileFollowingDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const ProfileRelationDocument = gql`
  query profileRelation($username: String!) {
    profileRelation(username: $username) {
      ...ProfileRelationDetails
    }
  }
  ${ProfileRelationDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class ProfileRelationGQL extends Apollo.Query<ProfileRelationQuery, ProfileRelationQueryVariables> {
  document = ProfileRelationDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const FollowProfileDocument = gql`
  mutation followProfile($username: String!) {
    followProfile(username: $username) {
      username
    }
  }
`

@Injectable({
  providedIn: 'root',
})
export class FollowProfileGQL extends Apollo.Mutation<FollowProfileMutation, FollowProfileMutationVariables> {
  document = FollowProfileDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UnfollowProfileDocument = gql`
  mutation unfollowProfile($username: String!) {
    unfollowProfile(username: $username) {
      username
    }
  }
`

@Injectable({
  providedIn: 'root',
})
export class UnfollowProfileGQL extends Apollo.Mutation<UnfollowProfileMutation, UnfollowProfileMutationVariables> {
  document = UnfollowProfileDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
