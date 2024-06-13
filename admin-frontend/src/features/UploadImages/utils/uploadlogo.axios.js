import axios from "axios";
import { ALL_URLS } from "../../../utils/constants.js";

export const createUploadLogoLink = async (formData) => {
  try {
    const { data } = await axios.post(ALL_URLS.uploadLogo, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  } catch (error) {
    return error;
  }
};

export const uploadLogo = async (url, image) => {
  try {
    const data = await axios.put(url, image, {
      headers: { "Content-Type": "image/jpeg" },
    });

    return data;
  } catch (error) {
    return error;
  }
};
