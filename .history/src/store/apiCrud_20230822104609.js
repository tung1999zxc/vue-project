export function getUsers = async () => {
    try {
      const response = await axios.post('https://api.tranhai.net/api/manufacturer/_search', {
        Page: 1,
        PageSize: 10,
      });