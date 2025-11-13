const logInInfo = [
    {
        userName: "yuval",
        password: "1234567",
    },
    {
        userName: "user1",
        password: "7654321",
    },
    {
        userName: "admin",
        password: "abcdefg",
    },
    {
        userName: "user2",
        password: "987654321",
    },
    {
        userName: "user3",
        password: "123456789",
    },
    {
        userName: "user4",
        password: "1223344556",
    },
];

const LogInForm = document.getElementById('LogInForm');
LogInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const submittedUserName = document.getElementById('LogInUserName');
    const submittedPassword = document.getElementById('LogInPassword');
    console.log(submittedUserName.value)
    console.log(submittedPassword.value)
    for (let i = 0; i < logInInfo.length; i++) {
        if (submittedUserName.value === logInInfo[i].userName) {
            if (submittedPassword.value === logInInfo[i].password) {
                console.log("correct password")
                window.location.href = "mainPage.html";
            };
        };
    };
});
