import React from "react";
import {
  FavouriteListItem,
  FavouriteInfo,
  FavouriteIcon,
  FavouriteName,
} from "./favourites-row.styles";

import { Spacer } from "../../../components/spacer.component";

export const FavouritesRow = ({ name, color }) => {
  return (
    <FavouriteListItem>
      <FavouriteInfo>
        <FavouriteIcon color={(props) => props.theme.colors.cats[color]} />
        <Spacer position="left" size="large" />
        <FavouriteName>{name}</FavouriteName>
        {/* <Section>
          <SectionEnd>
            {isLocked && (
              <Ionicons name={"lock-closed"} size={18} color={"grey"} />
            )}
          </SectionEnd>
        </Section> */}
      </FavouriteInfo>
    </FavouriteListItem>
  );
};
