const Mutation = {
    createUser(parent, args, {
        db
    }, info) {

        const emailTaken = db.users.some((user => user.email === args.data.email))

        if (emailTaken) {
            throw new Error("Email taken.")
        }

        const user = {
            id: uuidv4(),
            ...args.data
        }

        db.users.push(user)

        return user;
    },
    deleteUser(parent, args, {
        db
    }, info) {

        const userIndex = db.users.findIndex((user => user.id === args.id))

        if (userIndex === -1) {
            throw new Error("user not found.")
        }

        db.posts = db.posts.filter((post) => {

            const match = post.author === args.id

            if (match) {
                comments = db.comments.filter((comment) => {
                    return comment.post !== post.id
                })
            }

            return !match
        })

        db.comments = db.comments.filter((comment) => {
            return comment.author !== args.id
        })

        const deletedUsers = users.splice(userIndex, 1)

        return deletedUsers[0]
    },
    updateUser(parent, args, {
        db
    }, info) {

        const {
            id,
            data
        } = args

        const user = db.users.find((user) => user.id === id)

        if (!user) {
            throw new Error("User not found")
        }

        if (typeof data.email === 'string') {

            const emailTaken = db.users.some((user => user.email === data.email))

            if (emailTaken) {
                throw new Error("Email taken.")
            }

            user.name = data.email
        }

        if (typeof data.name === 'string') {
            user.name = data.name
        }

        if (typeof data.age !== 'undefined') {
            user.age = data.age
        }

        return user

    },
    createPost(parent, args, {
        db
    }, info) {

        const userExists = db.users.some((user) => user.id === args.data.author)

        if (!userExists) {
            throw new Error("User not found.")
        }

        const post = {
            id: uuidv4(),
            ...args.data
        }

        db.posts.push(post)

        return post
    },
    deletePost(parent, args, {
        db
    }, info) {

        const postIndex = db.posts.findIndex((post) => post.id === args.id)

        if (postIndex === -1) {
            throw new Error("Post not found.")
        }

        db.comments = db.comments.filter((comment) => {
            return comment.post !== args.id
        })

        const deletedPosts = db.posts.splice(postIndex, 1)

        return deletedPosts[0]
    },
    updatePost(parent, args, {
        db
    }, info) {

        const {
            id,
            data
        } = args

        const post = db.posts.find((post) => post.id === id)

        if (!post) {
            throw new Error("Post not found.")
        }

        post.title = data.title
        post.body = data.body
        post.published = data.published

        return post
    },
    createComment(parent, args, {
        db
    }, info) {

        const userExists = db.users.some((user) => user.id === args.data.author)

        if (!userExists) {
            throw new Error("User not found.")
        }

        const postExists = db.posts.some((post) => post.id === args.data.post)

        if (!postExists) {
            throw new Error("Post not found.")
        }

        const comment = {
            id: uuidv4(),
            ...args.data
        }

        db.comments.push(comment)

        return comment
    },
    updateComment(parent, args, {
        db
    }, info) {

        const {
            id,
            data
        } = args

        const comment = db.comments.find((comment) => comment.id === id)

        if (!comment) {
            throw new Error("Comment not found.")
        }

        comment.text = data.text

        return comment
    }
}

export {
    Mutation as
    default
}