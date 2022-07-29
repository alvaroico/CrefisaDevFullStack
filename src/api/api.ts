export const getAll = async () => {
  return await fetch('http://172.16.238.11:3000/tarefas', {
    method: 'GET',
  });
};

export const create = async (tarefa: string) => {
  return await fetch('http://172.16.238.11:3000/tarefas', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      description: tarefa,
    }),
  });
};

export const deleteTarefa = async (id: number) => {
  return await fetch('http://172.16.238.11:3000/tarefas', {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
    }),
  });
};
