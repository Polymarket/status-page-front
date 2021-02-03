import Link from "next/link";

export const Home = (): JSX.Element => {
    return (
        <section>
            <Link href="/status">
                <a> Go to status page</a>
            </Link>
        </section>
    );
};

export default Home;
