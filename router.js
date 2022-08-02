import { getUsers, saveUser, updateUser, deleteUser } from "./src/controller/user.js";

export default function router(app) {
	app.get('/users', getUsers);
	app.get('/user/:id', getUsers);
	app.post('/user', saveUser);
	app.put('/user/:id', updateUser);
	app.delete('/user/:id', deleteUser);
}