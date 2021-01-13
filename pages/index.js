import Layout from "../components/Layout"
export default function Home() {
  return (
    //この辺の半角スペースとかは割と普通のcssと変わらない気がする
    <Layout title="Home">
      <p className="text-4xl">Welcome to Nextjs</p>
    </Layout>
  )
}
