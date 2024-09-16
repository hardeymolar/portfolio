import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'QR Connect App',
        description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Ravebooking App',
        description: 'I and my team designed and developed a web app for hotel Booking, where available hotels and their suites package are displayed to users on the app. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Vaad Media',
        description: 'Designed and implemented a scalable backend architecture for the e-commerce platform, which increased system throughput by 50% during peak booking times, ensuring a seamless user experience and maximizing customer retention.Automated integration tests using Postman scripts across five different service endpoints which decreased manual QA times by more than half—freeing valuable hours weekly previously spent reviewing results manually.',
        tools: [ 'stripe', 'mailgun', 'Express', 'TypeScript', 'MongoDB', 'Cronjob', 'JWT'],
        code: '',
        role: 'Backend Developer',
        demo: '',
        image: ayla,
    },
    {
        id: 4,
        name: 'Zuri Portfolio',
        description: "My team and I built an E-commerce web app.I have Worked with the team to build a robust backend system to handle user authentication and authorization, resulting in a seamless and efficient experience for users. I Implemented a 2fa handler for users to enable and disable two step authentication for their accounts. I implemented an error handler to handle all errors encountered in the usage of the API.",
        tools: ['TypeScriptJS', 'Express', 'Sequelize', 'Passport', "GoogleOauth","Swagger"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Backend Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },