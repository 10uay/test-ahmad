import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader container mx-auto mt-20 relative z-10">
        <div className="cell d-0" />
        <div className="cell d-1" />
        <div className="cell d-2" />
        <div className="cell d-1" />
        <div className="cell d-2" />
        <div className="cell d-2" />
        <div className="cell d-3" />
        <div className="cell d-3" />
        <div className="cell d-4" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    --cell-size: 52px;
    --cell-spacing: 1px;
    --cells: 3;
    --total-size: calc(var(--cells) * (var(--cell-size) + 2 * var(--cell-spacing)));
    display: flex;
    flex-wrap: wrap;
    width: var(--total-size);
    height: var(--total-size);
  }

  .cell {
    flex: 0 0 var(--cell-size);
    margin: var(--cell-spacing);
    background-color: transparent;
    box-sizing: border-box;
    border-radius: 4px;
    animation: 1.5s ripple ease infinite;
  }

  .cell.d-1 {
    animation-delay: 100ms;
  }

  .cell.d-2 {
    animation-delay: 200ms;
  }

  .cell.d-3 {
    animation-delay: 300ms;
  }

  .cell.d-4 {
    animation-delay: 400ms;
  }

  .cell:nth-child(1) { --cell-color: #0d2a5a; }
  .cell:nth-child(2) { --cell-color: #0f3270; }
  .cell:nth-child(3) { --cell-color: #123a86; }
  .cell:nth-child(4) { --cell-color: #1a428a; }
  .cell:nth-child(5) { --cell-color: #234a8e; }
  .cell:nth-child(6) { --cell-color: #2c5292; }
  .cell:nth-child(7) { --cell-color: #355a96; }
  .cell:nth-child(8) { --cell-color: #3e629a; }
  .cell:nth-child(9) { --cell-color: #476a9e; }

  /*Animation*/
  @keyframes ripple {
    0% {
      background-color: transparent;
    }

    30% {
      background-color: var(--cell-color);
    }

    60% {
      background-color: transparent;
    }

    100% {
      background-color: transparent;
    }
  }`;

export default Loader;
