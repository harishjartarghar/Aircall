import axios from 'axios';

export const fetchAircall = async ({ requestParams, payloadParams }) => {
  const { url, method, headers } = requestParams;

  const requestData = {
    headers,
    data: payloadParams,
    method,
    url
  };

  const { data } = await axios(requestData);

  return data;
};

export const fetchToggleAircall = async ({ requestParams, payloadParams }) => {
  const { url, method, headers } = requestParams;

  const { id, is_archived } = payloadParams;

  const requestData = {
    headers,
    data: { is_archived },
    method,
    url: `${url}/${id}`
  };

  const { data } = await axios(requestData);

  return data;
};

export const fetchResetAircall = async ({ requestParams, payloadParams }) => {
  const { url, method, headers } = requestParams;

  const requestData = {
    headers,
    method,
    url
  };

  const { data } = await axios(requestData);

  return data;
};
