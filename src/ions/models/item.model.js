import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
	// set by client
	name: String,

	// set by server
	isChecked: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
