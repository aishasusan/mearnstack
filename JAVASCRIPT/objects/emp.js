//find all emp desig=developer
//find all emp who worked in 1990s
//find emp expe>10

var employ = [
    { id: 100, name: "arun", desig: "developer", join: 1989, resign: 2005 },
    { id: 101, name: "ram", desig: "developer", join: 1990, resign: 2005 },
    { id: 102, name: "rahul", desig: "hr", join: 1991, resign: 1998 },
    { id: 103, name: "sam", desig: "engg", join: 1995, resign: 2005 }
]

for (let emp of employ) {
    if (emp["desig"] == "developer") {
        console.log(emp);
    }
}


for (let emp of employ) {
    if ((emp["join"] > 1989) & (emp["resign"] < 2000)) {
        console.log(emp);
    }
}



for (let emp of employ) {
    if (emp["resign"] - emp["join"] >= 10) {
        console.log(emp);
    }
}
