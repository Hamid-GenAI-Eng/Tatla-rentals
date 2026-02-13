import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/db';
import Vehicle from '@/app/models/Vehicle';

export async function GET() {
    try {
        await dbConnect();
        const vehicles = await Vehicle.find({}).sort({ createdAt: -1 });
        return NextResponse.json(vehicles);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch vehicles' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const vehicle = await Vehicle.create(body);
        return NextResponse.json(vehicle, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create vehicle' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const { id, ...updateData } = body;

        // Handle both _id (MongoDB) and id (Frontend ref)
        const filter = id ? { _id: id } : { _id: body._id };

        const vehicle = await Vehicle.findOneAndUpdate(
            filter,
            updateData,
            { new: true, runValidators: true }
        );

        if (!vehicle) {
            return NextResponse.json({ error: 'Vehicle not found' }, { status: 404 });
        }

        return NextResponse.json(vehicle);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update vehicle' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        const vehicle = await Vehicle.findByIdAndDelete(id);

        if (!vehicle) {
            return NextResponse.json({ error: 'Vehicle not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete vehicle' }, { status: 500 });
    }
}
