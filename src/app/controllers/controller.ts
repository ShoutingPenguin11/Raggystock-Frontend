import { service } from '@/app/services/service';

export const controller = {
  async getHealth() {
    const health = await service.getHealth();
    return health;
  },
};
