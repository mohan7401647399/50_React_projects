import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlag, setEnabledFlag] = useState({});

  useEffect(() => {
    fetchFlag();
  }, []);

  async function fetchFlag() {
    try {
      setLoading(true);
      const response = await featureFlagsDataServiceCall();
      setEnabledFlag(response);
      setLoading(false);
      console.log(response);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }

  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlag }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
