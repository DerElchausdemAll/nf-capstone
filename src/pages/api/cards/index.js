import Item from "../../../ions/models/item.model";
import dbConnect from "../../../ions/database/index";

const handler = async (request, responseponse) => {
	const { method } = request;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const mongoresponseponse = await Item.find();
				responseponse.status(200).json(mongoresponseponse);
			} catch (err) {
				console.log(err);
			}
			break;

		case "POST":
			try {
				console.log(request.body);
				const mongoresponseponse = await Item.create(request.body);
				responseponse.status(201).json(mongoresponseponse);
			} catch (err) {
				console.log(err);
			}
			break;

		default:
			responseponse.status(404).send("not found");
	}
};

export default handler;
