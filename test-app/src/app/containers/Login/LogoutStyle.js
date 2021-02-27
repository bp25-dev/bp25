import React, { Component } from 'react'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { CssBaseline } from '@material-ui/core';

const StyledMenu = withStyles()
  ((props) => (
    <Menu 
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      "&:focus": {
        backgroundColor: theme.palette.primary.main,
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: theme.palette.common.white
        }
      }
    }
  }))(MenuItem);

export default function LogoutStyle() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

    return(
        <div>
            <Button onClick={handleClick}>
                <AccountCircleIcon/>
            </Button>

            <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemText primary="Abmelden" onClick={blah}/>
                </StyledMenuItem>
            </StyledMenu>
        </div>            
    )    
}

function blah()  {
    return(
        alert('Sie sind abgemeldet')
    )
}