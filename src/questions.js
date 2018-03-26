const n = n => parseFloat(String(n).replace(/[^0-9.]/ig, ''))
const tagVERDADEROFALSO = 'VERDADERO O FALSO'

const sortAsc = (a, b) => a > b
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
    options: ['aaa', 'bbbb', 'cccc'],
  },
]

module.exports = questions
