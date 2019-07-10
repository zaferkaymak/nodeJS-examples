const userInfo = {
    id: 1,
    name: 'Mehmet',
    surname: 'Ali',
    age: 32
};
const userFriendList = [
    {
        id: 1,
        name: 'Ayşe',
        surname: 'Marul'
    },
    {
        id: 2,
        name: 'Ece',
        surname: 'Akan'
    }
];

const getUser = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(userInfo);
        },500);
    });
};

const getFriend = (userID) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(userFriendList);
        },1000);
    });
};

// Promise Chain
getUser()
    .then((user)=>{
        return getFriend(user.id);
    })
    .then((friend) => {
        // console.log(friend);
    }).catch((error) => {
        console.log(error);
    });

// Async Method
async function asycnFunction() {
    try {
        const user = await getUser();
        const friends = await getFriend(user.id);
        console.log(friends);
    }catch(error){
        console.log(error);
    }
}

asycnFunction();