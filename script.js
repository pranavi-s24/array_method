const people = [
    [
        principal = "Joseph Morgan",
        supervisor = "Danielle Gillies",
        teacher = ["Emilia Clarke","Brandon Stark","Tyrion Lannister"],
        students = ["Elena","Bonnie","Caroline"]
    ],
    [
        principal = "Freya Mikealson",
        supervisor = "Phoebe tonkin",
        teacher = ["Kit Harington","Arya Stark","Hodor Petrova"],
        students = ["Stefan","Damon","Katherine"]
    ],
    [
        principal = "Alaric Saltzman",
        supervisor = "Mattew Davis",
        teacher = ["Sophie Turner","Marcel Gerard","Joshua"],
        students = ["Hope","Lizzie","Josie"]
    ],
    [
        principal = "Kol Caleb",
        supervisor = "Natanielle Buzz",
        teacher = ["Maize Williams","Cersei Lannister","Michael Wheeler"],
        students = ["Hayley","Rebecca","Davina"]
    ],
    [
        principal = "Henry Marshall",
        supervisor = "Paul Weasely",
        teacher = ["Peter Dinklage","Steve Harington","Nancy Wheeler"],
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
}

