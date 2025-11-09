const API_BASE_URL = 'http://localhost:4000';

export async function fetchWithErrorHandling(url, options = {}) {
  try {
    // Ensure options.body is properly stringified if it's an object
    if (options.body && typeof options.body === 'object') {
      options.body = JSON.stringify(options.body);
    }

    console.log('Making request to:', `${API_BASE_URL}${url}`);
    console.log('Request options:', {
      ...options,
      body: options.body ? JSON.parse(options.body) : undefined
    });

    const response = await fetch(`${API_BASE_URL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers,
      },
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    // Get the response text first
    const responseText = await response.text();
    console.log('Response text:', responseText);

    let responseData;
    try {
      // Try to parse the text as JSON
      responseData = responseText ? JSON.parse(responseText) : {};
    } catch (e) {
      console.error('Failed to parse response as JSON:', e);
      console.error('Raw response:', responseText);
      throw new Error('Server returned invalid JSON. Check server logs for details.');
    }

    if (!response.ok) {
      throw new Error(responseData.message || `HTTP error! status: ${response.status}`);
    }

    return responseData;
  } catch (error) {
    if (error.message === 'Failed to fetch') {
      throw new Error('Cannot connect to server. Please make sure the backend is running.');
    }
    console.error('API Error:', error);
    throw error;
  }
}