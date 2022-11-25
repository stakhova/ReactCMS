import HomeSvg from "../../img/icon/HomeSvg";
import FilePlusSvg from "../../img/icon/FilePlusSvg";
import BlogSvg from "../../img/icon/BlogSvg";
import FilesSvg from "../../img/icon/FilesSvg";
import UsersSvg from "../../img/icon/UsersSvg";
import SubsSvg from "../../img/icon/SubsSvg";
import ArchivedSvg from "../../img/icon/ArchivedSvg";
import ThemesSvg from "../../img/icon/ThemesSvg";
import PluginsSvg from "../../img/icon/PluginsSvg";
import UpdateSvg from "../../img/icon/UpdateSvg";

export const NavList = [
    {
        id : 1 ,
        svg: <HomeSvg/>,
        title: 'View site',
    },
    {
        id : 2 ,
        svg: <FilePlusSvg/>,
        title: 'Create page',
    },
    {
        id : 3 ,
        svg: <BlogSvg/>,
        title: 'Blog articles'},
    {
        id : 4 ,
        svg: <FilesSvg/>,
        title: 'Files'
    },
    {
        id : 5 ,
        svg: <UsersSvg/>,
        title: 'Users'
    },
    {
        id : 6 ,
        svg: <SubsSvg/>,
        title: 'Subscriptions'
    },
    {
        id : 7 ,
        svg: <ArchivedSvg/>,
        title: 'Archived pages'
    },
]
export const BottomNavList = [
    {
        id : 1 ,
        svg: <ThemesSvg/> ,
        title: 'Themes'
    },
    {
        id :2 ,
        svg: <PluginsSvg/>,
        title: 'Plugins'
    },
    {
        id : 3 ,
        svg: <UpdateSvg/>,
        title: 'Update plans'
    },
];
