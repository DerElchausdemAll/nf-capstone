import Todo from "../../../ions/models/item.model";
import dbConnect from "../../../ions/database/index";

const handler = async (request, response) => {
	const { method } = request;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const mongoResponse = await Todo.find();
				response.status(200).json(mongoResponse);
			} catch (err) {
				console.log(err);
			}
			break;

		case "POST":
			try {
				console.log(request.body);
				const mongoResponse = await Todo.create(request.body);
				response.status(201).json(mongoResponse);
			} catch (err) {
				console.log(err);
			}
			break;

		// case "PUT":
		// 	try {
		// 		const { id } = request.params;
		// 		const mongoResponse = await Todo.findByIdAndUpdate(id, request.body, {
		// 			returnDocument: "after",
		// 		});
		// 		response.status(200);
		// 		response.send(mongoResponse);
		// 	} catch (err) {
		// 		console.log(err);
		// 	}

		default:
			response.status(404).send("not found");
	}
};

export default handler;
