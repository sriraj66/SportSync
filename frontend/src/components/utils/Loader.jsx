import { Backdrop, CircularProgress } from "@mui/material";
import PropTypes from "prop-types";

export default function Loader({ state }) {
    return (
        <Backdrop sx={(theme) => ({ color: 'secondary', zIndex: theme.zIndex.drawer + 1 })} open={state}>
            <CircularProgress color="primary" />
        </Backdrop>
    );
}

Loader.propTypes = {
    state: PropTypes.bool.isRequired,
};
