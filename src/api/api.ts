import {ITarefasAll} from '../interfaces/tarefas.api.interface';

export const getAll = async () => {
  return await fetch('http://172.16.238.11:3000/tarefas', {
    method: 'GET',
  });
};

const create = () => {
  fetch('172.16.238.11:3000/tarefas', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue',
    }),
  });
};
