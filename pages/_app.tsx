/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from "next/app";
import "../styles/global.scss";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default MyApp;
