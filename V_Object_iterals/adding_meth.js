const blogs = [
    { title: "why mac & cheese rules", likes: 30 },
    { title: "10 things to make with marmite", likes: 50 },
];


let user = {
    name: "crystal",
    age: 30,
    email: "crystal@mail.com",
    location: "berlin",
    blogs: blogs,
    login: () => {
        console.log("the user logged in");
    },
    logout: () => {
        console.log("the user logged out");
    },
    logBlogs() {
        console.log('This user ia author of the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};


user.login();
user.logBlogs();