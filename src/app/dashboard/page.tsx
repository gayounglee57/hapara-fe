"use client";

import { useEffect, useState } from "react";
import { Tile } from "../components/Tile";
import { StudentsResponse } from "../types";
import axios from "axios";
import cn from "classnames";

export default function Dashboard() {
  const [students, setStudents] = useState<StudentsResponse>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/students`)
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div
      className={cn(
        "grid min-h-screen",
        "grid-rows-[20px_1fr_20px]",
        "items-center justify-items-center",
        "gap-16",
        "p-8 pb-20 sm:p-20",
        "font-[family-name:var(--font-geist-sans)]"
      )}
    >
      <div>Dashboard</div>
      <div className="grid grid-cols-3 grid-rows-3 gap-[32px] row-start-2 sm:items-start">
        {students.map((student) => (
          <Tile key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}
