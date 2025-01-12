const mongoose = require('mongoose')
const shortId = require('shortid')

const user1 = mongoose.Types.ObjectId()
const user2 = mongoose.Types.ObjectId()
const user3 = mongoose.Types.ObjectId()
const user4 = mongoose.Types.ObjectId()
const user5 = mongoose.Types.ObjectId()
const user6 = mongoose.Types.ObjectId()
const user7 = mongoose.Types.ObjectId()
const user8 = mongoose.Types.ObjectId()
const user9 = mongoose.Types.ObjectId()
const user10 = mongoose.Types.ObjectId()
const user11 = mongoose.Types.ObjectId()
const user12 = mongoose.Types.ObjectId()
const user13 = mongoose.Types.ObjectId()
const user14 = mongoose.Types.ObjectId()
const user15 = mongoose.Types.ObjectId()
const user16 = mongoose.Types.ObjectId()
const user17 = mongoose.Types.ObjectId()
const user18 = mongoose.Types.ObjectId()
const user19 = mongoose.Types.ObjectId()
const user20 = mongoose.Types.ObjectId()

const blog1 = mongoose.Types.ObjectId()
const blog2 = mongoose.Types.ObjectId()
const blog3 = mongoose.Types.ObjectId()
const blog4 = mongoose.Types.ObjectId()
const blog5 = mongoose.Types.ObjectId()
const blog6 = mongoose.Types.ObjectId()
const blog7 = mongoose.Types.ObjectId()

const category1 = mongoose.Types.ObjectId()
const category2 = mongoose.Types.ObjectId()
const category3 = mongoose.Types.ObjectId()
const category4 = mongoose.Types.ObjectId()
const category5 = mongoose.Types.ObjectId()

const tag1 = mongoose.Types.ObjectId()
const tag2 = mongoose.Types.ObjectId()
const tag3 = mongoose.Types.ObjectId()
const tag4 = mongoose.Types.ObjectId()
const tag5 = mongoose.Types.ObjectId()

/**
 * Random number generator fuction
 * @returns {number}
 *
 */
function randomNumber() {
    return Math.floor(Math.random() * 100 + 1)
}

module.exports = {
    blogs: [
        {
            _id: blog1,
            title: 'The database for modern applications',
            slug: 'the-database-for-modern-applications',
            content:
                'MongoDB is a document database, which means it stores data in JSON-like documents. We believe this is the most natural way to think about data, and is much more expressive and powerful than the traditional row/column model. ',
            metaTile: 'The database for modern applications',
            metaDescription:
                'MongoDB is a document database, which means it stores data in JSON-like...',
            excerpt:
                'MongoDB is a document database, which means it stores data in JSON-like documents...',
            avatar: 'seo-default.webp',
            postedBy: user1,
            published: true,
            categories: [category1],
            tags: [tag1],
        },
        {
            _id: blog2,
            title: 'The database for modern',
            slug: 'the-database-for-modern',
            content:
                'MongoDB is a document database, which means it stores data in JSON-like documents. We believe this is the most natural way to think about data, and is much more expressive and powerful than the traditional row/column model. ',
            metaTile: 'The database for modern applications',
            metaDescription:
                'MongoDB is a document database, which means it stores data in JSON-like...',
            excerpt:
                'MongoDB is a document database, which means it stores data in JSON-like documents...',
            avatar: 'seo-default.webp',
            postedBy: user2,
            published: true,
            categories: [category2],
            tags: [tag2],
        },
        {
            _id: blog3,
            title: 'The database for modern',
            slug: 'the-database-for-modern-face',
            content:
                'MongoDB is a document database, which means it stores data in JSON-like documents. We believe this is the most natural way to think about data, and is much more expressive and powerful than the traditional row/column model. ',
            metaTile: 'The database for modern applications',
            metaDescription:
                'MongoDB is a document database, which means it stores data in JSON-like...',
            excerpt:
                'MongoDB is a document database, which means it stores data in JSON-like documents...',
            avatar: 'seo-default.webp',
            postedBy: user1,
            published: true,
            categories: [category3],
            tags: [tag3],
        },
        {
            _id: blog4,
            title: 'The database for modern applications for life',
            slug: 'the-database-for-modern-applications-life',
            content:
                'MongoDB is a document database, which means it stores data in JSON-like documents. We believe this is the most natural way to think about data, and is much more expressive and powerful than the traditional row/column model. ',
            metaTile: 'The database for modern applications',
            metaDescription:
                'MongoDB is a document database, which means it stores data in JSON-like...',
            excerpt:
                'MongoDB is a document database, which means it stores data in JSON-like documents...',
            avatar: 'seo-default.webp',
            postedBy: user2,
            categories: [category4],
            published: true,
            tags: [tag4],
        },
        {
            _id: blog5,
            title: 'The database for modern applications cypress',
            slug: 'the-database-for-modern-applications-cypress',
            content:
                'MongoDB is a document database, which means it stores data in JSON-like documents. We believe this is the most natural way to think about data, and is much more expressive and powerful than the traditional row/column model. ',
            metaTile: 'The database for modern applications',
            metaDescription:
                'MongoDB is a document database, which means it stores data in JSON-like...',
            excerpt:
                'MongoDB is a document database, which means it stores data in JSON-like documents...',
            avatar: 'seo-default.webp',
            postedBy: user1,
            published: true,
            categories: [category5],
            tags: [tag5],
        },
        {
            _id: blog6,
            title: 'The database for modern applications',
            slug: 'the-database-for-modern-applications',
            content:
                'MongoDB is a document database, which means it stores data in JSON-like documents. We believe this is the most natural way to think about data, and is much more expressive and powerful than the traditional row/column model. ',
            metaTile: 'The database for modern applications',
            metaDescription:
                'MongoDB is a document database, which means it stores data in JSON-like...',
            excerpt:
                'MongoDB is a document database, which means it stores data in JSON-like documents...',
            avatar: 'seo-default.webp',
            postedBy: user3,
            published: false,
            categories: [category5],
            tags: [tag5],
        },
        {
            _id: blog7,
            title: 'Unpublished blog',
            slug: 'unpublished-blog',
            content:
                'MongoDB is a document database, which means it stores data in JSON-like documents. We believe this is the most natural way to think about data, and is much more expressive and powerful than the traditional row/column model. ',
            metaTile: 'The database for modern applications',
            metaDescription:
                'MongoDB is a document database, which means it stores data in JSON-like...',
            excerpt:
                'MongoDB is a document database, which means it stores data in JSON-like documents...',
            avatar: 'seo-default.webp',
            postedBy: user1,
            published: false,
            categories: [category5],
            tags: [tag5],
        },
    ],
    users: [
        {
            _id: user1,
            email: 'me@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'admin',
            about: 'about me...',
            name: 'David',
            username: shortId.generate(),
            location: 'Santa Ana, CA',
            gender: 'Male',
            website: '',
            settings: {
                newUser: false,
            },
        },
        {
            _id: user2,
            email: 'me2@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Jose',
            about: 'about me...',
            username: shortId.generate(),
            location: 'Nebraska',
            gender: 'Male',
            website: '',
        },
        {
            _id: user3,
            email: 'me3@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Maria',
            about: 'about me...',
            username: shortId.generate(),
            location: 'Alaska',
            gender: 'Female',
            website: '',
        },
        {
            _id: user4,
            email: 'me4@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Tina Turner',
            about: 'about me...',
            username: shortId.generate(),
            location: 'Hacienda',
            gender: 'Female',
            website: '',
        },
        {
            _id: user5,
            email: 'me5@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Henry Carpio',
            about: 'about me...',
            username: shortId.generate(),
            location: 'Adromenda',
            gender: 'Male',
            website: '',
        },
        {
            _id: user6,
            email: 'me6@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Lincoln Abraham',
            about: 'about me...',
            username: shortId.generate(),
            location: 'Neptun',
            gender: 'Male',
            website: '',
        },
        {
            _id: user7,
            email: 'me7@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Americo',
            about: 'about me...',
            username: shortId.generate(),
            location: 'Jupiter',
            gender: 'Female',
            website: '',
        },
        {
            _id: user8,
            email: 'me8@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Fernando Valenzuela',
            about: 'about me...',
            username: shortId.generate(),
            location: 'Moon',
            gender: 'Male',
            website: '',
        },
        {
            _id: user9,
            email: 'me9@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Jeff Bundy',
            about: 'about me...',
            username: shortId.generate(),
            location: 'Mars',
            gender: 'Male',
            website: '',
        },
        {
            _id: user10,
            email: 'me10@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Irlanda Croesia',
            about: 'about me...',
            username: shortId.generate(),
            location: 'Sinaloa, MX',
            gender: 'Female',
            website: '',
        },
        {
            _id: user11,
            email: 'me11@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Rafael Don Part',
            about: 'about me...',
            username: shortId.generate(),
            location: 'Las Vegas, NV',
            gender: 'Male',
            website: '',
        },
        {
            _id: user12,
            email: 'me12@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Ana Lima Peru',
            about: 'about me...',
            username: shortId.generate(),
            location: 'Santa Cruz',
            gender: 'Female',
            website: '',
        },
        {
            _id: user13,
            email: 'me13@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Flor Luz',
            about: 'about me...',
            username: shortId.generate(),
            location: 'Saint Georgia',
            gender: 'Female',
            website: '',
        },
        {
            _id: user14,
            email: 'me14@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Timmoty MaCbay',
            about: 'about me...',
            username: shortId.generate(),
            location: 'San Fernando',
            gender: 'Male',
            website: '',
        },
        {
            _id: user15,
            email: 'me15@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Anastasia',
            about: 'about me...',
            username: shortId.generate(),
            location: 'San Isidro',
            gender: 'Female',
            website: '',
        },
        {
            _id: user16,
            email: 'me16@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Naomi Ferguson',
            about: 'about me...',
            username: shortId.generate(),
            location: 'San Jose',
            gender: 'Female',
            website: '',
        },
        {
            _id: user17,
            email: 'me17@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Tempi Arizona',
            about: 'about me...',
            username: shortId.generate(),
            location: 'Santa Barbara',
            gender: 'Male',
            website: '',
        },
        {
            _id: user18,
            email: 'me18@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Julieta Romeo',
            about: 'about me...',
            username: shortId.generate(),
            location: 'Washington',
            gender: 'Female',
            website: '',
        },
        {
            _id: user19,
            email: 'me19@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Jen Jhonson',
            about: 'about me...',
            username: shortId.generate(),
            location: 'Santa Monica, CA',
            gender: 'Female',
            website: '',
        },
        {
            _id: user20,
            email: 'me20@me.com',
            avatar: 'https://picsum.photos/id/237/200',
            password: 'Password#1',
            role: 'user',
            name: 'Susan Lyn',
            about: 'about me...',
            username: shortId.generate(),
            location: 'Seattle',
            gender: 'Female',
            website: '',
        },
    ],
    categories: [
        {
            _id: category1,
            name: 'NextJS',
            slug: 'nextjs',
        },
        {
            _id: category2,
            name: 'NodeJS',
            slug: 'nodejs',
        },
        {
            _id: category3,
            name: 'SvelteJS',
            slug: 'sveltejs',
        },
        {
            _id: category4,
            name: 'MongoDB',
            slug: 'mongodb',
        },
        {
            _id: category5,
            name: 'ReactJs',
            slug: 'reactjs',
        },
    ],
    tags: [
        {
            _id: tag1,
            name: 'CSS',
            slug: 'css',
        },
        {
            _id: tag2,
            name: 'SASS',
            slug: 'sass',
        },
        {
            _id: tag3,
            name: 'oAuth',
            slug: 'oauth',
        },
        {
            _id: tag4,
            name: 'npm',
            slug: 'npm',
        },
        {
            _id: tag5,
            name: 'git',
            slug: 'git',
        },
    ],
}
