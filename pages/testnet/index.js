import { Dropdown } from "@/components/Dropdown";
import { TestnetAlert } from "@/components/TestnetAlert";
import { TestnetCard } from "@/components/TestnetCard";
import AllStatus from "../../public/icons/all_status.svg";
import Add from "../../public/icons/Add.svg";
import { useState } from "react";
import { sortMapper } from "@/utils";

export default function Testnets({ data }) {
  const [filterStatus, setfilterStatus] = useState(undefined);
  const [sortKey, setSortKey] = useState(sortItems[0].item);

  const statusFilterItems = [
    ...new Set(data.testnet.map((testnet) => testnet.status)),
  ].map((status) => ({
    item: status,
    itemView: <TestnetAlert status={status}></TestnetAlert>,
  }));

  const sortItem = sortItems.find((sortItem) => sortItem.item === sortKey);
  const sortFunc = sortMapper[sortItem.type];

  return (
    <div className="flex flex-col">
      <div className="sticky top-[60px] bg-secondary-300 mx-14 pt-10 pb-5 flex justify-between">
        <div className="flex gap-5 items-center">
          <span className="font-bold text-2xl">
            Testnets ({data.testnet?.length ?? 0})
          </span>
          <span className="text-accent-neutral text-base font-semibold flex gap-2 items-center cursor-pointer">
            <Add className="fill-accent-neutral"></Add>
            <span>New Testnet</span>
          </span>
        </div>
        <div className="flex gap-7">
          <Dropdown
            title={"Filter by"}
            items={[
              {
                item: undefined,
                itemView: (
                  <div className="flex gap-2 items-center text-accent-neutral pl-1">
                    <AllStatus className="fill-accent-neutral"></AllStatus>
                    <span className="text-sm font-medium">All</span>
                  </div>
                ),
              },
              ...statusFilterItems,
            ]}
            onChange={(newFilterStatus) => {
              setfilterStatus(newFilterStatus);
            }}
          ></Dropdown>
          <Dropdown
            title={"Sort by"}
            items={sortItems}
            onChange={(newSortKey) => setSortKey(newSortKey)}
          ></Dropdown>
        </div>
      </div>
      <main className="mx-14 gap-6 flex flex-col mb-5">
        {data.testnet
          .filter((testNet) => {
            if (filterStatus) {
              return testNet.status === filterStatus;
            }
            return true;
          })
          .sort(
            (item1, item2) =>
              sortFunc(item1[sortItem.key], item2[sortItem.key]) *
              (sortItem.multiplier ?? 1)
          )
          .map((testNet) => (
            <TestnetCard
              key={testNet.id}
              name={testNet.name}
              status={testNet.status}
              offChainActors={testNet.testnet_off_chain_actors}
              chains={testNet.testnet_chains}
              updatedAt={testNet.updated_at}
            ></TestnetCard>
          ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/data`
  );
  const { data } = await response.json();
  return { props: { data } };
}

const sortItems = [
  {
    item: "NameAZ",
    type: "string",
    key: "name",
    itemView: (
      <span className="text-sm font-bold text-accent-invalid">Name A-Z</span>
    ),
  },
  {
    item: "NameZA",
    type: "string",
    key: "name",
    multiplier: -1,
    itemView: (
      <span className="text-sm font-bold text-accent-invalid">Name Z-A</span>
    ),
  },
  {
    item: "STATUS",
    type: "string",
    key: "status",
    itemView: (
      <span className="text-sm font-bold text-accent-invalid">Status</span>
    ),
  },
  {
    item: "CREATE",
    type: "date",
    key: "created_at",
    itemView: (
      <span className="text-sm font-bold text-accent-invalid">
        Date created
      </span>
    ),
  },
  {
    item: "MODIFIED",
    type: "date",
    key: "updated_at",
    itemView: (
      <span className="text-sm font-bold text-accent-invalid">
        Last modified
      </span>
    ),
  },
];
