import { H3Event } from "h3";

export const verify = (event: H3Event) => {
  const { authorization } = event.req.headers;
  let authorized = true;
  if (process.env.NODE_ENV !== "development" && authorization !== `Bearer ${useRuntimeConfig().API_SECRET_KEY}`) {
    event.res.statusCode = 401;
    authorized = false;
  }
  return authorized;
};
