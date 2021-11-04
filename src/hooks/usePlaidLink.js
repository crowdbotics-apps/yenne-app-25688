import { useEffect, useState } from 'react';
import { getLinkToken } from '../features/Financial/redux/api';

const usePlaidLink = () => {
  const [linkToken, setLinkToken] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchToken = async () => {
    if (!loading) {
      setLoading(true);
      getLinkToken()
        .then(res => {
          setLoading(false);
          setLinkToken(res?.data?.result?.link_token);
        })
        .catch(err => {
          console.warn(err);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    if (linkToken) {
      setLinkToken(linkToken);
    }
  }, [linkToken]);

  return { linkToken, fetchToken, loading };
};

export default usePlaidLink;
