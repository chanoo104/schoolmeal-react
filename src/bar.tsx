import React, { Component } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/styles";

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
    marginLeft: "5px",
    marginTop: "2px",
    fontSize: "23px",
  },
  toolbar: {
    minHeight: "55px",
  },
});

const MenuBar = (classes, setDrawerOpen) => {
  const handleClick = () => {
    setDrawerOpen(true);
  }
  const getLink = () => {
    switch (window.location.href.split("/")[3]) {
      case '':
        return "홈";
      case 'meal':
        return "급식";
      default:
        return "Not Found";
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {getLink()}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// class MenuBar extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.props.click(true);
//   }
//   getLink() {
//     switch (window.location.href.split("/")[3]) {
//       case '':
//         return "홈";
//       case 'meal':
//         return "급식";
//       default:
//         return "Not Found";
//     }
//   }

//   render() {
//     const { classes } = this.props;
//     return (
//       <div className={classes.root}>
//         <AppBar position="static">
//           <Toolbar className={classes.toolbar}>
//             <IconButton
//               edge="start"
//               className={classes.menuButton}
//               color="inherit"
//               aria-label="menu"
//               onClick={this.handleClick}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" className={classes.title}>
//               {this.getLink()}
//             </Typography>
//           </Toolbar>
//         </AppBar>
//       </div>
//     );
//   }
// }

export default withStyles(styles)(MenuBar);
