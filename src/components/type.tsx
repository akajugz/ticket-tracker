export type EmployeeProps = {
  id: number;
  name: string;
  role: string;
  profile: Profile;
};

export type Profile = {
  experience: string;
  department: string;
  techstack: string[];
  profilePicture: string;
};
