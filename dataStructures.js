


// Level 3


const user = {
    name: "Elie",
    job: "Instructor",
    workDetails: {
        type: "Part Time",
        hours: "40 hours"
    },
    educationQualifications: [
        {
            name: "Full Stack",
            type: "Certification"
        },
        {
            name: "Javascript",
            type: "Certification"
        }
    ]
}

const convert = newUser => {
    for(let key in newUser){
        if(!newUser[key] && typeof newUser[key] === "object"){
            convert(newUser[key])
        }
        if(!newUser[key] && typeof newUser[key] === "string"){
            newUser[key] = newUser[key].toUpperCase()
        }
    }
}

let res = convert(user)

console.log(res)