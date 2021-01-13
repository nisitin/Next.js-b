import Layout from "../components/Layout";
import { Post } from "../components/Post";
import { getAllPostsData } from "../lib/posts";


//mapで&&にした理由はもしpostsがあった時にという意味の処理
export default function Blog({ posts }) {
    return (
        <Layout title="Blog">
            <ul className="m-10">
                {posts && posts.map((post) => <Post key={post.id} post={post} />)}
            </ul>
        </Layout>
    )
}

export async function getStaticProps() {
    const posts = await getAllPostsData()
    //ここでpostsのデータを取得する.それをリターンで返す
    return {
        props: { posts },
    }
}
