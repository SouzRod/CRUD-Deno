import dango from "../../db.js";

const userSchema = dango.schema({
  name: 'string',
  email: 'string',
  data_nasc: 'string'
});

const User = dango.model('User', userSchema);
export { User };