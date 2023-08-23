export const getApi = async (url: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
  };
  const res = await fetch(url, options);
  return await res.json();
};
