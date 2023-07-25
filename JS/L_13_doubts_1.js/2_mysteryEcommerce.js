let users = [
    {
        name: "Rajneesh",
        age: 34,
        address: {
            local: "22 Alaknanda",
            city: "Dehradun",
            state: "UK",
        },
        orders: [{ id: 1, name: "GOT Book Series" }],
    },
    {
        name: "Bhavesh",
        age: 37,
        address: {
            local: "48 DT Row",
            city: "Hyderabad",
            state: "AP",
        },
    },
    {
        name: "Jasbir",
        age: 38,
        address: {
            local: "196 Lama Bhavan",
            city: "Gangtok",
            state: "Sikkim",
        },
        orders: [
            { id: 1, name: "Chair" },
            { id: 2, name: "PS5" },
        ],
    },
];

function updateUsers(userObject, item) {
    //write your code here
    for (let i = 0; i < users.length; i++) {
        let cUser = users[i];
        let flag = false;
        for (let key in cUser) {
            if (cUser[key] != userObject[key] && key != "orders") {
                flag = true;
            }
        }

        if (flag == false) {
            // i have found the user
            // if cuser -> oder that order -> retrun  order is present 

            if (cUser.orders == undefined) {
                cUser.orders = [{ id: 1, name: items }];

            } else {
                // add a property
                cUser.orders.push({ id: orders.length + 1, "name": items })
            }
            return users.orders;

        }
    }


    //  user does not exist 

    userObject.orders = [{ id: 1, name: item }];
    users.push(userObject);
    return users;

}

updateUsers(
    {
        name: "Rajneesh",
        age: 36,
        address: {
            local: "22 Alaknanda",
            city: "Dehradun",
            state: "UK",
        },
    },
    "GOT Book Series"
)


// updateUsers({
//     name: "Ravi",
//     age: 24,
//     address: {
//         local: "25 Iroda",
//         city: "Dehradun",
//         state: "UK",
//     },
// })

// updateUsers(
//     {
//         name: "Ravi",
//         age: 24,
//         address: {
//             local: "25 Iroda",
//             city: "Dehradun",
//             state: "UK",
//         },
//     },
//     "Chair"
// )