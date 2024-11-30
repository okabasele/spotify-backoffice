"use client";

import DataTable from "@/components/DataTable";
import { createColumnHelper } from "@tanstack/react-table";
import { FileAudio, Pencil, X } from "lucide-react";
import Link from "next/link";

const SpotifyPortal = () => {
  const audioData = [
    {
      id: 1,
      titre: "Hello",
      duree: "3:30",
      id_Album: 1,
      explicit: false,
      paroles: "Hello, it's me",
      id_Artiste: 1,
      credit: "Adele",
      nb_ecoute: 1000000,
      popularite: 100,
      audio: "https://www.youtube.com/watch?v=YQHsXMglC9A",
    },
    {
      id: 2,
      titre: "Rolling in the Deep",
      duree: "4:30",
      id_Album: 1,
      explicit: false,
      paroles: "There's a fire starting in my heart",
      id_Artiste: 1,
      credit: "Adele",
      nb_ecoute: 1000000,
      popularite: 100,
      audio: "https://www.youtube.com/watch?v=YQHsXMglC9A",
    },
    {
      id: 3,
      titre: "Someone Like You",
      duree: "4:30",
      id_Album: 1,
      explicit: false,
      paroles: "I heard that you're settled down",
      id_Artiste: 1,
      credit: "Adele",
      nb_ecoute: 1000000,
      popularite: 100,
      audio: "https://www.youtube.com/watch?v=YQHsXMglC9A",
    },
    {
      id: 4,
      titre: "Set Fire to the Rain",
      duree: "4:30",
      id_Album: 1,
      explicit: false,
      paroles: "I let it fall, my heart",
      id_Artiste: 1,
      credit: "Adele",
      nb_ecoute: 1000000,
      popularite: 100,
      audio: "https://www.youtube.com/watch?v=YQHsXMglC9A",
    },
    {
      id: 5,
      titre: "Skyfall",
      duree: "4:30",
      id_Album: 1,
      explicit: false,
      paroles: "This is the end",
      id_Artiste: 1,
      credit: "Adele",
      nb_ecoute: 1000000,
      popularite: 100,
      audio: "https://www.youtube.com/watch?v=YQHsXMglC9A",
    },
  ];

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("titre", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("duree", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("id_Album", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("explicit", {
      cell: (info) => (
        <input type="checkbox" checked={info.getValue()} readOnly />
      ),
    }),
    columnHelper.accessor("paroles", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("id_Artiste", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("credit", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("nb_ecoute", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("popularite", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("audio", {
      cell: (info) => (
        <Link href={info.getValue()} className="flex gap-1">
          <FileAudio size={16} /> {info.getValue().substring(0, 20)}...
        </Link>
      ),
    }),
    columnHelper.accessor("Actions", {
      cell: (info) => (
        <div className="flex gap-1">
          <button className="p-2 bg-blue-500 text-white">
            <Pencil size={16} />
          </button>
          <button className="p-2 bg-red-500 text-white">
            <X size={16} />
          </button>
        </div>
      ),
    }),
  ];

  return (
    <>
      <h1
        className="font-bold text-6xl mb-4"
      >
        Titres
      </h1>
      <DataTable data={audioData} columns={columns} />
    </>
  );
};

export default SpotifyPortal;
