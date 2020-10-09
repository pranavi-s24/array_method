const people = [
    [
        principal = "Joseph Morgan",
        supervisor = "Danielle Gillies",
        teacher = "Emilia Clarke",
        students = ["Elena","Bonnie","Caroline"]
    ],
    [
        principal = "Joseph Morgan",
        supervisor = "Phoebe tonkin",
        teacher = "Kit Harington",
        students = ["Stefan","Damon","Katherine"]
    ],
    [
        principal = "Joseph Morgan",
        supervisor = "Mattew Davis",
        teacher = "Sophie Turner",
        students = ["Hope","Lizzie","Josie"]
    ],
    [
        principal = "Joseph Morgan",
        supervisor = "Natanielle Buzz",
        teacher = "Maize Williams",

        students = ["Hayley","Rebecca","Davina"]
    ],
    [
        principal = "Joseph Morgan",
        supervisor = "Paul Weasely",
        teacher = "Peter Dinklage",
        students = ["April","Matt","Tyler"]
    ]
];

function searchName() {
    let name = document.getElementById('student_name').value;
    for(let i=0; i<people.length; i++) {
       for(let k=0; k<people[i][3].length; k++) {
            if(people[i][3][k] == name) {
                document.getElementById("principal").innerHTML =  people[i][0];
                document.getElementById("supervisor").innerHTML =  people[i][1];
                document.getElementById("teacher").innerHTML =  people[i][2];
                document.getElementById("students").innerHTML =  people[i][3];
            }
        }
    }
};

