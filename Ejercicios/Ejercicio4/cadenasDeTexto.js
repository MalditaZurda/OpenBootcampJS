const nombre = 'Agustin';
const apellido = 'Leiria';

const estudiante = `${nombre} ${apellido}`;

const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();

const numeroDeLetrasEstudiante = estudiante.length;

const primeraLetraNombre = nombre[0];

const ultimaLetraApellido = apellido.slice(-1);

const sinEspacios = estudiante.replace(/ /g, "");

const estaIncluida = estudiante.includes(nombre);

