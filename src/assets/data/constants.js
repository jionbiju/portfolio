import project_img1 from '../project1.png'
import project_img2 from '../project_2.png'
import project_img3 from '../project_3.webp'


export const skills = [
    {
        title: "Frontend",
        skills: [
            {
                name: "HTML",
                image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
            },
            {
                name: "CSS",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
            },
            {
                name: "JavaScript",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
            },
            {
                name: "Bootstrap",
                image:
                    "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
            },
            {
                name: "React JS",
                image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
            },
        ]
    },
    {
        title: "Backend",
        skills: [
            {
                name: "Node Js",
                image: "https://img.icons8.com/win10/512/FFFFFF/node-js.png",
            },
            {
                name: "Express Js",
                image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVmXTRybjWV4i9IV85_D7GtvdrJtzYHe8kn5KnJudvtK-OYhpqwTP-2aDiWyKrZvkEtE&usqp=CAU",
            },
            {
                name: "MongoDB",
                image:
                    "https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg",
            },
            {
                name: "Firebase",
                image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
            },
        ]
    },
    {
        title:"Others",
        skills:[
             {
        name: "Git",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGp2RKrzqJF2Cu3dxnk2RGK_F7SSloJG-Wyw&s",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Netlify",
        image:
          "https://w7.pngwing.com/pngs/80/196/png-transparent-netlify-hd-logo-thumbnail.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png",
      },
        ]
    }
]


export const projects = [
    {
        w_no:1,
        w_name:"Background Remover",
        w_img:project_img1,
        w_details:"The Background Remover tool is a web application that allows users to remove backgrounds from images with ease. It uses advanced image processing techniques to isolate the main subject of an image and remove the background, providing a clean and professional look.",
        w_tech:["React JS","Tailwind CSS", "Node JS", "Express JS", "MongoDB"],
        w_github:"https://github.com/jionbiju/background_remover"

    },
    {
        w_no:2,
        w_name:"Medical Store Management System",
        w_img:project_img2,
        w_details:"This application helps manage medicines efficiently by allowing users to add, search, sort, update, and delete medicines while tracking stock levels and expiry dates through a modern and responsive UI.",
        w_tech:["React JS", "Node JS", "Express JS", "MongoDB"],
        w_github:"https://github.com/jionbiju/medical-store-management-system"

    },
    {
        w_no:3,
        w_name:"IoT-Face-Recognition-Attendance-System (on-going)",
        w_img:project_img3,
        w_details:"The IoT-Face-Recognition-Attendance-System is a web application that uses face recognition technology to automate attendance tracking. It integrates with IoT devices to capture facial data and logs attendance in real-time.",
        w_tech:["Python","Flask","HTML5", "Bootstrap", "JavaScript", "SQLite"],
        w_github:"https://github.com/jionbiju/IoT-Face-Recognition-Attendance-System"
    }
]
 
