"use client";

import { useEffect, useState } from "react";
import { Tile } from "../components/Tile";
import { StudentsResponse } from "../types";

export default function Dashboard() {
  const [students, setStudents] = useState<StudentsResponse>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/students`)
      .then((res) => res.json())
      .then((data: StudentsResponse) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>Dashboard</div>
      <div className="grid grid-cols-3 grid-rows-3 gap-[32px] row-start-2 sm:items-start">
        {students.map(student => (
            <Tile key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}
