async function getProtocolStats() {
  const url = "https://api.kamino.finance/metrics";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export const getData = async (url: string) => {
  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw new Error(`HTTP error!: ${error}`);
  }
};
