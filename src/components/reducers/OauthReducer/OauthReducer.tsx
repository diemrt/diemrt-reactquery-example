import { OauthContext, OauthDispatchContext } from "../../../api/oauth/oauth.utils";
import useOauthReducerHook from "../../../hooks/useOauthReducerHook";

interface Props {
  children: React.ReactNode;
}
const OauthReducer = ({ children }: Props) => {
  const [state, dispatch] = useOauthReducerHook();

  return (
    <OauthContext.Provider value={state}>
      <OauthDispatchContext.Provider value={dispatch}>
        {children}
      </OauthDispatchContext.Provider>
    </OauthContext.Provider>
  );
};

export default OauthReducer;
