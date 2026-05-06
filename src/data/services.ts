export interface Service {
  id: string;
  nombre: string;
  descripcion: string;
  icon: string;
  accent: 'primary' | 'secondary';
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: 'peluqueria',
    nombre: 'Peluquería Canina y Felina',
    descripcion: 'Cortes de raza, baños terapéuticos y spa con productos de primera línea.',
    icon: 'content_cut',
    accent: 'secondary',
  },
  {
    id: 'consultas',
    nombre: 'Consultas',
    descripcion: 'Evaluación general y diagnóstico preciso adaptado a cada especie.',
    icon: 'stethoscope',
    accent: 'primary',
  },
  {
    id: 'vacunacion',
    nombre: 'Vacunación',
    descripcion: 'Planes preventivos completos según el estilo de vida de tu mascota.',
    icon: 'vaccines',
    accent: 'primary',
  },
  {
    id: 'desparasitacion',
    nombre: 'Desparasitación',
    descripcion: 'Control interno y externo de parásitos para su máxima protección.',
    icon: 'bug_report',
    accent: 'primary',
  },
  {
    id: 'cirugia',
    nombre: 'Cirugía General',
    descripcion: 'Quirófano equipado con tecnología moderna para intervenciones seguras.',
    icon: 'healing',
    accent: 'primary',
  },
  {
    id: 'internacion',
    nombre: 'Internación',
    descripcion: 'Cuidados intensivos y recuperación monitoreada las 24 horas.',
    icon: 'local_hospital',
    accent: 'primary',
  },
  {
    id: 'analisis',
    nombre: 'Análisis Clínicos',
    descripcion: 'Laboratorio propio para resultados rápidos y precisos en el momento.',
    icon: 'science',
    accent: 'primary',
  },
  {
    id: 'farmacia',
    nombre: 'Farmacia y Pet Shop',
    descripcion: 'Todo lo que necesitás en un solo lugar. Las mejores marcas de alimentos y accesorios.',
    icon: 'storefront',
    accent: 'primary',
    featured: true,
  },
];
