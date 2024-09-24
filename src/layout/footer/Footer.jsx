import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import StyleIcon from "@mui/icons-material/Style";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ROUTES from "../../routes/routesModel";
import useCards from "../../cards/hooks/useCards";
import { useCurrentUser } from "../../users/providers/UserProvider";

export default function Footer() {
  const navigate = useNavigate();
  const { handleMyCards } = useCards()
  const { user } = useCurrentUser()
  return (
    <Paper
      elevation={3}
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />
        {(user?.isBusiness || user?.isAdmin) && <BottomNavigationAction
          label="My Cards"
          icon={<StyleIcon />}
          onClick={() => {
            handleMyCards()
            navigate(ROUTES.MY_CARDS)
          }
          }
        />
        }
        {user && <BottomNavigationAction
          label="Favorite"
          icon={<FavoriteIcon />}
          onClick={() => navigate(ROUTES.FAV_CARDS)}
        />
        }
      </BottomNavigation>
    </Paper>
  );
}
