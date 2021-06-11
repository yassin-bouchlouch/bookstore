import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Ariadne',
          info :'by Jennifer Saint ',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81mrR2k6MsL.jpg',
          id: 1
        },
        {
          title: 'The Witch\'s Heart',
          info :'by Genevieve Gornichec',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91QkHoIzPiL.jpg',
          id: 2
        },
        {
          title: 'Lore',
          info :'by Alexandra Bracken',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81ERUXSkWSL.jpg',
          id: 3
        },
        {
          title: 'Tales from the Hinterland',
          info :'by Melissa Albert',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81d900950RL.jpg',
          // size: 'large',
          id: 4
        },
        {
          title: 'Flock',
          info :'by Kate Stewart',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61Q032qeDGL.jpg',
          
          id: 5
        },
        {
          title: 'A Touch of Darkness',
          info :'by Scarlett St. Clair ',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71ew63F30EL.jpg',
          id: 6
        },
        {
          title: 'mens',
          imageUrl: 'https://i.pinimg.com/564x/1e/b5/8d/1eb58d3ca8d4eed59312f58823cf0c4d.jpg',
          id: 7
        },
        {
          title: 'mens',
          imageUrl: 'https://i.pinimg.com/564x/51/6f/87/516f87679031b575966d249954816ada.jpg',
          id: 7
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title,info, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} info={info} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;