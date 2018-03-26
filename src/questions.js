const n = n => parseFloat(String(n).replace(/[^0-9.]/ig, ''))
const tagVERDADEROFALSO = 'VERDADERO O FALSO'

const sortAsc = (a, b) => a > b
const sortAscNumber = (a, b) => a.toString().padStart(50, '0') > b.toString().padStart(50, '0')
const sortAscReverse = (a, b) => a.split('').reverse().join('') > b.split('').reverse().join('')
const sortAlwaysEnd = (opt) => (a, b) => a === opt ? 1 : 0

/**
 * @typedef {{title:string,options:string[],sort?:Function,stag?:string}} Question
 */

/**
 * @type {Question[]}
 */
const questions = [
  {
    title: `Cuando se conecte la tracción ya sea por medios mecánicos o electrónicos bajo que condiciones esta se debe realizar`,
    options: [
      'Con el vehículo detenido',
      'A bajas revoluciones',
      'A altas revoluciones',
      'Con el vehículo en movimiento',
    ],
  },
  {
    title: 'Al cruzar un estero, un río, laguna, es decir, se debe ejecutar un vadeo, ¿Qué situación se debe considerar?',
    options: [
      'El nivel del agua no debe superar la parte superior de las ruedas delanteras',
      'Antes de cruzar detenerse y conectar 4H',
      'Antes de cruzar detenerse y conectar 2H',
      'Cruzar a gran velocidad',
    ],
  },
  {
    title: 'En arena, dunas ¿qué tipo de tracción debe conectar al ingresar?',
    options: [
      '4L',
      '2H',
      '4H',
      '2L',
    ],
    sort: sortAscReverse,
  },
  {
    title: 'Cuando Ud. conduce un vehículo 4x4 y al ingresar a un camino de tierra debe detenerse y ¿cual seria la tracción a conectar?',
    options: [
      '4H',
      '2H',
      '4L',
      '2L',
    ],
    sort: sortAscReverse,
  },
  {
    title: 'Cuando conduce en caminos de tierra e irregulares ¿qué tipo de tracción se debe usar?',
    options: [
      '4H',
      '2H',
      '4L',
      '2L',
    ],
    sort: sortAscReverse,
  },
  {
    title: '¿Por qué se instalan solo en las ruedas delanteras?',
    options: [
      'Porque las delanteras ayudan a estabilizar la dirección',
      'Para que las ruedas traseras no patinen',
      'Sera según la condición del camino',
      'Para avanzar a mayor velocidad',
    ],
  },
  {
    title: 'Una vez terminada la actividad de conducción 4x4 ¿Qué debe realizar?',
    options: [
      'Detener vehículo (motor andando y vehículo estático), desconectar tracción y retroceder un par de metros',
      'Apagar motor  y colocar marcha en neutro',
      'Desconectar tracción y avanzar hacia adelante suavemente',
      'Revisar niveles',
    ],
  },
  {
    title: '¿Bajo que condiciones Ud. Colocaría cadenas a los 4 neumáticos de un vehículo?',
    options: [
      'En condiciones que exista más de 25 cm de nieve',
      'En condiciones de cruzar un vadeo con 40 cm',
      'En condiciones que exista menos de 15 cm de nieve',
      'En condiciones que exista menos de 25 cm de nieve',
    ],
  },
  {
    title: '¿Qué indica el primer numero de cada neumático?',
    options: [
      'Ancho del neumático',
      'Altura del neumático',
      'Velocidad máxima de circulación',
      'Profundidad del neumático',
    ],
  },
  {
    title: 'En un vehículo 4x4, ¿Cuál es la mayor profundidad de vadeo que este puede presentar?',
    options: [
      '80 cm',
      '90 cm',
      '130 cm',
      '150 cm',
    ],
    sort: sortAscNumber,
  },
  {
    title: 'Al transitar el un vehículo en tracción 4H, ¿Cuál es la velocidad máxima de circulación recomendada?',
    options: [
      '60 Km/hr',
      '80 Km/hr',
      '100 Km/hr',
      'La velocidad estará determinada por la dificultad del camino',
    ],
    sort: sortAscNumber,
  },
  {
    title: 'Según la Ley de Tolerancia Cero al alcohol, cuando se habla de que una persona, se encuentra en “Estado de ebriedad”, de que rango se habla:',
    options: [
      'Sobre los 0,8 gr./lt. de sangre',
      'Entre los 0,3 y 0,8 gr./lt. de sangre',
      'Entre los 0,8 y 1,0 gr./lt. de sangre',
      'Sobre los 0,5 gr./lt.  de sangre',
    ],
    sort: sortAsc,
  },
  {
    title: 'Al circular con cadenas en los neumáticos, ¿Cuál es la velocidad máxima de circulación recomendada?',
    options: [
      '35 Km./Hr',
      '50 Km./Hr',
      '45 Km./Hr',
      '25 Km./Hr',
    ],
    sort: sortAscNumber,
  },
  {
    title: 'Un conductor defensivo, en todo momento debe:',
    options: [
      'Reconocer el riesgo – Entender la defensa – Actuar a tiempo',
      'Actuar a tiempo - Reconocer el riesgos - Entender la defensa',
      'Entender la defensa – Actuar a tiempo – Reconocer el riesgo',
      'Reconocer el riesgo – Actuar a tiempo – Entender la defensa',
    ],
  },
  {
    title: '¿Cual es el ángulo máximo de inclinación lateral de un vehículo 4x4?',
    options: [
      '45°',
      '55°',
      '40°',
      '30°',
    ],
    sort: sortAscNumber,
  },
  {
    title: '¿Cuál es la velocidad máxima de circulación al transitar con tracción 4L?',
    options: [
      '40 Km/Hr',
      '100 Km/Hr',
      '80 Km/Hr',
      '60 Km/Hr',
    ],
    sort: sortAscNumber,
  },
  {
    title: 'Según las estadísticas de la CONASET, ¿Cuál fue la mayor causa de fallecidos en Chile por accidentes de transito durante el año 2016?',
    options: [
      'Imprudencia del conductor',
      'Alcohol en el conductor',
      'Perdida de control del vehículo',
      'Imprudencia del peatón',
    ],
  },
  {
    title: '¿Cuál es la Ley de transito que rige en nuestro país?',
    options: [
      'Ley N° 18.290',
      'Ley N° 14.450',
      'Ley N° 19.200',
      'Ley N° 19.820',
    ],
    sort: sortAsc,
  },
  {
    title: 'Según la Ley de Tolerancia Cero al alcohol, cuando hablamos de estar “Bajo la influencia del alcohol”, de que rango se habla:',
    options: [
      'Entre los 0,3 y 0,8 gr./lt. de sangre',
      'Entre los 0,8 y 1,0 gr./lt. de sangre',
      'Sobre los 0,5 gr./lt. de sangre',
      'Sobre los 0,8 gr./lt. de sangre',
    ],
  },
  {
    title: '¿A que número corresponde la Ley Emilia?',
    options: [
      'Ley N° 18.290',
      'Ley N° 20.770',
      'Ley N° 23.500',
      'Ley N° 27.070',
    ],
    sort: sortAsc,
  },
  {
    title: 'En arena, dunas ¿qué tipo de tracción debe conectar al ingresar?',
    options: [
      '4L',
      '2H',
      '4H',
      '2L',
    ],
    sort: sortAscReverse,
  },
]

module.exports = questions
