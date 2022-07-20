import {showNotification} from "@mantine/notifications";
import {AlertTriangle} from "tabler-icons-react";


const notificationFail = (title : string, message :string) => {
    showNotification({
        title : title,
        message : message,
        color: 'red',
        icon: <AlertTriangle/>,
        autoClose: 5000,
    })
}

export default notificationFail