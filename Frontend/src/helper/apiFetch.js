async function apiFetch(apiUrl, options = {}) {
  try {
    let apiResp = await fetch(apiUrl, {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
      },
      body:
        options.method === "GET"
          ? undefined
          : options.body
            ? JSON.stringify(options.body)
            : undefined,
    })
    let apiData = await apiResp.json()
    if (!apiResp.ok) throw apiData.message
    return apiData
  } catch (e) {
    throw e.message || "Something Went Wrong"
  }
}

export default apiFetch
