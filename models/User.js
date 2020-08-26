const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define Schema
const userSchema = new Schema ({
    googleId: String
    });

// make sure mongoose creates a 'users' collection with the userSchema defined above
mongoose.model('users', userSchema);
