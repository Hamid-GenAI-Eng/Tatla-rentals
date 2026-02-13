import 'server-only';
import fs from 'fs';
import path from 'path';
import { Vehicle } from '@/app/types/vehicle';

const dataFilePath = path.join(process.cwd(), 'data', 'vehicles.json');

export type { Vehicle }; // Re-export for convenience in server files

export const getVehicles = (): Vehicle[] => {
    try {
        if (!fs.existsSync(dataFilePath)) {
            return [];
        }
        const fileContent = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error("Error reading vehicle data:", error);
        return [];
    }
};

export const saveVehicles = (vehicles: Vehicle[]) => {
    try {
        const dir = path.dirname(dataFilePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(dataFilePath, JSON.stringify(vehicles, null, 2), 'utf8');
    } catch (error) {
        console.error("Error writing vehicle data:", error);
    }
};

export const addVehicle = (vehicle: Vehicle) => {
    const vehicles = getVehicles();
    vehicles.push(vehicle);
    saveVehicles(vehicles);
    return vehicle;
};

export const updateVehicle = (id: string, updates: Partial<Vehicle>) => {
    const vehicles = getVehicles();
    const index = vehicles.findIndex(v => v.id === id);
    if (index !== -1) {
        vehicles[index] = { ...vehicles[index], ...updates };
        saveVehicles(vehicles);
        return vehicles[index];
    }
    return null;
};

export const deleteVehicle = (id: string) => {
    let vehicles = getVehicles();
    const initialLength = vehicles.length;
    vehicles = vehicles.filter(v => v.id !== id);
    if (vehicles.length !== initialLength) {
        saveVehicles(vehicles);
        return true;
    }
    return false;
};
