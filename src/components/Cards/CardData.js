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
        // lessons: [
        //     { courseTopic1: 'Introduction to Programming', content: ['Basic Of Programming', 'understanding Algorithms', 'problem solving Tactics', 'Introduction to Object-oriented Programming'] },
        //     { courseTopic2: 'Understanding Java Language', content: ['Basics Of Java,', 'Java Data types And Variables,', 'Java Operators and Expressions,', 'Java Control Flow Statements'] },
        //     { courseTopic3: 'Java Advanced Topics', content: ['Advanced Object-oriented Programming in java,', 'Java Collections FrameWork,', 'Exception Handling in Java,', 'Multithreading in Java'] },
        //     { courseTopic4: 'Frontend Technologies', content: ['HTML,', 'CSS,', 'Javascript,', 'FrontEnd Framework (React.js or Angular.js),', 'Bootstrap'] },
        //     { courseTopic5: 'BackEnd Technologies', content: ['Java Servlets & JSP,', 'Spring Frameworks,', 'Hibernate ORM,', 'Microservices with Spring Boot,', 'RESTful web Services,', 'JWT for Java Application'] },
        //     { courseTopic6: 'DataBase', content: ['SQL Queries,', 'JDBC,', 'DataBase Transactions,', 'SQL optimisation Techniques,', 'DataBase Connection Pooling'] },
        //     { courseTopic7: 'SoftSkills', content: ['Teamwork,', 'Communication Skills,', ' Problem Solving Skills,', ' project-Management Skills'] },
        // ],
        About: "This Full Stack Java Development course is designed for aspiring developers who wish to gain comprehensive knowledge in both front-end and back-end technologies. Throughout the course, you will explore the Java programming language, along with essential frameworks such as Spring and Hibernate, to build robust web applications. You'll learn how to create dynamic user interfaces using HTML, CSS, and JavaScript, and understand the intricacies of server-side development, database integration, and RESTful APIs. Our hands-on projects will provide you with practical experience in deploying applications on cloud platforms and utilizing version control systems. By the end of the course, you will have the skills necessary to develop, deploy, and maintain full-fledged web applications, making you a valuable asset in today’s technology-driven job market.",
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
            {
                topic1: 'HTML',
                topic2: 'CSS',
                topic3: 'JavaScript',
                topic4: 'React JS',
                topic5: 'Bootstrap',
                topic6: 'Core Java',
                topic7: 'Advanced Java',
                topic8: 'SQL',
                topic9: 'Spring Boot'
            },
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
        // lessons: [
        //     { courseTopic1: 'Python Basics', content: ['Python syntax and semantics,', ' Basic python Data Structures, python control flow tools,Modules in python,', ' File Handling, Python Debugging and Exception Handling'] },
        //     { courseTopic2: 'Python Advanced Concepts', content: ['Advanced Python Data Structures,', 'Python Iterators,Generators,and Decorators,', 'Multithreading and Multiprocessing in Python,', 'python Metaclasses,', 'Context Managers in Python,', 'Advanced File Handling'] },
        //     { courseTopic3: 'Basic Web Development', content: ['Basics of HTML,', 'Fundamentals of CSS,', 'Introduction to Javascript,', 'Basics of Bootstrap,', 'Learn to use APIs,', 'Understanding of Document Object Model(DOM)'] },
        //     { courseTopic4: 'Python Web Frameworks', content: ['Introduction to Django,', 'Models in Django,', 'views and Templates in Django', 'Middleware in Django,', 'Django ORM,', 'Django Rest Framework'] },
        //     { courseTopic5: 'Javascript and Frontend Frameworks', content: ['Javascript Deep Dive,', 'Introduction to ReactJS,', 'components in ReactJS,', 'Redux in ReactJS,'] },
        //     { courseTopic6: 'Python Testing', content: ['Unit Testing in Python,', 'Python Mock and MagicMock,', 'Integration Testing in Python', 'Test coverage in Python,', 'selenium for python,'] },
        // ],
        About: "Welcome to the Full Stack Python Development course! This comprehensive program is designed for aspiring developers who want to master both front-end and back-end technologies using Python. Throughout the course, you'll delve into the world of web development, starting with the basics of HTML, CSS, and JavaScript to create dynamic and responsive user interfaces. You'll then transition to server-side development using Python and frameworks like Django and Flask, where you’ll learn to build RESTful APIs, manage databases with SQL and NoSQL, and implement user authentication and authorization.In addition to core programming skills, this course emphasizes best practices in software development, including version control with Git, testing, and deployment strategies.You'll also gain practical experience by working on real-world projects that simulate the entire development lifecycle, from planning to deployment. By the end of this course, you will have a solid understanding of how to create full-stack applications, equipping you with the skills necessary to thrive in the competitive tech industry.",
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
        students: '1500+ ',
        no_of_lessons: '4 lessons',
        // lessons: [
        //     { courseTopic1: 'Introduction to UI & UX Design', content: ['Understanding the Basics ,', ' Design Principles ,', 'User Research ,', 'Wireframing and Prototyping'] },
        //     { courseTopic2: ' Design Thinking and Problem Solving', content: ['Introduction to Design Thinking ,', 'Ideation Techniques ,', 'Prototyping Workshop ,', 'Usability Testing'] },
        //     { courseTopic3: 'UI Design and Visual Elements', content: ['Advanced UI Design Principles ,', 'Iconography and Imagery ,', 'Motion Design ,', 'Final Project Kick-of'] },
        //     { courseTopic4: ' Portfolio Building and Resume Review', content: ['Crading a Strong Portfolio ,', 'Resume Writing Workshop ,', 'Portfolio Review and Feedback'] },
        //     { courseTopic5: 'Final Project and Presentation', content: ['Project Work ,', 'Presentation Skills ,', 'Final Project Showcase'] },
        // ],
        About: "Welcome to our UI/ UX Development course, where you will embark on an exciting journey to master the art and science of creating intuitive and user - centered digital experiences.In today’s fast - paced digital landscape, the importance of effective UI / UX design cannot be overstated; it is essential for ensuring that products are not only visually appealing but also functional and easy to navigate.Throughout this course, you will acquire a diverse set of skills, including visual design principles, interaction design strategies, and user research methodologies.Additionally, you'll learn how to create responsive designs that adapt seamlessly across devices and platforms. Emphasizing collaboration, you will work alongside peers to develop a keen understanding of user needs and behavior, preparing you to excel in the dynamic field of UI/UX design.",
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
        // lessons: [
        //     { courseTopic1: 'FrontEnd Technologies', content: ['HTML,', ' CSS,', 'Javascript', ' Bootstrap'] },
        //     { courseTopic2: 'BackEnd Technologies', content: ['NodeJS,', ' ExpressJS', ' Typescript'] },
        //     { courseTopic3: 'DataBases', content: ['SQL,', ' MongoDB'] },
        // ],
        About: "Welcome to our MERN Stack Development course, where you'll embark on an exciting journey to master one of the most popular full-stack JavaScript frameworks in the industry! MERN, which stands for MongoDB, Express.js, React.js, and Node.js, empowers you to build dynamic, scalable web applications from scratch. This course is designed for aspiring developers eager to learn how to create robust user interfaces and seamless back-end services. Throughout the program, you will gain hands-on experience with essential skills such as database management, RESTful API development, front-end design, state management with Redux, and authentication processes. By the end of this course, you'll be equipped with the knowledge and confidence to tackle real-world projects, making you a valuable asset in the tech industry!",
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
        // lessons: [
        //     { courseTopic1: 'Introduction to Programming', content: ['Core Java, Advanced Java, Spring Boot / Python , Django'] },
        //     { courseTopic2: 'Front End Technologies', content: ['HTML,', ' CSS,', ' Javascript,', ' Bootstrap,', ' ReactJS'] },
        //     { courseTopic3: 'DataBase', content: ['SQL,', ' MongoDB'] },
        //     { courseTopic4: 'Internship', content: '3 months Internship' },
        // ],
        About: "Welcome to our Advanced Full Stack Development course, where you'll dive deep into the world of web applications, mastering both front-end and back-end technologies. This course is designed for those who already have a foundational understanding of web development and are eager to elevate their skills to an advanced level. You will learn to build robust, scalable applications using modern frameworks such as React and Node.js, while also exploring databases, APIs, and cloud services. Through hands-on projects and real-world scenarios, you'll enhance your abilities in responsive design, database management, and application deployment. By the end of the course, you’ll not only be equipped with the technical skills needed for full-stack development but also the confidence to tackle complex projects in a collaborative environment.",
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
        // lessons: [
        //     { courseTopic1: 'Introduction to HR Management', content: '4 hours 20 min' },
        //     { courseTopic2: 'Recruitment and Selection', content: '3 hours 50 min' },
        //     { courseTopic3: 'Performance Management', content: '5 hours 35 min' },
        //     { courseTopic4: 'Employee Engagement', content: '6 hours 45 min' },
        // ],
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
        // lessons: [
        //     { courseTopic1: 'Introduction to HR Management', content: '4 hours 20 min' },
        //     { courseTopic2: 'Recruitment and Selection', content: '3 hours 50 min' },
        //     { courseTopic3: 'Performance Management', content: '5 hours 35 min' },
        //     { courseTopic4: 'Employee Engagement', content: '6 hours 45 min' },
        // ],
        About: "Welcome to our Data Science course, where we unlock the power of data to drive informed decision-making and innovation. In this comprehensive program, you will explore the fundamental concepts and advanced techniques of data analysis, machine learning, and statistical modeling. Our curriculum is designed to equip you with essential skills such as data visualization, programming in Python and R, data wrangling, and predictive analytics. Through hands-on projects and real-world case studies, you'll learn how to extract valuable insights from complex datasets, enabling you to tackle real-world challenges across various industries. Join us on this exciting journey to become a proficient data scientist and transform data into actionable intelligence.",
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
        // lessons: [
        //     { courseTopic1: 'Introduction to HR Management', content: '4 hours 20 min' },
        //     { courseTopic2: 'Recruitment and Selection', content: '3 hours 50 min' },
        //     { courseTopic3: 'Performance Management', content: '5 hours 35 min' },
        //     { courseTopic4: 'Employee Engagement', content: '6 hours 45 min' },
        // ],
        About: "Welcome to the Artificial Intelligence course, where we embark on an exciting journey to explore the transformative power of AI technologies in our daily lives and various industries. This course is designed to provide you with a comprehensive understanding of fundamental AI concepts, including machine learning, neural networks, natural language processing, and computer vision. Through hands-on projects and real-world applications, you will develop essential skills such as programming in Python, data analysis, algorithm design, and critical thinking. Join us to unlock the potential of AI and gain the knowledge and tools to create innovative solutions that can shape the future!",
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
        // lessons: [
        //     { courseTopic1: 'Introduction to HR Management', content: '4 hours 20 min' },
        //     { courseTopic2: 'Recruitment and Selection', content: '3 hours 50 min' },
        //     { courseTopic3: 'Performance Management', content: '5 hours 35 min' },
        //     { courseTopic4: 'Employee Engagement', content: '6 hours 45 min' },
        // ],
        About: "Welcome to the Generative AI course, where creativity meets technology! In this course, you will explore the fascinating world of generative artificial intelligence, learning how to leverage algorithms and data to create innovative solutions across various domains. From generating stunning images and music to crafting compelling text, this course provides you with the tools and techniques to harness the power of AI in your projects. You will gain hands-on experience with popular frameworks and tools, understand the underlying principles of machine learning, and develop a strong foundation in neural networks and deep learning. Join us on this exciting journey to unlock your creative potential and transform the way you approach problem-solving in the digital age!",
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
        // lessons: [
        //     { courseTopic1: 'Introduction', content: ['Online Business Concepts,', 'Basic Business Concepts,', 'Introduction To Websites,', 'Purchading Domain and Hosting'] },
        //     { courseTopic2: 'Website Designing', content: ['DashBoard Explination,', ' Theme selecting And Installation,', 'Advanced Level of Designing'] },
        //     { courseTopic3: 'SEO (Search Engine Optimisation)', content: 'SE algorithms, ON-page,Off-Page Optimisation' },
        //     { courseTopic4: 'SEM(Search Engine Marketing)', content: ['Introduction To paid Concepts,', ' Search ADs,', 'Dsiplay ADs'] },
        //     { courseTopic5: 'SSM(Social Media Marketing)', content: ['FaceBook ADs,', ' Linkedin ADs,', 'Instagram ADs'] },

        // ],
        About: "In today's fast-paced digital landscape, mastering the art and science of digital marketing is essential for businesses looking to thrive and connect with their audiences. Our Digital Marketing course offers a comprehensive exploration of key strategies and tools that drive online success. From understanding consumer behavior and crafting compelling content to leveraging social media, SEO, and data analytics, this course equips students with the skills needed to create impactful marketing campaigns. Through hands-on projects and real-world case studies, you'll learn to navigate the digital ecosystem and develop innovative marketing solutions that resonate with your target audience. Join us to unlock the potential of digital marketing and elevate your career in this dynamic field!",
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
        // lessons: [
        //     { courseTopic1: 'Introduction to HR Management', content: '4 hours 20 min' },
        //     { courseTopic2: 'Recruitment and Selection', content: '3 hours 50 min' },
        //     { courseTopic3: 'Performance Management', content: '5 hours 35 min' },
        //     { courseTopic4: 'Employee Engagement', content: '6 hours 45 min' },
        // ],
        About: "Unlock the potential of your online presence with our comprehensive SEO (Search Engine Optimization) course. In today’s digital landscape, understanding SEO is essential for businesses and individuals aiming to enhance their visibility and reach. This course will guide you through the fundamental principles of SEO, including keyword research, on-page optimization, technical SEO, and link-building strategies. You will gain practical skills to analyze website performance, optimize content for search engines, and stay ahead of ever-evolving algorithms. Whether you're a marketer, business owner, or aspiring SEO professional, this course equips you with the tools and knowledge to drive organic traffic, improve search rankings, and achieve sustainable growth for your online projects.",
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
        // lessons: [
        //     { courseTopic1: 'Introduction to HR Management', content: '4 hours 20 min' },
        //     { courseTopic2: 'Recruitment and Selection', content: '3 hours 50 min' },
        //     { courseTopic3: 'Performance Management', content: '5 hours 35 min' },
        //     { courseTopic4: 'Employee Engagement', content: '6 hours 45 min' },
        // ],
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
        // lessons: [
        //     { courseTopic1: 'Introduction to HR Management', content: '4 hours 20 min' },
        //     { courseTopic2: 'Recruitment and Selection', content: '3 hours 50 min' },
        //     { courseTopic3: 'Performance Management', content: '5 hours 35 min' },
        //     { courseTopic4: 'Employee Engagement', content: '6 hours 45 min' },
        // ],
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
        // lessons: [
        //     { courseTopic1: 'Introduction to HR Management', content: '4 hours 20 min' },
        //     { courseTopic2: 'Recruitment and Selection', content: '3 hours 50 min' },
        //     { courseTopic3: 'Performance Management', content: '5 hours 35 min' },
        //     { courseTopic4: 'Employee Engagement', content: '6 hours 45 min' },
        // ],
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
        // lessons: [
        //     { courseTopic1: 'Introduction to HR Management', content: '4 hours 20 min' },
        //     { courseTopic2: 'Recruitment and Selection', content: '3 hours 50 min' },
        //     { courseTopic3: 'Performance Management', content: '5 hours 35 min' },
        //     { courseTopic4: 'Employee Engagement', content: '6 hours 45 min' },
        // ],
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
        // lessons: [
        //     { courseTopic1: 'Introduction to HR Management', content: '4 hours 20 min' },
        //     { courseTopic2: 'Recruitment and Selection', content: '3 hours 50 min' },
        //     { courseTopic3: 'Performance Management', content: '5 hours 35 min' },
        //     { courseTopic4: 'Employee Engagement', content: '6 hours 45 min' },
        // ],
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
        // lessons: [
        //     { courseTopic1: 'Introduction to HR Management', content: '4 hours 20 min' },
        //     { courseTopic2: 'Recruitment and Selection', content: '3 hours 50 min' },
        //     { courseTopic3: 'Performance Management', content: '5 hours 35 min' },
        //     { courseTopic4: 'Employee Engagement', content: '6 hours 45 min' },
        // ],
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
        // lessons: [
        //     { courseTopic1: 'Introduction to HR Management', content: '4 hours 20 min' },
        //     { courseTopic2: 'Recruitment and Selection', content: '3 hours 50 min' },
        //     { courseTopic3: 'Performance Management', content: '5 hours 35 min' },
        //     { courseTopic4: 'Employee Engagement', content: '6 hours 45 min' },
        // ],
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
