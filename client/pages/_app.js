import "@/styles/globals.css";
import store from "@/store";
import { Provider } from "react-redux";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Shamim Mahmud" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Video Management Web App</title>
      </Head>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    </div>
  );
}
