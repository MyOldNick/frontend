import {BaseSyntheticEvent} from "react";

type TextDrawerProps = {
    openDrawer: boolean,
    closeDrawer: () => void,
    onChange: (data: BaseSyntheticEvent) => void,
    formData: string,
    styles: any,
}

export default TextDrawerProps