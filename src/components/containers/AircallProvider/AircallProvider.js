import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

import AircallContext from '@/contexts/AircallContext';

import reducer, { DEFAULT_INITIAL_STATE } from './aircallProvider.reducers';

import {
  handleAircallFetchAction,
  handleArchiveAllCallAction,
  handleCallDetailsAction,
  handleCallToggleAction,
  handleResetAction,
  handleResetCallDetailsAction
} from './AircallProvider.actions';

const AircallProvider = ({ children, payloadParams, requestParams }) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_INITIAL_STATE);

  const handleFetch = useCallback(() => {
    handleAircallFetchAction(dispatch, { payloadParams, requestParams });
  }, [payloadParams, requestParams]);

  const handleCallDetails = useCallback(
    (id, reqParams) => {
      handleCallDetailsAction(dispatch, { payloadParams: { id }, requestParams: reqParams });
    },
    [payloadParams, requestParams]
  );

  const handleResetCallDetails = useCallback(() => {
    handleResetCallDetailsAction(dispatch);
  }, [payloadParams, requestParams]);

  const handleCallToggle = useCallback(
    async ({ id, is_archived }, reqParams) => {
      await handleCallToggleAction(dispatch, {
        payloadParams: { id, is_archived },
        requestParams: reqParams
      });
      handleFetch();
    },
    [payloadParams, requestParams]
  );

  const handleReset = useCallback(
    async (reqParams) => {
      await handleResetAction(dispatch, { requestParams: reqParams });
      handleFetch();
    },
    [payloadParams, requestParams]
  );

  const handleArchiveAll = useCallback(
    async (reqParams) => {
      await handleArchiveAllCallAction(dispatch, state, { requestParams: reqParams });
      handleFetch();
    },
    [payloadParams, requestParams, state]
  );

  useEffect(() => {
    handleFetch();
  }, []);

  const contextValue = useMemo(
    () => ({
      ...state,
      handleFetch,
      handleCallDetails,
      handleCallToggle,
      handleResetCallDetails,
      handleReset,
      handleArchiveAll
    }),
    [state, handleFetch]
  );

  return <AircallContext.Provider value={contextValue}>{children}</AircallContext.Provider>;
};

export default AircallProvider;

AircallProvider.propTypes = {
  children: PropTypes.node,
  payloadParams: PropTypes.object,
  requestParams: PropTypes.object
};

AircallProvider.defaultProps = {
  children: null,
  payloadParams: {},
  requestParams: {}
};
