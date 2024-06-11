export interface IHero {
  id: number;
  name: string;
  secretIdentity: string[];
  imageUrl: string;
  mainComics: string[];
}

export const heroes: IHero[] = [
  {
    name: 'Batman',
    id: 1,
    secretIdentity: ['Bruce Wayne'],
    imageUrl:
      'https://www.spacemanproject.com/es/image/arxiu/f0623617437946298c5e54c72c1555b4.jpg?w=750&h=422',
    mainComics: ['The Cult', 'The Long Halloween', 'The Killing Joke'],
  },
  {
    name: 'Superman',
    id: 2,
    secretIdentity: ['Clark Kent', 'Kal El'],
    imageUrl:
      'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/08/03/16595421832009.jpg',
    mainComics: [
      'Superman All Stars',
      'What happened to the Man of Tomorrow',
      'Superman Year One',
    ],
  },
  {
    name: 'The Flash',
    id: 3,
    secretIdentity: ['Barry Allen', 'Wally West'],
    imageUrl:
      'https://www.mundodeportivo.com/alfabeta/hero/2024/01/the-flash-dc-comics.jpg?width=1200&aspect_ratio=16:9',
    mainComics: [],
  },
];
