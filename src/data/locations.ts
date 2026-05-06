export interface Location {
  id: string;
  nombre: string;
  direccion: string;
  telefono: string;
  telefonoDisplay: string;
  color: 'primary' | 'secondary';
  imageSeed: string;
}

export const locations: Location[] = [
  {
    id: 'capital',
    nombre: 'Sucursal Capital',
    direccion: 'Salta 965 N., Capital, San Juan',
    telefono: '2644704399',
    telefonoDisplay: '264 470-4399',
    color: 'primary',
    imageSeed: 'san-juan-capital',
  },
  {
    id: 'chimbas',
    nombre: 'Sucursal Chimbas',
    direccion: 'Mendoza 717 N., Chimbas, San Juan',
    telefono: '2645743524',
    telefonoDisplay: '264 574-3524',
    color: 'secondary',
    imageSeed: 'san-juan-chimbas',
  },
];
