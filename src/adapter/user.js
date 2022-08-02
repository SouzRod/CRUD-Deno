import { User } from '../model/user.js';

async function getUsers(id = null) {
	try {
		if (id) {
			const user = await User.findById(id);
			return user;
		}
		const users = await User.find();
		return users;
	} catch (e) {
		throw new Error(e.message);
	}
}

async function saveUser(user) {
	try{
		const newUser = await User.insertOne(user);
		return `User ${newUser} created successfully`;
	} catch (e) {
		throw new Error(e.message);
	}
}

async function updateUser(id, user) {
	try {
		await User.findByIdAndUpdate(id, user);
		return `User ${id} updated successfully`
	} catch (e) {
		throw new error(e.message);
	}
}

async function deleteUser(id) {
	try {
		await User.findByIdAndDelete(id);
		return `User ${id} deleted successfully`
	} catch (e) {
		throw new error(e.message);
	}
}

export { getUsers, saveUser, updateUser, deleteUser };