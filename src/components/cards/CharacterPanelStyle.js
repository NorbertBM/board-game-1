import styled from "styled-components";

export const CharacterPanelStyle = styled.div`
  &.character-panel {
    position: relative;
    width: 183.5mm;
    height: 175mm;
    padding: 5mm;
    border-radius: 15px;
    color: #666;
    font-size: 1.3rem;
    background: rgb(16, 16, 17);
    background: -moz-linear-gradient(
      90deg,
      rgba(0, 0, 5, 1) 10%,
      rgba(20, 6, 25, 1) 71%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(0, 0, 5, 1) 10%,
      rgba(20, 6, 25, 1) 71%
    );
    background: linear-gradient(
      90deg,
      rgba(0, 0, 5, 1) 10%,
      rgba(20, 6, 25, 1) 71%
    );
    .character-panel-header {
      display: flex;
    }
    .character-profile-pic {
      grid-area: img;
      width: 63.5mm;
      height: 88mm;
      border: 0.05mm solid black;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: inset 0 0 20px 0px #666;
    }

    .perks {
      width: 120mm;
      display: flex;
      gap: 5mm;
    }
    .spell,
    .item,
    .ability {
      box-shadow: inset 0 0 15px 0px #666;
      width: 35mm;
      height: 35mm;
      border: 0.05mm solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
    }

    .character-status-info {
      position: absolute;
      top: 100mm;
      display: flex;
      flex-direction: column;
      width: 100mm;
    }
    .character-status-info-title {
      font-size: 1.3rem;
      text-transform: uppercase;
      text-align: left;
    }
    .character-status-hp,
    .character-status-mana,
    .character-status-sanity {
      display: flex;
      gap: 10mm;
      width: 100%;
      font-size: 3.5rem;
      font-weight: bold;
    }
    .character-status-hp {
      .hp:last-child {
        color: red;
      }
    }
    .character-status-mana {
      .mana:last-child {
        color: blue;
      }
    }
    .character-status-sanity {
      .sanity:last-child {
        color: purple;
      }
    }
  }
`;
