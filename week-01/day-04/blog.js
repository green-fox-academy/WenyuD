// Blog
// Reuse your BlogPost class
const BlogPost = require ('./blog-post')

// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost
class Blog {
    constructor() {
        this.blogList = [];
    }

    add() {
        this.blogList.push(new BlogPost('2wed','12w3e','2w','2w'))
    }

    delete(int) {
        this.blogList.splice(int, 1)
    }

    update(int, blogPost) {
        blogPost = new BlogPost('iujhbv','ijhnb','oikjn','98uyg');
        this.blogList.splice(int, 1, blogPost)
    }
}

let blog = new Blog();
blog.add();
blog.add();
blog.add();
console.log(blog.blogList);
console.log('----------');
blog.delete(1);
console.log(blog.blogList);
console.log('----------');
blog.update(0);
console.log(blog.blogList);