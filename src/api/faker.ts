import faker from 'faker';

export function createComment() {
  return {
    id: faker.datatype.uuid(),
    text: faker.lorem.paragraph(1),
    author: faker.name.firstName(),
  };
}
