export interface Vehicle {
    _id?: string;
    id?: string;
    name: string;
    subtitle: string;
    category: string;
    image: string;
    badge?: string | null;
    overview?: string;
    gallery: string[];
    specs: {
        year: string;
        seats: string;
        engine: string;
        fuel: string;
        transmission: string;
    };
    rental: {
        minDuration: string;
        availability: string;
    };
}
