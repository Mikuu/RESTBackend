db.createUser({
    user: "ariman",
    pwd: "P@ssword1",
    roles: [
        {
            role: "readWrite",
            db: "restabase",
        },
    ],
});