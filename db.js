import { dango } from "https://deno.land/x/dangodb@v1.0.2/mod.ts";

await dango.connect('mongodb://127.0.0.1:27017/users');

export default dango;