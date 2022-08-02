import * as adapter from '../adapter/user.js';

async function getUsers(context) {
	const { id } = context.params;
	const result = await adapter.getUsers(id);
	return result;
}

async function saveUser(context) {
	const user = await context.body;
	const result = await adapter.saveUser(user);
	return result;
}

async function updateUser(context) {
	const user = await context.body;
	const { id } = context.params;
	const result = await adapter.updateUser(id, user);
	return result;
}

async function deleteUser(context) {
	const { id } = context.params;
	const result = await adapter.deleteUser(id);
	return result;
}

export { getUsers, saveUser, updateUser, deleteUser };