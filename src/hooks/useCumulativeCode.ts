import { useTypedSelector } from "./useTypedSelector";

export const useCumulativeCode = () => {
  return useTypedSelector((state) => {
    const { content } = state.cells;

    const showFunc = `
          import _React from 'react';
          import _ReactDOM from 'react-dom';
    
          var show = (value) => {
            const root = document.querySelector('#root');
    
            if (typeof value === 'object') {
              if (value.$$typeof && value.props) {
                _ReactDOM.render(value, root);
              } else {
                root.innerHTML = JSON.stringify(value);
              }
            } else {
              root.innerHTML = value;
            }
          }
        `;

    const cumulativeCode = [];

    cumulativeCode.push(showFunc);
    cumulativeCode.push(content);

    return cumulativeCode;
  }).join("\n");
};
