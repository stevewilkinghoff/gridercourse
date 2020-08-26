module.exports = {
    googleClientID: '710430024344-k8970i1dvrabv4v9h6t8as4gvm4053eg.apps.googleusercontent.com',
    googleClientSecret: 'T0qL__kRqSn2amYJh0Qtb5_9',
    //mongoURI: 'mongodb+srv://SteveAdmin:M4ple5yrup@cluster0.zxeh9.mongodb.net/testdb?retryWrites=true&w=majority'
    mongoURI: 'mongodb://SteveAdmin:M4ple5yrup@cluster0-shard-00-00.zxeh9.mongodb.net:27017,cluster0-shard-00-01.zxeh9.mongodb.net:27017,cluster0-shard-00-02.zxeh9.mongodb.net:27017/testdb?ssl=true&replicaSet=atlas-3bgqq3-shard-0&authSource=admin&retryWrites=true&w=majority',

    cookieKey: 'cherrybanana' //note, just random typing of a string
}

//mongodb+srv://SteveAdmin:<password>@cluster0.zxeh9.mongodb.net/<dbname>?retryWrites=true&w=majority