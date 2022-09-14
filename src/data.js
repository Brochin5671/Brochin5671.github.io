export const report1 = {
  header: 'Co-op Work Term 1',
  subtitle: 'University of Guelph, Global Burden of Animal Diseases',
  images: [
    {
      href: 'https://www.uoguelph.ca/',
      src: '/uog_logo.png',
      name: 'University of Guelph Logo',
    },
    {
      href: 'https://animalhealthmetrics.org/',
      src: '/gbads_logo.jpg',
      name: 'GBADs Logo',
    },
  ],
  sections: [
    {
      title: 'Abstract/Introduction',
      content:
        'For the summer of 2021, I was given the opportunity by the University of Guelph to contribute to the Global Burden of Animal Diseases project as a Data Programmer and Analyst for the Informatics Theme team. This report will go over the necessary information about the employer, my goals, and the job description.',
    },
    {
      title: 'Information About GBADs',
      content:
        "The GBADs project, led by the University of Liverpool and a group of international collaborators, will create data on the economic burden of animal diseases to support animal health decisions focused on the Sustainable Development Goals set by the United Nations. GBADs goal is to improve livestock health at the local, national, and global level by providing data for supported investment plans for veterinary services, demonstrate the value of these services, and allow allocation of resources to key social, economic and environmental problems. The GBADs Informatics Theme is leading the data science of data processing, standards, and governance strategies for animal disease, health burden estimates and other data. This data is organized by geographical regions, species and production systems. The GBADs project is funded by the Bill and Melinda Gates Foundation and the United Kingdom's Department for International Development.",
    },
    {
      title: 'Goals',
      children: [
        {
          title: 'Breath & Depth of Understanding',
          subtitle:
            'Obtain a better understanding of the development and maintenance of SQL databases.',
          icons: [
            { name: 'AWS', class: 'fab fa-aws fa-5x' },
            { name: 'Database', class: 'fas fa-database fa-5x' },
          ],
          content:
            'I wanted to gain these skills because I believe they will help me get more experience in the industry. I began by reading documentation for PostgreSQL and researched database design to gain a better understanding of how to handle and manage large sets of data. I asked for feedback from my team members on my work for database planning and querying to understand what areas needed improvement. By the end of the term, I understood what degree of planning needed to go into database development, how to manage large sets of data and solve any database related problems.',
        },
        {
          title: 'Problem Solving',
          subtitle:
            'Expand my knowledge in Python to have the ability to efficiently solve problems with the correct tools.',
          icons: [
            { name: 'Python', class: 'fab fa-python fa-5x' },
            { name: 'Tools', class: 'fas fa-tools fa-5x' },
          ],
          content:
            'Furthering my knowledge on programming in Python would greatly impact my performance in problem solving. I took action by researching and understanding what data structures, algorithms and Python libraries were available at my disposal. I analyzed problems and came to understand what tools to apply to similar problems. I applied what I learnt to create more efficient scripts for PDF scraping and cleaning data. To measure my success, I would check to see if the scripts I wrote had improved runtimes and memory efficiency. I had greatly improved the speed at which I solved problems and was able to pinpoint the correct tools needed for certain problems.',
        },
        {
          title: 'Personal Organization/Time Management',
          subtitle:
            'Achieve an organized workflow by managing schedules and priority of tasks.',
          icons: [
            { name: 'Clock', class: 'far fa-clock fa-5x' },
            { name: 'Tasks', class: 'fas fa-tasks fa-5x' },
          ],
          content:
            "Using apps and calendars helped improve my organizational and time management skills for my job. I took steps such as using apps and reminders to track my tasks throughout the day and organize them in terms of priority to have an idea of the estimated time it would take to complete them. I'd set reminders on calendars for important dates coming up such as meetings and deadlines which would help organize an effective routine to improve the speed at which I worked. After introducing these elements into my workflow, I noticed drastic differences in how I worked unlike before. My routine did become more consistent and I felt more organized and confident when working on tasks. I finished tasks on time and certain tasks early, allowing for polishing of code that made the end product better.",
        },
      ],
    },
    {
      title: 'Job Description',
      content:
        "For my role as a Data Programmer and Analyst, I was responsible for data cleanup, data reformatting, data standardization and database development. I required an understanding of Python, SQL, and Git, which I picked up from academic and personal projects, and improved those skills in this job. We would have weekly meetings on Mondays to discuss what tasks we've finished and what we were working on. I collaborated with a team member on scraping and cleaning table data from PDFs. We used existing Python code to scrape the PDFs using the pdftables API and were tasked with optimizing code used for cleaning the extracted data. After cleaning the data, we developed database schemas to organize and prepare the data to be stored in an SQL database using the PostgreSQL database engine from the AWS service, Amazon RDS. We wrote Python code to extract data from the CSV files and used the psycopg2 database adapter for Python to insert the data into the database tables and query them. I was also tasked with creating a custom scraper with the ability to scrape tables without borders and added a feature to allow the user to adjust settings for edge cases.",
    },
    {
      title: 'Conclusions',
      content:
        'My time spent contributing to the GBADs project with the Informatics Theme team was a very unique experience. I was able to collaborate with my team members in weekly meetings and was always up to date about what tasks had to be done. I had learned a lot about the development of databases and use of Amazon RDS, expanded my knowledge on Python and improved my time management and organizational skills. Being my first co-op job, this experience was very memorable and I strive to take the skills I learnt and apply them elsewhere in the future.',
    },
    {
      title: 'Acknowledgements',
      content:
        'I would like to thank Deborah Stacey and the University of Guelph for giving me this fantastic opportunity to contribute to the GBADs project. A special thanks goes to the Informatics Theme team for giving me such a great and memorable experience.',
    },
  ],
};

export const report2 = {
  header: 'Co-op Work Term 2',
  subtitle: 'NCR, D3 Banking Technology',
  images: [
    {
      href: 'https://www.ncr.com/',
      src: '/ncr_logo.png',
      name: 'NCR Logo',
    },
    {
      href: 'https://www.d3banking.com/',
      src: '/d3banking_logo.jpg',
      name: 'D3 Banking Logo',
    },
  ],
  sections: [
    {
      title: 'Abstract/Introduction',
      content:
        'In the fall of 2021, I was brought aboard NCR to work with the D3 Digital Banking team as a Software Developer. Within this team, I collaborated with UI and server developers on maintaining and providing digital banking solutions to our clients. This report will go over the necessary information about the employer, my achieved goals, and the job description.',
    },
    {
      title: 'Information About NCR',
      content:
        "NCR is an American company known as one of the world's leading enterprise providers of banking solutions for financial institutions. Some of the solutions NCR provides are Item Processing Platforms, Point of Sale for retail and food services, self-service hardware, kiosks, ATMs, retail, payment and education services. NCR's D3 Digital Banking platform offers a scalable, customizable, API-driven platform for financial institutions that reduces cost and complexity. Digital banking solutions include consumer & business banking, marketing campaigns, business intelligence, customer support, and admin & operations. Over 3 million people are using D3's technology through its clients such as Arvest Bank, SHAZAM, First Horizon Bank, TCF Bank, Synovus, and Zions Bancorporation.",
    },
    {
      title: 'Goals',
      children: [
        {
          title: 'Inquiry and Analysis',
          subtitle: 'Expand my ability to analyze code and ask questions.',
          icons: [
            { name: 'Laptop Code', class: 'fas fa-laptop-code fa-5x' },
            { name: 'Question Circle', class: 'far fa-question-circle fa-5x' },
          ],
          content:
            'I wanted to expand my ability at completing more tasks by understanding and analyzing code. This goal improved my skills as a developer and allowed me to become a better worker by the end of my term. I started by taking time to understand the codebase, asking any questions or clarifications on certain aspects. I used debug tools for error traceback and profiling React Redux states. I tracked how my performance improved at being able to find issues and solve tickets. By the end of the term, I had noticed significant improvements in my abilities. This can be attributed to the debugging skills I acquired from taking time to understand how the codebase and tools work.',
        },
        {
          title: 'Depth & Breadth of Understanding',
          subtitle:
            'Extend my understanding of web development through React and TypeScript.',
          icons: [
            { name: 'React', class: 'fab fa-react fa-5x' },
            { name: 'Cogs', class: 'fas fa-cogs fa-5x' },
          ],
          content:
            'Extending my understanding of web development by the end of the term is important to me because I am aiming to pursue more web-related opportunities. I learnt about frameworks, libraries and any technologies that were used for the development of the banking application. I read documentation about how React is used for web development and having JavaScript experience, used it to compare and contrast with the TypeScript superset language. I had asked my mentor questions about areas of code and design practices for the UI as well as received feedback on my pull requests. I began to notice that I was able to approach several tasks with ease after learning the concepts and design practices which made it faster for me to get tasks done. This was enough of a sign to prove that I had achieved my goal in understanding the concepts and technologies that go hand-in-hand in web development.',
        },
        {
          title: 'Teamwork',
          subtitle:
            'Gain better collaboration skills through communication with team members.',
          icons: [
            { name: 'Team', class: 'fas fa-users fa-5x' },
            { name: 'Code Branch', class: 'fas fa-code-branch fa-5x' },
          ],
          content:
            'Improving my teamwork and collaboration skills was a very important goal to achieve because it would further expand my social skills as well as being important transferable skills. This goal was achieved by participating in scrum meetings, asking for help on tickets, and helping other team members when possible. I tried to always be on top of everything, understand what was going on with the current sprint, help out with code reviews when requested and learn how to communicate my ticket issues better with the team. Seeing my established workflow and better communication with my mentor and team, I was able to achieve this goal and gain some transferable skills.',
        },
      ],
    },
    {
      title: 'Job Description',
      content:
        'For my time as a Software Developer on NCR D3 Digital Banking team, I worked on the UI/UX design aspect of the web banking software using React and TypeScript. I attended daily scrum meetings, sprint planning, end of sprint demos and sprint retrospectives to ensure deadlines and quality goals were met for clients. I collaborated with my mentor and other developers to complete tickets. I talked with other team members, asking for help and clarification to gain insight on different aspects of the banking app. For most of my tickets, I implemented fixes and features for functions and React components with corresponding unit tests using Jest. With React and Redux, I learnt about states and hooks which helped me implement scalable code. Some tickets had me change configurations and implement new changes that updated the GitHub Actions pipeline for the project. I contributed to the codebase with over 50 pull requests consisting of fixes, refactors and features for several releases of the web banking application.',
    },
    {
      title: 'Conclusions',
      content:
        'My time at NCR was a great learning experience and helped push me to become a better developer. I had learnt a great deal about React with TypeScript and agile software development. Collaborating with my team helped me understand UI/UX design and useful coding practices. I was able to gain new insight on app development and continuous integration and deployment strategies. Scalability was important for development and made me understand how unit tests should be implemented, and how Redux states work to achieve that with large-scale projects. I gained a lot of new insight and understanding of industry software development and will be able to transfer a lot of these new skills for future endeavors.',
    },
    {
      title: 'Acknowledgements',
      content:
        'I would like to thank my mentor Jagruti, my supervisors Mala and Kim, and the rest of the D3 Team for being so supportive and encouraging of my growth for this term. I would also like to give a special thanks to Frederica Goodman for giving me the opportunity to work at NCR.',
    },
  ],
};

export const report3 = {
  header: 'Co-op Work Term 3',
  subtitle: 'TD Bank Group, MBNA',
  images: [
    {
      href: 'https://www.td.com/',
      src: '/td_logo.png',
      name: 'TD Bank Logo',
    },
    {
      href: 'https://www.mbna.ca/',
      src: '/mbna_logo.jpg',
      name: 'MBNA Logo',
    },
  ],
  sections: [
    {
      title: 'Abstract/Introduction',
      content:
        'In the summer of 2022, I was given the opportunity to join TD as a Software Engineer Intern. I was placed within TD’s Platform and Technology team’s Credit Card Product Group, working on the MBNA online banking application for credit card servicing. I was able to partake in the agile scale methodology environment within my POD (Product Oriented Delivery) team. This report will go over the necessary information about the employer, my achieved goals, and the job description.',
    },
    {
      title: 'Information About TD',
      content:
        'Toronto-Dominion Bank (TD), is a Canadian multinational banking and financial services corporation. TD offers its products and services to over 26 million people worldwide. The Credit Card Product Group is responsible for managing all servicing tools across all channels for credit cards to handle all of the customer’s day to day interactions with TD. MBNA is a division of TD and a leading provider of co-branded and affinity credit card programs in Canada. MBNA credit cards are associated with hundreds of Canadian membership organizations, credit union and financial institutions, sports associations, educational institutions and charities.',
    },
    {
      title: 'Goals',
      children: [
        {
          title: 'Breath & Depth of Understanding',
          subtitle: 'Expand my insight of full-stack and backend development.',
          icons: [
            { name: 'Laptop Code', class: 'fas fa-laptop-code fa-5x' },
            { name: 'Code Branch', class: 'fas fa-code-branch fa-5x' },
          ],
          content:
            'I wanted to expand my knowledge of the stack used within my team to gain more insight on full-stack and backend development. This goal allowed me to explore the different technologies and frameworks within the stack as well as broadening my current understanding of what languages are being actively used. I began by understanding the underlying codebase of the application’s UI and the Java backend. This was followed by making contributions to tasks and code reviews. I was also able to consult the quality and performance of code. By the end of the term, I had a good general understanding of the underlying technologies that power the application my team works on. My code reviews were effective and I didn’t have to spend so much time on the syntax of a language due to that broadened understanding.',
        },
        {
          title: 'Creativity',
          subtitle:
            'Become integrated within the large scale agile methodology environment.',
          icons: [
            { name: 'Handshake', class: 'fas fa-handshake fa-5x' },
            { name: 'Industry', class: 'fas fa-industry fa-5x' },
          ],
          content:
            'I wanted to become integrated and adaptive to the agile methodology environment used at my work. By being able to adapt to these kinds of environments within TD, it will help me become more integrated within this industry as a whole. To take action, I made sure to participate in all of the agile processes within my POD, including daily sprints, retrospectives and planning. I believe taking these steps helped in painting a bigger picture of how these environments work within the industry. I noticed progression in achieving this goal as I became more comfortable with the agile processes and was able to make progression with my tasks.',
        },
        {
          title: 'Oral Communication',
          subtitle: 'Enhance my ability at articulating thoughts.',
          icons: [
            { name: 'Comments', class: 'far fa-comments fa-5x' },
            { name: 'Presentation', class: 'fas fa-microphone fa-5x' },
          ],
          content:
            'I wanted to enhance my ability at articulating ideas and issues by observing and understanding how others articulate their thoughts. This was a very important goal because it allowed me to effectively communicate my thoughts and improve the quality of work that I submit. For starters, I participated in agile processes to also observe how other team members communicated their progress in tickets. I also practiced before sprints to make sure I could communicate my thoughts effectively during said meetings. Finally, I reached out to team members to assist with tickets and give insightful code reviews. My success in this goal was shown by my ability to articulate my thoughts into meaningful conversations that improved my quality of work. My communication with others allowed for less miscommunication or confusion that would have otherwise occurred due to ideas not being fully realized.',
        },
      ],
    },
    {
      title: 'Job Description',
      content:
        'For my time as a Software Engineer Intern on the MBNA Online Banking team at TD, I worked on improving the Java backend’s performance and some full-stack tasks. I attended daily sprint meetings, sprint plannings, retrospectives and demos. I collaborated with my team members and my manager to clarify any issues that I had. I was able to gain insight on the underlying structure of the application through my conversations and code reviews with team members. I learnt about optimizing Java code to improve performance of the application’s services and consulted the quality of code. I participated in code reviews which helped me gain an understanding of what is good and bad code.',
    },
    {
      title: 'Conclusions',
      content:
        'My time at TD was a big step for me learning-wise and had me thinking of new ways to improve myself as a developer. I learnt a lot about backend and some full-stack development. Collaborating with my team in agile processes and code reviews definitely improved my communication and adaptive skills. I was able to gain new insights of application development and the bigger picture of industry development since TD is a larger organization than previous ones that I worked at. A lot of these new insights and skills will be key to my growth as a developer and for new experiences.',
    },
    {
      title: 'Acknowledgements',
      content:
        'I would like to thank the MBNA Online Banking team and my manager, Steven, for being supportive of me during this term and helping expand my skills to new areas. I would also like to thank TD for giving me this amazing opportunity.',
    },
  ],
};

export const reports = [
  { name: 'Work Term 1', content: report1 },
  { name: 'Work Term 2', content: report2 },
  { name: 'Work Term 3', content: report3 },
];
