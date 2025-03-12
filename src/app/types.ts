export type StudentsResponse = Array<Student>;

export type Student = {
  id: string;
  name: string;
  status: "online" | "offline";
};

export type StudentDetailsResponse = {
  id: string;
  name: string;
  currentUrl: string | null;
  currentScreen: string;
  history: Array<{
    timestamp: string;
    urls: string[];
  }>;
};
