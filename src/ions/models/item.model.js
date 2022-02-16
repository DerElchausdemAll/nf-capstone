import mongoose from "mongoose";

const Schema = new mongoose.Schema({
	title: String,
	details: String,
	userId: String,
	postalCode: String,
	image: String,
	category: String,
	checked: Boolean,
});

export default mongoose.models.Item || mongoose.model("Item", Schema);
