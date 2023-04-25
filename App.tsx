import React from 'react';
import './style.css';
import {
  Layout,
  ElementsType,
  TextTile,
  ImageTile,
  ButtonTile,
  HorizontalSplitter,
  VerticalSplitter,
  Action,
  Color,
} from './model'; //import all resources from model.ts

let App: React.FC = () => {
  let layout: Layout = {
    rootElement: {
      type: 'verticalSplitter',
      elements: [
        {
          type: 'textTile',
          elementKey: 'textTile1',
          title: 'I Love Yogurt',

          color: 'dark',
        },
        {
          type: 'imageTile',
          elementKey: 'imageTile1',
          title: 'my-yogo',
          source:
            'http://4.bp.blogspot.com/-e1Jz6sKoYK4/UzmmPT4xuQI/AAAAAAAABDw/uCm_kkog4HQ/s1600/parfait+10jpg',
        },

        {
          type: 'horizontalSplitter',
          elementKey: 'middle',
          elements: [
            {
              type: 'textTile',
              elementKey: 'textTile2',
              title: 'Why?',
              text: 'Yogurt is a delicious and healthy treat that I enjoy!. It provides protein and calcium, and it may enhance healthy gut bacteria. Health benefits range from protecting against osteoporosis to relieving irritable bowel disease and aiding digestion, but these depend on the type of yogurt consumed.',
              color: 'mid',
            },
          ],
        },
        {
          type: 'verticalSplitter',
          elementKey: 'right',
          elements: [
            {
              type: 'textTile',
              elementKey: 'textTile3',
              title: 'Yogurt Types',
              color: 'light',
            },
            {
              type: 'textTile',
              elementKey: 'textTile4',
              text: 'Greek Yogurt',
              color: 'light',
            },
            {
              type: 'textTile',
              elementKey: 'textTile5',
              text: 'Strawberry Yogurt',
              color: 'light',
            },
            {
              type: 'textTile',
              elementKey: 'textTile6',
              text: 'Vanilla Yogurt',
              color: 'light',
            },
            {
              type: 'textTile',
              elementKey: 'textTile7',
              text: 'Blueberry Yogurt',
              color: 'light',
            },
          ],
        },
        {
          type: 'buttonTile',
          elementKey: 'buttonTile1',
          color: `light`,
          text: `Buy Now`,
        },
      ],
    },
  };

  let renderElement = (element: ElementsType): JSX.Element => {
    switch (element.type) {
      case 'imageTile': // tried to use a div class container,row &col to split the page in 3, but i wasnt getting it
        return (
          //gave a class to be styled in css
          <div className="imageTileContainer" key={element.elementKey}>
            <img
              src={element.source}
              alt={element.title}
              className="imageTileImage"
            />
          </div>
        );
      case 'textTile':
        return (
          <div
            className={`textTileContainer ${element.color || ''}`}
            key={element.elementKey}
          >
            <h1 className="header">{element.title}</h1>
            <p className="textTileText">{element.text}</p>
          </div>
        );
      case 'buttonTile':
        return (
          <div className="buttonTileContainer" key={element.elementKey}>
            {/* Added an anchor tag with the desired URL */}
            <a
              href="https://www.carrefour.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="buttonTileButton">{element.text}</button>
            </a>
          </div>
        );
      case 'horizontalSplitter':
        return (
          <div className="horizontalSplitterContainer" key={element.elementKey}>
            {element.elements.map(renderElement)}
          </div>
        );
      case 'verticalSplitter':
        return (
          <div className="verticalSplitterContainer" key={element.elementKey}>
            {element.elements.map(renderElement)}
          </div>
        );
    }
  };

  return <div>{renderElement(layout.rootElement)}</div>;
};

export default App;
