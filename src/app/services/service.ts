const BASE_URL = 'http://34.39.13.91:8080/';

export const service = {
  async getHealth() {
    const res = await fetch(`${BASE_URL}/health`);

    if (!res.ok) {
      throw new Error(`Backend returned ${res.status}`);
    }

    return await res;
  },
};
