//React
import React, { useState} from 'react'
import { useHistory } from "react-router-dom";
//Store
import {observer} from "mobx-react-lite";
import Language from "../../Store/Language";
//MaterialUI
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import DehazeOutlinedIcon from '@material-ui/icons/DehazeOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
//constants
import {PROFILE_ENG, MAIN_ENG, MENU_ENG} from '../../Constants/English/MenuEng'
import {PROFILE_RUS, MAIN_RUS, MENU_RUS} from '../../Constants/Russian/MenuRus'
//styles
import useStyles from '../../Styles/HomeStyles'


const Menu: React.FC = observer((): JSX.Element => {

    const styles = useStyles();

    const history = useHistory();

    const [value, setValue] = useState<number>(1)

    const changeUrl = (value: number): string => {
        if(value === 0) return "/profile"
        if(value === 1) return "/"
        if(value === 2) return "/menu"
        else return '/'
    }

    const select = (event: React.BaseSyntheticEvent, newValue: number) => {
        setValue(newValue);

        const url: string  = changeUrl(newValue)
        history.push(url)



    }
    return (

        <BottomNavigation
            value={value}
            onChange={select}
            showLabels
            className={styles.root}
        >
            <BottomNavigationAction label={Language.english ? PROFILE_ENG : PROFILE_RUS} icon={<AccountCircleOutlinedIcon/>}/>
            <BottomNavigationAction label={Language.english ? MAIN_ENG : MAIN_RUS} icon={<AccountBalanceOutlinedIcon/>}/>
            <BottomNavigationAction label={Language.english ? MENU_ENG : MENU_RUS} icon={<DehazeOutlinedIcon/>}/>
        </BottomNavigation>
    )
})

export default Menu