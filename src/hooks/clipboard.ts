import React, { useState, useCallback, useEffect } from 'react';
import { CopyStatus } from '../const';

export const useCopyToClipboard = (
  text: string,
  notifyTimeout = 1000,
): [CopyStatus, () => void] => {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('inactive');

  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(
      () => setCopyStatus('copied'),
      () => setCopyStatus('failed'),
    );
  }, [text]);

  useEffect(() => {
    if (copyStatus === 'inactive') {
      return;
    }

    const timeoutId = setTimeout(
      () => setCopyStatus('inactive'),
      notifyTimeout,
    );

    return () => clearTimeout(timeoutId);
  }, [copyStatus]);

  return [copyStatus, copy];
};
