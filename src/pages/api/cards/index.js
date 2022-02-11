import Item from "../../../ions/models/item.model";
import dbConnect from "../../../ions/database/index";

const handler = async (request, response) => {
	const { method } = request;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const mongoresponse = await Item.find();
				response.status(200).json(mongoresponse);
			} catch (err) {
				console.log(err);
			}
			break;

		case "POST":
			try {
				console.log(request.body);
				const mongoresponse = await Item.create(request.body);
				response.status(201).json(mongoresponse);
			} catch (err) {
				console.log(err);
			}
			break;

		default:
			response.status(404).send("not found");
	}
};

export default handler;
