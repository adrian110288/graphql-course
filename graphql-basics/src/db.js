let users = [{
    id: '1',
    name: 'Andrew',
    email: 'andrew@example.com',
    age: 27
}, {
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com'
}, {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com'
}]

let posts = [{
    id: '10',
    title: 'GraphQL 101',
    body: 'This is how to use GraphQL...',
    published: true,
    author: '1'
}, {
    id: '11',
    title: 'GraphQL 201',
    body: 'This is an advanced GraphQL post...',
    published: false,
    author: '1'
}, {
    id: '12',
    title: 'Programming Music',
    body: '',
    published: false,
    author: '2'
}]

let comments = [{
    id: '1',
    text: "Comment 1",
    author: "1",
    post: "12"
}, {
    id: '2',
    text: "Comment 2",
    author: "2",
    post: "11"
}, {
    id: '3',
    text: "Comment 3",
    author: "1",
    post: "10"
}, {
    id: '4',
    text: "Comment 4",
    author: "3",
    post: "12"
}]

const db = {
    users,
    posts,
    comments
}

export {
    db as
    default
}