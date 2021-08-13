import { Member } from "./member"

export class Comment {
    id: number
    postId: number
    userId: number
    comment: string
    dtcreation: Date
    postCommentParentId: number

    postCommentParent: Comment
    creator: Member
}