import mongoose from "mongoose";

const Schema = new mongoose.Schema({
	name: String,
	email: String,
	image: String,
	emailVerified: Boolean,
});

export default mongoose.models.User || mongoose.model("User", Schema);
