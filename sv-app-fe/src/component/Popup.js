import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography, Button } from '@material-ui/core';
import { Alert, IconButton } from "@mui/material";
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles(theme => ({
    dialogTitle: {
        paddingRight: '0px'
    }
}))

export default function Popup(props) {

    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();



    return (
        <div>

            <Dialog open={openPopup}
                style={{ position: "absolute" }}
            >
                <DialogTitle className={classes.dialogTitle}>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                            {title}
                        </Typography>
                        <IconButton
                            color="secondary"
                            onClick={() => { setOpenPopup(false) }}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                </DialogTitle>
                <DialogContent dividers style={{ width: "600px" }}>
                    {children}
                </DialogContent>

            </Dialog>

        </div>
    )
}
