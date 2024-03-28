const strings = {
  AboutBlock: {
    title: "What's Oasis?",
    body: "Oasis is an eight-week program that helps students learn to build their first website or app, no experience required! To do this, we pair you with a team and a mentor, and teach you the skills you need through Hack Sessions every Sunday. At each Hack Session you receive a 30-minute workshop, and then spend 90 minutes with your team building your project.",
  },
  ContactBlock: {
    title: "Contact Us!",
    headline: "Send us a message!",
    body: "Have a question we haven't managed to answer? Have a proposition you want us to take a look at? Either send us an ",
  },
  Eboard: {
    title: "Our Team",
    members: [
      {
        name: "Frank Anderson",
        role: "Co-Director",
        src: "https://media.licdn.com/dms/image/C5603AQE4cFVm1SqYVA/profile-displayphoto-shrink_400_400/0/1619473083418?e=1700092800&v=beta&t=WnKuyLAPoBaeV2PG-en4RHNrBYekShjrYpqUvi_NxAM",
      },
      {
        name: "Sama Zaki",
        role: "Co-Director",
        src: "https://media.licdn.com/dms/image/D4E03AQE5J8ppdIAqvg/profile-displayphoto-shrink_400_400/0/1674609169174?e=1694044800&v=beta&t=Fw40zg0EdBV7q0mxy2xTJ9Cer-9kcrZgy_rwcSKJymg",
      },
      {
        name: "Rei Masuya",
        role: "Brand Designer",
        src: "https://media.licdn.com/dms/image/C4D03AQGGDCMyVe9oaw/profile-displayphoto-shrink_400_400/0/1663201359913?e=1694044800&v=beta&t=WdDVU2dnzr3UrQekk7hhTSruSjcS4BuuDX17yteweVk",
      },
      {
        name: "Allen Lin",
        role: "Mentor Lead",
        src: "https://media.licdn.com/dms/image/D4E03AQG-mtpC03TCYQ/profile-displayphoto-shrink_400_400/0/1673326565124?e=1694044800&v=beta&t=XC00zLk6FzYOcqTk3IFlRJOLFU6X8wE8jNvCFwQaDW4",
      },
      {
        name: "Laith Taher",
        role: "Events Director",
        src: "https://media.licdn.com/dms/image/D4E03AQECes9egjScKw/profile-displayphoto-shrink_400_400/0/1668552656586?e=1694044800&v=beta&t=LNNNVXFMaGa36fNqeW0T5PJ7H2Mtwl_QfpEPkCGEQzA",
      },
      {
        name: "Caitlin Flynn",
        role: "Operations Director",
        src: "https://media.licdn.com/dms/image/D5603AQFRJFAPnl4Ntg/profile-displayphoto-shrink_400_400/0/1675653304238?e=1694044800&v=beta&t=WzXPo7CSkjXQEDn6nefxmSwhLQo6HIlIKHVfla2SrTI",
      },
      { name: "Isha Chadalavada", role: "Marketing Director", src: "" },
    ],
  },
  EnrollmentTimeline: {
    title: "Enrollment Timeline",
    body: "Each semester we welcome a new cohort of students. We are limited in how many students we can accept due to a limited number of available mentors. This process is subject to change each semester, but this is the typical series of events.",
    headline:
      "Acceptance is is first-come-first-serve; it is not based on your technical experience or background.",
    steps: [
      {
        num: "1",
        tag: "Info Session",
        time: "1st Sunday of the semester",
        desc: "Learn more about what Oasis is, our Hack Session timeline, new changes for this year, and meet our Eboard.",
      },
      {
        num: "2",
        tag: "Hack Sessions 0 & 1",
        time: "Sundays following Info Session",
        desc: "Join us for Hack Sessions 0 and 1 where we'll introduce essential skills and give you opportunities to meet other prospective participants so you can form a group and decide on an idea.",
      },
      {
        num: "3",
        tag: "Registration & Confirmation",
        time: "Following Hack Session 1",
        desc: "After Hack Session 1 registration will open. Fill out the form quickly when it comes out, it's first-come-first-serve! A few days following registration, you'll receive a confirmation form to complete if you've been offered a spot.",
      },
      {
        num: "4",
        tag: "Hack Sessions begin",
        time: "3rd Sunday of the Semester",
        desc: "Once the enrollment process is complete weekly Sunday Hack Sessions begin. Unfortunately, attendance at Hack Sessions is restricted to accepted students only. For students still looking to get involved, we host Explorer Events which are open to all.",
      },
    ],
  },
  FeaturedProjects: {
    title: "Featured Projects",
    button: "See All Projects",
    projects: [
      {
        title: "How Busy is Marino",
        desc: "Rollup Marino activity over time into graphical predictions for future capacity at Marino!",
        link: "https://www.notion.so/How-Busy-Is-Marino-806c07c8bcd142219a01f88015b67497?pvs=4",
        src: "/images/Projects/HowBusyIsMarino.png",
        width: 874,
        height: 308,
      },
      {
        title: "Roomie Hub",
        desc: "The essential tool to track chores, groceries, schedules, and more with your roommate!",
        link: "https://www.notion.so/Roomie-Hub-664267296b84424a97e18944eadf74d4?pvs=4",
        src: "/images/Projects/RoomieHub.png",
        width: 1670,
        height: 1214,
      },
      {
        title: "TransitNU",
        desc: "Help students track the locations of MBTA trains in and around Boston using their API.",
        link: "https://www.notion.so/TransitNU-37f3b4ed2c8c48a6b8b57d309c5480d1?pvs=4",
        src: "/images/Projects/TransitNU.png",
        width: 506,
        height: 434,
      },
    ],
  },
  Footer: {
    links: [
      { title: "Home", dest: "/" },
      { title: "About", dest: "/about" },
      { title: "Join", dest: "/join" },
      { title: "Mentor", dest: "/mentor" },
      { title: "Resources", dest: "/resources" },
      { title: "Contact", dest: "/contact" },
    ],
  },
  HackSessionTimeline: {
    title: "Session by Session",
    days: [
      { num: "0", date: "1/21", hook: "Ideation & Design" },
      { num: "1", date: "1/28", hook: "Git & Web Basics" },
      { num: "2", date: "2/4", hook: "React Essentials" },
      { num: "3", date: "2/11", hook: "Databases" },
      { num: "4", date: "2/25", hook: "Styling" },
      { num: "5", date: "3/10", hook: "APIs" },
      { num: "6", date: "3/17", hook: "Authentication" },
      { num: "7", date: "3/24", hook: "Co-op Panel" },
      { num: "8", date: "3/31", hook: "Deployment & Presenting" },
      { num: "D", date: "4/7", hook: "Demo Day!" },
    ],
  },
  HistoryBlock: {
    title: "History",
    body: "Oasis was founded in the Fall of 2020 as a Sandbox program. Originally it was a series of virtual workshops and a network of mentors and project groups to help each other out. Over time, it's evolved into the project accelerator and larger organization it is today and became an independent club in Spring 2023.",
  },
  Hook: {
    tagline: "Ready to make your ideas reality?",
  },
  ImageParagraph: {},
  JoinFaqQuestion: {},
  JoinFaqs: {
    questions: [
      {
        q: "How do you assess applications?",
        a: "We don't assess them in the traditional sense. We pride ourselves on being open to students from all backgrounds and experience levels, so our application is first-come first-serve to keep it simple and fair for everybody.",
      },
      {
        q: "How many students are in a normal cohort?",
        a: "A typical semester is roughly 80 students. We target 10 mentors each semester, and each mentor works with two groups of four students each.",
      },
      {
        q: "Do I have to be at the Info Session?",
        a: "Sort of. We don't require you come to the Info Session, but we would like to warn that it's highly unlikely you'll be able to reserve a spot if you're not because students apply as a group and we facilitate finding a group during both the Info Session and Hack Session 1.",
      },
      {
        q: "What technologies and languages will I alearn with Oasis?",
        a: "At a minimum, you'll learn how to use React, Git, and Supabase. In addition, you'll learn the theory behind these technologies and some project management skills, as well as anything else relevant to your group's specific project. More generally, you'll learn to research complex problems and seek out your own solutions for future projects of your own.",
      },
      {
        q: "What is the expected weekly time commitment?",
        a: "We require that all students be present at each Sunday at the two-hour Hack Sessions. You're welcome to work on your project outside of that team if you would like, but it's not expected. ",
      },
    ],
  },
  Logo: {},
  MentorBlock: {
    title: "Mentor",
    body: "Mentors are the life-blood of Oasis. Without them we cannot run the Project Series or our Explorer events. You'll guide two groups from brainstorming through delivery by teaching them how to research technologies relevant to their project, how to weigh options between features based on deadlines, and you'll help them debug as issues crop up. Mentors are the ones teach participants how to learn the skills they need to bring their projects to life! \nIf you've completed a co-op and are free from 12-2pm on Sundays, then you're ready to mentor.",
    points: [
      {
        title: "Why",
        tagline:
          "Introduce students to computer science by teaching participants how to learn the skills they need to bring their projects to life!",
      },
      {
        title: "What",
        tagline:
          "Every Sunday from 12-2pm, mentors work with two teams of four students each to guide them through their making first web apps.",
      },
      {
        title: "Who",
        tagline:
          "Any Northeastern student who has started at least one computer science co-op. Both graduate and undergraduate students are welcome!",
      },
      {
        title: "How",
        tagline:
          "A low-commitment chance to mentor students and help them turn their ideas into reality!",
      },
    ],
  },
  MissionBlock: {},
  NavBar: {
    destinations: [
      { name: "Home", link: "/" },
      // { name: "About", link: "/about" },
      { name: "Project Series", link: "/join" },
      { name: "Explorer Series", link: "/explorer" },
      { name: "Mentor", link: "/mentor" },
      {
        name: "Resources",
        link: "/resources",
        target: "_blank",
      },
      // { name: "Contact", link: "/contact" },
    ],
  },
  OasisNumbers: {
    title: "By the Numbers",
    stats: [
      { count: 72, content: "Total Oasis Projects" },
      { count: 272, content: "Total Oasis Participants" },
      { count: 44, content: "Participants this Semester" },
      { count: 12, content: "Projects this Semester" },
    ],
  },
  OasisTypewriter: {},
  PageWrapper: {},
  Unsubscribe: {
    instruction: "Enter your email to unsubscribe from our mailing list.",
    confirmation: "You've been successfully unsubscribed.",
  },
  Sock: {
    title: "Join our mailing list!",
    body: "Sign up to get the latest updates on Oasis, including application dates for both mentors and participants.",
    call: "Enter your email:",
  },
  WhyJoin: {
    title: "Why join?",
    tagline:
      "With support from our mentors, your group, and the Oasis community, bring your software idea to life.",
  },
  Series: {
    project: "Project Series",
    projectBody:
      "A semester-long curriculum to help you build your first full-stack project!",
    projectSecondary: "Join the cohort at the start of each semester.",
    projectButton: "Join the cohort!",
    explorer: "Explorer Series",
    explorerBody: "Workshops, employer events, networking, and more!",
    explorerSecondary: "Open to all, no application required.",
    explorerButton: "Find the next event!",
  },
};

export default strings;
