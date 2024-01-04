import {
  fetchAircall,
  fetchAircallDetails,
  fetchResetAircall,
  fetchToggleAircall
} from '@/services/aircall.service';
import { REDUCER_TYPES } from './aircallProvider.reducers';

export const handleAircallFetchAction = async (dispatch, { payloadParams, requestParams }) => {
  try {
    dispatch({ type: REDUCER_TYPES.FETCH_AIR_CALL, payload: data });
    const data = await fetchAircall({ payloadParams, requestParams });
    dispatch({ type: REDUCER_TYPES.SET_AIR_CALL, payload: data });
  } catch (e) {
    dispatch({ type: REDUCER_TYPES.FETCH_AIR_CALL_ERROR, payload: e });
  }
};

export const handleCallDetailsAction = async (dispatch, { payloadParams }) => {
  try {
    const { id } = payloadParams;
    dispatch({ type: REDUCER_TYPES.FETCH_DETAILS, payload: id });
  } catch (e) {
    dispatch({ type: REDUCER_TYPES.FETCH_AIR_CALL_ERROR, payload: e });
  }
};

export const handleResetCallDetailsAction = async (dispatch) => {
  dispatch({ type: REDUCER_TYPES.RESET_DETAILS });
};

export const handleCallToggleAction = async (dispatch, { payloadParams, requestParams }) => {
  try {
    await fetchToggleAircall({ payloadParams, requestParams });
  } catch (e) {
    dispatch({ type: REDUCER_TYPES.FETCH_AIR_CALL_ERROR, payload: e });
  }
};

export const handleArchiveAllCallAction = async (
  dispatch,
  state,
  { payloadParams, requestParams }
) => {
  try {
    const { data: activities } = state || {};
    let apiCalls = [];
    activities.map(({ id, is_archived }) => {
      if (!is_archived) {
        apiCalls.push(
          fetchToggleAircall({ payloadParams: { id, is_archived: !is_archived }, requestParams })
        );
      }
    });

    await Promise.all(apiCalls);
  } catch (e) {
    console.log('error', e);
  }
};

export const handleResetAction = async (dispatch, { payloadParams, requestParams }) => {
  try {
    await fetchResetAircall({ payloadParams, requestParams });
  } catch (e) {
    dispatch({ type: REDUCER_TYPES.FETCH_AIR_CALL_ERROR, payload: e });
  }
};
