import { Card } from "@/components/Card";
import { Testnet } from "@/components/Testnet";

export default function Home({ data }) {
  return (
    <div>
      <main className="mx-14 my-10 gap-6 flex flex-col">
        {data.testnet.map((testNet) => (
          <Testnet
            key={testNet.id}
            name={testNet.name}
            status={testNet.status}
          ></Testnet>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/data");
  const { data } = await response.json();
  return { props: { data } };
}
