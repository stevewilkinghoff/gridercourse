// setup sub-document (recipient) to sub-doc of Survey

const mongoose = require('mongoose');
const { Schema } = mongoose;


// Define Schema
const recipientSchema = new Schema ({
    email: String,
    responded: { type:Boolean, default:false }
    });

// export instead of creating model in mongoose since it's a sub-doc
module.exports = recipientSchema;
