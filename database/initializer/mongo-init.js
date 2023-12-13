db.createUser({
    user: "ariman",
    pwd: "Password1",
    roles: [
        {
            role: "readWrite",
            db: "restabase",
        },
    ],
});