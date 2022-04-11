
// level 3

const getUsers = async users => {
    const new_users = []
    for(let user of users){
        const {id = ""} = await users[user]
        new_users.push(id)
    }
    return new_users;
}
