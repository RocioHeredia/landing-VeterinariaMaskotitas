export interface Testimonial {
  id: string;
  texto: string;
  autor: string;
  inicial: string;
  color: 'primary' | 'secondary';
}

export const testimonials: Testimonial[] = [
  {
    id: 'Renzo Rodriguez',
    texto: 'Son unos genios!! Todos los que trabajan en la vete, la atención de las chicas es excelente!! Y el Doc. Fernando un capo total, además de curar la patita del perrito me enseñó a que yo lo cure durante más de 1 mes. Ahora el Pichu se lo agradece de corazón.',
    autor: 'Renzo Rodriguez',
    inicial: 'R',
    color: 'primary',
  },
  {
    id: 'Mariela Reyes',
    texto: 'Mis mascotas y yo somos muy afortunados que la Dra. Maria Argüello sea su veterinaria, porque no solo es excelente la atención tanto de ella como de su grupo de trabajo, sino también el amor, dedicación, y cuidados que tienen con nuestros bebitos. Más que agradecida y 100% recomendable.',
    autor: 'Mariela Reyes.',
    inicial: 'M',
    color: 'secondary',
  },
  {
    id: 'Silvana alaniz',
    texto: 'Excelente atención, se combina profesionalismo y amor hacia nuestras amadas mascotas!!!',
    autor: 'Silvana alaniz',
    inicial: 'S',
    color: 'primary',
  },
  {
    id: 'Sabrina Molina',
    texto: 'Muy buena atención. Una genia la dra María, atiende a mis perritos desde hace años y a todos los diagnósticos le acierta y le brinda los tratamientos adecuados!',
    autor: 'Sabrina Molina',
    inicial: 'SM',
    color: 'secondary',
  },
];
