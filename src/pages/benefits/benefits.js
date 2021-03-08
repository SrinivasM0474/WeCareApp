import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import BenefitsForm from './../../forms/benefits/benefitsForm';
import '../../views/style.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
    }
})

class Benefits extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
    }
    render() {
        return (
            <div className="">
                <BenefitsForm />
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Benefits)

