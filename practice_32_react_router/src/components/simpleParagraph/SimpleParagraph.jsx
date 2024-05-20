/**
 * создать компонент SimpleParagraph, который будет рендерить (отрисовать)
 * параграф с текстом Hello From Simple Paragraph!
 */
function SimpleParagraph( { textContent, clickHandler } ) {
  return (
    <p onClick={clickHandler}>{textContent}</p>
  );
};

export default SimpleParagraph;