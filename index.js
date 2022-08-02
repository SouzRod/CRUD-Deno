import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";
import router from "./router.js";

const app = new Application();

router(app);

console.log("http://localhost:3000/");
app.start({ port: 3000 });