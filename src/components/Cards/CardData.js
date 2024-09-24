import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import authorPhoto from '../../assets/authorphoto.jpg';
import fullStackImage from '../../assets/classplus-banner-fullstack.webp';
import DataAnalyticsImage from '../../assets/FSD-Banner-1-datascience.webp';
import MarketingImage from '../../assets/DM-new-Banner-DigitalMarketing.webp';


export const data = [
    
    {
        id: 1,
        courseID: 1,
        Duration: ' 6 months',
        imageSrc: img1,
        title: 'Development',
        students: '3200 +',
        no_of_lessons: '4 lessons',
        lessons: [
            { courseTopic: 'Introduction to Programming', content: ['Basic Of Programming', 'understanding Algorithms', 'problem solving Tactics', 'Introduction to Object-oriented Programming'] },
            { courseTopic: 'Understanding Java Language', content: ['Basics Of Java,', 'Java Data types And Variables,', 'Java Operators and Expressions,', 'Java Control Flow Statements'] },
            { courseTopic: 'Java Advanced Topics', content: ['Advanced Object-oriented Programming in java,', 'Java Collections FrameWork,', 'Exception Handling in Java,', 'Multithreading in Java'] },
            { courseTopic: 'Frontend Technologies', content: ['HTML,', 'CSS,', 'Javascript,', 'FrontEnd Framework (React.js or Angular.js),', 'Bootstrap'] },
            { courseTopic: 'BackEnd Technologies', content: ['Java Servlets & JSP,', 'Spring Frameworks,', 'Hibernate ORM,', 'Microservices with Spring Boot,', 'RESTful web Services,', 'JWT for Java Application'] },
            { courseTopic: 'DataBase', content: ['SQL Queries,', 'JDBC,', 'DataBase Transactions,', 'SQL optimisation Techniques,', 'DataBase Connection Pooling'] },
            { courseTopic: 'SoftSkills', content: ['Teamwork,', 'Communication Skills,', ' Problem Solving Skills,', ' project-Management Skills'] },
        ],
        About:'',
        text: 'Full Stack Java Development',
        name: 'Balu',
        price: '$20.00',
        rating: 5,
        authorImage: authorPhoto,
        no_of_ratings: 2,
        categoryIndex: 0, // Development
        tagIndex: 6,      // Web Development
        levelIndex: 0,    // Intermediate
        priceIndex: 0,    // Paid
        bannerImage: fullStackImage,
        whatWillYouLearn: [
            { topic1: 'HTML',
             topic2: 'CSS' ,
             topic3: 'JavaScript',
             topic4: 'React JS' ,
             topic5: 'Bootstrap' ,
             topic6: 'Core Java' ,
             topic7: 'Advanced Java',
             topic8: 'SQL' ,
             topic9: 'Spring Boot' },
        ]
    },

    {
        id: 1,
        courseID: 2,
        imageSrc: img2,
        Duration: ' 6 months',
        title: 'Development',
        students: '2900 +',
        no_of_lessons: '4 lessons',
        lessons: [
            { courseTopic: 'Python Basics', content: ['Python syntax and semantics,', ' Basic python Data Structures, python control flow tools,Modules in python,', ' File Handling, Python Debugging and Exception Handling'] },
            { courseTopic: 'Python Advanced Concepts', content: ['Advanced Python Data Structures,', 'Python Iterators,Generators,and Decorators,', 'Multithreading and Multiprocessing in Python,', 'python Metaclasses,', 'Context Managers in Python,', 'Advanced File Handling'] },
            { courseTopic: 'Basic Web Development', content: ['Basics of HTML,', 'Fundamentals of CSS,', 'Introduction to Javascript,', 'Basics of Bootstrap,', 'Learn to use APIs,', 'Understanding of Document Object Model(DOM)'] },
            { courseTopic: 'Python Web Frameworks', content: ['Introduction to Django,', 'Models in Django,', 'views and Templates in Django', 'Middleware in Django,', 'Django ORM,', 'Django Rest Framework'] },
            { courseTopic: 'Javascript and Frontend Frameworks', content: ['Javascript Deep Dive,', 'Introduction to ReactJS,', 'components in ReactJS,', 'Redux in ReactJS,'] },
            { courseTopic: 'Python Testing', content: ['Unit Testing in Python,', 'Python Mock and MagicMock,', 'Integration Testing in Python', 'Test coverage in Python,', 'selenium for python,'] },
        ],
        About:'',        
        text: 'Full Stack Python Development',
        name: 'Balu',
        price: '$20.00',
        rating: 5,
        authorImage: authorPhoto,
        no_of_ratings: 0,
        categoryIndex: 0,
        tagIndex: 6,    
        levelIndex: 1,   
        priceIndex: 1,
        bannerImage: fullStackImage,
        whatWillYouLearn: [{ topic1: 'HTML', topic2: 'CSS', topic3: 'JavaScript', topic4: 'React JS', topic5: 'Bootstrap', topic6: 'Python', topic8: 'Django' }]
    },

    {
        id: 1,
        imageSrc: img3,
        courseID: 3,
        title: 'Development',
        Duration: ' 4 months',
        students: '1500+',
        no_of_lessons: '4 lessons',
        lessons: [
            { courseTopic: 'Introduction to UI & UX Design', content: ['Understanding the Basics ,', ' Design Principles ,', 'User Research ,', 'Wireframing and Prototyping'] },
            { courseTopic: ' Design Thinking and Problem Solving', content: ['Introduction to Design Thinking ,', 'Ideation Techniques ,', 'Prototyping Workshop ,', 'Usability Testing'] },
            { courseTopic: 'UI Design and Visual Elements', content: ['Advanced UI Design Principles ,', 'Iconography and Imagery ,', 'Motion Design ,', 'Final Project Kick-of'] },
            { courseTopic: ' Portfolio Building and Resume Review', content: ['Crading a Strong Portfolio ,', 'Resume Writing Workshop ,', 'Portfolio Review and Feedback'] },
            { courseTopic: 'Final Project and Presentation', content: ['Project Work ,', 'Presentation Skills ,', 'Final Project Showcase'] },
        ],
        About:'',
        text: 'UI/UX Development',
        name: 'Balu',
        price: '$20.00',
        rating: 5,
        authorImage: authorPhoto,
        no_of_ratings: 2,
        categoryIndex: 0, // Development
        tagIndex: 6,      // Web Development
        levelIndex: 1,    // Intermediate
        priceIndex: 1,    // Paid
        bannerImage: fullStackImage,
        whatWillYouLearn: [{ topic1: 'Introduction to UI & UX Design', topic2: 'Design Thinking and Problem Solving', topic3: 'UI Design and Visual Elements', topic4: 'Portfolio Building and Resume Review', topic5: 'Final Project and Presentation', topic6: 'Python', topic8: 'Django' }]
    },
    {
        id: 1,
        imageSrc: img4,
        courseID: 4,
        title: 'Development',
        Duration: ' 5 months',
        students: '2590 +',
        no_of_lessons: '4 lessons',
        lessons: [
            { courseTopic: 'FrontEnd Technologies', content: ['HTML,', ' CSS,', 'Javascript', ' Bootstrap'] },
            { courseTopic: 'BackEnd Technologies', content: ['NodeJS,', ' ExpressJS', ' Typescript'] },
            { courseTopic: 'DataBases', content: ['SQL,', ' MongoDB'] },
        ],
        About:'',
        text: 'MERN Stack',
        name: 'Balu',
        price: '$20.00',
        rating: 5,
        authorImage: authorPhoto,
        no_of_ratings: 2,
        categoryIndex: 0, // Development
        tagIndex: 6,      // Web Development
        levelIndex: 1,    // Intermediate
        priceIndex: 1,    // Paid
        bannerImage: fullStackImage,
        whatWillYouLearn: [{ topic1: 'HTML', topic2: 'CSS', topic3: 'Javascript', topic4: 'Bootstrap', topic5: 'React JS', topic6: 'Node JS', topic8: 'Express JS', topic9: 'TypeScript', topic10: 'SQL', topic11: 'MongoDB' }]
    },
    {
        id: 1,
        imageSrc: img5,
        courseID: 5,
        Duration: ' 6 months',
        title: 'Development',
        students: '2760 +',
        no_of_lessons: '4 lessons',
        lessons: [
            { courseTopic: 'Introduction to Programming', content: ['Core Java, Advanced Java, Spring Boot / Python , Django'] },
            { courseTopic: 'Front End Technologies', content: ['HTML,', ' CSS,', ' Javascript,', ' Bootstrap,', ' ReactJS'] },
            { courseTopic: 'DataBase', content: ['SQL,', ' MongoDB'] },
            { courseTopic: 'Internship', content: '3 months Internship' },
        ],
        About:'',
        text: 'Advanced Full Stack',
        name: 'Balu',
        price: '$20.00',
        rating: 5,
        authorImage: authorPhoto,
        no_of_ratings: 2,
        categoryIndex: 0, // Development
        tagIndex: 6,      // Web Development
        levelIndex: 1,    // Intermediate
        priceIndex: 1,    // Paid
        bannerImage: fullStackImage,
        whatWillYouLearn: [{ topic1: 'HTML', topic2: 'CSS', topic3: 'Javascript', topic4: 'Bootstrap', topic5: 'Core Java,Advanced Java,SpringBoot / Python Django', topic6: 'SQL', topic8: 'React JS', topic9: 'MongoDB', topic10: '+3 Months internship' }]
    },

    {
        id: 2,
        imageSrc: img6,
        courseID: 21,
        Duration: ' 3 months',
        students: '1560 +',
        title: 'Analytics',
        no_of_lessons: '4 lessons',
        lessons: [
            { courseTopic: 'Introduction to HR Management', content: '4 hours 20 min' },
            { courseTopic: 'Recruitment and Selection', content: '3 hours 50 min' },
            { courseTopic: 'Performance Management', content: '5 hours 35 min' },
            { courseTopic: 'Employee Engagement', content: '6 hours 45 min' },
        ],
        About: 'Social Prachar offers the best Data Analytics certification courses in Hyderabad. The training program equips you with an apt understanding of data processing tools like Excel, SQL/NoSQL, and Data Visualization tools like Tableau and PowerBI. While SQL/NoSQL is used to work with the data stored in the Database Management software, Tableau and PowerBI are used in analysing it and presenting visual stories to end-users. Concepts such as Data Preparation, Data Cleansing, and Exploratory Data Analysis are explored in detail. Influential concepts like Data Mining of Structured (RDBMS) and Unstructured (Big Data) data, with real-life examples, are illustrated. Advanced Excel aids in data proficiency Concepts and it will help to reduce reduces working hours',
        students: '2 students',
        text: 'Data Analytics',
        name: 'Balu',
        price: '$20.00',
        rating: 4.00,
        authorImage: authorPhoto,
        categoryIndex: 1, // Design & Art
        tagIndex: 3,      // App
        levelIndex: 0,    // All Levels
        priceIndex: 0,    // Free
        bannerImage: DataAnalyticsImage,
        whatWillYouLearn: [{ topic1: 'PowerBI', topic2: 'Tableau', topic3: 'SQL', topic4: 'MS Excel', topic5: 'Python' }]
    },

    {
        id: 2,
        imageSrc: img7,
        courseID: 22,
        Duration: ' 7 months',
        students: '1860 +',
        title: 'Analytics',
        no_of_lessons: '4 lessons',
        lessons: [
            { courseTopic: 'Introduction to HR Management', content: '4 hours 20 min' },
            { courseTopic: 'Recruitment and Selection', content: '3 hours 50 min' },
            { courseTopic: 'Performance Management', content: '5 hours 35 min' },
            { courseTopic: 'Employee Engagement', content: '6 hours 45 min' },
        ],
        About:'',
        students: '1300+  students',
        text: 'Data Science',
        name: 'Balu',
        price: '$20.00',
        authorImage: authorPhoto,
        rating: 3.0,
        categoryIndex: 1, // Finance
        tagIndex: 0,     // Design
        levelIndex: 2,    // Expert
        priceIndex: 1,    // Paid
        bannerImage: 'DataAnalyticsImage',
        whatWillYouLearn: [{ topic1: 'Python', topic2: 'Statistics', topic3: 'Machine Learning', topic4: 'Mathematics', topic5: 'PowerBI', topic6: 'Tableau', table7: 'SQL' }]
    },
    {
        id: 2,
        imageSrc: img8,
        courseID: 23,
        Duration: ' 7 months',
        students: '1560 + students',
        title: 'Analytics',
        no_of_lessons: '4 lessons',
        lessons: [
            { courseTopic: 'Introduction to HR Management', content: '4 hours 20 min' },
            { courseTopic: 'Recruitment and Selection', content: '3 hours 50 min' },
            { courseTopic: 'Performance Management', content: '5 hours 35 min' },
            { courseTopic: 'Employee Engagement', content: '6 hours 45 min' },
        ],
        About: '',
        text: 'Artificial Intelligence',
        name: 'Balu',
        price: '$20.00',
        authorImage: authorPhoto,
        rating: 4.0,
        categoryIndex: 1, // Finance
        tagIndex: 2,      // Design
        levelIndex: 2,    // Expert
        priceIndex: 1,    // Paid
        bannerImage: DataAnalyticsImage,
        whatWillYouLearn: [{ topic1: 'Python', topic2: 'Statistics', topic3: 'Machine Learning', topic4: 'Mathematics', topic5: 'PowerBI', topic6: 'Tableau', table7: 'SQL' }]
    },
    {
        id: 2,
        imageSrc: img1,
        courseID: 24,
        Duration: ' 7 months',
        students: '1700+ students',
        title: 'Analytics',
        no_of_lessons: '4 lessons',
        lessons: [
            { courseTopic: 'Introduction to HR Management', content: '4 hours 20 min' },
            { courseTopic: 'Recruitment and Selection', content: '3 hours 50 min' },
            { courseTopic: 'Performance Management', content: '5 hours 35 min' },
            { courseTopic: 'Employee Engagement', content: '6 hours 45 min' },
        ],
        About: '',
        students: '1350+ students',
        text: 'Generative AI',
        name: 'Balu',
        price: '$20.00',
        authorImage: authorPhoto,
        rating: 4.0,
        categoryIndex: 1, // Finance
        tagIndex: 2,      // Design
        levelIndex: 2,    // Expert
        priceIndex: 1,    // Paid
        bannerImage: DataAnalyticsImage,
        whatWillYouLearn: [{ topic1: 'Python', topic2: 'Statistics', topic3: 'Machine Learning', topic4: 'Mathematics', topic5: 'PowerBI', topic6: 'Tableau', table7: 'SQL' }]
    },


    {
        id: 3,
        imageSrc: img2,
        courseID: 31,
        title: 'Marketing',
        Duration: ' 6 months',
        no_of_lessons: '4 lessons',
        lessons: [
            { courseTopic: 'Introduction', content: ['Online Business Concepts,', 'Basic Business Concepts,', 'Introduction To Websites,', 'Purchading Domain and Hosting'] },
            { courseTopic: 'Website Designing', content: ['DashBoard Explination,', ' Theme selecting And Installation,', 'Advanced Level of Designing'] },
            { courseTopic: 'SEO (Search Engine Optimisation)', content: 'SE algorithms, ON-page,Off-Page Optimisation' },
            { courseTopic: 'SEM(Search Engine Marketing)', content: ['Introduction To paid Concepts,', ' Search ADs,', 'Dsiplay ADs'] },
            { courseTopic: 'SSM(Social Media Marketing)', content: ['FaceBook ADs,', ' Linkedin ADs,', 'Instagram ADs'] },

        ],
        About: '',
        students: '1 students',
        text: 'Digital Marketing',
        name: 'Balu',
        price: '$20.00',
        rating: 4.00,
        authorImage: authorPhoto,
        categoryIndex: 2, // Accounting
        tagIndex: 3,      // Education
        levelIndex: 0,    // All Levels
        priceIndex: 0,    // Free
        bannerImage: MarketingImage,
        whatWillYouLearn: [{ topic1: 'Introduction', topic2: 'Website Designing', topic3: 'SEO(Search Engine optimisation)', topic4: 'SEM(search Engine Marketing)', topic5: 'SSM(social media Marketing)', topic6: 'Google Analytics', table7: 'Email Marketing Etc....' }]
    },
    {
        id: 3,
        imageSrc: img3,
        courseID: 32,
        title: 'Marketing',
        students: '3 students',
        no_of_lessons: '4 lessons',
        lessons: [
            { courseTopic: 'Introduction to HR Management', content: '4 hours 20 min' },
            { courseTopic: 'Recruitment and Selection', content: '3 hours 50 min' },
            { courseTopic: 'Performance Management', content: '5 hours 35 min' },
            { courseTopic: 'Employee Engagement', content: '6 hours 45 min' },
        ],
        About: '',
        text: 'SEO(Search Engine Optimisation)',
        name: 'Balu',
        price: '$20.00',
        rating: 4.00,
        authorImage: authorPhoto,
        categoryIndex: 2, // Business
        tagIndex: 1,      // Book
        levelIndex: 1,    // Intermediate
        priceIndex: 1,    // Paid
        bannerImage: MarketingImage,
        whatWillYouLearn: [{ topic1: 'Introduction to Search Engine', topic2: 'how Search Engine Works', topic3: 'SE Algorithm Updates', topic4: 'On-Page Optimisation', topic5: 'OFF-page Optimisation' }]
    },

    {
        id: 3,
        imageSrc: img4,
        courseID: 33,
        title: 'Marketing',
        students: '3 students',
        no_of_lessons: '4 lessons',
        lessons: [
            { courseTopic: 'Introduction to HR Management', content: '4 hours 20 min' },
            { courseTopic: 'Recruitment and Selection', content: '3 hours 50 min' },
            { courseTopic: 'Performance Management', content: '5 hours 35 min' },
            { courseTopic: 'Employee Engagement', content: '6 hours 45 min' },
        ],
        About: '',
        text: ' ⁠Digital Marketing with AI Tools',
        name: 'Balu',
        price: '$20.00',
        rating: 4.00,
        authorImage: authorPhoto,
        categoryIndex: 2,
        tagIndex: 1,
        levelIndex: 1,
        priceIndex: 1,
        bannerImage: MarketingImage,
        whatWillYouLearn: [{ topic1: 'Introduction to Search Engine', topic2: 'how Search Engine Works', topic3: 'SE Algorithm Updates', topic4: 'On-Page Optimisation', topic5: 'OFF-page Optimisation' }]

    },
    {
        id: 4,
        imageSrc: img5,
        courseID: 41,
        title: 'Accounting',
        students: '3 students',
        no_of_lessons: '4 lessons',
        lessons: [
            { courseTopic: 'Introduction to HR Management', content: '4 hours 20 min' },
            { courseTopic: 'Recruitment and Selection', content: '3 hours 50 min' },
            { courseTopic: 'Performance Management', content: '5 hours 35 min' },
            { courseTopic: 'Employee Engagement', content: '6 hours 45 min' },
        ],
        About: '',
        text: 'Advanced Tally',
        name: 'Balu',
        price: '$20.00',
        rating: 4.00,
        authorImage: authorPhoto,
        categoryIndex: 3, // Business
        tagIndex: 1,      // Book
        levelIndex: 1,    // Intermediate
        priceIndex: 1,    // Paid
        bannerImage: ''
    },
    {
        id: 4,
        imageSrc: img6,
        courseID: 42,
        title: 'Accounting',
        students: '3 students',
        no_of_lessons: '4 lessons',
        lessons: [
            { courseTopic: 'Introduction to HR Management', content: '4 hours 20 min' },
            { courseTopic: 'Recruitment and Selection', content: '3 hours 50 min' },
            { courseTopic: 'Performance Management', content: '5 hours 35 min' },
            { courseTopic: 'Employee Engagement', content: '6 hours 45 min' },
        ],
        About: '',
        text: 'Taxation',
        name: 'Balu',
        price: '$20.00',
        rating: 4.00,
        authorImage: authorPhoto,
        categoryIndex: 3, // Business
        tagIndex: 1,      // Book
        levelIndex: 1,    // Intermediate
        priceIndex: 1,    // Paid
        bannerImage: ''
    },
    {
        id: 4,
        imageSrc: img7,
        courseID: 43,
        title: 'Accounting',
        students: '3 students',
        no_of_lessons: '4 lessons',
        lessons: [
            { courseTopic: 'Introduction to HR Management', content: '4 hours 20 min' },
            { courseTopic: 'Recruitment and Selection', content: '3 hours 50 min' },
            { courseTopic: 'Performance Management', content: '5 hours 35 min' },
            { courseTopic: 'Employee Engagement', content: '6 hours 45 min' },
        ],
        About: '',
        text: ' GST Filing',
        name: 'Balu',
        price: '$20.00',
        rating: 4.00,
        authorImage: authorPhoto,
        categoryIndex: 3, // Business
        tagIndex: 1,      // Book
        levelIndex: 1,    // Intermediate
        priceIndex: 1,    // Paid
        bannerImage: ''
    },
    {
        id: 5,
        imageSrc: img8,
        courseID: 51,
        title: 'Finance',
        students: '3 students',
        no_of_lessons: '4 lessons',
        lessons: [
            { courseTopic: 'Introduction to HR Management', content: '4 hours 20 min' },
            { courseTopic: 'Recruitment and Selection', content: '3 hours 50 min' },
            { courseTopic: 'Performance Management', content: '5 hours 35 min' },
            { courseTopic: 'Employee Engagement', content: '6 hours 45 min' },
        ],
        About: '',
        text: ' Finance Literacy',
        name: 'Balu',
        price: '$20.00',
        rating: 4.00,
        authorImage: authorPhoto,
        categoryIndex: 4, // Business
        tagIndex: 1,      // Book
        levelIndex: 1,    // Intermediate
        priceIndex: 1,    // Paid
        bannerImage: ''
    },

    {
        id: 5,
        imageSrc: img1,
        courseID: 52,
        title: 'Finance',
        students: '3 students',
        no_of_lessons: '4 lessons',
        lessons: [
            { courseTopic: 'Introduction to HR Management', content: '4 hours 20 min' },
            { courseTopic: 'Recruitment and Selection', content: '3 hours 50 min' },
            { courseTopic: 'Performance Management', content: '5 hours 35 min' },
            { courseTopic: 'Employee Engagement', content: '6 hours 45 min' },
        ],
        About: '',
        text: 'Banking,Capital Market and Investments',
        name: 'Balu',
        price: '$20.00',
        rating: 4.00,
        authorImage: authorPhoto,
        categoryIndex: 4, // Businessa
        tagIndex: 1,      // Book
        levelIndex: 1,    // Intermediate
        priceIndex: 1,    // Paid
        bannerImage: ''
    },
    {
        id: 6,
        imageSrc: img2,
        courseID: 61,
        title: 'HR Analytics',
        students: '1200+ students',
        no_of_lessons: '4 lessons',
        lessons: [
            { courseTopic: 'Introduction to HR Management', content: '4 hours 20 min' },
            { courseTopic: 'Recruitment and Selection', content: '3 hours 50 min' },
            { courseTopic: 'Performance Management', content: '5 hours 35 min' },
            { courseTopic: 'Employee Engagement', content: '6 hours 45 min' },
        ],
        About: '',
        text: 'HR Analytics Certification',
        name: 'Balu',
        price: '$20.00',
        rating: 4.00,
        authorImage: authorPhoto,
        categoryIndex: 5, // Business
        tagIndex: 1,      // Book
        levelIndex: 1,    // Intermediate
        priceIndex: 1,    // Paid
        bannerImage: '',
        whatWillYouLearn: [{
            topic1: 'Introduction to HR Analytics', topic2: 'Data Collection and Management', topic3: 'Workforce Planning', topic4: 'Talent Acquisition Analytics', topic5: 'Performance and Productivity Analytics', topic6: 'Employee Engagement and Satisfaction', table7: 'Learning and Development Analytics', table8: 'Diversity and Inclusion Analytics Etc...'
        }]
    }

];
