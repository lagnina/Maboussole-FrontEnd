import { Photo } from './photo';

export interface Member {
    id: number;
    username: string;
    photoUrl: string;
    age: number;
    email: string;
    created: Date;
    lastActive: Date;
    gender: string;
    school: string;
    degree: string;
    speciality: string;
    city: string;
    country: string;
    photos: Photo[];
  }

