import Item from "../../../ions/models/item.model";
import dbConnect from "../../../ions/database/index";
import { getSession } from "next-auth/react";

const handler = async (request, response) => {
	const { method } = request;
	const session = await getSession({ req: request });
	console.log(session);

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
			if (!session) {
				response.status(401).send("Not authorized");
			}
			try {
				console.log(request.body);
				const mongoresponse = await Item.create({
					...request.body,
					userId: session.user.id,
				});
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
