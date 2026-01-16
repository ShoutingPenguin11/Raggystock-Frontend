import { NextResponse } from 'next/server';
import { controller } from '@/app/controllers/controller';

export async function GET() {
  try {
    const health = await controller.getHealth();
    return health;
  } catch (error) {
    return NextResponse.json({ error: 'Unhealthy endpoint' }, { status: 500 });
  }
}
