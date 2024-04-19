import { OauthContext, OauthDispatchContext } from "../../../api/oauth/oauth.utils";
import useOauthReducer from "../../../hooks/useOauthReducer.hook";

interface Props {
  children: React.ReactNode;
}
const OauthReducer = ({ children }: Props) => {
  const [state, dispatch] = useOauthReducer();

  return (
    <OauthContext.Provider value={state}>
      <OauthDispatchContext.Provider value={dispatch}>
        {children}
      </OauthDispatchContext.Provider>
    </OauthContext.Provider>
  );
};

export default OauthReducer;
