import mongoose from "mongoose";

const Schema = new mongoose.Schema({
	title: String,
	details: String,
	postalCode: String,
	image: String,
	category: String,
	checked: Boolean,
	id: Number,
});

export default mongoose.models.Todo || mongoose.model("Todo", Schema);
