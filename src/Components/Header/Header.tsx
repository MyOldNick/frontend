//React
import React from 'react'
//styles
import useStyles from "../../Styles/HeaderStyle";

const Header: React.FC = (): JSX.Element => {
    const styles = useStyles()
    return (
        <div className={styles.header}>
            NEW GENERATION
        </div>
    )
}

export default Header