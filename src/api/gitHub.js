import axios from "axios";

export function getRepositoryData(repository) {
  return axios.get(`https://api.github.com/repos/${repository}`);
}
