import { Avatar, Box, IconButton, Stack, SvgIcon, alpha, useMediaQuery } from "@mui/material";

import { usePopover } from '../../hooks';
import { AccountPopover } from "./AccountPopover";
import { Menu } from "@mui/icons-material";

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export const NavBar = ({ onNavOpen }) => {

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const accountPopover = usePopover();

  return (
    <>
      <Box component="header" 
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
          position: 'sticky',
          left: {
            lg: `${SIDE_NAV_WIDTH}px`
          },
          top: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
          },
          zIndex: (theme) => theme.zIndex.appBar
        }}
      >
        <Stack 
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2
          }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            {!lgUp && (
              <IconButton onClick={onNavOpen}>
                <SvgIcon>
                  <Menu color="primary.main" />
                </SvgIcon>
              </IconButton>
            )}
          </Stack>
          <Stack 
            alignItems="center"
            direction="row"
            spacing={2}
          >
            <Avatar 
              onClick={ accountPopover.handleOpen }
              ref={ accountPopover.anchorRef }
              sx={{
                cursor: 'pointer',
                height: 40,
                width: 40
              }}
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/296.jpg"
            />
          </Stack>
        </Stack>
      </Box>
      <AccountPopover 
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
    </>
  );
};