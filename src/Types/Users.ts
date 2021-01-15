export type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: UserAdress,
    phone: string,
    website: string,
    company: UserCompany
}


type UserAdress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
}

type UserCompany = {
    name: string,
    catchPhrase: string,
    bs: string
}