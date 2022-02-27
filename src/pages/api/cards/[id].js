import Item from "../../../ions/models/item.model";
import dbConnect from "../../../ions/database/index";
import { getSession } from "next-auth/react";

const handler = async (request, response) => {
	const {
		query: { id },
		method,
	} = request;
	const session = await getSession({ req: request });
	console.log(session);

	await dbConnect();

	switch (method) {
		case "GET" /* Get a model by its ID */:
			try {
				const item = await Item.findById(id);
				if (item) {
					response.status(200).json(item);
				}
				response.status(404).send("item not found");
			} catch (error) {
				response.status(400).json({ success: false });
			}
			break;

		case "PUT" /* Edit a model by its ID */:
			try {
				const item = await Item.findByIdAndUpdate(id, request.body, {
					new: true,
					runValidators: true,
				});
				if (!item) {
					return response.status(400).json({ success: false });
				}
				response.status(200).json({ success: true, data: item });
			} catch (error) {
				response.status(400).json({ success: false });
			}
			break;

		case "DELETE" /* Delete a model by its ID */:
			if (!session) {
				response.status(401).send("Not authorized");
			} else
				try {
					const deletedItem = await Item.deleteOne({ _id: id });
					if (!deletedItem) {
						return response.status(400).json({ success: false });
					}
					response.status(200).json({ success: true, data: {} });
				} catch (error) {
					response.status(400).json({ success: false });
				}
			break;

		default:
			response.status(404).send("not found");
	}
};

export default handler;
