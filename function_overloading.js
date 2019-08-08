function details() {
    var users = [
        {
            id: 1,
            name: "Amita",
            email: "a@gmail.com",
            avl: false
        },
        {
            id: 2,
            name: "Neha",
            email: "n@gmail.com",
            avl: true
        },
        {
            id: 3,
            name: "Seema",
            email: "p@gmail.com",
            avl: true
        },
        {
            id: 4,
            name: "jjjjjj",
            email: "j@gmail.com",
            avl: false
        },
    ];
    return users;
}
;
function getInput(returnValue) {
    var userDetails = details();
    var storeValueOfOutput = [];
    if (typeof returnValue == 'string') {
        for (var _i = 0, userDetails_1 = userDetails; _i < userDetails_1.length; _i++) {
            var uD = userDetails_1[_i];
            if (uD.avl) {
                storeValueOfOutput.push(uD.id.toString(), uD.email);
                break;
            }
        }
    }
    else if (typeof returnValue == 'boolean') {
        for (var _a = 0, userDetails_2 = userDetails; _a < userDetails_2.length; _a++) {
            var uD = userDetails_2[_a];
            if (uD.avl) {
                storeValueOfOutput.push(uD.name);
                break;
            }
        }
    }
    else {
        console.log("No such Value");
    }
    console.log(storeValueOfOutput);
    return storeValueOfOutput;
}
getInput("jjjjjj");
