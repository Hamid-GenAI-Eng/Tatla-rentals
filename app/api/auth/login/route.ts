import { NextResponse } from 'next/server';
import { login } from '@/app/lib/auth';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        // In a real app, check against DB. Here, check envy variables as per plan.
        const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@tatlarentals.com';
        const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'; // Default fallback (change in prod!)

        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            await login();
            return NextResponse.json({ success: true });
        }

        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
