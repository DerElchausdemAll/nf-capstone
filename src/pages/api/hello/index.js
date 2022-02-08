import mongoose from "mongoose";
import process from "node:process";
import Todo from "../../../ions/models/item.model";

const uri = process.env.MONGODB_URI;

const connect = async uri => {
	if (!uri) {
		throw new Error("No uri was provided");
	}
	try {
		console.log("Connecting to MongoDB");
		await mongoose.connect(uri);
	} catch (error_) {
		console.error(error_);
	}
};

void connect(uri);

const handler = async (request, response) => {
	const mongoResponse = await Todo.find();
	response.status(200).json(mongoResponse);
};

export default handler;
