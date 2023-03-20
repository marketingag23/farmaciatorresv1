export const TORRES_URL: string =
  "https://www.droguerialaeconomia.com/torres/api";

export const FetchApi = async (url = "", raw = {}) => {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    cache: "no-store", // *default, no-store, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(raw),
  });
  return response;
};
