import { Feather, MaterialCommunityIcons, FontAwesome6, AntDesign } from '@expo/vector-icons';

type ValidRoutes = '/' | '/screen/(tabs)/user/cancelAccount' | '/screen/(tabs)/user/reportIssue' | '/screen/(tabs)/user/changePassword' | '/screen/(tabs)/user/switchAccount'

type Option = {id: string, title: string, icon: JSX.Element, screen: ValidRoutes}

export const OPTIONS: Option[] = [
    {id: "CP", title: 'Change Password', icon: <Feather name="lock" size={24} color="black" />, screen: "/screen/(tabs)/user/changePassword"},
    {id: "SA", title: 'Switch Account', icon: <MaterialCommunityIcons name="toggle-switch-outline" size={24} color="black" />, screen: "/screen/(tabs)/user/switchAccount"},
    {id: "RP", title: 'Report an issue', icon: <FontAwesome6 name="comment-dots" size={24} color="black" />, screen: '/screen/(tabs)/user/reportIssue'},
    {id: "CA", title: 'Cancel Account', icon: <MaterialCommunityIcons name="account-remove-outline" size={24} color="black" />, screen: '/screen/(tabs)/user/cancelAccount'},
    {id: "LO", title: 'Logout', icon: <AntDesign name="logout" size={24} color="black" />, screen: '/'},
]