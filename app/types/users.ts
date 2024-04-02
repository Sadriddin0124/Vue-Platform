 export interface IVueJS {
    _id?: string,
    title: string,
    desc: string,
    createdAt?: string
}
interface IUsers {
    username: string,
    _id: string,
    email: string,
    isAdmin: boolean,
    isActive: boolean,
    img?: string,
    address: string,
    phone: string,
    password: string,
    createdAt?: string
}

export interface IUserPromise {
    count: number,
    users: IUsers[]
}
export interface IVuePromise {
    count: number,
    users: IVueJS[]
}