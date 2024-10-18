import { Hono } from "hono";
import user from "./routes/user";
import { FC } from "hono/jsx";

const app = new Hono();

const Top: FC<{ messages: string[] }> = (props: {
  messages: string[];
}) => {
  return (
    <>
      <h1>Hello Hono!</h1>
      <ul>
        {props.messages.map((message) => {
          return <li>{message}!!</li>;
        })}
      </ul>
    </>
  );
};

app.get("/", (c) => {
  const messages = ["Good Morning", "Good Evening", "Good Night"];
  return c.html(<Top messages={messages} />);
});

app.route("/user", user);
export default app;
