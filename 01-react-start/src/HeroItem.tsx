import { IHero } from './hero';
import './HeroItem.css';

export const HeroItem = ({
  name,
  imageUrl,
  mainComics,
  secretIdentity,
}: //* Hint: No olvidar que si se agrega mas campos aqui agregarlos tambien
IHero) => {
  return (
    <div className='hero_item'>
      <img src={imageUrl} alt={name} className='image' />

      <div className='name_container'>
        <p className='title'>{name}</p>
        <div className='identity_list'>
          <span>(</span>
          {secretIdentity.map((item) => (
            <p className='identity_name'>{item}</p>
          ))}
          <span>)</span>
        </div>
      </div>

      {mainComics.length > 0 ? (
        <div>
          <p>COMICS:</p>
          {mainComics.map((comic) => (
            <p className='comic_name'>{comic}</p>
          ))}
        </div>
      ) : (
        <p>No tiene ningun comic relevante</p>
      )}
    </div>
  );
};
