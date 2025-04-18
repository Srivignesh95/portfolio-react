const API = process.env.REACT_APP_API_BASE;

export async function fetchProjects() {
  const res = await fetch(`${API}/project/api/list`);
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

export async function fetchExperiences() {
  const res = await fetch(`${API}/experience/api/list`);
  if (!res.ok) throw new Error("Failed to fetch experiences");
  return res.json();
}