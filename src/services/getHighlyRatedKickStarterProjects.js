export const getHighlyRatedKickStarterProjects = async (url) => {
  try {
    const response = await fetch(url, { method: "get" });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error while fetching kick stater projects data");
  }
};
