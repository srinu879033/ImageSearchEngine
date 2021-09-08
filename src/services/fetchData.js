const Client_ID = "aLe4UlFcWASvI_Y4MSswFT2GAlKt68F9Ik5locbCCS4";
const query = "tiger";
const fetchData = async () => {
  const resp = await fetch(
    `https://api.unsplash.com/search/users?page=1&query=elephant`,
    {
      headers: {
        Authorization: `Client-ID ${Client_ID} `,
      },
    }
  );
  const data = await resp.json();
  console.log(data);
};

export default fetchData;
