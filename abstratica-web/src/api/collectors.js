import axios from "axios";

export default async function getCollectorData() {
  // Logging the URL being used
  console.log("URL being used:", process.env.VUE_APP_COLLECTOR_DATA_API);

  const { data } = await axios.get(process.env.VUE_APP_COLLECTOR_DATA_API);
  return data;
}
