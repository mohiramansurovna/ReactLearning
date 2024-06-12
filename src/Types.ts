export type HrefLink = {
    name: string;
    href: string;
};
export type Topic={
    id:number;
    question:string;
    correct:string;
    answer1:string;
    answer2:string;
    answer3:string
}
export type Topics=[
    string,
    Topic,
    Topic,
    Topic,
    Topic,
    Topic
]
export type AllTopics={
    js:Topics[],
    react:Topics[],
    next:Topics[],
}
export type TypeSaved={
    js:string[][],
    react:string[][],
    next:string[][]
}
export type TypeUser = {
    userName: string;
    password: string;
    email: string;
    photoURL:string;
    saved: TypeSaved;
};
