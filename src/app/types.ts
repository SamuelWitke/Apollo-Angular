export type User = {
    name : string
}
export type Post = {
    id: number,
    title: string,
    user : User,
}

export type Query = {
   allPosts: Post[],
}