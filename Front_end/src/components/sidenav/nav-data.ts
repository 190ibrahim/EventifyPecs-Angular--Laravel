import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard',
        forLoggedin: true
    },
    {
        routeLink: 'events',
        icon: 'fal fa-sharp fa-solid fa-icons',
        label: 'Events',
        items: [
                {
                    routeLink: 'events/eventList',
                    label: 'All Events',
                },
                {
                    routeLink: 'events/eventsCalender',
                    label: 'Events Calendar',
                },
        ],
        forLoggedin: false
    },
    {
        routeLink: 'Products',
        icon: 'fal fa-box-open',
        label: 'Products',
        items: [
            {
                routeLink: 'products/level1.1',
                label: 'Level 1.1',
                items: [
                    {
                        routeLink: 'products/level2.1',
                        label: 'Level 2.1',
                    },
                    {
                        routeLink: 'products/level2.2',
                        label: 'Level 2.2',
                        items: [
                            {
                                routeLink: 'products/level3.1',
                                label: 'Level 3.1'
                            },
                            {
                                routeLink: 'products/level3.2',
                                label: 'Level 3.2'
                            }
                        ]
                    }
                ]
            },
            {
                routeLink: 'products/level1.2',
                label: 'Level 1.2',
            }
        ],
        forLoggedin: true
    },

    {
        routeLink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics',
        forLoggedin: true
    },
    {
        routeLink: 'coupens',
        icon: 'fal fa-tags',
        label: 'Coupens',
        items: [
            {
                routeLink: 'coupens/list',
                label: 'List Coupens'
            },
            {
                routeLink: 'coupens/create',
                label: 'Create Coupens'
            }
        ],
        forLoggedin: true
    },
    {
        routeLink: 'pages',
        icon: 'fal fa-file',
        label: 'Pages',
        forLoggedin: true
    },
    {
        routeLink: 'media',
        icon: 'fal fa-camera',
        label: 'Media',
        forLoggedin: true
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings',
        expanded: true,
        items: [
            {
                routeLink: 'settings/profile',
                label: 'Profile'
            },
            {
                routeLink: 'settings/customize',
                label: 'Customize'
            }
        ],
        forLoggedin: true
    },
];
