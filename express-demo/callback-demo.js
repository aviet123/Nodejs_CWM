console.log('Before');
getUser(1, (user)=>{
    console.log('User', user);

    getAll(user.name, (repos)=> {
        console.log(repos);
    })
});
console.log('After');


function getUser(id, callback) {
    setTimeout(()=>{
        console.log('reading user from database');
        callback({ id: id, name:'viet'})
    })
}

function getAll(username, callback) {
    setTimeout(()=>{
        console.log('calling api.....');
        callback(['repo1','repo2','repo3'])
    },2000);
}