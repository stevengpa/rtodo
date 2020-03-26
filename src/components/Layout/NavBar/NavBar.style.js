import makeStyles from "@material-ui/core/styles/makeStyles";

export const navBarStyles = makeStyles(theme => ({
    app: {
      flexDirection: 'row',
    },
    toolbar: {
      flexGrow: 1,
      justifyContent: 'space-between'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      fontStyle: 'italic',
    }
  }
));
