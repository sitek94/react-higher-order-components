import faker from 'faker';

export function createComment() {
  return {
    id: faker.datatype.uuid(),
    text: faker.lorem.paragraph(1),
    author: faker.name.firstName(),
  };
}

export function createBlogPost() {
  return {
    id: faker.datatype.uuid(),
    img: faker.image.abstract(),
    title: faker.lorem.sentence(1),
    text: faker.lorem.paragraph(3),
    author: faker.name.firstName(),
  };
}
