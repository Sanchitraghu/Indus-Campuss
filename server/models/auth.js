import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required: true},
    Description: {type: String, required: true, default: "Edit your Description"},
    postedOn: {type: Date, default: Date.now}
})

export default mongoose.model("User",userSchema)