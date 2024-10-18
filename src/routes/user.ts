import { Hono } from "hono";

const user = new Hono();

user.get("/", (c) => c.text("List users")); // GET /user
user.get("/:id", (c) => {
  // GET /user/:id
  const id = c.req.param("id");
  return c.text("Get user: " + id);
});
user.post("/", (c) => c.text("Create user")); // POST /user

export default user;
