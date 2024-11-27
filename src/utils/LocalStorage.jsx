
const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    name: "Rajesh Kumar",  // Indian first name
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 1A",
        description: "Description for Task 1A",
        date: "2024-11-01",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 1B",
        description: "Description for Task 1B",
        date: "2024-10-20",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Task 1C",
        description: "Description for Task 1C",
        date: "2024-10-15",
        category: "Maintenance",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    name: "Priya Sharma",  // Indian first name
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 2A",
        description: "Description for Task 2A",
        date: "2024-11-02",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        title: "Task 2B",
        description: "Description for Task 2B",
        date: "2024-10-25",
        category: "Research",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 2C",
        description: "Description for Task 2C",
        date: "2024-10-10",
        category: "Documentation",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    name: "Amit Verma",  // Indian first name
    taskCount: {
      active: 2,
      newTask: 5,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 3A",
        description: "Description for Task 3A",
        date: "2024-11-03",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 3B",
        description: "Description for Task 3B",
        date: "2024-10-18",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        title: "Task 3C",
        description: "Description for Task 3C",
        date: "2024-10-22",
        category: "Testing",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    name: "Neha Gupta",  // Indian first name
    taskCount: {
      active: 2,
      newTask: 0,
      completed: 1,
      failed: 7,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 4A",
        description: "Description for Task 4A",
        date: "2024-11-04",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Task 4B",
        description: "Description for Task 4B",
        date: "2024-10-30",
        category: "Sales",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 4C",
        description: "Description for Task 4C",
        date: "2024-10-15",
        category: "Research",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    name: "Suresh Yadav",  // Indian first name
    taskCount: {
      active: 2,
      newTask: 4,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 5A",
        description: "Description for Task 5A",
        date: "2024-11-05",
        category: "Support",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 5B",
        description: "Description for Task 5B",
        date: "2024-10-28",
        category: "Maintenance",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Task 5C",
        description: "Description for Task 5C",
        date: "2024-10-12",
        category: "Testing",
      },
    ],
  },
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () =>{
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))

return {employees,admin}  
}