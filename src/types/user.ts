export type User = {
  id: number
  name: string
  password: string
  gender: string
  email: string
  remark?: string
  status: number
}

export type UserRequestData = Partial<User>
