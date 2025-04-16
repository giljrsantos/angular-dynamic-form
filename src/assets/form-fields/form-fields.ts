export const FORM_FIELDS = [
  {
    label: 'Nome',
    key: 'nome',
    type: 'text',
    required: true,
  },
  {
    label: 'Email',
    key: 'email',
    type: 'email',
    required: true,
  },
  {
    label: 'Idade',
    key: 'idade',
    type: 'number',
    required: false,
  },
  {
    label: 'Data de Nascimento',
    key: 'dataNascimento',
    type: 'date',
    required: true,
  },
  {
    label: 'Gênero',
    key: 'genero',
    type: 'select',
    required: true,
    options: ['Masculino', 'Feminino', 'Outro'],
  },
];
