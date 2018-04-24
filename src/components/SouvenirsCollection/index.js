import React from "react";
import Souvenir from "../Souvenir";
import * as styles from "./styles";

const SouvenirsCollection = ({ souvenirs }) => (
  <styles.SouvenirsCollection>
    {!souvenirs && <styles.Empty>No souvenirs available.</styles.Empty>}

    {souvenirs &&
      souvenirs.length > 0 && (
        <styles.Grid>
          {souvenirs.map(souvenir => (
            <styles.GridItem key={souvenir.id}>
              <Souvenir souvenir={souvenir} />
            </styles.GridItem>
          ))}
        </styles.Grid>
      )}
  </styles.SouvenirsCollection>
);

export default SouvenirsCollection;
