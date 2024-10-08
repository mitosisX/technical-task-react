import axios from "./axiosConfig";

export async function loginUser(username, password) {
  try {
    let response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/admin/login`,
      {
        username,
        password,
      }
    );
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function logout(token) {
  try {
    const authToken = token;

    let response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/admin/logout`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function fetchUserFittings(token) {
  try {
    const authToken = token;

    let response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/consumer/fittings`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function fetchUserProfiles(token) {
  try {
    const authToken = token;

    let response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/admin/profiles`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function fetchMyProfile(token) {
  try {
    const authToken = token;

    let response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/consumer/profile`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function scheduleFitting(data, token) {
  try {
    const authToken = token;

    let response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/consumer/schedule-fitting`,
      data,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);

    // return error;
  }
}
