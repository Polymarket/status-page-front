/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/global.scss";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default MyApp;
