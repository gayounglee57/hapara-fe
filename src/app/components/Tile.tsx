import { useEffect, useState } from "react";
import { StudentDetailsResponse, Student } from "../types";
import Drawer from "./Drawer";
import { Offline } from "./Offline";

export function Tile({ student }: { student: Student }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [studentDetail, setStudentDetail] =
    useState<StudentDetailsResponse | null>(null);
  const isOffline = student.status !== "online";

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/students/${student.id}`)
      .then((res) => res.json())
      .then((data: StudentDetailsResponse) => {
        if (data && Object.keys(data).length > 0) {
          setStudentDetail(data);
        }
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching students:", err));
  }, [student.id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex h-full">
      {isOffline ? (
        <Offline name={student.name} />
      ) : (
        <div className="w-full">
          <button
            className={`h-full w-full flex flex-col gap-4 sm:flex-row ${
              isOffline ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => setIsOpen(true)}
            disabled={isOffline}
          >
            <div className="flex flex-1 flex-col items-start gap-4 p-4 border border-solid border-black">
              <div>{student.name}</div>
              {studentDetail?.currentScreen ? (
                <img src={studentDetail.currentScreen} alt="Current screen" />
              ) : <img src="/hapara-logo.png" alt="Hapara logo" />}
            </div>
          </button>
          <Drawer
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            studentDetail={studentDetail}
          />
        </div>
      )}
    </div>
  );
}
