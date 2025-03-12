import { StudentDetailsResponse } from "../types";
import { getLocalTimeStamp } from "../utils";

export default function Drawer({
  isOpen,
  onClose,
  studentDetail,
}: {
  isOpen: boolean;
  onClose: () => void;
  studentDetail: StudentDetailsResponse | null;
}) {
  return (
    <div
      className={`fixed inset-0 bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose} // Close when clicking outside
    >
      <div
        className={`fixed right-0 top-0 h-full w-96 bg-white shadow-lg p-4 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button onClick={onClose} className="mb-4 cursor-pointer">
          x
        </button>
        <h2 className="text-gray-700">Current tab</h2>
        <p>{studentDetail?.currentUrl}</p>

        <h2 className="text-gray-700 mt-8">Activity Log</h2>
        {studentDetail?.history.map((history) => (
          <div key={history.timestamp} className="mt-4">
            <p>{getLocalTimeStamp(history.timestamp)}</p>
            <p>{history.urls}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
