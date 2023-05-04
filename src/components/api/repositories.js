import axios from "axios";

export const userRepositories = async (user) =>
  await axios.get(`https://api.github.com/users/${user}/repos?page=1&per_page=6&sort=updated`);
