import axios from "axios";
import Item from "../../../ions/models/item.model";
import dbConnect from "../../../ions/database/index";
import User from "../../../ions/models/user.model";

const handler = async (request, response) => {
	const userId = request.query.userId;

	await dbConnect();

	try {
		const user = await User.findById(userId);
		if (user) {
			// user found. we have access to the user email

			try {
				// send the email to the user of the item

				// const formSubmitResponse = await axios.post(
				// 	`https://formsubmit.co/ajax/${user.email}`,
				// 	request.body
				// );

				axios.defaults.headers.post["Content-Type"] = "application/json";
				const formSubmitResponse = await axios.post(
					"https://formsubmit.co/ajax/jan.peter92@mail.de",
					{
						name: "FormSubmit",
						message: "I'm from Devro LABS",
					}
				);
				response.status(200).send({ success: true });
			} catch (err) {
				console.log(err);
				response.status(400).send("error");
			}
		} else {
			response.status(404).send("user not found");
		}
	} catch (error) {
		response.status(400).json({ success: false });
	}
};

export default handler;
