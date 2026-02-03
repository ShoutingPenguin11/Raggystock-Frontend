const BASE_URL = 'https://vm-proxy-610681465338.europe-west2.run.app/';

export const service = {
  async getHealth() {
    const res = await fetch(`${BASE_URL}/health`);

    if (!res.ok) {
      throw new Error(`Backend returned ${res.status}`);
    }

    return await res;
  },
};
