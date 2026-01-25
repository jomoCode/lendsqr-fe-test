export const apiAsync = async (endpoint: string) => {
  try {
    const res = await fetch(endpoint);
    return await res.json();
  } catch (error) {
    console.error("Érror working with endpoint: ", error);
    return null;
  }
};
