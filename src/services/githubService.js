const apiUrl = 'https://api.github.com';
const githubToken = process.env.REACT_APP_GITHUB_TOKEN;

const validateResponse = (response) => {
  if (!response.ok) {
    throw new Error(`HTTP status ${response.status}`);
  }
}

const gitHubService = {
  async get(url, headers = {}) {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${githubToken}`,
        ...headers,
      },
    };

    const response = await fetch(`${apiUrl}/${url}`, requestOptions);

    validateResponse(response);

    const data = await response.json();
    return data;
  },

  async post(url, body, headers = {}) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${githubToken}`,
        ...headers,
      },
      body: JSON.stringify(body),
    };

    const response = await fetch(`${apiUrl}/${url}`, requestOptions);
    const data = await response.json();
    return data;
  },
};

export default gitHubService;