import axios from "axios"
import { GET_COUNTRIES } from "./endpoints"

interface Country {
  name: {
    official: String;
  };
}

export const getCountries = async (name: String): Promise<String[]> => {
  try {
    const { data } = await axios.get<Country[]>(GET_COUNTRIES(name));
    const countries = (data || []).map((item) => item?.name?.official);
    return countries;
  } catch (err) {
     return []
  }
};