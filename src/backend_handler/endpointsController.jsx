import axios from "./axiosConfig";

export async function loginUser(email, password) {
  try {
    let response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/login`,
      {
        email,
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
      `${import.meta.env.VITE_API_URL}/api/logout`,
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

export async function fetchUserFittings(user_id, token) {
  try {
    const authToken = token;

    let response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/consumer/fitting/${user_id}`,
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

export async function fetchUserFittingsAdmin(token) {
  try {
    const authToken = token;

    let response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/admin/fitting`,
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

export async function fetchUserFittingProgress(fitting_id, token) {
  try {
    const authToken = token;

    let response = await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/api/consumer/fitting/progress/${fitting_id}`,
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

export async function fetchFittingCalendar(token) {
  try {
    const authToken = token;

    let response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/admin/fitting/calendar/view`,
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

export async function setFittingStatus(id, status, token) {
  try {
    const authToken = token;

    let response = await axios.patch(
      `${import.meta.env.VITE_API_URL}/api/admin/fitting/status/${id}`,
      { status },
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
      `${import.meta.env.VITE_API_URL}/api/admin/user/profiles`,
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

export async function fetchMyProfile(user_id, token) {
  try {
    const authToken = token;

    let response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/consumer/profile/${user_id}/view`,
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

export async function updateMyProfile(data, token) {
  try {
    const authToken = token;

    let response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/consumer/profile/update`,
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

    return error;
  }
}

export async function updateUserProfile(data, token) {
  try {
    const authToken = token;

    let response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/admin/profile/update`,
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

    return error;
  }
}

export async function createUserProfile(data, token) {
  try {
    const authToken = token;

    let response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/register`,
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

    return error;
  }
}

export async function fetchGettingStartedInfo(token) {
  try {
    const authToken = token;

    let response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/admin/getting-started-info`,
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

export async function updateGettingStartedInfo(content, token) {
  try {
    const authToken = token;

    let response = await axios.put(
      `${import.meta.env.VITE_API_URL}/api/admin/getting-started-info`,
      content,
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
      `${import.meta.env.VITE_API_URL}/api/consumer/fitting/schedule-fitting`,
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

    return error;
  }
}

export async function scheduleSwigAnalysis(data, token) {
  try {
    const authToken = token;

    let response = await axios.post(
      `${
        import.meta.env.VITE_API_URL
      }/api/consumer/fitting/schedule-swig-analysis`,
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

    return error;
  }
}
